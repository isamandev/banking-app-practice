'use client';

import CountUp from 'react-countup';

function AnimatedCounter({ amount }: { amount: number }) {
	return (
		<span className='w-full'>
			<CountUp decimals={2} decimal=',' prefix='$' end={amount} />
		</span>
	);
}

export default AnimatedCounter;
