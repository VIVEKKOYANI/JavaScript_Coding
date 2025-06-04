var getRow = function(rowIndex) {
    const row = [1];

    for (let i = 1; i <= rowIndex; i++) {
        // Update from right to left to avoid overwriting values we still need
        for (let j = row.length - 1; j >= 1; j--) {
            row[j] = row[j] + row[j - 1];
        }
        row.push(1);
    }

    return row;
};
