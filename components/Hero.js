import React from 'react'
import Link from 'next/link'

function Hero({homeStyles}) {

    return(
        <section className={homeStyles.hero}>
            <div className={homeStyles.hero__title}>
                <h1>GET INFORMED</h1>
                <h1>GET INSPIRED</h1>
            </div>
            <div className={homeStyles.hero__subtitle}>
                <p>Daily VR technology stories & news</p>
                <Link href="#blogs"><span className="button">View Blogs</span></Link>
            </div>
        </section>
    )
}
export default Hero