import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";


const Footer = () => {
   const currentYear = new Date().getFullYear();
  return (
       <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left - About */}
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-gold mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Kalim Syed" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold">Kalim Syed</h4>
                <p className="text-brand-gold">Coach & Trainer</p>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-6">
              Transforming lives through personalized coaching and expert training. Helping professionals reach their full potential through proven methodologies.
            </p>
            <div className="flex space-x-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
          
          {/* Middle - Quick Links */}
          <div className="md:w-1/4">
            <h5 className="font-serif text-lg font-bold mb-4 text-brand-gold">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-brand-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-brand-gold transition-colors">About</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-white/80 hover:text-brand-gold transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-brand-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-brand-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Right - Contact */}
          <div className="md:w-1/3">
            <h5 className="font-serif text-lg font-bold mb-4 text-brand-gold">Contact Information</h5>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-white/80">hello@kalimsyed.com</p>
              </div>
              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <p className="text-white/80">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h5 className="font-serif text-lg font-bold mb-2">Subscribe to Newsletter</h5>
              <div className="flex mt-2">
                <input 
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 text-white placeholder:text-white/60 px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-brand-gold w-full"
                />
                <button className="bg-brand-gold text-brand px-4 rounded-r-md font-medium hover:bg-amber-400 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom - Copyright */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/60 text-sm">
          <p>© {currentYear} Kalim Syed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
