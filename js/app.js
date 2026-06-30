const button =
    document.getElementById("buildButton");

button.addEventListener("click", () => {

    const expression =
        document
            .getElementById("functionInput")
            .value;

    const start =
        Number(
            document
                .getElementById("startX")
                .value
        );

    const end =
        Number(
            document
                .getElementById("endX")
                .value
        );

    const graphData =
        buildGraph(
            expression,
            start,
            end
        );

    if (!graphData) {
        return;
    }

    generateTable(
        graphData.xValues,
        graphData.yValues
    );


    const roots =
        findRoots(
            graphData.xValues,
            graphData.yValues
        );

    const rootsContainer =
        document.getElementById(
            "rootsContainer"
        );

    if (roots.length === 0) {

        rootsContainer.innerHTML =
            "Корни не найдены";

    } else {

        rootsContainer.innerHTML =
            roots
                .map(
                    root =>
                    `x = ${Number(root).toFixed(3)}`
                )
                .join("<br>");
    }


    const extrema =
        findExtrema(
            graphData.xValues,
            graphData.yValues
        );

    document.getElementById(
        "extremaContainer"
    ).innerHTML = `

        Минимум:

        x = ${extrema.minX},
        y = ${extrema.minY.toFixed(3)}

        <br><br>

        Максимум:

        x = ${extrema.maxX},
        y = ${extrema.maxY.toFixed(3)}

    `;

});