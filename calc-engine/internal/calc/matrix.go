package calc

import (
	"sync"
)

// MultiplyMatrices performs a highly parallelized matrix multiplication.
// It leverages Goroutines to compute rows concurrently, scaling across available CPU cores.
func MultiplyMatrices(A, B [][]float64) [][]float64 {
	rowsA := len(A)
	colsA := len(A[0])
	colsB := len(B[0])

	// Initialize result matrix
	C := make([][]float64, rowsA)
	for i := range C {
		C[i] = make([]float64, colsB)
	}

	var wg sync.WaitGroup

	// Process each row in a separate Goroutine
	for i := 0; i < rowsA; i++ {
		wg.Add(1)
		go func(row int) {
			defer wg.Done()
			for j := 0; j < colsB; j++ {
				sum := 0.0
				for k := 0; k < colsA; k++ {
					sum += A[row][k] * B[k][j]
				}
				C[row][j] = sum
			}
		}(i)
	}

	// Wait for all rows to complete
	wg.Wait()

	return C
}
