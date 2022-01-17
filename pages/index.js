import Head from 'next/head'
import { getPosts } from '../grapgql'
import homeStyles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import Showcase from '../components/Showcase'

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={homeStyles.main}>
        <Showcase homeStyles={homeStyles} />
        <Hero homeStyles={homeStyles} />
        <Featured homeStyles={homeStyles} posts={posts} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props : { posts }
  }
}