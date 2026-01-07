import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Button } from "@/components/button/Button";
import Card from "@/components/shared/Card";

export default function Partners() {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            modules={[Autoplay]}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
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
                    <div className="text-center ecj_fs-md text-white">Coming soon...</div>
                </Card>
            </SwiperSlide>

            <SwiperSlide className="">
                <Card className="min-h-[129px]">
                    <div className="text-center ecj_fs-md text-white">Coming soon...</div>
                </Card>
            </SwiperSlide>
        </Swiper>
    )
}
