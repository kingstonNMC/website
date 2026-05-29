const space = process.env.CF_SPACE_ID
const accessToken = process.env.CF_DELIVERY_ACCESS_TOKEN

const client = require('contentful').createClient({
  accessToken: 'FF4qxxhG05-zk_iNdRocy7KGKPwz5t74sc1yq-yROl8', 
  space: '7b5931gsnayz',
  host: "cdn.contentful.com"

})

export async function fetchEntry(id = null) {
  if (!id) return false
  const entries = await client.getEntry(id)
  if (entries) return entries
}

export async function fetchTag(tagId = null) {
  if (!tagId) return false
  const entries = await client.getEntries(tagId)
  if (entries) return entries
}

export async function fetchEntryByType(category=null, customQueryKey = null, customQueryValue = null) {
  if (!category) return null
  const query = {content_type: category}
  if (customQueryValue && customQueryKey) query[customQueryKey] = customQueryValue 
  
  let entries = await client.getEntries(query)
  
  if (entries) return entries
}
export async function fetchTags () {
  const response = await client.getContentTypes()
  return response
}

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }
