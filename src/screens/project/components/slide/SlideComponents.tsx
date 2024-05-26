import "./SlideStyle.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CardComponents from "../card/CardComponents";
import loginWeb from "../../../../assets/sistema-login-web.jpg"
import authFirebase from "../../../../assets/firebase-login.png"

export default function SlideComponents() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}

                className="swiper"
            >

                <SwiperSlide className="slide-item" style={{ display: "flex" }}>
                    <CardComponents
                        titulo={"Nav-Bar Jetpack Compose"}
                        link={"https://github.com/Saullo-Programador/NavBar_JetpackCompose.git"}
                        icons="kotlin,androidstudio,none,none,none,none"
                    />
                </SwiperSlide>

                <SwiperSlide className="slide-item" style={{ display: "flex" }}>
                    <CardComponents
                        titulo={"Login Firebase"}
                        link={"https://github.com/Saullo-Programador/AuthFirebase.git"}
                        icons="ts,react,styledcomponents,firebase,css,androidstudio"
                        nameImg={authFirebase}
                    />
                </SwiperSlide>

                <SwiperSlide className="slide-item" style={{ display: "flex" }}>
                    <CardComponents
                        titulo="Sistema de Login Web"
                        link="https://github.com/Saullo-Programador/Sistema_Login_Web.git"
                        icons="ts,react,styledcomponents,css,none,none"
                        nameImg={loginWeb}
                    />
                </SwiperSlide>

                <SwiperSlide className="slide-item" style={{ display: "flex" }}>
                    <CardComponents
                        titulo={"Nav-Bar Jetpack Compose"}
                        link={"https://github.com/Saullo-Programador/NavBar_JetpackCompose.git"}
                        icons="kotlin,androidstudio,none,none,none,none"
                    />
                </SwiperSlide>

            </Swiper>
        </>
    )
}
