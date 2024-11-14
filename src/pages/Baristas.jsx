import Hero from "../components/Hero/Hero";
import { baristaSlides } from "../assets/data/SliderData";
import PageSection from "../components/PageSection/PageSection";
import { descSection, lunchSection, openingSection } from "../assets/data/BaristaData";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ScrollToTop from "../lib/ScrollToTop";

export default function Baristas() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Sidebar />
            <Hero slides={baristaSlides} anchor={true}/>
            <PageSection section={descSection} anchor={true}/>
            <PageSection section={lunchSection} anchor={true}/>
            <PageSection section={openingSection}/>
            <Footer />
        </>
    );
}