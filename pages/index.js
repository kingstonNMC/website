import { fetchEntryByType, fetchEntry } from '../utils/contentfulPosts'
import AuthorBlock from '../components/authorBlock'
import { useState } from 'react'
import CTA from '../components/cta'
import Event from '../components/event'
import About from '../components/about'
export default function Home({  project, preformers, composers }) {
  const [author, setAuthor] = useState(null)
  console.log(preformers)
  return (
    <div className='overflow-hidden'>
      <AuthorBlock author={author} setAuthor={setAuthor} />
      <div className='hidden right-[9999px] delay-[100ms] delay-[200ms] delay-[300ms] delay-[400ms] delay-[500ms] delay-[600ms] delay-[700ms] delay-[800ms] delay-[900ms] delay-[1000ms] delay-[1100] delay-[1200] delay-[1300] delay-1400 delay-1500'></div>
      <main>
        <CTA content={project} />
        <Event composers={composers} preformers={preformers} event={project?.fields?.event} author={author} setAuthor={setAuthor} />
        <About content={project} />
        <div className='bg-primary py-12'>
          <h4 className=' font-bold text-center text-3xl'> Feel free to reach out</h4>
          <div className='text-secondary text-center text-xl mt-4'>kingstonnmc@gmail.com</div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps({params}) {
  const project = await fetchEntry('6YCSAfLnIMZJ0sl6XAXJQv')
  const preformer = await fetchEntryByType('preformers')
  const composers = await fetchEntryByType('composers')
  return {
    props: {
      project,
      preformers: preformer?.items,
      composers: composers?.items
    },
  }
}