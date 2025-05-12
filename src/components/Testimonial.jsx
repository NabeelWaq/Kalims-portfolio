
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "../lib/utils";
import { NavLink } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Tech Solutions Inc.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "Working with Kalim transformed my approach to leadership. His coaching helped me secure a promotion and build a more effective team. I've recommended him to everyone in my network.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Startup Founder",
    company: "Innovate Labs",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote: "Kalim's strategic coaching was pivotal during our startup's critical growth phase. His insights helped us navigate challenges and establish a strong company culture from day one.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    position: "HR Executive",
    company: "Global Retail Group",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    quote: "The training programs Kalim designed for our management team delivered immediate results. Our employee satisfaction scores increased by 27% within three months.",
    rating: 5
  },
  {
    id: 4,
    name: "David Williams",
    position: "Senior Engineer",
    company: "Advanced Systems",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    quote: "I was skeptical about coaching until I worked with Kalim. His practical approach helped me improve my communication skills and take on leadership responsibilities I never thought possible.",
    rating: 5
  }
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const goToNext = () => {
    if (isAnimating) return;
    
    setDirection("next");
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    
    setDirection("prev");
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl text-center text-dark font-serif">What My Clients Say</h2>
        <h4 className="text-lg md:text-xl mt-4 mb-8 text-center text-dark md:w-[60%] mx-auto">Hear from the professionals and organizations who have experienced transformative results through our work together.</h4>
        
        
        {/* Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto mt-16">
          {/* Testimonial Container */}
          <div className="relative overflow-hidden min-h-[400px]">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={index}
                  className={cn(
                    "absolute w-full transition-all duration-500 opacity-0 translate-x-full",
                    isActive && "opacity-100 translate-x-0",
                    !isActive && direction === "next" && "translate-x-full",
                    !isActive && direction === "prev" && "-translate-x-full"
                  )}
                >
                  <div className="bg-white rounded-xl shadow-lg p-10 md:p-12">
                    <div className="flex items-center mb-6">
                      {/* Stars */}
                      <div className="flex mr-auto">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl italic mb-8 text-gray-700">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Person */}
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
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
                </div>
              );
            })}
          </div>
          
          {/* Controls */}
          <div className="absolute -bottom-0 left-0 right-0 flex justify-center gap-4 mt-2">
            <button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="text-center mt-4">
           <button className="px-4 py-2 rounded-[10px] bg-dark text-light font-semibold cursor-pointer hover:bg-hover ease-in-out duration-300"><NavLink to={'/contact'}>View All Testimonials</NavLink></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
