import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

function TotalBalanceBox({
	account = [],
	totalBank,
	totalCurrentBalance,
}: TotlaBalanceBoxProps) {
	return (
		<section className='total-balance'>
			<div className='total-balance-chart'>
				<DoughnutChart />
			</div>
			<div className='flex flex-col gap-6'>
				<h2 className='header-2'>Bank Accounts: {totalBank}</h2>
				<div className='flex flex-col gap-2'>
					<p className='total-balance-lable'>Total Current Balance</p>
					<p className='total-balance-amount flex-center gap-2'>
						<AnimatedCounter amount={totalCurrentBalance} />
					</p>
				</div>
			</div>
		</section>
	);
}

export default TotalBalanceBox;
