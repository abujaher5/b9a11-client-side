import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCommentDots,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: FaPhoneAlt,
    label: "Call Us",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: FaEnvelope,
    label: "Email Us",
    value: "support@fixedgadget.com",
    href: "mailto:support@fixedgadget.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Visit Us",
    value: "123 Repair Street, Tech City",
    href: "#",
  },
];

const ContactUs = () => {
  const [sent, setSent] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(name, email, message);
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm outline-none transition-all duration-200 placeholder:text-base-content/40 focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <section id="contact" className="py-16 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="badge badge-primary badge-outline gap-2 px-4 py-3 font-medium">
            <FaCommentDots />
            Contact Us
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Talk!
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base-content/60">
            Have a question about our services or your previous experience? Our
            team is here to help you get your gadgets back in shape.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* info panel */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-primary-content shadow-xl">
              <h3 className="text-2xl font-bold">Get in touch</h3>
              <p className="mt-2 text-sm text-primary-content/80">
                Reach out through any of these channels and we&apos;ll respond as soon
                as possible.
              </p>
              <div className="mt-8 space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/20 text-lg">
                      <Icon />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs uppercase tracking-wider opacity-70">
                        {label}
                      </span>
                      <span className="text-sm font-semibold">{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* form */}
          <div className="lg:col-span-3 rounded-3xl border border-base-200 bg-base-100 p-6 shadow-lg sm:p-8">
            <form onSubmit={handleSendMessage} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us how we can help..."
                  className={`${inputClass} resize-none`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full gap-2 rounded-xl text-sm font-bold uppercase tracking-wide shadow-md"
              >
                <FaPaperPlane />
                Send Message
              </button>

              {sent && (
                <p className="rounded-xl bg-success/10 px-4 py-3 text-center text-sm font-medium text-success">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
