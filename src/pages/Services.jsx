import { NavLink } from "react-router-dom";
import Intro from "../components/Intro"
import { ArrowRight, Award, Calendar, Lightbulb, Mail, Phone, Star, Target, Users } from "lucide-react";
import ContactCard from "../components/ContactCard";

const Services = () => {
    
   const services = [  {
    id: 1,
    title: "Executive Coaching",
    description: "Personalized coaching for leaders seeking to enhance their effectiveness, navigate challenges, and drive organizational success.",
    icon: <Award className="h-10 w-10 text-brand-gold" />,
    features: [
      "Leadership strategy development",
      "Executive presence enhancement",
      "Decision-making frameworks",
      "Work-life balance optimization"
    ]
  },
  {
    id: 2,
    title: "Career Advancement",
    description: "Strategic guidance for professionals looking to accelerate their career growth, transition to new roles, or navigate workplace challenges.",
    icon: <Target className="h-10 w-10 text-brand-gold" />,
    features: [
      "Career path mapping",
      "Personal branding",
      "Negotiation skills",
      "Networking strategies"
    ]
  },
  {
    id: 3,
    title: "Team Development",
    description: "Comprehensive programs to enhance team cohesion, communication, and performance in collaborative environments.",
    icon: <Users className="h-10 w-10 text-brand-gold" />,
    features: [
      "Team dynamics assessment",
      "Conflict resolution training",
      "Collaborative decision-making",
      "Team performance metrics"
    ]
  },
  {
    id: 4,
    title: "Leadership Training",
    description: "Structured workshops and programs designed to develop essential leadership skills at all organizational levels.",
    icon: <Star className="h-10 w-10 text-brand-gold" />,
    features: [
      "Emerging leader development",
      "Strategic thinking",
      "Emotional intelligence",
      "Change management"
    ]
  },
  {
    id: 5,
    title: "Personal Growth",
    description: "Holistic coaching that addresses both professional development and personal fulfillment for a balanced approach to success.",
    icon: <Lightbulb className="h-10 w-10 text-brand-gold" />,
    features: [
      "Purpose and values alignment",
      "Goal setting and achievement",
      "Confidence building",
      "Stress management and resilience"
    ]
  }
];


    return (
        <>
            <main>
               {/* Hero Section */}
      <section className="pt-28 pb-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Kalim Syed Services" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                My <span className="text-brand-gold">Services</span>
              </h1>
              
              <p className="text-lg mb-6">
                I offer a range of coaching and training services designed to help individuals and 
                organizations unlock their potential and achieve exceptional results.
              </p>
              
              <p className="mb-8 text-dark">
                Each program is tailored to meet the specific needs and goals of my clients, 
                combining proven methodologies with personalized guidance for maximum impact.
              </p>
              <button className="px-4 py-2 md:w-[300px] rounded-[10px] bg-dark text-light font-semibold cursor-pointer hover:bg-hover ease-in-out duration-300"><NavLink to={'/contact'}>Book a Free Consultation</NavLink></button>
            </div>
              
          </div>
        </div>
      </section>
               {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl text-left text-dark font-serif">How I Can Help You</h2>
        <h4 className="text-lg md:text-xl mt-4 mb-8 text-left text-dark">Explore my core service offerings designed to address your specific needs and goals.</h4>
          
          <div className="mt-16 space-y-24">
            {services.map((service, index) => (
              <div 
                key={service?.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
              >
                {/* Image/Icon Side */}
                <div className="w-full md:w-1/2 bg-dark/30 rounded-lg p-10 flex flex-col items-center justify-center text-center h-[300px]">
                  <div className="bg-white p-5 rounded-full shadow-md mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
                </div>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <p className="text-lg mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-brand-gold/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <span className="h-2 w-2 rounded-full bg-brand-gold"></span>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="px-4 mt-8 py-2 rounded-[10px] bg-dark text-light font-semibold cursor-pointer hover:bg-hover ease-in-out duration-300"><NavLink to={'/contact'}>  Inquire About {service.title}n</NavLink></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
                 {/* Process Section */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl text-left text-white font-serif">My Coaching Process</h2>
        <h4 className="text-lg md:text-xl mt-4 mb-8 text-left text-white/80">A structured approach that delivers consistent results while adapting to your unique needs.</h4>
          
          <div className="mt-16 relative">
            {/* Process Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-brand-gold/30 -translate-x-1/2"></div>
            
            {/* Process Steps */}
            <div className="space-y-16 md:space-y-32 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 md:text-right">
                  <h4 className="text-brand-gold font-serif text-xl font-bold mb-3">Step 1</h4>
                  <h3 className="text-2xl font-bold mb-4">Initial Assessment</h3>
                  <p className="text-white/80">
                    We begin with a comprehensive assessment of your current situation, goals, and challenges, 
                    creating a baseline for measuring progress and success.
                  </p>
                </div>
                <div className="my-6 md:my-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center z-10">
                  <span className="text-brand font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-16 hidden md:block"></div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 hidden md:block"></div>
                <div className="my-6 md:my-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center z-10">
                  <span className="text-brand font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <h4 className="text-brand-gold font-serif text-xl font-bold mb-3">Step 2</h4>
                  <h3 className="text-2xl font-bold mb-4">Custom Program Design</h3>
                  <p className="text-white/80">
                    Based on your assessment, I create a tailored program that addresses your specific needs, 
                    leveraging the most effective methodologies for your situation.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 md:text-right">
                  <h4 className="text-brand-gold font-serif text-xl font-bold mb-3">Step 3</h4>
                  <h3 className="text-2xl font-bold mb-4">Implementation</h3>
                  <p className="text-white/80">
                    Through regular sessions, exercises, and ongoing support, we implement your personalized 
                    program, making adjustments as needed to ensure optimal results.
                  </p>
                </div>
                <div className="my-6 md:my-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center z-10">
                  <span className="text-brand font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-16 hidden md:block"></div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-16 hidden md:block"></div>
                <div className="my-6 md:my-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center z-10">
                  <span className="text-light font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <h4 className="text-brand-gold font-serif text-xl font-bold mb-3">Step 4</h4>
                  <h3 className="text-2xl font-bold mb-4">Evaluation & Integration</h3>
                  <p className="text-white/80">
                    We measure results against your goals, celebrate successes, and create strategies for 
                    integrating new skills and behaviors into your daily life and work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
           <ContactCard/>
            </main>
        </>
    )
}
export default Services