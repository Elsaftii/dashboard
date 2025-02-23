"use client"

import React, { useEffect, useRef } from 'react'
import { registerables ,Chart } from 'chart.js'
import { darkOptions } from './themes';
import {ChartConfiguration} from 'chart.js'

const DataChart = (props: ChartConfiguration) => {
    const { data, options } = props;
    const chartRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
      if (chartRef.current) {
        const chart = new Chart(chartRef.current, {
          ...props,
          options: {
            ...options,
            ...darkOptions,
          },
        });
        return () => {
          chart.destroy();
        };
      }
    }, [data, options, props]);
    return <canvas ref={chartRef} />;
  };
  Chart.register(...registerables);
  
  export default DataChart;