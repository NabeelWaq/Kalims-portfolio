import { ArrowRight, Award, Calendar, Mail, Phone, Star, Target, Trophy } from "lucide-react";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { CustomEase, ScrollTrigger } from "gsap/all";
import ContactCard from "../components/ContactCard";

const Home = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carousel2Index, setCarousel2Index] = useState(0);

  const carouselContent = [
    { img: "https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png", heading: "LOREM IPSUM KKJBJN NDJNFN HDBJ1" }, { img: "https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png", heading: "LOREM IPSUM KKJBJN NDJNFN HDB2" }, { img: "v", heading: "LOREM IPSUM KKJBJN NDJNFN HDBJ3" }
    // {},
    // {},
    // {},
    // {},

  ];

  const carousel2Content = [
    { img: "https://static.wixstatic.com/media/a5f7e7_590c49c6720b4a8294d79fa896940f6f~mv2.png/v1/fill/w_175,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/zack%20s.png", heading: "Zack, Glendora, CA", paragraph: "I first met Kathleen at the Drucker School Global Family Business Institute where she invited me to lead breakout sessions at their member events. I was immediately impressed with Kathleen and her ability to organize such powerful events. In time, I got to know Kathleen in a much deeper sense as she became a key contributor to the early development of our Top Teams methodology. During that time together, we launched Top Coach, a community serving 200 professional business coaches. Kathleen is a giver of herself and her talents. Seeing her pour herself into her coaching practice, consulting, and giving of her time in the community and elsewhere, it's amazing how she gets it all done! And, with the warmest of smiles. I'm grateful to know Kathleen. There are few like her. I wouldn't hesitate to hire her, work with her, or just hang out (as she's amazing company!). Thanks, Kathleen for all you've done for me." },
    { img: "https://static.wixstatic.com/media/a5f7e7_f000bda7832843fabe140b5c04eae249~mv2.png/v1/crop/x_5,y_5,w_890,h_890/fill/w_175,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/neil%20p.png", heading: "Neil, Los Angeles, CA", paragraph: "Kathleen's genuine passion for mentoring and commitment to supporting the growth and development of next-generation leaders is unparalleled. She possesses a unique blend of insight, empathy, and expertise that not only allows her to connect with clients, but also creates a nurturing and empowering environment for growth, where clients feel valued and important.Kathleen's coaching approach is not just insightful, it's transformative. She has a talent for asking the right questions, guiding her clients to uncover their strengths, and helping them navigate challenges with confidence and resilience. Her genuine belief in her clients' potential and willingness to invest the time and effort necessary to help them succeed sets her apart as a truly exceptional coach, instilling a sense of hope and inspiration in her clients." },
    {
      img: "https://static.wixstatic.com/media/a5f7e7_f457fd1bff3840d9876c62d39b20b39a~mv2.png/v1/fill/w_175,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/jd%20w.png", heading: "JD, Seattle, CA", paragraph: "Kathleen, AKA CoachKat, is the ultimate connector. Her kindness and integrity are second to none, making her a beacon of positivity in today's competitive business environment. She has an innate ability to bring people together, foster genuine relationships, and uplift everyone around her. Kathleen's dedication to helping others achieve their goals is truly inspiring. I am grateful to know her both personally and professionally, and I wholeheartedly recommend Kathleen for any endeavor she chooses to pursue. She has truly been a blessing in my life."
    }
  ]

  const awards = [
    {
      icon: <Star className="w-10 h-10 text-brand-gold" />,
      title: "Certified Coach",
      description: "International Coaching Federation"
    },
    {
      icon: <Award className="w-10 h-10 text-brand-gold" />,
      title: "Excellence Award",
      description: "Professional Trainers Association"
    },
    {
      icon: <Target className="w-10 h-10 text-brand-gold" />,
      title: "Top 100 Coaches",
      description: "Global Coaching Magazine, 2023"
    },
    {
      icon: <Trophy className="w-10 h-10 text-brand-gold" />,
      title: "Master Trainer",
      description: "Leadership Development Institute"
    },
  ];

  const clients = [
    "/client-1.svg",
    "/client-2.svg",
    "/client-3.svg",
    "/client-4.svg",
    "/client-5.svg",
    "/client-6.svg",
  ];


  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("nav", {
      backgroundColor: '#EDEFF1',
      duration: .1,
      delay: 0,
      ease: CustomEase.create("custom", "M0,0 C0.481,0.254 0.546,0.883 0.7,1 0.979,1.213 0.769,0.857 1,1.218 "),
      scrollTrigger: {
        scroller: 'body',
        trigger: 'nav',
        scrub: 2,
        start: "top -10%"
      }
    })
    gsap.to("nav", {
      paddingTop: '0px',
      paddingBottom: '2px',
      duration: .1,
      delay: 0,
      ease: CustomEase.create("custom", "M0,0 C0.481,0.254 0.546,0.883 0.7,1 0.979,1.213 0.769,0.857 1,1.218 "),
      scrollTrigger: {
        scroller: 'body',
        trigger: 'nav',
        scrub: 2,
        start: "top -10%"
      }
    })
  }, [])

  return (
    <>
      {/* Section 1 or hero (Caousel) */}
      <main className="w-full min-h-screen">
        <section id="section-1" className="w-full h-screen relative">
          <div
            className="bg-no-repeat bg-center bg-cover w-full h-full ease-in duration-500"
            style={{ backgroundImage: `url(${carouselContent[carouselIndex].img})` }}
          >
            <h1 className="">{carouselContent[carouselIndex].heading}</h1>
            <div className="carousel-controls w-full py-3 flex items-center justify-center px-4 bottom-10 gap-8 absolute">
              <div onClick={() => {
                if (carouselIndex == 0) {
                  setCarouselIndex(carouselContent.length - 1);
                } else {
                  setCarouselIndex(carouselIndex - 1);
                }
              }} className="bg-dark px-4 text-center flex justify-center items-center text-xl py-2 rounded-full text-light cursor-pointer select-none">&lt;</div>

              <div className="flex justify-center items-center gap-4">
                {carouselContent.map((con, ind) => (
                  <div key={ind} className={`px-2 py-2 rounded-full ${ind === carouselIndex ? 'bg-dark px-4' : 'bg-light'}`}></div>
                ))}
              </div>

              <div onClick={() => {
                if (carouselIndex >= carouselContent.length - 1) {
                  setCarouselIndex(0);
                } else {
                  setCarouselIndex(carouselIndex + 1);
                }
              }} className="bg-dark px-4 text-center flex justify-center items-center text-xl py-2 rounded-full text-light cursor-pointer select-none">&gt;</div>
            </div>
          </div>


        </section>
        <section id="section-2" className="py-20 md:py-32 bg-gradient-to-br from-dark to-dark text-white">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto flex-col flex gap-4 px-4">
              <h2 className="text-3xl md:text-5xl font-semibold text-brand-gold font-serif">Transform Your Life with Expert Coaching</h2>


              <p className="text-lg mb-10 text-white/85">
                With over a decade of experience in professional coaching, I help ambitious
                individuals unlock their potential and achieve extraordinary results in both
                their careers and personal lives.
              </p>

              <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-gold mb-10 px-4 py-6 border-y border-white/20">
                "Success is not just what you achieve, but who you become in the process."
              </h3>

              <p className="text-lg text-white/85">
                Whether you're seeking career advancement, looking to improve your leadership skills,
                or wanting to find greater purpose and balance, my personalized coaching programs
                will help you create lasting positive change and achieve your most ambitious goals.
              </p>
            </div>
          </div>
        </section>
        <section id="section-3" className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Image */}
              <div className="w-full md:w-1/2 relative">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt="Kalim Syed"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="bg-light text-brand p-5 rounded absolute -bottom-6 right-6 md:-right-6 shadow-xl">
                  <p className="font-serif font-bold text-xl">10+ Years</p>
                  <p className="text-sm">of coaching experience</p>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Hello, I'm <span className="text-brand-gold">Kalim Syed</span>
                </h2>
                <p className="text-dark mb-6">
                  As a certified professional coach and experienced trainer, I specialize in helping
                  individuals and organizations unlock their potential and achieve exceptional results.
                </p>
                <p className="mb-8">
                  With a unique blend of strategic thinking, emotional intelligence, and practical
                  methodologies, I guide my clients through transformative journeys that lead to
                  sustainable success and personal fulfillment.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="py-2 px-5 bg-light rounded-full text-sm font-medium">Leadership Development</div>
                  <div className="py-2 px-5 bg-light rounded-full text-sm font-medium">Career Coaching</div>
                  <div className="py-2 px-5 bg-light rounded-full text-sm font-medium">Performance Optimization</div>
                  <div className="py-2 px-5 bg-light rounded-full text-sm font-medium">Life Coaching</div>
                </div>
                <Link to="/about" className="inline-flex items-center text-brand font-medium hover:text-brand-gold transition-colors group">
                  Learn more about my journey
                  <BsArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="section-4" className="py-20 bg-dark/5 mb-20">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl text-center text-dark font-serif">Achievements & Recognition</h2>
            <h4 className="text-lg md:text-xl mt-4 mb-8 text-center text-dark md:w-[60%] mx-auto">With a proven track record of success across various industries, my coaching and training programs have received wide recognition.</h4>

            {/* Awards & Certificates */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center text-center"
                >
                  <div className="mb-4">
                    {award.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{award.title}</h4>
                  <p className="text-muted-foreground">{award.description}</p>
                </div>
              ))}
            </div>

            {/* Clients Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-serif font-bold text-center mb-10">Trusted by Leading Organizations</h3>

              <div className="flex flex-wrap justify-center items-center gap-12">
                {/* Instead of actual logos, we'll use placeholder text since we don't have real logos */}
                <div className="text-2xl font-bold text-dark/50">ACME Corp</div>
                <div className="text-2xl font-bold text-dark/50">Global Tech</div>
                <div className="text-2xl font-bold text-dark/50">Future Inc</div>
                <div className="text-2xl font-bold text-dark/50">Innovative Co</div>
                <div className="text-2xl font-bold text-dark/50">Next Level</div>
                <div className="text-2xl font-bold text-dark/50">Peak Systems</div>
              </div>
            </div>
          </div>
        </section>
        <Testimonial />
      <ContactCard/>

      </main>
    </>
  )
}
export default Home