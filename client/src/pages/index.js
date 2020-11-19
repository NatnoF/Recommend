import React, {useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { FooterContainer } from "../components/Footer/footercontainer";

// import CardItem from '../components/Card/Cards';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle}/>   
         <Hero />
         <FooterContainer />

         {/* <CardItem /> */}
        </>
    )
}

export default Home;
