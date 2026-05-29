import { fetchEntry, fetchEntryByType } from '../utils/contentfulPosts'


export default function Home({ home, global, locations, testimonals }) {  
  console.log(locations)
  return (
    <div>
      
    </div>
  )
}

export async function getStaticProps() {
  const globalRequest = await fetchEntryByType('global')
  return {
    props: {
      global: globalRequest?.items || null
    }
  }
}
