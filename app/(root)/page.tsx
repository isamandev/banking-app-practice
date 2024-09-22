import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

async function Home() {
	const LoggedIn = await getLoggedInUser();
	return (
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
					<HeaderBox
						type='greeting'
						title='Welcome'
						user={LoggedIn?.firstName || 'Guest'}
						subtext='Access and manage your account and transactions efficiently.'
					/>
					<TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />
				</header>
				RECENT TRANSACTIONS
			</div>
			<RightSidebar
				user={LoggedIn}
				transactions={[]}
				banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
			/>
		</section>
	);
}

export default Home;
