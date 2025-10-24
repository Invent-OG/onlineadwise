"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, ArrowRight, Target, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function WebSecond() {
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

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-16 px-4 flex justify-center"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-start space-y-4">
          {/* Card 1 */}
          <div className="bg-black rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden p-5">
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black">
                <Search className="w-5 h-5" />
              </div>
              <h4 className="text-yellow-500 font-bold text-lg">
                SEO Optimization
              </h4>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Specialized SEO solutions to increase your visibility, attract
              high-quality leads, and grow your law firm in competitive markets.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden p-5">
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-yellow-500 font-bold text-lg">
                Content Marketing
              </h4>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Tailored content strategies that build trust, showcase expertise,
              and connect your firm with clients seeking legal services.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden p-5">
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-yellow-500 font-bold text-lg">Local SEO</h4>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Optimize your firm for local searches, dominate your local market,
              and convert nearby prospects into loyal clients.
            </p>
          </div>
        </div>

        {/* Right Form - Smaller & Compact */}
        <div className="form-element rounded-lg md:p-5 p-8 border border-yellow-500/60 shadow-[0_0_15px_-5px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_-5px_rgba(234,179,8,0.5)] transition-shadow duration-500 max-w-md mx-auto">
          {isSubmitted ? (
            <div className="text-center p-4">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                Thank You for Your Interest!
              </h3>
              <p className="text-gray-300 mb-3 text-sm">
                We’ve received your consultation request and will contact you
                within 24 hours to schedule your free growth call.
              </p>
              <p className="text-yellow-500 font-semibold text-sm">
                Get ready to grow your business!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-yellow-400 text-center mb-3">
                FREE 1:1 STRATEGY SESSION
              </h3>

              <div className="grid md:grid-cols-2 gap-2.5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-700 bg-black text-white rounded-md placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-700 bg-black text-white rounded-md placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-sm"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-2.5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-700 bg-black text-white rounded-md placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-sm"
                />
                <input
                  type="text"
                  name="business"
                  placeholder="Business Name*"
                  value={formData.business}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-gray-700 bg-black text-white rounded-md placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-sm"
                />
              </div>

              <input
                type="text"
                name="location"
                placeholder="Location (City, State)*"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-700 bg-black text-white rounded-md placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-sm"
              />

              <select
                name="booking"
                value={formData.booking}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-700 bg-black text-white rounded-md focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all text-sm"
              >
                <option value="">Current Monthly Bookings</option>
                <option value="0-20">0-20 bookings</option>
                <option value="21-50">21-50 bookings</option>
                <option value="51-100">51-100 bookings</option>
                <option value="100+">100+ bookings</option>
              </select>

              <textarea
                name="interest"
                placeholder="Tell us about your biggest challenge"
                value={formData.interest}
                onChange={handleInputChange}
                rows={3}
                className="w-full p-2 border border-gray-700 bg-black text-white rounded-lg placeholder-gray-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all resize-none text-sm"
              ></textarea>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-2.5 text-sm rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    <Calendar className="h-4 w-4" />
                    Submit
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>

              {errorMsg && (
                <p className="text-center text-red-400 text-xs">{errorMsg}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
