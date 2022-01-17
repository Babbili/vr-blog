import React, { useRef, useEffect } from 'react'
import Link from 'next/link'

function Header({layoutStyles}) {

    const navBtn = useRef()
    const navBtnUp = useRef()
    const navBtnBottom = useRef()
    const navMenu = useRef()
    const Sun = useRef()
    const Moon = useRef()
    const themeBtn = useRef()
    const navMenuItems = useRef()

    function navBtnClick() {
        navMenu.current.classList.toggle(`${layoutStyles.show__menu}`)
        navBtnUp.current.classList.toggle(`${layoutStyles.toggle_up}`)
        navBtnBottom.current.classList.toggle(`${layoutStyles.toggle_bottom}`)
        navMenuItems.current.classList.toggle(`${layoutStyles.nav__anime__active}`)
    }

    function nav2Click() {
        navMenu.current.classList.remove(`${layoutStyles.show__menu}`)
        navBtnUp.current.classList.remove(`${layoutStyles.toggle_up}`)
        navBtnBottom.current.classList.remove(`${layoutStyles.toggle_bottom}`)
        navMenuItems.current.classList.remove(`${layoutStyles.nav__anime__active}`)
    }


    let darkTheme = 'dark__theme'
    let hideIcon = 'hide'
    
    const getCurrentTheme = () => (document.body.classList.contains(darkTheme)) ? 'dark__theme' : null
    const getCurrentIcon = () => (document.body.classList.contains(darkTheme)) ? null : 'hide'

    useEffect(() => {
        let selectedTheme = localStorage.getItem('selected-theme')
        let selectedIcon = localStorage.getItem('selected-icon')
        if (selectedTheme === 'dark__theme') {
            document.body.classList.add(darkTheme)
            Moon.current.classList.remove(hideIcon)
            Sun.current.classList.add(hideIcon)
        } else {
            document.body.classList.remove(darkTheme)
            Moon.current.classList.add(hideIcon)
            Sun.current.classList.remove(hideIcon)
        }
        
    }, [])


    function themeBtnClick() {
        Moon.current.classList.toggle(hideIcon)
        Sun.current.classList.toggle(hideIcon)
        document.body.classList.toggle(darkTheme)
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    }

    return (
        <header className={layoutStyles.header+` bd__container`} >
            <nav className={layoutStyles.nav+` bd__container`} >
                <Link href='/' passHref>
                    <div className={layoutStyles.logo} >
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
                <div className={layoutStyles.nav__menu} ref={navMenu}>
                    <ul className={layoutStyles.nav__menu__items+` ${layoutStyles.nav__anime}`} ref={navMenuItems}>
                        <li className={layoutStyles.nav__item}><Link  href="/"><a className={layoutStyles.nav__link}>ABOUT</a></Link></li>
                        <li className={layoutStyles.nav__item}><Link href="/#blogs"><a className={layoutStyles.nav__link}  onClick={() => nav2Click()}>BLOGS</a></Link></li>
                        <li className={layoutStyles.nav__item}><Link href="/"><a className={layoutStyles.nav__link}>BRANDS</a></Link></li>
                        <li className={layoutStyles.nav__item}><Link href="/"><a className={layoutStyles.nav__link}>PUBLISHERS</a></Link></li>
                        <li className={layoutStyles.theme__button} id={layoutStyles.theme__button} ref={themeBtn} onClick={() => themeBtnClick()}>
                            <svg className={layoutStyles.moon+` hide`} id="moon" ref={Moon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"></path>
                            </svg>
                            <svg className={layoutStyles.sun} id="sun" ref={Sun} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
                            </svg>
                        </li>
                    </ul>
                </div>
                <div className={layoutStyles.nav__btn} id={layoutStyles.nav__btn} ref={navBtn} onClick={() => navBtnClick()}>
                    <div className={layoutStyles.nav__btn_up} id="nav__btn_up" ref={navBtnUp}></div>
                    <div className={layoutStyles.nav__btn_bottom} id="nav__btn_bottom" ref={navBtnBottom}></div>
                </div>
            </nav>
        </header>
    )
}
export default Header