'use client';

import { useState } from "react";
import useSWR from "swr";
import SearchBadge from "./components/SearchBadge";
import Loading from "./loading";
import Thumbnail from "./components/Thumbnail";
import { fetchVideos } from "./lib/api";


function Home() {
  const [badge,setBadge] = useState('All')

  const {data: videoResults, isLoading} = useSWR(`fetchVideo/${badge}`, () => fetchVideos(badge, 12))
  
  return (
    <>
    <div className='px-2 md:pl-[200px] mt-[80px] py-2 left-28 w-full z-20 bg-white'>
    <SearchBadge badges={['All', 'Javascript', 'Algorithms']}  currentBadge={badge} setBadge={setBadge}/>
    <div className='flex flex-wrap ml-8'>
    {isLoading &&
          Array(12)
            .fill(null)
            .map((i, idx) => <Loading key={idx} />)}
      {videoResults?.map(video => (
        <Thumbnail key={video.id} video={video} />
      ))}
    </div>
    </div>
  </>
);
}

export default Home;