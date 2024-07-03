import HomePage from 'components/HomePage';
import HomePage2 from 'components/HomePage2';
import SongModal from 'components/SongModal';
import { Suspense, useEffect, useRef } from 'react';


type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};


export default function Home( {searchParams}: SearchParamProps ) {

    const showModal = searchParams?.modal === 'true';
    const songId = searchParams.id;

    // const {scrollYProgress} = useScroll();
    //  const y = useTransform(scrollYProgress, [0,1], ["0%", "50%"] )

    return (
        <>
        <HomePage />

        {/* <HomePage2 /> */}

        {showModal && <Suspense fallback={<p>loading...</p>}> <SongModal id={songId}/> </Suspense>}
        </>
    )
};