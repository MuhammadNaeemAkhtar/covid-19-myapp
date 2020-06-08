import React, { useState, useEffect } from 'react';
import styles from './Chart.module.css';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { getDailyData } from '../../api';
import 'chartjs-plugin-labels';

const Chart = ( {data: {confirmed, recovered, deaths }, country}) => {
    
    const [dailyData, setDailyData ]  = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await getDailyData());
        }
        
        fetchApi();
    },[]);
    if(!confirmed) {
        return "..loading";
    }
    //console.log(confirmed.value);
    let confirmedValue = confirmed.value;
    let recoveredValue = recovered.value;
    let deathsValue = deaths.value;
    const pieChart = (
        
        <Pie 
            data={{
                labels: ['Confirmed', 'Recovered', 'Deaths'],
                datasets: [
                    {
                        data: [confirmedValue, recoveredValue, deathsValue],
                        backgroundColor: [
                            'rgb(0, 0, 255)',
                            'rgb(0, 255, 0)',
                            'rgb(255, 0, 0)',
                        ] 
                    }
                ]
            }}
            options={{
                title: { display: true, text: `(Infected vs Recovered vs Deaths) ${country}`},
                plugins: {
                    labels: [
                        {
                            render: 'percentage',
                            precision: 0,
                            position: 'outside'
                        }
                    ]
                }
            }}
        />
    );

    const barChart = (
        <Bar 
            data={{
                labels: ['Recovery Rate', 'Death Rate'],
                datasets: [
                    {
                        data: [Math.round(recoveredValue/confirmedValue*100), Math.round(deathsValue/confirmedValue*100)],
                        backgroundColor: [
                            'rgba(0, 255, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                        ]
                    }
                ]
            }}
            options={{
                plugins: {
                    labels: [
                        {
                            render: 'value'
                        }
                    ]
                },
                legend: {display: false},
                title: { display: true, text: `(% Recovery vs Death Rate) ${country}`},
                scales: {
                    yAxes: [{
                        ticks: {
                            autoSkip: true,
                            beginAtZero: true,
                            max: 100
                        }
                    }]
                }
            }}
        />
    );

    const lineChart = (
        dailyData.length ? (
            <Line 
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [
                        {
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'infected',
                            borderColor: '#333fff',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'deaths',
                            borderColor: 'red',
                            fill: true,
                        }
                    ],
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                autoSkip: true,
                                beginAtZero: true,
                                maxTicksLimit: 5
                            }
                        }]
                    }
                }}
            />
        ): null
    );
    const countryBarChart = (
        confirmed ? (
            //first {} is for dynamic and second {} for object
            <Bar 
                data= {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}`},
                    plugins: {
                        labels: {
                            render: 'value'
                        }
                    }
                }}
            />
        ): null
    );
    return(
        <div>
            <div className={styles.rowContainer}>
                <div className={styles.pieChartClass}>
                    {pieChart}
                </div>
                <div className={styles.barChartClass}>
                    {barChart}
                </div>
                
            </div>
            <div className={styles.chartClass}>
                {country ? countryBarChart : lineChart}
            </div>         
        </div>
    )
}

export default Chart;