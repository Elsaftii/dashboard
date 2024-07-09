import { ChartConfiguration } from 'chart.js';

export const lightOptions: ChartConfiguration["options"] = {
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: "#4f4f4f",
            },
            ticks: {
                color: "#fff",
                },
        },
        x: {
            grid: {
                color: "#4f4f4f",
            },
            ticks: {
                color: "#fff",
                },
        },
    },
    plugins: {
        legend: {
            labels: {
                color: "#fff",
            },
        },
    },
};

export const darkOptions: ChartConfiguration["options"] = {
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: "#4f4f4f",
            },
            ticks: {
                color: "#fff",
            },
        },
        x: {
            grid: {
                color: "#4f4f4f",
            },
            ticks: {
                color: "#fff",
            },
        },
    },
    plugins: {
        legend: {
            labels: {
                color: "#fff",
            },
        },
    },
};