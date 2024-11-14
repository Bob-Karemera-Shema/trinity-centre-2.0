import Hero from "../components/Hero/Hero";
import { homeSlides } from "../assets/data/SliderData";
import PageSection from "../components/PageSection/PageSection";
import { aboutSection, baristaSection, conferenceSection, gymSection, barberSection, scienceSection } from "../assets/data/homeData";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ScrollToTop from "../lib/ScrollToTop";

export default function Home() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Sidebar />
            <Hero slides={homeSlides}/>
            <PageSection section={aboutSection}/>
            <PageSection section={baristaSection}/>
            <PageSection section={conferenceSection}/>
            <PageSection section={scienceSection}/>
            <PageSection section={gymSection} anchor={true}/>
            <PageSection section={barberSection}/>
            <Footer />
        </>
    );
}