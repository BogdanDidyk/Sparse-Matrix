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

function getMatrix(rows, cols, fillItem = 0) {
    return Array.from({length: rows}, (_ => Array.from({length: cols}).fill(fillItem)));
}

function IsPossibleToSaveMemoryForMatrix(matrix) {
    const COUNT_OF_NUMBERS_TO_STORE_INFO = 3;
    const rows = matrix.length;
    const cols = matrix[0].length;
    const allItemsCount = rows * cols;
    const zerosCount = getCountOfMatrixItem(matrix, 0);
    const nonZerosCount = allItemsCount - zerosCount;

    return COUNT_OF_NUMBERS_TO_STORE_INFO * nonZerosCount < allItemsCount; 
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
    const rowIndices = compressedSparseMatrix[0];
    const colIndices = compressedSparseMatrix[1];
    const values = compressedSparseMatrix[2];
    const len = rowIndices.length;
    const sparseMatrixRows = Math.max(...rowIndices) + 1;
    const sparseMatrixCols = Math.max(...colIndices) + 1;
    const sparseMatrix = getMatrix(sparseMatrixRows, sparseMatrixCols);

    for (let i = 0; i < len; i++) {
        sparseMatrix[rowIndices[i]][colIndices[i]] = values[i];
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