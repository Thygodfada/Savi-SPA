import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CanvasContainer = styled.div`
    flex: 1;
    margin-right: 20px; // Adjust spacing between chart and legend
`;

const Canvas = styled.canvas`
    margin-top: 60px;
`;

const CustomLegend = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 60px 0 0 0;
`;

const LegendItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

const LegendBullet = styled.span`
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
`;

const LegendLabel = styled.span`
    font-size: 14px;
`;

const SWCBarChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Create the chart
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                datasets: [
                    {
                        label: 'Saving',
                        data: [6000, 5000, 7000, 10000, 4000, 4000, 4000,6000, 5000, 7000, 10000, 4000, 4000, 4000],
                        backgroundColor: '#B5179E',
                        stack: 'Stack 1'
                    },
                    {
                        label: 'Contributions',
                        data: [10000, 12000, 13000, 4000, 16000, 15000, 13000,6000, 5000, 7000, 10000, 4000, 4000, 4000],
                        backgroundColor: '#F38FE5',
                        stack: 'Stack 1'
                    },
                    {
                        label: 'Withdrawals',
                        data: [3000, 1000, 1000, 7000, 3000, 4000, 2000,6000, 5000, 7000, 10000, 4000, 4000, 4000],
                        backgroundColor: '#CA4AB7',
                        stack: 'Stack 1'
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 25000,
                        ticks: {
                            stepSize: 5000,
                            callback: (value) => `${value}`
                        }
                    },
                    x: {
                        stacked: true
                    }
                },
                plugins: {
                    legend: {
                        display: false // Hide default legend
                    }
                }
            }
        });
    }, []);

    return (
        <Container>
            <CanvasContainer>
                <Canvas ref={chartRef} />
            </CanvasContainer>
            <CustomLegend>
                <LegendItem>
                    <LegendBullet style={{ backgroundColor: '#CA4AB7' }} />
                    <LegendLabel>Withdrawals</LegendLabel>
                </LegendItem>
                <LegendItem>
                    <LegendBullet style={{ backgroundColor: '#F38FE5' }} />
                    <LegendLabel>Contributions</LegendLabel>
                </LegendItem>
                <LegendItem>
                    <LegendBullet style={{ backgroundColor: '#B5179E' }} />
                    <LegendLabel>Saving</LegendLabel>  
                </LegendItem>
            </CustomLegend>
        </Container>
    );
};

export default SWCBarChart;
