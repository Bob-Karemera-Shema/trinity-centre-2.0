import lakeView from "../images/front1.jpg";
import mug from '../images/mug.jpg';
import conferenceRoom from '../images/conferencing.jpg';
import gym from '../images/revolution.jpg';
import barbers from '../images/barbers1.jpg';
import science from '../images/science.jpg';

export const aboutSection = {
    heading: 'About The Complex',
    parOne: "The Trinity Centre is a modern multimedia meeting, and event complex with a restaurant and health club. The ideal venue for conferences, exhibitions, training courses, networking events and social gatherings.",
    parTwo: "Let us provide you with a solution to all your needs and exceed your expectations.",
    parThree: "We look forward to welcoming you.",
    image: lakeView,
    alt: 'front view',
    reverse: false
};

export const baristaSection = {
    heading: 'Trinity Baristas',
    parOne: "We pride ourselves on using local suppliers in providing you with fresh food daily.",
    image: mug,
    alt: 'coffee mug',
    reverse: true,
    path: '/trinity-baristas',
    inscope: true,
    label: 'Learn More'
};

export const conferenceSection = {
    heading: 'WaterSide Suite',
    parOne: "Modern multimedia meeting room ideal for conferences, meetings and training courses.",
    image: conferenceRoom,
    alt: 'conference room',
    reverse: false,
    path: '/waterside-suite',
    inscope: true,
    label: 'Learn More'
};

export const scienceSection = {
    heading: 'Cambridge Science Centre',
    parOne: "Family fun in the science center.",
    image: science,
    alt: 'science experiment',
    reverse: true,
    path: '/cambridge-science-centre',
    inscope: true,
    label: 'Learn More'
};

export const gymSection = {
    heading: 'Revolution Health & Fitness Club',
    parOne: "Join today and acheive your health and fitness goals.",
    image: gym,
    alt: 'gym floor',
    reverse: false,
    path: 'https://revolutionhealthfitness.co.uk/',
    inscope: false,
    label: 'Learn More'
};

export const barberSection = {
    heading: 'Park Barbers',
    parOne: "Charlie and Tony don’t just cut it, they style It.",
    image: barbers,
    alt: 'barbershop',
    reverse: true,
    path: '/park-barbers',
    inscope: true,
    label: 'Learn More'
};