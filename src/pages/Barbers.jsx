import Hero from "../components/Hero/Hero";
import { barberSlides } from "../assets/data/SliderData";
import PageSection from "../components/PageSection/PageSection";
import { descSection, openingSection } from "../assets/data/BarberData";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ScrollToTop from "../lib/ScrollToTop";

export default function Barbers () {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Sidebar />
            <Hero slides={barberSlides} anchor={true}/>
            <PageSection section={descSection} anchor={true}/>
            <PageSection section={openingSection}/>
            <Footer />
        </>
    );
}