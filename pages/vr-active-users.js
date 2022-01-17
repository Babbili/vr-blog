import React from 'react'
import { getPosts } from '../grapgql'
import homeStyles from '../styles/Home.module.css'

export default function renderSlug({posts}) {
    

    return(
        <section className={homeStyles.page+` bd__container`}>
            <h2>{posts[1].node.title}</h2>
            <div className={homeStyles.page__data}>

              <div className={homeStyles.page__data__img}>
                <img src={posts[1].node.featuredImage.url} />
                <div className={homeStyles.page__data__author}>
                  <div className={homeStyles.page__card__author} >
                    <p>by {posts[1].node.author.name}</p>
                    <img src={posts[1].node.author.photo.url} />
                  </div>
                  <p className={homeStyles.page__data__author__bio}>{posts[1].node.author.bio}</p>
                </div>
              </div>

              <div className={homeStyles.page__data__description}>
                <p>{posts[1].node.excerpt}</p>
                <p>{posts[1].node.content.text}</p>
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
