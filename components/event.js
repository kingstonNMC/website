import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { InView } from 'react-intersection-observer'
import { FindEntryBySysId } from '../utils/helpers';

export default function Event ({author, setAuthor, event, preformers, composers}) {
	function formatDate(dateString) {
		const date = new Date(dateString);
		
		return new Intl.DateTimeFormat('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		}).format(date);
	}
	return (
		<InView>
			{({ inView, ref }) => {
				const animation2 = (delay) => `transition-all delay-[${delay}ms] duration-[1500ms] ease-in-out ${inView ? 'opacity-100' : 'opacity-0'}`
				return (
					<div ref={ref} className='mt-12 md:mt-24 bg-primary'>
						<div className={`${animation2(50)} container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-4`}>
							<div>
								<h3 className='font-bold text-5xl md:text-6xl text-secondary'>{event?.fields?.name}</h3>
								<h3 className='font-thin text-3xl md:text-4xl text-secondary mt-4'>{formatDate(event?.fields?.date)} @ {event?.fields?.startTime}</h3>
								<h3 className='font-thin text-xl md:text-2xl text-secondary mt-8'> {event?.fields?.eventLocation} </h3>
								<h3 className='font-thin text-xl md:text-2xl text-secondary mt-4'> {event?.fields?.eventAddress} </h3>
								<div className='flex gap-8 my-8'>
									<div className='hover:font-bold transition-all px-12 py-6 rounded-full bg-secondary cursor-pointer uppercase text-primary'> 
										Buy Tickets 
									</div>
								</div>
							</div>
							<div>
								<h3 className='font-bold text-4xl text-secondary text-left md:text-right'>Featuring</h3>
								{event?.fields?.preformers?.map((performer) => {
									const artist = FindEntryBySysId(performer?.sys?.id, preformers)
									return (
										<h3 className='font-thin text-xl md:text-2xl text-secondary text-left md:text-right mt-3'>
											{artist?.fields?.name}, {artist?.fields?.instrument}
										</h3>
									)
								})}
								
								<h3 className='font-bold text-4xl text-secondary text-left md:text-right mt-8'>Program Details</h3>
								{event?.fields?.composers?.map((composer) => {
									const artist = FindEntryBySysId(composer?.sys?.id, composers)
									return (
										<div className='flex gap-2 mt-4 justify-start md:justify-end'>
											<div className='bg-secondary text-primary font-bold'> Das Rosen-innere </div>
											<div onClick={() => setAuthor(artist)} className='text-secondary inline-block relative cursor-pointer group'>
												by {artist?.fields?.name}
												<span className='absolute left-0 bottom-0 h-[2px] w-full origin-left scale-x-0 bg-secondary transition-transform duration-300 group-hover:scale-x-100'></span>
											</div> 
										</div>
									)
								})}
							</div>
						</div>
					</div>
					)
			}}
		</InView>
	)
}