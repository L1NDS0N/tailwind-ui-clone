import { ChevronLeft, ChevronRight } from 'lucide-react';

export function MainNavigation() {
	return (
		<div className='flex items-center gap-4'>
			<button className='rounded-full bg-black/40 p-2'>
				<ChevronLeft />
			</button>
			<button className='rounded-full bg-black/40 p-2'>
				<ChevronRight />
			</button>
		</div>
	);
}
