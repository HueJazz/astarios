import Banner from '.././components/Banner';
import About from ".././components/About";
import Expertise from ".././components/Expertise";
import Technologies from ".././components/Technologies";
import Services from ".././components/Services";
import References from ".././components/References";
import Reviews from '.././components/Reviews';
import Featured from '.././components/Featured';
import Contact from '.././components/Contact';

const Home = () => {
    return(
        <div>
            <Banner />
            <About />
            <Expertise />
            <Technologies />
            <Services />
            <References />
            <Reviews />
            <Featured />
            <Contact />
        </div>
    )
}

export default Home