function printMatrix(matrix) {
    matrix.forEach(row => console.log(row.join(" ")));
}

function getNumberOfNonZerosMatrixItems(sparseMatrix) {
    const rows = sparseMatrix.length;
    const cols = sparseMatrix[0].length;
    let nonZerosItems = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (sparseMatrix[i][j] != 0) nonZerosItems++;
        }
    }

    return nonZerosItems;
}

function IsPossibleToSaveMemoryForMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const nonZerosItems = getNumberOfNonZerosMatrixItems(matrix);

    return (3 * nonZerosItems) < (rows * cols); 
}

function compressSparseMatrix(sparseMatrix) {
    if (!IsPossibleToSaveMemoryForMatrix(sparseMatrix)) return sparseMatrix;

    const rows = sparseMatrix.length;
    const cols = sparseMatrix[0].length;
    const rowIndices = [];
    const colIndices = [];
    const values = [];
    let index = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (sparseMatrix[i][j] != 0) {
                rowIndices[index] = i;
                colIndices[index] = j;
                values[index] = sparseMatrix[i][j];
                index++;
            }
        }
    }

    return [rowIndices, colIndices, values];
}