import { fetchEntryByType } from '../utils/contentfulPosts'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { optionsWithCity } from '../utils/helpers';

export default function Terms({ global }) {
  console.log(global)
  return (
    <div className='my-20'>
      <main className='container mx-auto'>
        <div className='w-2/3 mx-auto'>
          {documentToReactComponents(global?.items?.[0]?.fields?.termsAndConditions, optionsWithCity('', BLOCKS, 'dark'))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps({params}) {

  const global = await fetchEntryByType('global')

  return {
    props: {
      metaTitle: global?.items?.[0]?.fields?.teamMetaTitle || null,
      metaDescription: global?.items?.[0]?.fields?.teamMetaDescription || null,
      global: global,
      heroModifer: 'none'
    },
  }
}