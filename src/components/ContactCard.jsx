import { ArrowRight, Calendar, Mail, Phone } from "lucide-react"
import { NavLink } from "react-router-dom"

const ContactCard = () => {
  return (
     <section className="py-20 bg-dark/5">
          <div className="container mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left - Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                    alt="Contact Kalim Syed"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">Let's Work Together</h3>
                    <p className="text-white/90 max-w-xs">
                      Take the first step toward transforming your professional and personal life.
                    </p>
                  </div>
                </div>

                {/* Right - Contact Info */}
                <div className="p-6 md:p-10">
                  <h4 className="text-xl font-bold mb-6">Get in Touch</h4>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-brand-gold mr-3" />
                      <span>hello@kalimsyed.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-brand-gold mr-3" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-brand-gold mr-3" />
                      <span>Book a free 15-minute consultation</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="px-4 py-2 rounded-[10px] bg-dark text-light font-semibold cursor-pointer hover:bg-hover ease-in-out duration-300"><NavLink to={'/contact'}>Contact Me</NavLink></button>
                    <button className="px-6 flex justify-center items-center py-2 rounded-[10px] bg-dark text-light font-semibold cursor-pointer hover:bg-hover ease-in-out duration-300"><NavLink to={'/contact'} className={'flex justify-center items-center'}>
                      View Services
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </NavLink></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
export default ContactCard