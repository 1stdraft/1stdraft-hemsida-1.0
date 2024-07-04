import AritstsSection from 'components/ArtistsSection';
import ContactSection from 'components/ContactSection';
import HomePage from 'components/HomePage';
import HomePage2 from 'components/HomePage2';
import LatestSongs2 from 'components/LatestSongs2';
import SongModal from 'components/SongModal';
import { Suspense } from 'react';
import { ScrollProvider } from 'components/ScrollProvider';


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
        <HomePage2>
          <div className='w-2/3 p-5'>
          <LatestSongs2 />
          </div>

          <AritstsSection />

          <ContactSection />
        </HomePage2>
        


        {showModal && <Suspense fallback={<p>loading...</p>}> <SongModal id={songId}/> </Suspense>}
        </ScrollProvider>
    )
};
