import { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaComments } from "react-icons/fa";

const faqs = [
  {
    question: "How long does a typical repair take?",
    answer:
      "Most common repairs — like screen replacements, battery swaps, and software fixes — are completed within 24 to 48 hours. More complex issues such as logic board repairs may take 3 to 5 business days. We always provide an estimated timeline before starting.",
  },
  {
    question: "Do you offer free diagnosis and pickup?",
    answer:
      "Yes! We diagnose your device completely free of charge with no obligation to proceed. We also offer free doorstep pickup and delivery within our service area, so you don't have to leave your home.",
  },
  {
    question: "What kind of warranty do you provide?",
    answer:
      "All repairs come with a 90-day warranty covering both the replacement parts and our workmanship. If the same issue reappears within that period, we'll fix it again at no extra cost.",
  },
  {
    question: "Do you use original or genuine parts?",
    answer:
      "We use high-quality genuine or OEM-equivalent parts depending on availability and your preference. Every part we install is tested for performance and durability, and we'll always tell you exactly what we're using.",
  },
  {
    question: "Can you recover data from a dead device?",
    answer:
      "In many cases, yes. Our data recovery specialists can often retrieve photos, documents, and messages from devices that won't power on. We recommend contacting us as soon as possible after a failure to maximize recovery chances.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards, mobile payments, and cash. There are no hidden fees — you'll receive a clear, itemized quote before any work begins.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => setOpenIndex(openIndex === index ? -1 : index);

  return (
    <section className="py-16 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="badge badge-secondary badge-outline gap-2 px-4 py-3 font-medium">
            <FaQuestionCircle />
            FAQ
          </span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base-content/60">
            Everything you need to know about our repair process, warranty, and
            services. Can&apos;t find your answer? Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-3">
            {faqs.map(({ question, answer }, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={question}
                  className={`overflow-hidden rounded-2xl border bg-base-100 transition-colors duration-200 ${
                    isOpen ? "border-primary/40 shadow-md" : "border-base-200"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold">{question}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-primary text-primary-content"
                          : "bg-base-200 text-base-content/60"
                      }`}
                    >
                      <FaChevronDown className="text-xs" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-base-content/60">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 flex flex-col items-center rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-center text-primary-content shadow-xl">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/20 text-3xl">
                <FaComments />
              </span>
              <h3 className="mt-5 text-2xl font-bold">Still have questions?</h3>
              <p className="mt-2 text-sm text-primary-content/80">
                Our support team is ready to help you with anything you need.
                Get in touch and we&apos;ll respond within a few hours.
              </p>
              <a
                href="#contact"
                className="btn mt-6 w-full gap-2 rounded-xl border-none bg-white text-primary hover:bg-white/90"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
