import { logo_img } from './images/svg-2-logo.svg'
import { useHistory } from 'react-router-dom';
import { Button, Link } from '@material-ui/core';
import './css/Navbar.css'
const Navbar = () => {

    const linkhistory = useHistory();
    const links = async () => {

        linkhistory.push('/signin')
    }
    return (
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo'>
                    <svg style = {{stroke: '#08CE5C', borderWidth: '3px'}} xmlns="http://www.w3.org/2000/svg"  width="120" height="40" viewBox="0 0 110.463 96.43">
                        <defs>
                            <linearGradient id="linear-gradient" x1="0.118" y1="0.39" x2="1" y2="0.831" gradientUnits="objectBoundingBox">
                                <stop offset="0" stop-color="#5acbb1" />
                                <stop offset="1" stop-color="#4c8ff8" />
                            </linearGradient>
                        </defs>
                        <path id="Icon_awesome-recycle" data-name="Icon awesome-recycle" d="M39.819,49.327c.7,2.636-2.616,4.64-5.193,3.233l-8.789-4.794L14.863,63.1c-2.866,4,.447,9.225,5.851,9.225H31.931a2.441,2.441,0,0,1,2.589,2.26v7.534a2.441,2.441,0,0,1-2.589,2.26H20.737c-16.253,0-26.171-15.641-17.564-27.663L14.138,41.384,5.351,36.591C2.745,35.17,3.417,31.7,6.4,31.1l23.783-4.793a3.494,3.494,0,0,1,4.14,2.258l5.491,20.762Zm21.264-34.45,8.908,12.445L61.2,32.116C58.6,33.534,59.26,37,62.254,37.607L86.037,42.4a3.494,3.494,0,0,0,4.14-2.258l5.491-20.762c.69-2.607-2.587-4.656-5.193-3.233L81.7,20.935,72.795,8.49c-8.1-11.307-27.014-11.333-35.127,0l-3.875,5.418a2.1,2.1,0,0,0,.824,3.114l7.318,3.992a2.818,2.818,0,0,0,3.568-.719l3.875-5.413C52.12,11.05,58.433,11.175,61.083,14.877Zm46.206,41.836-5.936-8.3a2.818,2.818,0,0,0-3.568-.72l-7.305,3.985a2.1,2.1,0,0,0-.824,3.114L95.6,63.1c2.86,3.995-.444,9.221-5.855,9.221H69.039V63.286c0-2.677-3.72-4.027-5.893-2.131L45.887,76.219a2.751,2.751,0,0,0,0,4.262l17.26,15.065c2.158,1.884,5.893.564,5.893-2.131V84.376H89.725C105.965,84.376,115.9,68.744,107.289,56.713Z" transform="translate(0 0)" fill="url(#linear-gradient)" />
                    </svg>
                </Link>
                <Button style = {{padding: '3px 14px', textTransform: 'none', fontWeight:'410'}}  disableRipple = {true} onClick={() => { links() }}>Log In</Button>
            </div>
        </div>
    )
}

export default Navbar
