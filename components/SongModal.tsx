import { PortableText } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { getSong, urlFor } from "sanity-utils";

{/* <Image alt={song.artist.name} className='rounded-full' src={urlFor(song.artist.image).width(96).height(96).url()} width={48} height={48} />

<Image src={urlFor(song.coverImage).width(1080).height(1080).url()} alt={song.title} width={512} height={512} classNameName=''/> */}


export default async function SongModal({id}: any) {
	
    const song = await getSong(id);
	
	
	return <>
	<div className="fixed inset-0 flex items-center justify-center z-10">
		<Link className="fixed inset-0 bg-black opacity-75 cursor-default" href="/"
		scroll={false} />
			{/* <div className="relative isolate flex flex-col overflow-hidden rounded-md w-96 min-h-96 px-8 pb-8 pt-8 mx-auto">
			<Image src={urlFor(song.coverImage).width(1080).height(1080).url()} alt={song.title} width={512} height={512} className='absolute inset-0 w-full object-cover' />
			<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
			<h3 className="z-10 mt-3 text-3xl font-bold text-white">{song.title}</h3>
			<div className="z-10 gap-y-1 overflow-hidden text-md leading-6 text-white">{song.artist.name}</div> */}
			{/* <Image alt={song.artist.name} className='rounded-full' src={urlFor(song.artist.image).width(96).height(96).url()} width={48} height={48} /> */}
			{/* <div className="z-10 justify-end gap-y-1 overflow-hidden text-sm leading-2 text-gray-300"><PortableText value={song.credits}/></div>
			</div> */}
			<div className="grid grid-flow-col grid-cols-2 gap-3">
			<div className="grid grid-flow-row">
						<Image src={urlFor(song.coverImage).width(1080).height(1080).url()} alt={song.title} width={512} height={512} className='z-10' />
						
						
			</div>
			<div className="grid grid-flow-row">
				<h3 className="z-10 mt-3 text-3xl font-bold text-white">{song.title}</h3>
				<h4 className="z-10 gap-y-1 overflow-hidden text-md leading-6 text-white">{song.artist.name}</h4>
				{/* <Image alt={song.artist.name} className='rounded-full' src={urlFor(song.artist.image).width(96).height(96).url()} width={48} height={48} /> */}
				<p className="z-10 text-right gap-y-1 overflow-hidden text-sm leading-2 text-gray-300"><PortableText value={song.credits}/></p>
			</div>
			</div>
			
			</div>

	</>
}