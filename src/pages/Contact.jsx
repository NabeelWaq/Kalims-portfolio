import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram, Send } from "lucide-react";
import { NavLink } from "react-router-dom";

const Contact = () => {
    
  return (
     <>
     <main className="w-full min-h-screen relative px-4 mt-18 ">
    <section className="pt-28 pb-20">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-5xl text-left text-dark font-serif">Get In Touch</h2>
        <h4 className="text-lg md:text-xl mt-4 mb-8 text-left text-dark">I'd love to hear from you. Whether you have a question about my services, want to schedule a consultation, or are ready to start working together, use the contact form below or reach out directly.</h4>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-brand-gold" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-dark mb-4">For inquiries and information</p>
                <a href="mailto:hello@kalimsyed.com" className="text-brand hover:text-brand-gold transition-colors">
                  hello@kalimsyed.com
                </a>
              </div>
              
              {/* Phone */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-brand-gold" />
                </div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-dark mb-4">Monday-Friday, 9am-5pm</p>
                <a href="tel:+15551234567" className="text-brand hover:text-brand-gold transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              
              {/* Social Media */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Linkedin className="h-6 w-6 text-brand-gold" />
                </div>
                <h3 className="font-bold text-lg mb-2">Connect</h3>
                <p className="text-dark mb-4">Follow me on social media</p>
                <div className="flex space-x-3">
                  <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors">
                    <Twitter size={16} />
                  </a>
                  <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors">
                    <Facebook size={16} />
                  </a>
                  <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors">
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="mt-16 bg-white rounded-xl shadow-lg p-8 md:p-12 relative overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Background" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative">
                <h2 className="text-2xl font-serif font-bold mb-8 text-center">Send Me a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                      placeholder="How can I help you?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <button className="px-4 py-2 rounded-[10px] bg-dark text-light font-semibold cursor-pointer hover:bg-hover ease-in-out duration-300"><NavLink className="flex justify-center items-center gap-4 text-light" to={'/contact'}>Send Message <Send size={16} className="ml-2" /></NavLink></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
     </main>
     </>
  )
}
export default Contact