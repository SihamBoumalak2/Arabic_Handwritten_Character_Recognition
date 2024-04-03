// import React, { useState } from 'react'
// // import { BiSearch } from 'react-icons/bi'
// // import { BsPerson } from 'react-icons/bs'
// import { HiOutlineMenuAlt4 } from 'react-icons/hi'
// import { AiOutlineClose } from 'react-icons/ai'
// import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
// // import UploadPicture from '../UploadPicture/UploadPicture'
// import { Link } from 'react-scroll'

// import './NavbarStyles.css'

// function Navbar() {
//     const [nav, setNav] = useState(false)
//     const handleNav = () => setNav(!nav)

//     return (
//         <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
//             <div className={nav ? 'logo dark' : 'logo'}>
//                 <h2>FrancoScripto.</h2>
//             </div>
//             <ul className="nav-menu">
//                 <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
//                 <Link to='UploadPicture' smooth={true} duration={500} ><li>Convert to Handwriting</li></Link>
//             </ul>
//             {/* <div className="nav-icons">
//                 <BiSearch className='icon' style={{ marginRight: '1rem' }} />
//                 <BsPerson className='icon' />
//             </div> */}
//             {/* <div className="nav-icons">
//             <UploadPicture />
//             <BsPerson className='icon' />
//         </div> */}
//             <div className="hamburger" onClick={handleNav}>
//                 {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

//             </div>

//             <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
//                 <ul className="mobile-nav">
//                 <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
//                 <Link to='/UploadPicture' smooth={true} duration={500}>Convert your Handwriting</Link>

//                 {/* <Link to='UplaodPicture' smooth={true} duration={500} >Convert to Handwriting<li></li></Link> */}
//                 </ul>
//                 <div className="mobile-menu-bottom">
//                     <div className="menu-icons">
//                         <button>Upload Image</button>
//                         <button>Account</button>
//                     </div>
//                     <div className="social-icons">
//                         <FaFacebook className='icon' />
//                         <FaInstagram className='icon' />
//                         <FaTwitter className='icon' />
//                         <FaPinterest className='icon' />
//                         <FaYoutube className='icon' />
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Navbar
import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>AraboScripto.</h2>
            </div>
            {/* <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
            <button>
                <Link to='upload-picture' smooth={true} duration={500} ><li>Convert my Handwriting</li></Link>
                </button>
            </ul> */}
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                    <Link to='upload-picture' smooth={true} duration={500}><li>Convert your Handwriting</li></Link>


                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Upload Image</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
