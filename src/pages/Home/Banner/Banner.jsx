// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero h-[500px]  rounded-xl "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/w04MnyY/istockphoto-1248664580-1024x1024.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Welcome To Fix Gadget
                </h1>
                <p className="mb-5">
                  A fixed electronic gadget is an electronic device that remains
                  permanently installed in a specific location, offering
                  continuous service.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[500px]  rounded-xl "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/swLnDtW/istockphoto-1184924348-1024x1024.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Fixed Your Gadget</h1>
                <p className="mb-5">
                  Common examples of fixed electronic gadgets include air
                  conditioning units, built-in home security systems, and
                  central heating control units, which are typically found in
                  modern homes or offices.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[500px]  rounded-xl "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/7C3RM5r/istockphoto-1184925451-1024x1024.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Welcome To Fix Gadget
                </h1>
                <p className="mb-5">
                  These devices are not portable and are designed to remain in a
                  fixed position, usually requiring professional installation
                  and integration with the building’s electrical or plumbing
                  systems.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-[500px]  rounded-xl "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/R3JTHGy/istockphoto-1444723031-1024x1024.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Fixed Your Gadget</h1>
                <p className="mb-5">
                  Fixed electronic gadgets are engineered to provide long-term
                  functionality, with a focus on reliability, durability, and
                  low maintenance requirements over extended periods.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
