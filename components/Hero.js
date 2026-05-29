import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { InView } from 'react-intersection-observer'
import Link from 'next/link';
export default function Hero ({content}) {
  
  const pageData = content
	console.log(content)
	return (
		<InView>
			{({ inView, ref }) => {
				const animation2 = (delay) => `transition-all delay-[${delay}ms] duration-[1500ms] ease-in-out ${inView ? 'opacity-100' : 'opacity-0'}`
				return (
					<div ref={ref}>
						<div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mt-6 md:mt-0'>
							<div className='flex flex-col h-full justify-center pl-0 md:pl-12'>
								<div className={`${animation2(50)} text-center md:text-left p-4 md:p-0`}>
									<h1 className='text-4xl md:text-5xl lg:text-7xl text-center md:text-left font-thin text-primary mb-2'> 
										{content?.fields?.title} 
									</h1>
									<div className='flex flex-col md:flex-row gap-4 md:gap-8 my-12'>
										{Array.from({ length: 2 }, (_, i) => {
											return (
												<div className={`hover:font-bold transition-all px-12 py-6 border-2 rounded-full ${i % 2 ? 'bg-primary text-secondary' : 'border-primary text-primary'}   cursor-pointer uppercase`}> 
													<Link href={content?.fields?.[`buttonLink${i}Url`] || ''}> {content?.fields?.[`buttonLink${i+1}`]} </Link> 
												</div>
											)
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			}}
		</InView>
	)
	

}

