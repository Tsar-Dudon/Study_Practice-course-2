function generateTable(xValues, yValues) {
    const tbody = document
        .querySelector("#valuesTable tbody");
    tbody.innerHTML = "";
    for (let i = 0; i < xValues.length; i += 10) {
        tbody.innerHTML += `
            <tr>
                <td>${xValues[i]}</td>
                <td>${yValues[i].toFixed(3)}</td>
            </tr>
        `;
    }

}