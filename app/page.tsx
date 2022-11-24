import IndexPage from 'components/IndexPage'
import { getAllPosts, getSettings } from 'lib/sanity.client'

// FIXME: https://github.com/sanity-io/nextjs-blog-cms-sanity-v3/issues/95

export default async function IndexRoute() {
  // Fetch queries in parallel
  const [settings, posts] = await Promise.all([getSettings(), getAllPosts()])

  return <IndexPage posts={posts} settings={settings} />
}
