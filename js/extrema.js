function findExtrema(xValues, yValues) {

    let minY = Math.min(...yValues);
    let maxY = Math.max(...yValues);

    let minIndex = yValues.indexOf(minY);
    let maxIndex = yValues.indexOf(maxY);

    return {

        minX: xValues[minIndex],
        minY,

        maxX: xValues[maxIndex],
        maxY

    };

}