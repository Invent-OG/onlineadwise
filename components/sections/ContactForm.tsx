"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger); // ✅ Needed!

export default function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    location: "",
    booking: "",
    interest: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".form-element",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      gsap.to(".floating-form", {
        y: -10,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          business: "",
          location: "",
          booking: "",
          interest: "",
        });
      } else {
        const err = await res.json();
        setErrorMsg(err.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  console.log("Submitting formData:", formData);

  if (isSubmitted) {
    return (
      <section
        id="contact-form"
        ref={sectionRef}
        className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 rounded-3xl p-12 border border-green-400/30">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Thank You for Your Interest!
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We&#39;ve received your consultation request and will contact
                you within 24 hours to schedule your free growth call.
              </p>
              <p className="text-yellow-400 font-semibold">
                Get ready to transform your salon business!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 contact form  bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-form absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="floating-form absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="form-element inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full px-6 py-2 mb-6">
              <Calendar className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">
                Free Consultation
              </span>
            </div>
            <h2 className="form-element text-4xl md:text-5xl font-bold mb-6">
              Book Your{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Free Growth Call
              </span>
            </h2>
            <p className="form-element text-xl text-gray-300 max-w-3xl mx-auto">
              Let&#39;s discuss how we can transform your salon into a fully
              booked, profitable business. No obligation, just valuable insights
              tailored to your specific situation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Call Info */}
            <div className="form-element">
              <div className="bg-gradient-to-tr from-gray-900/90 to-gray-800/90 rounded-3xl p-10 border border-gray-700/40 shadow-lg">
                <h3 className="text-3xl font-extrabold text-white mb-8">
                  What to Expect on Your Call
                </h3>

                <div className="space-y-8 mb-10">
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl text-yellow-400 flex-shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-lg">
                        15-Minute Strategy Session
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Quick, focused discussion about your goals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl text-yellow-400 flex-shrink-0">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-lg">
                        Custom Growth Plan
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Tailored recommendations for your salon
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl text-yellow-400 flex-shrink-0">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 text-lg">
                        Next Steps
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Clear action plan to get started
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-700/40 pt-8">
                  <h4 className="text-xl font-semibold text-white mb-5">
                    Contact Information
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-yellow-400" />
                      <span className="text-gray-300">+91 8826728055</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-yellow-400" />
                      <span className="text-gray-300">
                        info.onlineadwise@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-yellow-400" />
                      <span className="text-gray-300">
                        Serving Salons Nationwide
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="form-element">
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-tr from-gray-900/90 to-gray-800/90 rounded-3xl p-10 border border-gray-700/40 shadow-lg space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600/40 rounded-2xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600/40 rounded-2xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600/40 rounded-2xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="business"
                      value={formData.business}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600/40 rounded-2xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300"
                      placeholder="Your Salon/Spa Name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Location (City, State) *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600/40 rounded-2xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300"
                      placeholder="Dallas, TX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="currentBookings"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Current Monthly Bookings
                    </label>
                    <select
                      id="currentBookings"
                      name="booking"
                      value={formData.booking}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600/40 rounded-2xl text-white focus:border-yellow-400 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select range</option>
                      <option value="0-20">0-20 bookings</option>
                      <option value="21-50">21-50 bookings</option>
                      <option value="51-100">51-100 bookings</option>
                      <option value="100+">100+ bookings</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Tell us about your biggest challenge
                  </label>
                  <textarea
                    id="message"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-5 py-4 bg-gray-700/50 border border-gray-600/40 rounded-2xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="What's your biggest challenge with getting more bookings? (Optional)"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-5 text-lg rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Calendar className="h-5 w-5" />
                      Book My Free Growth Call
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </Button>

                {errorMsg && (
                  <p className="text-center text-red-400 text-sm">{errorMsg}</p>
                )}

                <p className="text-xs text-gray-400 text-center mt-4">
                  By submitting this form, you agree to receive communications
                  from OnlineAdwise. We respect your privacy and will never
                  share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
