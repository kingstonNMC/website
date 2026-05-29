import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { InView } from 'react-intersection-observer'

export default function About ({content}) {

	return (
		<InView>
			{({ inView, ref }) => {
				const animation2 = (delay) => `transition-all delay-[${delay}ms] duration-[1500ms] ease-in-out ${inView ? 'opacity-100' : 'opacity-0'}`
				return (
					<div ref={ref}>
						<div className={`${animation2(50)} my-12 md:my-24`}>
							<div className='container mx-auto'>
								<h2 className='text-6xl text-secondary font-light text-center'> About the <span className='bg-secondary text-primary'> Kingston New Music Collective </span> </h2>
								<div className='w-full md:w-2/3 mx-auto'>
								<p className='text-[#333] mt-10 font-body text-center'>The KNMC aims to support new music in Kingston through regular performances and community engagement. Its mission is to foster connection through contemporary music, while creating inclusive, welcoming spaces for audiences and artists. The organization values creativity, community-building, openness, transparency, and fair compensation for artists.</p>
							</div>
							</div>
						</div>
					</div>
				)
			}}
		</InView>
	)
}

