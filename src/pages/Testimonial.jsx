import { Play, Star } from "lucide-react";
import ContactCard from "../components/ContactCard";
import { useRef } from "react";




const writtenTestimonials = [
  {
    id: 1,
    name: "David Williams",
    position: "Senior Engineer",
    company: "Advanced Systems",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    quote: "I was skeptical about coaching until I worked with Kalim. His practical approach helped me improve my communication skills and take on leadership responsibilities I never thought possible.",
    rating: 5
  },
  {
    id: 2,
    name: "Jennifer Lopez",
    position: "CEO",
    company: "Creative Solutions",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote: "Kalim's coaching was instrumental in helping me navigate a major career transition. His insights and strategic guidance gave me the confidence to make bold moves that transformed my professional trajectory.",
    rating: 5
  },
  {
    id: 3,
    name: "Robert Kim",
    position: "Sales Director",
    company: "Global Retail",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    quote: "The team training Kalim provided increased our sales performance by 35% in just one quarter. His ability to identify our specific challenges and create tailored solutions was impressive.",
    rating: 5
  },
  {
    id: 4,
    name: "Sophia Martinez",
    position: "Department Head",
    company: "University of Excellence",
    image: "https://randomuser.me/api/portraits/women/53.jpg",
    quote: "Working with Kalim helped me find balance between my academic career and personal life. His holistic approach to coaching addresses both professional growth and personal wellbeing.",
    rating: 5
  }
];



 
const Testimonials = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);

  const testimonialVideos = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director at Tech Solutions Inc.",
    thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
    ref:videoRef2,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Startup Founder",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
     ref:videoRef3,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    position: "HR Executive",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
     ref:videoRef4,
  },
];

  const togglePlay = (videoRef) => {
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
      {/* Hero Video Testimonial */}
      <section className="pt-38 pb-20 bg-dark text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Client Success Stories</h1>
            <p className="text-white/80 text-lg">
              Hear directly from the professionals and organizations who have experienced 
              transformative results through our coaching and training programs.
            </p>
          </div>
          
          {/* Featured Video Testimonial */}
          <div className="md:max-w-5xl w-[90%] h-[200px] mx-auto bg-black/20 rounded-lg overflow-hidden aspect-video relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end md:p-8">
              <button onClick={() => togglePlay(videoRef1)}
              className="md:w-16 w-12 md:h-16 h-12 rounded-full bg-brand-gold text-dark flex items-center justify-center mb-6 absolute bottom-0 md:bottom-10 left-5 md:left-14 cursor-pointer z-20">
                <Play size={32} className="ml-1" />
              </button>
              {/* <h3 className="text-2xl font-bold mb-2">Maria Rodriguez</h3>
              <p className="text-white/80">CEO, Innovative Solutions</p> */}
              <video ref={videoRef1} src="/1.mp4" className="w-full h-full object-cover object-center z-10"></video>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Testimonial Slider */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl text-dark font-serif">Video Testimonials</h2>
           <h4 className="text-lg md:text-xl mt-4 mb-8 text-dark">Watch these short videos to hear about real client experiences and results.</h4>
          
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {testimonialVideos.map((video,idx) => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-video cursor-pointer">
                  <video 
                    poster={video.thumbnail} 
                    alt={video.name} 
                    className="w-full h-full object-cover"
                    ref={video.ref}
                    src="/1.mp4"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-brand-gold text-dak flex items-center justify-center">
                      <Play onClick={() => togglePlay(video.ref)} size={24} className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg">{video.name}</h4>
                  <p className="text-brand-gold text-sm">{video.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why People Trust Section */}
      <section className="py-20 px-4 bg-dark/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl text-center text-dark font-serif">Why People Trust Kalim</h2>
           <h4 className="text-lg md:text-xl mt-4 mb-8 text-center text-dark">My approach focuses on creating tangible results that impact both professional performance and personal fulfillment.</h4>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center mb-4">
                <span className="font-serif font-bold text-brand-gold text-xl">01</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Methodology</h3>
              <p className="text-dark">
                A structured yet flexible approach that adapts to your unique situation while delivering consistent results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center mb-4">
                <span className="font-serif font-bold text-brand-gold text-xl">02</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-World Experience</h3>
              <p className="text-dark">
                Insights backed by extensive corporate leadership experience and success across multiple industries.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center mb-4">
                <span className="font-serif font-bold text-brand-gold text-xl">03</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Measurable Results</h3>
              <p className="text-dark">
                Clear metrics and feedback mechanisms to track progress and demonstrate return on investment.
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <div className="inline-flex items-center bg-dark text-white px-8 py-4 rounded-full">
              <span className="text-4xl font-serif font-bold text-brand-gold mr-4">95%</span>
              <span className="text-left">
                <span className="block font-bold">Client Satisfaction</span>
                <span className="text-white/80 text-sm">Based on post-program surveys</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Written Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl text-center text-dark font-serif">Client Feedback</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {writtenTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                
                <blockquote className="mb-6 text-gray-700 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <div className="px-4">
      <ContactCard />
      </div>
    </>
  );
};

export default Testimonials;
