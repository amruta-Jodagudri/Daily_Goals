// import { Chart, registerables } from 'chart.js';
// import React, { useEffect, useRef } from 'react';

// Chart.register(...registerables);

// const Graph = ({ goals }) => {
//     const chartRef = useRef(null);
//     const chartInstance = useRef(null);

//     useEffect(() => {
//         if (chartInstance.current) {
//             chartInstance.current.destroy();
//         }
//         drawChart();
//     }, [goals]);

//     const drawChart = () => {
//         const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//         const completedPercentages = [70, 0, 0, 0, 0, 0, 0];

//         goals.forEach(goal => {
//             const dayIndex = new Date().getDay();
//             if (goal.completed) {
//                 completedPercentages[dayIndex] += (100 / goals.length);
//             }
//         });

//         const ctx = chartRef.current.getContext('2d');
//         chartInstance.current = new Chart(ctx, {
//             type: 'bar',
//             data: {
//                 labels: daysOfWeek,
//                 datasets: [{
//                     label: '% of Tasks Completed',
//                     data: completedPercentages,
//                     backgroundColor: 'rgba(54, 162, 235, 0.5)',
//                     borderColor: 'rgba(54, 162, 235, 1)',
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true,
//                         max: 100
//                     }
//                 },
//                 plugins: {
//                     legend: {
//                         display: false
//                     }
//                 }
//             }
//         });
//     };

//     return (
//         <div className='h-80 w-96'>
//             <canvas ref={chartRef}></canvas>
//         </div>
//     );
// };

// export default Graph;





import { Chart, registerables } from 'chart.js';
import React, { useEffect, useRef } from 'react';

Chart.register(...registerables);

const Graph = ({ goals }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        drawChart();
    }, [goals]);

    const drawChart = () => {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const completedPercentages = [70, 0, 0, 0, 0, 0, 0];
    
        goals.forEach(goal => {
            const dayIndex = new Date().getDay();
            if (goal.completed) {
                completedPercentages[dayIndex] += (100 / goals.length);
            }
        });
    
        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: daysOfWeek,
                datasets: [{
                    label: '% of Tasks Completed',
                    data: completedPercentages,
                    backgroundColor: 'rgb(37,99,235)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    barThickness: 20
                }]
            },
            options: {
                scales: {
                    y: {
                        min:20,
                        max: 100,
                        ticks: {
                            color: 'white' // Set text color here,
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white' // Set text color for x-axis here
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    };

    return (
        <div className='mt-5 h-60 w-auto bg-gray-800 rounded-lg'>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default Graph;
