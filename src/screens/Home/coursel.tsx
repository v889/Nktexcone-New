
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

import img1 from '@/assets/images/ani1.jpg';
import img2 from  '@/assets/images/ani2.jpg';
import img3 from  '@/assets/images/ani8.jpg';
import img4 from  '@/assets/images/ani4.jpg';
import img5 from  '@/assets/images/ani7.png';


const ImageCarousel = () => {
  return (
    <div className='mt-40'>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <div className='w-full h-screen'>
          <img src={img1} className='w-full h-full object-center' alt="Image 1" />
        </div>
        <div className='w-full h-screen '>
          <img src={img2} className='w-full h-full object-center' alt="Image 2" />
        </div>
        <div className='w-full h-screen '>
          <img src={img3} className='w-full h-full object-center' alt="Image 3" />
        </div>
        <div className='w-full h-screen'>
          <img src={img4} className='w-full h-full object-center' alt="Image 4" />
        </div>
        <div className='w-full h-screen'>
          <img src={img5} className='w-full h-full object-center' alt="Image 5" />
        </div>
      </Carousel>
    </div>
  );
}


export default ImageCarousel;
