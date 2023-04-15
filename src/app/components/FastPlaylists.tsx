import { Play } from "lucide-react";
import Image from "next/image";

export function FastPlaylists() {
	return (
		<>
			<h1 className='font-bold text-3xl mt-10'>Good Afternoon!</h1>

			<div className='grid grid-cols-3 gap-4 mt-4'>
				<a
					href='#'
					className='group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'
				>
					<Image
						src='/album.jpg'
						width={104}
						height={104}
						alt='capa do álbum superunknown '
					/>
					<strong>Superunknown</strong>
					<button className='flex items-center justify-center pl-1 w-12 h-12 rounded-full bg-green-400 ml-auto mr-8 invisible group-hover:visible'>
						<Play />
					</button>
				</a>
				<a
					href='#'
					className='group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'
				>
					<Image
						src='/album.jpg'
						width={104}
						height={104}
						alt='capa do álbum superunknown '
					/>
					<strong>Superunknown</strong>
					<button className='flex items-center justify-center pl-1 w-12 h-12 rounded-full bg-green-400 ml-auto mr-8 invisible group-hover:visible'>
						<Play />
					</button>
				</a>
				<a
					href='#'
					className='group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'
				>
					<Image
						src='/album.jpg'
						width={104}
						height={104}
						alt='capa do álbum superunknown '
					/>
					<strong>Superunknown</strong>
					<button className='flex items-center justify-center pl-1 w-12 h-12 rounded-full bg-green-400 ml-auto mr-8 invisible group-hover:visible'>
						<Play />
					</button>
				</a>
				<a
					href='#'
					className='group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'
				>
					<Image
						src='/album.jpg'
						width={104}
						height={104}
						alt='capa do álbum superunknown '
					/>
					<strong>Superunknown</strong>
					<button className='flex items-center justify-center pl-1 w-12 h-12 rounded-full bg-green-400 ml-auto mr-8 invisible group-hover:visible'>
						<Play />
					</button>
				</a>
				<a
					href='#'
					className='group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'
				>
					<Image
						src='/album.jpg'
						width={104}
						height={104}
						alt='capa do álbum superunknown '
					/>
					<strong>Superunknown</strong>
					<button className='flex items-center justify-center pl-1 w-12 h-12 rounded-full bg-green-400 ml-auto mr-8 invisible group-hover:visible'>
						<Play />
					</button>
				</a>
				<a
					href='#'
					className='group bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'
				>
					<Image
						src='/album.jpg'
						width={104}
						height={104}
						alt='capa do álbum superunknown '
					/>
					<strong>Superunknown</strong>
					<button className='flex items-center justify-center pl-1 w-12 h-12 rounded-full bg-green-400 ml-auto mr-8 invisible group-hover:visible'>
						<Play />
					</button>
				</a>
			</div>
		</>
	);
}
