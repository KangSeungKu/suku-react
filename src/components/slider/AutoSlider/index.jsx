import './AutoSlider.css'

import { useRef, useState } from "react"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
const AutoSlider = ({
    images,
}) => {
    const swiperRef = useRef();
    const progressPer = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidePlay, setSlidePlay] = useState(true);

    const onAutoplayTimeLeft = (s, time, progress) => {
        if(progressPer.current) {
            progressPer.current.style.setProperty('--progress', progress);
        }
    };

    const handlePlayButton = () => {
        if(!swiperRef.current) return;

        if(slidePlay) {
            swiperRef.current.autoplay.stop();
        } else {
            swiperRef.current.autoplay.start();
        }

        setSlidePlay((prev) => !prev);
    }

  return (
    <>
        <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            centeredSlides={true}
            slidesPerView={1}
            onSlideChange={(e) => setActiveIndex(e.activeIndex)} 
            autoplay={{ 
              delay: 4500, 
              disableOnInteraction: false,
            }}
            navigation={false}
            pagination={{
                clickable: false,
            }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            speed={500}
        >
            {images.map((image, index) => (
                <SwiperSlide key={`slide-${index}`}>
                    <img className='slider-image' src={image} alt={`slide-${index}`}/>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className='swiper-status-container'>
            <div className='progress-container'>
                <div className='progress-bar' ref={progressPer}/>
            </div>
            <p>{("00" + (activeIndex + 1)).slice(-2)}</p>
            <div className='bar'/>
            <p>{("00" + images.length).slice(-2)}</p>
            <FontAwesomeIcon icon={slidePlay ? faPauseCircle : faPlayCircle} size='xl' onClick={handlePlayButton}/>
        </div>
    </>
  )
}

export default AutoSlider