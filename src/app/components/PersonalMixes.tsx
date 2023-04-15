import Image from "next/image";

export function PersonalMixes() {
	return (
		<>
			<h2 className='font-bold text-2xl mt-10'>Made for you</h2>
			<div className='grid grid-cols-8 gap-4 mt-4'>
				<a
					href='#'
					className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'
				>
					<Image
						src='/album.jpg'
						className='w-full'
						width={120}
						height={120}
						alt='capa do álbum superunknown '
					/>
					<strong className='font-semibold'>Daily Mix 1</strong>
					<span className='text-sm text-zinc-400'>
						Wallows, coin, girl in red and more
					</span>
				</a>
				<a
					href='#'
					className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'
				>
					<Image
						src='/album.jpg'
						className='w-full'
						width={120}
						height={120}
						alt='capa do álbum superunknown '
					/>
					<strong className='font-semibold'>Daily Mix 1</strong>
					<span className='text-sm text-zinc-400'>
						Wallows, coin, girl in red and more
					</span>
				</a>
				<a
					href='#'
					className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'
				>
					<Image
						src='/album.jpg'
						className='w-full'
						width={120}
						height={120}
						alt='capa do álbum superunknown '
					/>
					<strong className='font-semibold'>Daily Mix 1</strong>
					<span className='text-sm text-zinc-400'>
						Wallows, coin, girl in red and more
					</span>
				</a>
				<a
					href='#'
					className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'
				>
					<Image
						src='/album.jpg'
						className='w-full'
						width={120}
						height={120}
						alt='capa do álbum superunknown '
					/>
					<strong className='font-semibold'>Daily Mix 1</strong>
					<span className='text-sm text-zinc-400'>
						Wallows, coin, girl in red and more
					</span>
				</a>
				<a
					href='#'
					className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'
				>
					<Image
						src='/album.jpg'
						className='w-full'
						width={120}
						height={120}
						alt='capa do álbum superunknown '
					/>
					<strong className='font-semibold'>Daily Mix 1</strong>
					<span className='text-sm text-zinc-400'>
						Wallows, coin, girl in red and more
					</span>
				</a>
			</div>
		</>
	);
}
