// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { FaTools, FaArrowRight, FaShieldAlt } from "react-icons/fa";

const slides = [
  {
    badge: "Trusted Repair Experts",
    title: "Welcome To Fix Gadget",
    description:
      "A fixed electronic gadget stays permanently installed in one place, offering reliable and continuous service you can count on.",
    image: "https://i.ibb.co/w04MnyY/istockphoto-1248664580-1024x1024.jpg",
    overlay: "from-slate-900/90 via-slate-900/70 to-blue-900/40",
  },
  {
    badge: "Fast & Reliable",
    title: "Fix Your Gadget",
    description:
      "From air conditioning units to built-in security systems, we keep your home and office equipment running at their best.",
    image: "https://i.ibb.co/swLnDtW/istockphoto-1184924348-1024x1024.jpg",
    overlay: "from-blue-950/90 via-slate-900/70 to-cyan-800/40",
  },
  {
    badge: "Certified Professionals",
    title: "Professional Installation",
    description:
      "Our experts handle professional setup and full integration with your building's electrical and plumbing systems.",
    image: "https://i.ibb.co/7C3RM5r/istockphoto-1184925451-1024x1024.jpg",
    overlay: "from-slate-900/90 via-indigo-900/70 to-slate-800/40",
  },
  {
    badge: "Built To Last",
    title: "Long-Term Performance",
    description:
      "Engineered for reliability and durability, our solutions focus on low maintenance and dependable long-term functionality.",
    image: "https://i.ibb.co/R3JTHGy/istockphoto-1444723031-1024x1024.jpg",
    overlay: "from-slate-900/90 via-teal-900/70 to-slate-900/40",
  },
];

const Banner = () => {
  return (
    <>
      <style>{`
        .hero-swiper .swiper-pagination {
          bottom: 20px !important;
        }
        .hero-swiper .swiper-pagination-bullet {
          width: 11px;
          height: 11px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 9999px;
          background: #fff;
        }
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          width: 46px;
          height: 46px;
          border-radius: 9999px;
          color: #fff;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: all 0.3s ease;
        }
        .hero-swiper .swiper-button-next:hover,
        .hero-swiper .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.25);
        }
        .hero-swiper .swiper-button-next::after,
        .hero-swiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: 700;
        }
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          display: none;
        }
        @media (min-width: 768px) {
          .hero-swiper .swiper-button-next,
          .hero-swiper .swiper-button-prev {
            display: flex;
          }
        }
        .hero-swiper .swiper-slide-active .slide-content {
          animation: bannerUp 0.9s ease both;
        }
        @keyframes bannerUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="hero-swiper rounded-2xl overflow-hidden shadow-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[440px] sm:h-[520px] lg:h-[580px] w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}
              />

              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-2xl px-6 sm:px-12 lg:px-16 text-white slide-content">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/25 px-4 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider backdrop-blur-sm">
                    <FaShieldAlt className="text-primary" />
                    {slide.badge}
                  </span>

                  <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-5 text-base sm:text-lg text-gray-200/90 max-w-xl">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button className="btn btn-primary rounded-full px-7 shadow-lg shadow-primary/30 group">
                      <FaTools className="text-base" />
                      Get Started
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <button className="btn btn-outline border-white/40 text-white rounded-full px-7 hover:bg-white hover:text-slate-900 hover:border-white">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
