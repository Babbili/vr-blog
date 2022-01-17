import React from 'react'
import { getPosts } from '../grapgql'
import homeStyles from '../styles/Home.module.css'

export default function renderSlug({posts}) {
    

    return(
        <section className={homeStyles.page+` bd__container`}>
            <h2>{posts[3].node.title}</h2>
            <div className={homeStyles.page__data}>

              <div className={homeStyles.page__data__img}>
                <img src={posts[3].node.featuredImage.url} />
                <div className={homeStyles.page__data__author}>
                  <div className={homeStyles.page__card__author} >
                    <p>by {posts[3].node.author.name}</p>
                    <img src={posts[3].node.author.photo.url} />
                  </div>
                  <p className={homeStyles.page__data__author__bio}>{posts[3].node.author.bio}</p>
                </div>
              </div>

              <div className={homeStyles.page__data__description}>
                <p>{posts[3].node.excerpt}</p>
                <p>{posts[3].node.content.text}</p>
              </div>
            </div>
        </section>
    )
}

export async function getStaticProps() {
    const posts = (await getPosts()) || []
  
    return {
      props : { posts }
    }
  }
