# Sparse Matrix
This code implements an algorithm for encoding and decoding a sparse matrix.

## Example
Suppose we have the sparse matrix. Need to encode it to save memory:

[1   0   9   0   0]  
[0   0   0   1   0]  
[0   0   0   0   0]  
[0   0   5   0   0]  
[0   0   3   0   7]

The encoded sparse matrix will look like this:

[0   0   1   3   4   4]  
[0   2   3   2   2   4]  
[1   9   1   5   3   7]  

More info :point_right: [here](https://en.wikipedia.org/wiki/Sparse_matrix "Click to open the tab")