import React from 'react'

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { faker } from '@faker-js/faker';

const ChartHorizontal = () => {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const labels = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bar Chart',
            }
        }
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(155, 89, 211, 0.5)'
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(122, 234, 110, 0.5)'
            }
        ]

    }

    return (
        <div style={{width : '70%', margin : 'auto'}}>
            <Bar options={options} data={data} />
        </div>
    )
}

export default ChartHorizontal