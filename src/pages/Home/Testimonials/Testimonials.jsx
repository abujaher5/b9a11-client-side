import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "iPhone 13 Screen Repair",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    quote:
      "Cracked my screen on a Friday and had it back by Saturday afternoon. The technician was professional and the price was exactly what they quoted. Highly recommend!",
  },
  {
    name: "David Chen",
    role: "MacBook Logic Board",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    quote:
      "Two other shops said my laptop was beyond repair. Fixed Gadget diagnosed the issue for free and had it running again in two days. Absolute lifesavers.",
  },
  {
    name: "Ayesha Rahman",
    role: "Samsung TV Panel",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    quote:
      "Great communication throughout. They picked up my TV, kept me updated at every step, and delivered it working perfectly. The pickup and drop service is a nice touch.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="badge badge-primary badge-outline gap-2 px-4 py-3 font-medium">
            <FaStar />
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base-content/60">
            Thousands of gadgets repaired and counting. Here&apos;s what our
            happy customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, role, image, rating, quote }) => (
            <figure
              key={name}
              className="group relative flex flex-col rounded-3xl border border-base-200 bg-base-100 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
            >
              <FaQuoteLeft className="absolute right-6 top-6 text-4xl text-primary/10 transition-colors duration-300 group-hover:text-primary/20" />

              <div className="flex gap-1 text-warning">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < rating ? "" : "text-base-300"}
                  />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-base-content/70">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-base-200 pt-5">
                <div className="avatar">
                  <div className="w-12 rounded-full ring-2 ring-primary/30">
                    <img src={image} alt={name} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="flex items-center gap-1.5 font-semibold">
                    {name}
                    <FaCheckCircle className="text-xs text-success" />
                  </span>
                  <span className="text-xs text-base-content/50">{role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
