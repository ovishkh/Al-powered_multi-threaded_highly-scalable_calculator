package calc

import (
	"fmt"
	"go/ast"
	"go/parser"
	"go/token"
	"strconv"
)

// Evaluate expression string using Go's built-in AST parser.
// This natively supports base-N numbers (0x, 0b, 0o) and bitwise operators.
func Evaluate(exprStr string) (int64, error) {
	expr, err := parser.ParseExpr(exprStr)
	if err != nil {
		return 0, fmt.Errorf("failed to parse expression: %w", err)
	}

	return evalExpr(expr)
}

func evalExpr(expr ast.Expr) (int64, error) {
	switch e := expr.(type) {
	case *ast.BasicLit:
		if e.Kind == token.INT {
			return strconv.ParseInt(e.Value, 0, 64)
		}
		return 0, fmt.Errorf("unsupported literal type: %s", e.Kind)
	case *ast.ParenExpr:
		return evalExpr(e.X)
	case *ast.UnaryExpr:
		x, err := evalExpr(e.X)
		if err != nil {
			return 0, err
		}
		switch e.Op {
		case token.ADD:
			return +x, nil
		case token.SUB:
			return -x, nil
		case token.XOR: // Bitwise NOT in Go AST is represented by XOR (^)
			return ^x, nil
		default:
			return 0, fmt.Errorf("unsupported unary operator: %s", e.Op)
		}
	case *ast.BinaryExpr:
		x, err := evalExpr(e.X)
		if err != nil {
			return 0, err
		}
		y, err := evalExpr(e.Y)
		if err != nil {
			return 0, err
		}

		switch e.Op {
		case token.ADD:
			return x + y, nil
		case token.SUB:
			return x - y, nil
		case token.MUL:
			return x * y, nil
		case token.QUO:
			if y == 0 {
				return 0, fmt.Errorf("division by zero")
			}
			return x / y, nil
		case token.REM:
			if y == 0 {
				return 0, fmt.Errorf("modulo by zero")
			}
			return x % y, nil
		case token.AND:
			return x & y, nil
		case token.OR:
			return x | y, nil
		case token.XOR:
			return x ^ y, nil
		case token.SHL:
			return x << uint64(y), nil
		case token.SHR:
			return x >> uint64(y), nil
		case token.AND_NOT:
			return x &^ y, nil
		default:
			return 0, fmt.Errorf("unsupported binary operator: %s", e.Op)
		}
	default:
		return 0, fmt.Errorf("unsupported AST node type: %T", expr)
	}
}
