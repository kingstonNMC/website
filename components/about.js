import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { InView } from 'react-intersection-observer'
import { optionsWithCity } from '../utils/helpers';

export default function About ({content}) {
	const updatedText = content?.fields?.cta2Title.replace(/\[highlight\](.*?)\[\/highlight\]/g, '<span class="bg-secondary text-primary">$1</span>');
	return (
		<InView>
			{({ inView, ref }) => {
				const animation2 = (delay) => `transition-all delay-[${delay}ms] duration-[1500ms] ease-in-out ${inView ? 'opacity-100' : 'opacity-0'}`
				return (
					<div ref={ref}>
						<div className={`${animation2(50)} my-12 md:my-24`}>
							<div className='container mx-auto'>
								<div className='text-4xl md:text-6xl text-secondary font-light text-center'> 
									<div className='' dangerouslySetInnerHTML={{ __html: updatedText }} /> 
								</div>
								<div className='w-full md:w-2/3 mx-auto'>
								<div className='mt-8 px-4'>
									{documentToReactComponents(content?.fields?.cta2Description, optionsWithCity('', BLOCKS, 'dark'))}
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

