import React from 'react'
import Link from 'next/link'
import layoutStyles from '../styles/Layout.module.css'

function Footer() {
    return(
        <footer className={layoutStyles.footer}>
            <Link href="/">
                <div className={layoutStyles.footer__logo}>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="554.50873"
                        height="336.21069"
                        viewBox="0 0 554.50873 336.21069">
                        <g
                            transform="translate(-7.7841162,-7.976804)">
                            <path
                                id="path847"
                                fill="var(--title-color)"
                                d="m 292.14648,184.98633 c -16.67133,0.67903 -33.7974,8.42529 -46.0039,24.06445 -21.70072,27.8033 -23.22028,70.55465 -26.82813,112.04492 l 29.88672,2.59766 c 3.60785,-41.49027 9.3041,-81.72162 20.5918,-96.18359 11.28796,-14.46231 32.80031,-13.14836 39.57031,-7.92188 6.77075,5.22706 6.81538,18.55321 0.26563,24.91016 -3.27504,3.17862 -11.37853,6.83999 -19.79883,10.44336 -4.21015,1.80168 -8.47128,3.4791 -13.11914,7.12304 -2.32393,1.82198 -4.90758,4.30494 -6.79492,8.17969 -1.88735,3.87475 -2.49421,9.16615 -1.49024,13.4668 2.00798,8.60138 6.50177,12.38565 11.14649,16.67578 4.64471,4.29012 10.18284,8.40933 16.49218,12.72461 12.61869,8.63056 28.30161,17.88695 43.83008,27.07617 l 15.27735,-25.81836 C 339.64341,305.17992 324.27081,296.05829 313,288.34961 c -3.63122,-2.48358 -6.59682,-4.72065 -9.17383,-6.77734 7.40042,-3.03202 17.62776,-6.74624 26.69531,-15.54688 19.73619,-19.15523 19.78096,-52.73075 -2.82617,-70.18359 -9.89095,-7.63588 -22.58223,-11.38361 -35.54883,-10.85547 z M 125,11.994141 c -39.487331,-0.0976 -70.143302,0.225068 -72.380859,0.761718 -17.679189,4.24006 -34.491571,20.749168 -39.070313,38.367188 -2.38237,9.16684 -2.338722,240.487563 0.04687,248.609373 5.819646,19.8131 23.545829,35.68835 43.404297,38.87305 3.971375,0.63689 94.967395,0.97826 194.265625,1.05078 v -4.89258 L 252.0332,298.6875 C 152.05749,298.43906 60.674055,297.6041 58.699219,296.26562 52.088877,291.78535 52.506246,299.79224 52.494141,177.16406 52.482352,57.748255 52.368241,60.835933 56.947266,56.251953 l 3.083984,-3.087891 16.734375,-0.5 c 37.751785,-1.127989 106.462755,-0.345838 111.474605,1.269532 13.45885,4.33794 20.37533,11.586631 29.65625,31.082031 31.40977,65.979015 101.57403,66.778245 133.4629,1.519531 17.02361,-34.83784 15.68102,-34.371093 99.14062,-34.371094 77.36741,0 67,-19.032707 67,122.999998 0,127.23093 0.61182,117.30668 -7.5,121.64453 -2.81269,1.50411 -119.02451,2.09737 -232.82227,1.92969 l 61.07813,40.91016 c 91.24292,-0.0897 170.91789,-0.41605 174.74414,-1.00977 19.66188,-3.05095 37.59362,-19.12368 43.4043,-38.90625 2.75023,-9.36321 2.39015,-241.288364 -0.38868,-250.285154 -4.68376,-15.16424 -16.53094,-27.851839 -32.34374,-34.636719 L 517.5,12.164062 H 447 376.5 l -8.5,3.050782 c -26.25488,9.42583 -39.04219,22.695589 -55.36523,57.449218 -13.00172,27.682138 -42.74185,27.147751 -55.65039,-1 C 241.89801,38.767452 228.07676,24.576724 202,15.214844 l -8.5,-3.050782 z m 35.5918,122.232419 c -4.16623,0.0946 -8.38677,0.69717 -12.5918,1.86328 -39.31462,10.90246 -53.819488,58.69155 -26.96094,88.82618 33.607,37.7062 95.09036,14.27153 95.17188,-36.2754 0.0497,-30.8014 -26.45552,-55.07613 -55.61914,-54.41406 z m 247.12695,0.0566 c -4.57836,-0.0303 -9.1881,0.55035 -13.71875,1.8086 -46.73338,12.97874 -54.6887,76.43385 -12.60156,100.51367 40.2456,23.02621 89.80126,-13.58306 80.13476,-59.19922 -5.29833,-25.00302 -29.09128,-42.95948 -53.81445,-43.12305 z" />
                        </g>
                </svg>
                <h2>VR Blog</h2>
                </div>
            </Link>

            <div className={layoutStyles.footer__content}>
                <h3>Resources</h3>
                <ul className={layoutStyles.footer__content__list}>
                <li className={layoutStyles.footer__content__list__item}><Link href="/#blogs">Blogs</Link></li>
                    <li className={layoutStyles.footer__content__list__item}><Link href="/">Brands</Link></li>
                    <li className={layoutStyles.footer__content__list__item}><Link href="/">Publishers</Link></li>
                    <li className={layoutStyles.footer__content__list__item}><Link href="/">Developers</Link></li>
                </ul>
            </div>

            <div className={layoutStyles.footer__content}>
                <h3>Company</h3>
                <ul className={layoutStyles.footer__content__list}>
                    <li className={layoutStyles.footer__content__list__item}><Link href="/">About</Link></li>
                    <li className={layoutStyles.footer__content__list__item}><Link href="/">Events</Link></li>
                    <li className={layoutStyles.footer__content__list__item}><Link href="/">Careers</Link></li>
                    <li className={layoutStyles.footer__content__list__item}><Link href="mailto:babbili.dxb@protonmail.com">Contact</Link></li>
                </ul>
            </div>

            <div className={layoutStyles.social}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--title-color)">
                <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--title-color)">
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
            </svg>
            </div>

        </footer>
    )
}
export default Footer