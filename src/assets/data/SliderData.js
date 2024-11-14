import Trinity from '../images/front.jpg';
import Baristas from '../images/café.jpg';
import Waterside1 from '../images/waterside1.jpg';
import Waterside2 from '../images/waterside2.jpg';
import Revolution from '../images/revolution.jpg';
import Barbers1 from '../images/barbers3.jpg';
import Barbers2 from '../images/barbers.jpg';
import Science from '../images/science.jpg';

export const homeSlides = [
    {
        title: 'Welcome',
        subTitle: 'The ideal venue for conferences, exhibitions, training courses, networking events and social gatherings',
        image: Trinity,
        alt: 'Trinity building'
    },
    {
        title: 'Trinity Baristas',
        subTitle: 'Freshly made food, sourced from local suppliers.',
        path: '/trinity-baristas',
        inscope: true,
        label: 'Learn More',
        image: Baristas,
        alt: 'Trinity Baristas restaurant',
        aria: 'Trinity Baristas Page'
    },
    {
        title: 'Waterside Suite',
        subTitle: 'Modern multimedia meeting room ideal for conferences, meetings and training courses',
        path: '/waterside-suite',
        inscope: true,
        label: 'Learn More',
        image: Waterside1,
        alt: 'Conference room',
        aria: 'Waterside Suite Page'
    },
    {
        title: 'Cambridge Science Centre',
        subTitle: 'Family fun in the science centre',
        path: 'https://www.cambridgesciencecentre.org/',
        inscope: false,
        label: 'Learn More',
        image: Science,
        alt: 'Father and son',
        aria: 'Cambridge Science Centre Page'
    },
    {
        title: 'Park Barbers',
        subTitle: 'Charlie and Tony don’t just cut it, they style It',
        path: '/park-barbers',
        inscope: true,
        label: 'Learn More',
        image: Barbers1,
        alt: 'Park Barbers',
        aria: 'Park Barbers Page'
    },
    {
        title: 'Revolution Health & Fitness Club',
        subTitle: 'Join today and acheive your health and fitness goals',
        path: 'https://www.revolutionhealthfitness.co.uk/',
        inscope: false,
        label: 'Learn More',
        image: Revolution,
        alt: 'Revolution Health & Fitness Club',
        aria: 'Revolution Health & Fitness Club Website'
    }
];

export const baristaSlides = [
    {
        title: 'Trinity Baristas',
        subTitle: 'Freshly made food, sourced from local suppliers',
        path: 'https://order.oolio.io/revolutionhealthfitness',
        inscope: false,
        label: 'Place Order',
        image: Baristas,
        alt: 'Trinity baristas restaurant',
        aria: 'Online Ordering Platform'
    },
];

export const conferenceSlides = [
    {
        title: 'Waterside Suite',
        subTitle: 'From £250 + VAT',
        capacity: 'Max Capacity: 40 attendees',
        image: Waterside1,
        alt: 'Conference room'
    },
    {
        title: 'Waterside Suite',
        subTitle: 'From £250 + VAT',
        capacity: 'Max Capacity: 40 attendees',
        image: Waterside2,
        alt: 'Conference room'
    }
];

export const scienceSlides = [
    {
        title: 'Cambridge Science Center',
        subTitle: 'Family fun in the science centre',
        path: 'https://www.cambridgesciencecentre.org/',
        inscope: false,
        label: 'Learn More',
        image: Science,
        alt: 'Cambridge Science Center',
        aria: 'Cambridge Science Center Website'
    },
];

export const barberSlides = [
    {
        title: 'Park Barbers',
        subTitle: 'Charlie and Tony don’t just cut it, they style It',
        path: 'https://booksy.com/en-gb/48267_park-barbers_barber_148251_cambridge',
        inscope: false,
        label: 'Book Now',
        image: Barbers1,
        alt: 'Charlie and Tony',
        aria: 'Park Barbers Booksy Page'
    },
    {
        title: 'Park Barbers',
        subTitle: 'Charlie and Tony don’t just cut it, they style It',
        path: 'https://booksy.com/en-gb/48267_park-barbers_barber_148251_cambridge',
        inscope: false,
        label: 'Book Now',
        image: Barbers2,
        alt: 'Park Barbers',
        aria: 'Park Barbers Booksy Page'
    }
];