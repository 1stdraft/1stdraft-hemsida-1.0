import ArtistsSection from 'components/ArtistsSection';
import ContactSection from 'components/ContactSection';
import HomePage from 'components/HomePage';
import HomePageWrapper from 'components/HomePageWrapper';
import LatestSongs2 from 'components/LatestSongs2';
import SongModal from 'components/SongModal';
import { Suspense } from 'react';
import { ScrollProvider } from 'components/ScrollProvider';
import AboutSection from 'components/AboutSection';
import HeroSection from 'components/HeroSection';
import Navbar from 'components/Navbar';


type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};


export default function Home( {searchParams}: SearchParamProps ) {

    const showModal = searchParams?.modal === 'true';
    const songId = searchParams.id;

    // const {scrollYProgress} = useScroll();
    //  const y = useTransform(scrollYProgress, [0,1], ["0%", "50%"] )

    return (
        <ScrollProvider>
        <HomePageWrapper>
          <HeroSection />
          <Navbar />

          <AboutSection />
          
          <div className='w-[90vw] md:w-[60vw] p-5 py-10'>
          <LatestSongs2 />
          </div>

          <ArtistsSection />

          <ContactSection />
        </HomePageWrapper>
        


        {showModal && <Suspense fallback={<p></p>}> <SongModal id={songId}/> </Suspense>}
        </ScrollProvider>
    )
};
