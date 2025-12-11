import { items } from "../constants/index"; 
import { items1 } from '../constants/index';

const Card = () => {
  return (
    <div>
      <h1 className='text-center pt-24 text-3xl md:text-4xl font-medium'>Playing now on Plex</h1>
      <div className='flex flex-col md:flex-row md:flex-wrap justify-center gap-8 mt-16'>
        {items.map(item => (
          <div key={item.id} className='flex flex-col '>
            <img className='w-72 h-[410px] md:w-60 lg:w-68 rounded-xl' src={item.image} alt={item.caption} />
            <p className='pt-2 '>{item.caption}</p>
            <p className='text-gray-500'>{item.year}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-20'>
        <button className='bg-amber-600 w-48 h-12 rounded-3xl font-bold hover:bg-amber-800 text-white'>
          See What’s On
        </button>
      </div>

      <div className='bg-neutral-200 h-auto mt-20 py-25'>
        <h1 className='text-3xl md:text-4xl font-bold text-center'>Don’t forget free TV.</h1>
        <p className='text-center pt-6 text-gray-600 max-w-xl mx-auto'>
          A Live TV free for all has begun. Enjoy instant access to 600+ channels for the whole family anywhere, on any device.
        </p>

        <div className='flex flex-col md:flex-row md:flex-wrap justify-evenly gap-8 mt-12'>
          {items1.map(item => (
            <div key={item.id} className='flex flex-col '>
              <img className='w-100 md:w-100 rounded-xl' src={item.image} alt={item.caption} />
              <p className='pt-2 text-gray-600  '>{item.caption}</p>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-20'>
          <button className='bg-amber-600 w-48 h-12 rounded-3xl font-bold hover:bg-amber-800 text-white'>
            See What’s On Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
