import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Partners() {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <p className="text-center ecj_fs-md text-white">
                    Your dedicated partner in seamless scheduling, <br />
                    offering a high-performance solution.
                </p>
            </SwiperSlide>

            <SwiperSlide>
                <p className="text-center ecj_fs-md text-white">
                    Our official partner <br />
                    GSM Theme
                </p>
            </SwiperSlide>

            <SwiperSlide >
                <p className="text-center ecj_fs-md text-white">Coming soon...</p>
            </SwiperSlide>

            <SwiperSlide >
                <p className="text-center ecj_fs-md text-white">Coming soon...</p>
            </SwiperSlide>
        </Swiper>
    )
}
