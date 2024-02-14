import {
  Clock4,
  Compass,
  History,
  Home,
  MonitorPlay,
  Tv2,
  UserCircle,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar = ({ className }: Props) => {
  return (
    <div
      className=
        'h-screen w-60 pt-3 z-40 !fixed hidden md:block top-0 dark:bg-black dark:text-white bg-white text-black -translate-x-full transition-transform duration-500'
    >
      <div className='px-5 flex items-center'>
        <Link href='/' className='flex items-center space-x-2'>
          <Youtube size={48} className='text-red-700' />
          <span className='text-2xl font-black'>YouTube</span>
        </Link>
      </div>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            Discover
          </h2>
          <div className='space-y-1'>
            <Link href='/'>
              <button
                className='w-full font-light justify-start dark:bg-background-dark dark:text-white bg-background-light hover:bg-background-light/50 text-black'
              >
                <Home size={30} className='mr-3' />
                Home
              </button>
            </Link>
            <button className='w-full justify-start font-light'>
              <Compass size={30} className='mr-3' />
              Explore
            </button>
            <button className='w-full justify-start font-light'>
              <Tv2 size={30} className='mr-3' />
              Subscriptions
            </button>
          </div>
        </div>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            You
          </h2>

          <div className='space-y-1'>
            <Link href={`/channels/${process.env.NEXT_PUBLIC_CHANNEL_ID}`}>
              <button
                className='w-full justify-start font-light'
              >
                <UserCircle size={30} className='mr-3' />
                Your channel
              </button>
            </Link>
            <button className='w-full justify-start font-light'>
              <History size={30} className='mr-3' />
              History
            </button>
            <button className='w-full justify-start font-light'>
              <MonitorPlay size={30} className='mr-3' />
              Your videos
            </button>
            <button className='w-full justify-start font-light'>
              <Clock4 size={30} className='mr-3' />
              Watch later
            </button>
          </div>
        </div>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            SUBSCRIPTIONS
          </h2>
          <div className='space-y-1'>
            <button className='w-full justify-start font-light'>
              <UserCircle size={30} className='mr-3' />
              Codewith
              </button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Sidebar;