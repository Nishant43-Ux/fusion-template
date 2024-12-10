import Banner from './components/Banner';

import ClientLogo from './components/clientLogo';
import AboutUs from './components/AboutUs';
import Sasu from './components/Sasu';

function Home() {
  return (
    <>
      <Banner />
      <ClientLogo />
      <AboutUs/>
{/* review livestreams */}
      {/* <Livestreams/>  */}
      <Sasu/>
      
    </>
  );
}

export default Home