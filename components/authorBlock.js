import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useState } from 'react'
import { optionsWithCity } from '../utils/helpers';

export default function AuthorBlock ({author, setAuthor}) {
	
	return (
		<div
			className={`
				fixed
				top-[5vh]
				right-[5%]
				w-[90%]
				md:w-1/2
				h-[90vh]
				bg-[#f1f1f1]
				rounded-2xl
				p-10
				z-[1000]
				overflow-y-scroll
				transform
				transition-all
				duration-500
				ease-out

				${author
					? 'translate-x-0 opacity-100'
					: 'translate-x-[120%] opacity-0'
				}
			`}
		>
			<div
				onClick={() => setAuthor(null)}
				className='flex justify-end cursor-pointer hover:font-bold transition-all'
			>
				CLOSE X
			</div>

			<div
				style={{ backgroundImage: 'url(/linda-catlin.jpg)' }}
				className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto bg-cover bg-center rounded-full'
			/>

			<h4 className='text-4xl font-thin text-center mt-8'>
				{author?.fields?.name}
			</h4>

			<div className='text-center mt-8 '>
				{documentToReactComponents(author?.fields?.bio, optionsWithCity('', BLOCKS, 'dark'))}
			</div>
		</div>
	)
}

