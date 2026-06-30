let chart = null;

function buildGraph(expression, start, end) {

    try {

        const compiledExpression =
            math.compile(expression);

        const points = [];

        const xValues = [];
        const yValues = [];

        const STEP = 0.1;

        for (let x = start; x <= end; x += STEP) {

            const currentX =
                Number(x.toFixed(10));

            const y =
                compiledExpression.evaluate({
                    x: currentX
                });

            if (!isFinite(y) || isNaN(y)) {
                continue;
            }

            points.push({
                x: currentX,
                y: y
            });

            xValues.push(currentX);
            yValues.push(y);

        }

        const ctx =
            document.getElementById(
                "functionChart"
            );

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {

            type: "scatter",

            data: {

                datasets: [

                    {

                        label: "f(x)",

                        data: points,

                        showLine: true,

                        pointRadius: 0,

                        borderWidth: 3,

                        tension: 0

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: true,

                animation: false,

                interaction: {

                    intersect: false,

                    mode: "nearest"

                },

                plugins: {

                    legend: {

                        display: true

                    },

                    zoom: {

                        pan: {

                            enabled: true,

                            mode: "xy"

                        },

                        zoom: {

                            wheel: {

                                enabled: true

                            },

                            pinch: {

                                enabled: true

                            },

                            mode: "xy"

                        }

                    }

                },

                scales: {

                    x: {

                        type: "linear",

                        position: "bottom",

                        title: {

                            display: true,

                            text: "X"

                        }

                    },

                    y: {

                        title: {

                            display: true,

                            text: "Y"

                        }

                    }

                }

            }

        });

        return {

            xValues,

            yValues

        };

    }

    catch (error) {

        console.error(error);

        alert(
            "Ошибка при обработке функции!"
        );

        return null;

    }

}