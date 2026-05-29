import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { InView } from 'react-intersection-observer'
import { optionsWithCity } from '../utils/helpers';

export default function CTA ({content}) {

	return (
		<InView>
			{({ inView, ref }) => {
				const animation2 = (delay) => `transition-all delay-[${delay}ms] duration-[1500ms] ease-in-out ${inView ? 'opacity-100' : 'opacity-0'}`
				return (
					<div ref={ref}>
						<div className={`${animation2(50)} mt-12 md:mt-24`}>
							<div className='container mx-auto'>
								<h2 className='text-6xl text-secondary font-light text-center'> {content?.fields?.ctaTitle} </h2>
								<div className='w-full mt-8 md:w-2/3 mx-auto'>
									{documentToReactComponents(content?.fields?.ctaDescription, optionsWithCity('', BLOCKS, 'dark'))}
								</div>
							</div>
						</div>
					</div>
				)
			}}
		</InView>
	)
}

