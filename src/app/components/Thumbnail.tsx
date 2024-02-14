import Link from 'next/link';
import Image from 'next/image';


import { Video } from '../types/custom_types';
import { formatCount, formatPublishedDate } from '../../../../nextytclone/src/lib/utils';
import { Dot } from 'lucide-react';


const Thumbnail = ({ video }: { video: Video }) => {
  return (
    <Link
      href={`/watch/${video.id}`}
      className='w-[320px] mx-auto md:w-[350px] my-4'
    >
      <div className='flex flex-col w-[350px] hover:scale-105 transition-all duration-700 '>
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={500}
          height={500}
          className='w-full h-[80%] object-cover rounded-2xl'
        />
      <div className="mt-2 flex items-center justify-between">
      <div className="w-[20%] relative">
        <div className="h-12 w-12">
        <Image
          src={video.channel.channelImage}
          alt={video.title}
          height={200}
          width={200}
          className='h-full w-full rounded-full'
        />
        </div>
      </div>
      <div className="flex flex-col w-[80%] px-2 font-normal">
      <h1 className='line-clamp-2 trim font-semibold'>{video.title.substring(0, 60)}</h1>
      <p className='mt-1 text-sm'>{video.channel.channelTitle}</p>
      <div className="flex items-center ">
      <p className='text-sm'>{formatCount(+video.viewCount)}</p>
      <Dot />{' '}
      <p className='text-sm'>{formatPublishedDate(video.publishedDate)}</p>
      </div>
      </div>
      </div>
      </div>
    </Link>
  );
};

export default Thumbnail;