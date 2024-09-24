'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ accounts }: DoughnutChartProps) {
	const accountName = accounts.map((a) => a.name);
	const balance = accounts.map((a) => a.currentBalance);
	const data = {
		datasets: [
			{
				label: 'Banks',
				data: balance,
				backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
			},
		],
		labels: accountName,
	};

	return (
		<Doughnut
			data={data}
			options={{
				cutout: '60%',
				plugins: {
					legend: {
						display: false,
					},
				},
			}}
		/>
	);
}

export default DoughnutChart;
