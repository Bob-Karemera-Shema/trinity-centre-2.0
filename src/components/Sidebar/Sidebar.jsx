import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as LinkR } from "react-scroll";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../redux/actions';
import './Sidebar.css';

const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: var(--fill);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export default function Sidebar() {
    const dispatch = useDispatch();
    const currState = useSelector(state => state.openSidebar.isOpen);

    const toggle = () => {
        dispatch(setOpen(!currState));
    };

    return (
        <SidebarContainer isOpen={currState} onClick={toggle}>
            <div className="icon" onClick={toggle}>
                <FaTimes className="close-icon" />
            </div>
            <div>
                <div className="sidebar-menu" onClick={toggle}>
                    <Link to="/" className='sidebar-menu-link' aria-label="Home Page">Home</Link>
                    <Link to="/trinity-baristas" className='sidebar-menu-link' aria-label="Trinity Baristas Page">Trinity Baristas</Link>
                    <Link to="/waterside-suite" className='sidebar-menu-link' aria-label="Waterside Suite Page">Waterside Suite</Link>
                    <Link to="/cambridge-science-centre" className="sidebar-menu-link" aria-label="Cambridge Science Centre Page">Cambridge Science Centre</Link>
                    <Link to="/park-barbers" className='sidebar-menu-link' aria-label="Park Barbers Page">Park Barbers</Link>
                    <a href="https://www.revolutionhealthfitness.co.uk/" rel="noopener noreferrer" target="_blank" className="sidebar-menu-link" aria-label="Revolution Gym Website">Revolution Gym</a>
                </div>
                <div className="btn-wrap">
                    <LinkR to="contact" spy={true} smooth={true} offset={50} duration={500} className="button" onClick={toggle}>Contact Us</LinkR>
                </div>
            </div>
        </SidebarContainer>
    );
}