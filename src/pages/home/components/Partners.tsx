import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Button } from "@/components/button/Button";
import Card from "@/components/shared/Card";

export default function Partners() {
    return (
        <Swiper
            spaceBetween={20}
            loop={true}                    // ♾ Infinite
            slidesPerView={3}              // Desktop default
            modules={[Autoplay]}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,          // 📱 Mobile
                },
                768: {
                    slidesPerView: 2,          // 📱 Tablet
                },
                1024: {
                    slidesPerView: 3,          // 🖥 Desktop
                },
            }}
        >
            <SwiperSlide className="">
                <Card className="min-h-[129px]">
                    <div className="text-center ecj_fs-md text-white">
                        Your dedicated partner in seamless scheduling,
                        offering a high-performance solution.
                    </div>
                </Card>
            </SwiperSlide>

            <SwiperSlide className="">
                <Card className="min-h-[129px]">
                    <div className="text-center ecj_fs-md text-white">
                        <p>Our official partner</p>
                        <p className="mb-1">fully automated for scheduling tasks,</p>
                        <a className="duration-300" href="https://www.gsmtheme.com/" target="_blank" rel="noopener noreferrer">
                            <Button className="!py-1" label="GSM Theme" />
                        </a>
                    </div>
                </Card>
            </SwiperSlide>

            <SwiperSlide className="">
                <Card className="min-h-[129px]">
                    <div className="text-center ecj_fs-md text-white">
                        <p>We are waiting for your ads</p>
                        <p>Contact for paid promotion ads</p>
                    </div>
                </Card>
            </SwiperSlide>

            <SwiperSlide className="">
                <Card className="min-h-[129px]">
                    <div className="text-center ecj_fs-md text-white">
                        <p>We are waiting for your ads</p>
                        <p>Contact for paid promotion ads</p>
                    </div>
                </Card>
            </SwiperSlide>
        </Swiper>
    )
}
