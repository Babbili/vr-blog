import React from 'react'
import Link from 'next/link'

function Featured({ homeStyles , posts }) {

    return (
        <section className={homeStyles.featured} id="blogs">
            <h2>Featured Blogs</h2>

            <div className={homeStyles.featured__cards}>

                <Link className={homeStyles.featured__card__link} href={`/${posts[1].node.slug}`} passHref>
                <div className={homeStyles.featured__card}>
                    <div className={homeStyles.featured__card__img}
                        style={{ background: `url(${posts[1].node.featuredImage.url})`, backgroundRepeat: 'norepeat', backgroundPosition: 'center', backgroundSize: 'cover' }} >
                        <p>#{posts[1].node.categories[0].name}</p>
                    </div>
                    <div className={homeStyles.featured__card__description}>
                        <div className={homeStyles.featured__card__author} >
                            <p>by {posts[1].node.author.name}</p>
                            <img src={posts[1].node.author.photo.url} />
                        </div>
                        <h3>{posts[1].node.title}</h3>
                        <p>{posts[1].node.excerpt}</p>
                    </div>
                </div>
                </Link>

                <Link className={homeStyles.featured__card__link} href={`/${posts[2].node.slug}`} passHref>
                <div className={homeStyles.featured__card}>
                    <div className={homeStyles.featured__card__img}
                        style={{ background: `url(${posts[2].node.featuredImage.url})`, backgroundRepeat: 'norepeat', backgroundPosition: 'center', backgroundSize: 'cover' }} >
                        <p>#{posts[2].node.categories[0].name}</p>
                    </div>
                    <div className={homeStyles.featured__card__description}>
                        <div className={homeStyles.featured__card__author} >
                            <p>by {posts[2].node.author.name}</p>
                            <img src={posts[2].node.author.photo.url} />
                        </div>
                        <h3>{posts[2].node.title}</h3>
                        <p>{posts[2].node.excerpt}</p>
                    </div>
                </div>
                </Link>

                <Link className={homeStyles.featured__card__link} href={`/${posts[3].node.slug}`} passHref>
                <div className={homeStyles.featured__card}>
                    <div className={homeStyles.featured__card__img}
                        style={{ background: `url(${posts[3].node.featuredImage.url})`, backgroundRepeat: 'norepeat', backgroundPosition: 'center', backgroundSize: 'cover' }} >
                        <p>#{posts[3].node.categories[0].name}</p>
                    </div>
                    <div className={homeStyles.featured__card__description}>
                        <div className={homeStyles.featured__card__author} >
                            <p>by {posts[3].node.author.name}</p>
                            <img src={posts[3].node.author.photo.url} />
                        </div>
                        <h3>{posts[3].node.title}</h3>
                        <p>{posts[3].node.excerpt}</p>
                    </div>
                </div>
                </Link>

                <Link className={homeStyles.featured__card__link} href={`/${posts[4].node.slug}`} passHref>
                <div className={homeStyles.featured__card}>
                    <div className={homeStyles.featured__card__img}
                        style={{ background: `url(${posts[4].node.featuredImage.url})`, backgroundRepeat: 'norepeat', backgroundPosition: 'center', backgroundSize: 'cover' }} >
                        <p>#{posts[4].node.categories[0].name}</p>
                    </div>
                    <div className={homeStyles.featured__card__description}>
                        <div className={homeStyles.featured__card__author} >
                            <p>by {posts[4].node.author.name}</p>
                            <img src={posts[4].node.author.photo.url} />
                        </div>
                        <h3>{posts[4].node.title}</h3>
                        <p>{posts[4].node.excerpt}</p>
                    </div>
                </div>
                </Link>
                
            </div>
        </section>
    )
}
export default Featured