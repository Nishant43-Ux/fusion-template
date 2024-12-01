import Banner from './components/Banner';
import Footer from './components/Footer';
import ClientLogo from './components/clientLogo';
import AboutUs from './components/AboutUs';
// import Livestreams from './components/Livestreams';
import Sasu from './components/Sasu';
import Pricing from './components/Pricing';

function Home() {
  return (
    <>
      <Banner />
      <ClientLogo />
      <AboutUs/>
{/* review livestreams */}
      {/* <Livestreams/>  */}
      <Sasu/>
      <Pricing/>
      <Footer />
    </>
  );
}

export default Home