import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/element/css/effect-fade'
import { register } from 'swiper/element/bundle';
import { Autoplay, EffectFade } from 'swiper/modules';
// register Swiper custom elements
register();

const HeroSlide = () => {
    const items = [
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1704984002/rsh/Property_1_Group_60_tapq5c.png",
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1704984001/rsh/Property_1_Group_61_dri7o0.png",
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1704984001/rsh/Property_1_Group_62_j1esm6.png",
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1704984001/rsh/Property_1_Group_63_cvitzu.png",
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1704984002/rsh/Property_1_Group_64_guu2nz.png"
    ]
  return (
    <>
    <Swiper 
        effect={'fade'}
        autoplay={{delay: 3000}}
        modules={[Autoplay, EffectFade ]}
        className='h-[480px]'
        >
      {items &&
        items.map((item, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <img src={item} alt="image" className='w-full h-full lg:object-fit object-cover' />
          </SwiperSlide>
        ))}
    </Swiper>
  </>
  )
}

export default HeroSlide