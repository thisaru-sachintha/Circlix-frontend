import Navbar from "../headerComponents/navbar";
import Hero from "../heroComponents/Hero";
import Features from "../featureSection/Features";
import ServicesSection from "../serviceComponets/ServicesSection";
import AboutSection from "../aboutSection/AboutSection";
import ContactSection from "../contactSection/ContactSection";
import FooterSection from "../footerSection/FooterSection";

function HomePage() {
    
    return(
        <>
        <Navbar/>
        <Hero/>
        <Features/>
        <hr />
        <ServicesSection/>
        <hr />
        <AboutSection/>
        <hr />
        <ContactSection/>
        <FooterSection/>
        </>
    );
}

export default HomePage;