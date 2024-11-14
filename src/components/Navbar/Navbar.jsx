import { useState, useEffect } from "react";
import { Link as LinkR } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../redux/actions';
import './Navbar.css';

export default function Navbar() {
    const [theme, setTheme] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();
    const currState = useSelector(state => state.openSidebar.isOpen);

    const toggle = () => {
        dispatch(setOpen(!currState));
    };

    const changeTheme = () => {
        if (window.scrollY >= 60) {
            setTheme(true);
        } else {
            setTheme(false);
        }
    };

    useEffect(() => {
        const monitorScroll = () => {
            window.addEventListener('scroll', changeTheme);
        };

        monitorScroll();

        return () => {
            window.removeEventListener('scroll', changeTheme)
        };
    }, []);

    let style = {
        backgroundColor: theme || location.pathname !== "/" ? '#0B4F6C' : 'transparent',
        transition: '0.4s'
    };

    return (
        <nav style={style}>
            <Link className="logo" to="/">THE TRINITY CENTRE</Link>
            <IoMdMenu className="menu-bars" onClick={toggle} />
            <div className="nav-menu">
                <Link to="/" className="nav-menu-link">Home</Link>
                <Link to="/trinity-baristas" className="nav-menu-link">Trinity Baristas</Link>
                <Link to="/waterside-suite" className="nav-menu-link">Waterside Suite</Link>
                <Link to="/cambridge-science-centre" className="nav-menu-link">Cambridge Science Centre</Link>
                <Link to="/park-barbers" className="nav-menu-link">Park Barbers</Link>
                <a href="https://www.revolutionhealthfitness.co.uk/" rel="noopener noreferrer" target="_blank" className="nav-menu-link">Revolution Gym</a>
            </div>
            <div className="nav-btn">
                <LinkR to="contact" spy={true} smooth={true} offset={50} duration={500} className="button">Contact Us</LinkR>
            </div>
        </nav>
    );
}