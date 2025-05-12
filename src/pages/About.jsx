import { ArrowRight, Play } from "lucide-react"
import Intro from "../components/Intro"
import { NavLink } from "react-router-dom"
import ContactCard from "../components/ContactCard"
import { useRef } from "react"

const About = () => {
const videoRef = useRef(null);
   const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch((e) => console.error("Play error:", e));
      } else {
        videoRef.current.pause();
      }
    }
  };
    return (
        <>
            <main className="mt-14">
                {/* Hero Section */}
      <section className="pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* 3D Style Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative bg-brand-gold/20 rounded-lg p-4">
                <div className="overflow-hidden rounded-lg relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Kalim Syed" 
                    className="w-full object-cover h-[500px]"
                  />
                </div>
                <div className="absolute -top-3 -bottom-3 -left-3 -right-3 md:border-2 border-brand-gold rounded-lg -z-0"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                About <span className="text-brand-gold">Kalim Syed</span>
              </h1>
              
              <p className="text-lg mb-6">
                As a certified professional coach and experienced trainer, I'm passionate about 
                helping individuals and organizations unlock their full potential and achieve 
                extraordinary results.
              </p>
              
              <p className="mb-6 text-dark">
                With over a decade of experience working with clients ranging from ambitious professionals 
                to Fortune 500 companies, I bring a unique blend of strategic thinking, emotional intelligence, 
                and practical methodologies to guide my clients through transformative journeys.
              </p>
              
              <p className="mb-8">
                My approach combines cutting-edge coaching techniques with real-world business experience, 
                creating personalized development paths that lead to sustainable success and personal fulfillment.
              </p>
              
                <button className="px-4 py-2 flex justify-center items-center gap-4 rounded-[10px] bg-dark text-light font-semibold cursor-pointer hover:bg-hover ease-in-out duration-300"><NavLink className={'flex items-center justify-center'} to={'/contact'}>  Work with me  <ArrowRight size={16} className="ml-2" /></NavLink></button>
            </div>
          </div>
        </div>
      </section>
                {/* Early Journey Section */}
      <section className="py-20 bg-dark/10 px-4">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl text-left text-dark font-serif">My Journey Begin</h2>
        <h4 className="text-lg md:text-xl mt-4 mb-8 text-left text-dark">The experiences and challenges that shaped my approach to coaching and training.</h4>
        
          <div className="max-w-3xl mb-16">
            <p className="mb-6">
              My journey began in the corporate world, where I quickly rose through the ranks to leadership 
              positions. While I achieved external success, I noticed a pattern among myself and my colleagues—many 
              of us were accomplished yet unfulfilled, productive yet stressed, and knowledgeable yet uncertain 
              about our true purpose.
            </p>
            
            <p className="mb-6">
              This realization led me to explore the field of professional coaching and personal development. 
              I invested years studying various coaching methodologies, leadership frameworks, and psychological 
              approaches to human potential and performance.
            </p>
            
            <p>
              After receiving my certification from the International Coaching Federation, I began working 
              with clients who were facing the same challenges I had encountered. The transformative results 
              they achieved confirmed my belief in the power of strategic coaching and personalized training.
            </p>
          </div>
        </div>
      </section>
                  {/* Current Life Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl text-left text-dark font-serif">Where I Stand Today</h2>
        <h4 className="text-lg md:text-xl mt-4 mb-8 text-left text-dark">My professional philosophy and commitment to my clients' success.</h4>
        
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="mb-6">
                Today, I work with a select group of clients who are committed to achieving exceptional results 
                in their professional and personal lives. My coaching programs are highly personalized, focusing 
                on the specific goals, challenges, and opportunities each client faces.
              </p>
              
              <p>
                I believe that true success comes from aligning your skills, values, and actions with a clear 
                purpose. My role is to help you identify that alignment and develop the strategies and mindset 
                needed to create lasting positive change.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-xl font-bold mb-4">Core Values That Guide My Work</h4>
              
              <ul className="space-y-4">
                <li className="flex">
                  <span className="font-serif text-brand-gold text-xl mr-2">01.</span>
                  <div>
                    <h5 className="font-bold mb-1">Authenticity</h5>
                    <p className="text-dark">Creating space for genuine self-expression and growth.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="font-serif text-brand-gold text-xl mr-2">02.</span>
                  <div>
                    <h5 className="font-bold mb-1">Excellence</h5>
                    <p className="text-dark">Pursuing the highest standards in every aspect of my work.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="font-serif text-brand-gold text-xl mr-2">03.</span>
                  <div>
                    <h5 className="font-bold mb-1">Transformation</h5>
                    <p className="text-dark">Facilitating meaningful, lasting change rather than quick fixes.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="font-serif text-brand-gold text-xl mr-2">04.</span>
                  <div>
                    <h5 className="font-bold mb-1">Connection</h5>
                    <p className="text-dark">Building meaningful relationships based on trust and empathy.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
                <section className="py-20 bg-dark text-white px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Watch My Introduction</h2>
            <p className="text-white/80">
              Learn more about my coaching philosophy and approach in this short video.
            </p>
          </div>
          
          {/* Video Placeholder */}
          <div className="max-w-4xl mx-auto bg-black/20 rounded-lg overflow-hidden aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center ">
              <button onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-brand-gold text-dark flex items-center justify-center mb-6 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] cursor-pointer z-20">
                <Play size={32} className="ml-1" />
              </button>
              {/* <h3 className="text-2xl font-bold mb-2">Maria Rodriguez</h3>
              <p className="text-white/80">CEO, Innovative Solutions</p> */}
              <video ref={videoRef} src="/1.mp4" className="w-full h-full object-cover object-center z-10"></video>
            </div>
          </div>
        </div>
      </section>
      <div className="px-4">
<ContactCard/>
</div>
            </main>
        </>
    )
}
export default About