import Hero from "../components/Hero/Hero";
import { conferenceSlides } from "../assets/data/SliderData";
import { descSection, facilitiesSection, openingSection} from '../assets/data/ConferenceData';
import PageSection from "../components/PageSection/PageSection";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ScrollToTop from "../lib/ScrollToTop";

export default function Conference () {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Sidebar />
            <Hero slides={conferenceSlides} />
            <PageSection section={descSection} anchor={true} />
            <PageSection section={facilitiesSection} />
            <PageSection section={openingSection} />
            <Footer />
        </>
    );
}