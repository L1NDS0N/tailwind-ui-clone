import { FastPlaylists } from './components/FastPlaylists';
import { Footer } from './components/Footer';
import { MainNavigation } from './components/MainNavigation';
import { PersonalMixes } from './components/PersonalMixes';
import { Sidebar } from './components/Sidebar';

export default function Home() {
	return (
		<div>
			<div className='h-screen flex flex-col'>
				<div className='flex flex-1'>
					<Sidebar />
					<main className='flex-1 p-6'>
						<MainNavigation/>
						<FastPlaylists/>
						<PersonalMixes/>
					</main>
				</div>
				<Footer />
			</div>
		</div>
	);
}
