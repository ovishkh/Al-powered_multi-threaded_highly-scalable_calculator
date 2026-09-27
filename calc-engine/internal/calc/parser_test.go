package calc

import (
	"testing"
)

func TestEvaluate(t *testing.T) {
	tests := []struct {
		expr     string
		expected int64
		hasError bool
	}{
		{"2 + 2", 4, false},
		{"10 - 4", 6, false},
		{"3 * 5", 15, false},
		{"20 / 4", 5, false},
		{"10 % 3", 1, false},
		{"-5 + 10", 5, false},
		{"(2 + 3) * 4", 20, false},
		{"0x10", 16, false},         // Hex
		{"0b1010", 10, false},       // Binary
		{"0o10", 8, false},          // Octal
		{"0b1010 & 0b0011", 2, false}, // Bitwise AND
		{"0b1010 | 0b0101", 15, false}, // Bitwise OR
		{"0b1010 ^ 0b1111", 5, false},  // Bitwise XOR
		{"^0b0000", -1, false},        // Bitwise NOT
		{"1 << 3", 8, false},        // Left shift
		{"16 >> 2", 4, false},       // Right shift
		{"1 / 0", 0, true},          // Division by zero
		{"invalid expr", 0, true},   // Parsing error
	}

	for _, tt := range tests {
		t.Run(tt.expr, func(t *testing.T) {
			result, err := Evaluate(tt.expr)
			if (err != nil) != tt.hasError {
				t.Fatalf("Evaluate(%q) error = %v, expected error: %v", tt.expr, err, tt.hasError)
			}
			if result != tt.expected {
				t.Errorf("Evaluate(%q) = %v, expected %v", tt.expr, result, tt.expected)
			}
		})
	}
}
