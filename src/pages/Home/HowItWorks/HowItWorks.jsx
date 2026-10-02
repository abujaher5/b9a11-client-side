import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaTruck,
  FaTools,
  FaSmileBeam,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    icon: FaClipboardList,
    title: "Book a Service",
    description:
      "Tell us about your device and the issue. Pick a service and schedule a convenient time in just a few clicks.",
  },
  {
    icon: FaTruck,
    title: "Free Pickup",
    description:
      "Our technician collects your gadget from your doorstep at no extra cost, or drop it off at any of our centers.",
  },
  {
    icon: FaTools,
    title: "Expert Repair",
    description:
      "Certified technicians diagnose and fix your device using genuine parts, with a transparent cost estimate up front.",
  },
  {
    icon: FaSmileBeam,
    title: "Fast Delivery",
    description:
      "We deliver your fully tested, working gadget back to you — usually within 24 to 48 hours. Guaranteed.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="badge badge-secondary badge-outline gap-2 px-4 py-3 font-medium">
            <FaTools />
            Simple Process
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            How It{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base-content/60">
            Getting your gadget repaired is easy, transparent, and hassle-free.
            Just four simple steps and we&apos;ll handle the rest.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-secondary/20 lg:block"></div>

          {steps.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="group relative flex flex-col items-center rounded-3xl border border-base-200 bg-base-100 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
            >
              <span className="absolute -top-3 right-5 grid h-8 w-8 place-items-center rounded-full bg-primary text-sm font-bold text-primary-content shadow-md">
                {index + 1}
              </span>
              <span className="grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-3xl text-primary-content shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                <Icon />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-base-content/60">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-primary to-secondary p-8 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-2xl font-bold text-primary-content">
              Ready to fix your gadget?
            </h3>
            <p className="mt-1 text-sm text-primary-content/80">
              Book a service today and get a free diagnosis.
            </p>
          </div>
          <Link
            to="/allService"
            className="btn btn-neutral gap-2 rounded-full px-6 shadow-md"
          >
            Browse Services
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
