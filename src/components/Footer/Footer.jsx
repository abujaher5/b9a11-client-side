import { Link } from "react-router-dom";
import logo from "../../assets/fixedGadgetLogo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const serviceLinks = [
  { label: "Browse Services", to: "/allService" },
  { label: "Become a Provider", to: "/register" },
  { label: "Add a Service", to: "/addAService" },
  { label: "Manage Services", to: "/manageService" },
];

const companyLinks = [
  { label: "About Us", to: "/" },
  { label: "Contact", to: "/" },
  { label: "Careers", to: "/" },
  { label: "Blog", to: "/" },
];

const legalLinks = [
  { label: "Terms of Use", to: "/" },
  { label: "Privacy Policy", to: "/" },
  { label: "Cookie Policy", to: "/" },
];

const socials = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
];

const linkClass =
  "link link-hover inline-block text-sm text-base-content/60 transition-colors hover:text-primary";

const Footer = () => {
  return (
    <footer className="border-t border-base-300 bg-base-200/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Fixed Gadget logo"
                className="h-11 w-11 rounded-xl object-cover shadow-md ring-2 ring-primary/40"
              />
              <span className="flex flex-col leading-none">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
                  Fixed Gadget
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-base-content/50">
                  Repair Experts
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm text-base-content/60">
              Trusted repair services for all your gadgets since 2024. Certified
              experts, fast turnaround, and a 90-day warranty on every fix.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-base-content/60">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                support@fixedgadget.com
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" />
                +1 (555) 012-3456
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          {/* services */}
          <nav className="flex flex-col gap-3">
            <h6 className="text-xs font-bold uppercase tracking-wider text-base-content/40">
              Services
            </h6>
            {serviceLinks.map(({ label, to }) => (
              <Link key={label} to={to} className={linkClass}>
                {label}
              </Link>
            ))}
          </nav>

          {/* company */}
          <nav className="flex flex-col gap-3">
            <h6 className="text-xs font-bold uppercase tracking-wider text-base-content/40">
              Company
            </h6>
            {companyLinks.map(({ label, to }) => (
              <Link key={label} to={to} className={linkClass}>
                {label}
              </Link>
            ))}
          </nav>

          {/* legal */}
          <nav className="flex flex-col gap-3">
            <h6 className="text-xs font-bold uppercase tracking-wider text-base-content/40">
              Legal
            </h6>
            {legalLinks.map(({ label, to }) => (
              <Link key={label} to={to} className={linkClass}>
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* divider */}
        <div className="my-8 h-px w-full bg-base-300" />

        {/* bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="flex items-center gap-1.5 text-center text-sm text-base-content/50 sm:text-left">
            &copy; {new Date().getFullYear()} Fixed Gadget. All rights reserved.
            Built with <FaHeart className="text-error" /> for gadget lovers.
          </p>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-base-300 text-base-content/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-content"
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
