function getJoinedArrayStr(arr, separator = ", ") {
    return arr.join(separator);
}

function printMatrix(matrix, itemSeparator = " ") {
    matrix.forEach(row => console.log(getJoinedArrayStr(row, itemSeparator)));
}

function getCountOfArrayItem(arr, item) {
    return arr.filter(itm => itm === item).length;
}

function getCountOfMatrixItem(matrix, item) {
    return matrix.reduce((count, row) => count + getCountOfArrayItem(row, item), 0);
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

function decompressSparseMatrix(compressedSparseMatrix) {
    const len = compressedSparseMatrix[0].length;
    const rowsInSparseMatrix = Math.max(...compressedSparseMatrix[0]) + 1;
    const colsInSparseMatrix = Math.max(...compressedSparseMatrix[1]) + 1;
    const sparseMatrix = [];

    for (let i = 0; i < rowsInSparseMatrix; i++) {
        sparseMatrix[i] = [];
        for (let j = 0; j < colsInSparseMatrix; j++) {
            sparseMatrix[i][j] = 0;
        }
    }

    for (let i = 0; i < len; i++) {
        sparseMatrix[compressedSparseMatrix[0][i]][compressedSparseMatrix[1][i]] = compressedSparseMatrix[2][i];
    }

    return sparseMatrix;
}

const sparseMatrix1 = [
    [0, 0, 3, 0, 4],
    [0, 0, 5, 7, 0],
    [0, 0, 0, 0, 0],
    [0, 2, 6, 0, 0]
];
const compressedMatrix1 = compressSparseMatrix(sparseMatrix1);
printMatrix(compressedMatrix1);
console.log("");

const compressedMatrix2 = [
    [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
    [1, 0, 2, 1, 3, 2, 4, 3, 5, 4, 6],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
const sparseMatrix2 = decompressSparseMatrix(compressedMatrix2);
printMatrix(sparseMatrix2);