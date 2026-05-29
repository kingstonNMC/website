import { fetchEntryByType } from '../utils/contentfulPosts'


export default function Home({ globalRequest }) {  
  return (
    <div>
      
    </div>
  )
}

export async function getStaticProps() {
  const globalRequest = await fetchEntryByType('preformers')
  return {
    props: {
      globalRequest
    }
  }
}
