import Hero from "../components/Hero/Hero";
import { scienceSlides } from "../assets/data/SliderData";
import PageSection from "../components/PageSection/PageSection";
import { descSection, familySection, schoolSection } from "../assets/data/ScienceData";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ScrollToTop from "../lib/ScrollToTop";

export default function Science() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Sidebar />
            <Hero slides={scienceSlides} anchor={true}/>
            <PageSection section={descSection} anchor={true}/>
            <PageSection section={familySection}/>
            <PageSection section={schoolSection}/>
            <Footer />
        </>
    );
}