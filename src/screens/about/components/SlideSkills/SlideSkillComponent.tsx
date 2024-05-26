import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Skills } from './data'
import "./SlideSkillStyle.css"

export default function SlideSkillComponent() {
    return (
        <Swiper
            slidesPerView={5}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            className='ComponentSlideSkills'
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Autoplay]}
        >
            {Skills.map((item) => (
                <SwiperSlide key={item.id} className='ItemSlideSkill'>
                    <img src={`https://skillicons.dev/icons?i=${item.name}`} />
                    <p>{item.text}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
