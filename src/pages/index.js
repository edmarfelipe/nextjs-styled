import { getQuotes } from '@lib/http'
import Hero from '@components/Hero'
import QuoteBox from '@components/QuoteBox'

export async function getServerSideProps() {
  return {
    props: await getQuotes()
  }
}

/**
 * Remove React and Nextjs framework bits.
 */
export const config = {
  unstable_runtimeJS: false
}

export default function Home({ quote, author }) {
  return (
    <>
      <Hero title='Nextjs + Styled Components' />
      <QuoteBox quote={quote} author={author} />
    </>
  )
}
