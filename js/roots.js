function findRoots(xValues, yValues) {
    const roots = [];
    for (let i = 1; i < yValues.length; i++) {
        const prev = yValues[i - 1];
        const current = yValues[i];
        if (prev * current < 0) {
            roots.push(xValues[i]);
        }
    }
    return roots;

}