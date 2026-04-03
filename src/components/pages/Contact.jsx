import ContactForm from "../ui/ContactForm";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import { MagicCard } from "../ui/magic-card";

const Contact = () => {
  return (
    <div className="font-GeneralSans-Regular bg-transparent dark:bg-[#191919]">
      <header className="container max-w-6xl mx-auto my-3">
        <Navbar />
      </header>

      <main className="container max-w-6xl mx-auto">
        {/* shadow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 rounded-full bg-gradient-to-b from-white/30 to-transparent blur-3xl"></div>

        <div className="my-30 flex justify-center items-center mx-6">
          <div className="w-full max-w-4xl mx-6 md:mx-0 md:flex md:items-center md:gap-10">
            <div className="w-full md:w-[40%] my-14 md:my-10">
              <h2
                className="text-center md:text-start scroll-m-20 text-3xl font-semibold tracking-tight text-[#191919]/85 dark:text-[#e4e4e4]/80"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <span className="">Get in Touch,</span>
                <span className="block md:underline md:decoration-[#FCCA46]">
                  Let's Work Together.
                </span>
              </h2>
            </div>

            <div
              className="w-full md:w-[60%]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <MagicCard className="rounded-lg w-full  p-8 text-[#191919] mx-auto">
                <p className="leading-7 mt-5 text-center text-[#191919]/85 dark:text-[#e4e4e4]/80">
                  Kindly provide your Name, Email
                  <span className="block">and Message below.</span>
                </p>
                <ContactForm />
              </MagicCard>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
