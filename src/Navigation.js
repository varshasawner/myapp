import { useState } from 'react';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';

export default function Navigation() {
    const [activeComponet, setActiveComponent] = useState("home");

    return (
        <>
            <a href="#" onClick={() => {
                setActiveComponent("home");
                window.history.pushState('/home', 'home', 'Home');
            }}>Home</a>
            <a href="#" onClick={() => {
                setActiveComponent("contact");
                window.history.pushState('/contact', 'contact', 'Contact');
            }}>Contact</a>
            <a href="#" onClick={() => {
                setActiveComponent("about");
                window.history.pushState('/about', 'about', 'About');
            }}>About</a>


            {
                activeComponet == "home" && <Home />
            }
            {
                activeComponet == "contact" && <Contact />
            }
            {
                activeComponet == "about" && <About />
            }
        </>
    )
}