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