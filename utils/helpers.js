import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { zinc } from 'tailwindcss/colors';

export const FindEntryBySysId = (id, entries) => {
  return entries?.find((entry) => {
    return entry?.sys?.id == id
  })
}

export const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => {  return <p className='mb-4 text-[#333] text-base font-normal'>{children}</p>},
    [BLOCKS.HEADING_1]: (_, children) => <h1 className='text-5xl mb-12 font-bold'>{children}</h1>,
    [BLOCKS.HEADING_2]: (_, children) => <h2 className='text-4xl mb-12 font-bold'>{children}</h2>,
    [BLOCKS.HEADING_3]: (_, children) => <h3 className='text-3xl mb-12 font-bold'>{children}</h3>,
    [BLOCKS.HEADING_4]: (_, children) => <h4 className='text-3xl mb-12 font-bold'>{children}</h4>,
    [BLOCKS.HEADING_5]: (_, children) => <h5 className='text-2xl mb-12 font-bold'>{children}</h5>,
    [BLOCKS.HEADING_6]: (_, children) => <h6 className='mb-10 text-2xl font-normal'>{children}</h6>,
    [BLOCKS.LIST_ITEM]: (_, children) => <li className='ml-4'>{children}</li>,
    [BLOCKS.UL_LIST]: (_, children) => <ul className='list-disc mb-12'> {children} </ul>,
    
  },
};

export function getTagList (list) {
  if (!list) return ''
  return list.map(function(tag){ 
    return tag?.sys?.id.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
  }).join(", ")
}

export function getTagName (tag) {
  if (!tag) return ''
  return tag?.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
  
}

export function getExcerpt (content) {
  if (!content) return ''
  return (content.length > 150) ? content.slice(0, 150-1) + '...' : content;
}


export const getScoredEntries = (entries, refIds, entryKey) => {
  if (!entries) return
  const allEntriesScored = entries?.reduce((entriesScored, entry) => {
    const entriesProjectFieldsIds = entry?.fields?.[entryKey]?.reduce((ids, ref) => {
      ids.push(ref?.sys?.id)
      return ids
    }, [])
    
    const plansDifference = (entriesProjectFieldsIds.filter(arr1Item => !refIds.includes(arr1Item))).length;
    const planRefIdsCount = entriesProjectFieldsIds.length
    entry.entryStrength = (planRefIdsCount - plansDifference)
    entriesScored.push(entry)
    return entriesScored
  }, [])
  return allEntriesScored.sort((a, b) => b.entryStrength - a.entryStrength)
  
}

export const renderOptions = (BLOCKS, variant = '', location) => {
  return {
    renderNode: {
      [BLOCKS.LIST_ITEM]: (node, next) => {
        return `
          <li className="mb-4 flex items-center text-[#222]"><div className="w-[4px] h-[4px] rounded-full mx-2 bg-[#222]"></div> ${node.content[0]?.content[0]?.value?.replaceAll('[CITY]', location)}</li>`
      },
      [BLOCKS.PARAGRAPH]: (node, next) => {
        return `<p className=${`mb-4 ${variant == 'white' ? 'text-white' : 'text-[#222]'}`}">${next(node.content)?.replaceAll('[CITY]', location)}</p>`
      },
      [BLOCKS.HEADING_1]: (node, next) => {
        return `<h1 className="mb-4 text-primary font-semibold text-5xl">${next(node.content)?.replaceAll('[CITY]', location)}</h1>`
      },
      [BLOCKS.HEADING_2]: (node, next) => {
        return `<h2 className="mb-4 text-primary font-semibold text-4xl">${next(node.content)?.replaceAll('[CITY]', location)}</h2>`
      },
      [BLOCKS.HEADING_3]: (node, next) => {
        return `<h3 className="mb-4 text-primary font-semibold text-3xl">${next(node.content)?.replaceAll('[CITY]', location)}</h3>`
      }
    }
  }
}

export const optionsWithCity = (city, BLOCKS, variant = 'dark', size = '', weight='bold') => {
  const fontColor = variant == 'dark' ? 'text-[#333]' : 'text-white'
  const fontWeight = weight == 'bold' ? 'font-bold' : 'font-thin'
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => {
        const x = children?.map((child, _) => {
          if(typeof child == 'string') {
            return child?.replace('[location]', city)
          }
          if (child?.type == 'b') {
            return <b className='font-bold'> {child?.props?.children?.replace('[label]', city)} </b>
          }
          return child
        }); 
        
        return <p className={`mb-4`}>{x}</p>
      },
      [BLOCKS.HEADING_1]: (_, children) => <h1 className={`${fontColor} ${fontWeight} text-5xl mb-12 `}>{children}</h1>,
      [BLOCKS.HEADING_2]: (_, children) => <h2 className={`${fontColor} ${fontWeight} text-4xl mb-12 `}>{children}</h2>,
      [BLOCKS.HEADING_3]: (_, children) => <h3 className={`${fontColor} ${fontWeight} text-3xl mb-12 `}>{children}</h3>,
      [BLOCKS.HEADING_4]: (_, children) => <h4 className={`${fontColor} ${fontWeight} text-3xl mb-12 `}>{children}</h4>,
      [BLOCKS.HEADING_5]: (_, children) => <h5 className={`${fontColor} ${fontWeight} text-2xl mb-12 `}>{children}</h5>,
      [BLOCKS.HEADING_6]: (_, children) => <h6 className={`${fontWeight} mb-10 text-2xl `}>{children}</h6>,
      [BLOCKS.LIST_ITEM]: (_, children) => <li className='ml-4'>{children}</li>,
      [BLOCKS.UL_LIST]: (_, children) => <ul className='list-disc mb-12'> {children} </ul>,
    },
  };
}
