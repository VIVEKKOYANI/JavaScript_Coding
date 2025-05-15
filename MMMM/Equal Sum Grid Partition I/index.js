var canPartitionGrid = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Calculate total sum
    let totalSum = 0;
    for (let row of grid) {
        for (let val of row) {
            totalSum += val;
        }
    }

    // Try horizontal cuts (between rows)
    let rowSum = 0;
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n; j++) {
            rowSum += grid[i][j];
        }
        if (rowSum * 2 === totalSum) return true;
    }

    // Try vertical cuts (between columns)
    let colSums = Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            colSums[j] += grid[i][j];
        }
    }

    let leftSum = 0;
    for (let j = 0; j < n - 1; j++) {
        leftSum += colSums[j];
        if (leftSum * 2 === totalSum) return true;
    }

    return false;
};

console.log(canPartitionGrid([
  [1, 1],
  [1, 1]
])); // true — can cut horizontally or vertically
