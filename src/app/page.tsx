"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ShoppingCart, User } from "lucide-react";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // ===== AUTO SCROLL FOR IMAGE CAROUSEL =====
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPos = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!carousel) return;
      scrollPos += scrollSpeed;
      carousel.scrollLeft = scrollPos;
      if (scrollPos >= carousel.scrollWidth / 2) {
        scrollPos = 0;
        carousel.scrollLeft = 0;
      }
      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // ===== SLIDE DATA =====
  const slides = [
    {
      tag: "* ROYAL MATCHA *",
      title: "Empress Matcha",
      description: "Ceremonial matcha for everyday rituals.",
      button: "SHOP MATCHA",
      image: "/slides/image2.png",
      bg: "#FAEBDD",
    },
    {
      tag: "* LIMITED EDITION *",
      title: "Matcha Era Tote",
      description: "Carry calm everywhere you go.",
      button: "SHOP TOTE",
      image: "/slides/image.png",
      bg: "#FAEBDD",
    },
    {
      tag: "* ELEVATE YOUR MATCHA *",
      title: "Matcha Bowl Set",
      description: "A ritual, redefined.",
      button: "SHOP SET",
      image: "/slides/image4.png",
      bg: "#FAEBDD",
    },
  ];

  // ===== SLIDE CONTROL =====
  const switchSlide = (nextIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(nextIndex);
      setIsAnimating(false);
    }, 350);
  };

  const handleNext = () =>
    switchSlide((currentSlide + 1) % slides.length);

  const handlePrev = () =>
    switchSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);

  // ===== AUTO ROTATION =====
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // ===== CAROUSEL IMAGES =====
  const images = [
    "/carousel/image3.png",
    "/carousel/image4.png",
    "/carousel/image2.png",
    "/carousel/image5.png",
    "/carousel/image6.png",
    "/carousel/image7.png",
    "/carousel/image8.png",
    "/carousel/image9.png",
    "/carousel/image10.png",
  ];
  const doubledImages = [...images, ...images];

  return (
    <main className="relative w-full overflow-hidden text-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-20 text-[15px] font-mono text-white">
          <div className="text-4xl font-extrabold tracking-wider">Empress Matcha</div>
          <div className="flex items-center space-x-8">
            <a href="#" className="hover:opacity-80 transition">Shop</a>
            <a href="#" className="hover:opacity-80 transition">Recipes</a>
            <a href="#" className="hover:opacity-80 transition">About</a>
            <a href="#" className="hover:opacity-80 transition">Blog</a>
            <div className="flex items-center space-x-3 ml-4">
              {/* Profile Icon Button */}
              <button className="bg-white text-black rounded-full p-2 shadow-[2px_3px_0_#000] hover:translate-y-[2px] hover:shadow-none transition-all">
                <User className="w-4 h-4" />
              </button>

              {/* Cart Button */}
              <button className="flex items-center bg-white text-black rounded-full px-4 py-2 shadow-[2px_3px_0_#000] hover:translate-y-[2px] hover:shadow-none transition-all">
                <ShoppingCart className="w-4 h-4 mr-2" /> Cart [0]
              </button>
            </div>
          </div>
        </nav>

        <div className="absolute bottom-20 left-10 z-20">
          <h1 className="text-5xl md:text-6xl font-serif mb-8 drop-shadow-lg">
            Be Royal. Drink Empress Matcha.
          </h1>
          <button className="bg-[#EFE6DD] text-black font-mono text-sm tracking-wider px-8 py-3 rounded-full shadow-[2px_3px_0_#000] hover:translate-y-[2px] hover:shadow-none transition-all">
            SHOP NOW
          </button>
        </div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </section>

      {/* ===== SLIDES SECTION ===== */}
      <section
        className="w-full flex flex-col md:flex-row items-center justify-between px-10 md:px-24 py-20 text-black transition-all duration-700 ease-in-out"
        style={{ backgroundColor: slides[currentSlide].bg }}
      >
        <div
          className={`md:w-1/2 flex flex-col items-center justify-center space-y-8 text-center md:text-left transform transition-all duration-700 ease-in-out ${
            isAnimating ? "opacity-70 translate-x-2" : "opacity-100 translate-x-0"
          }`}
        >
          <p className="text-sm font-mono tracking-widest">{slides[currentSlide].tag}</p>
          <h2 className="text-6xl font-serif">{slides[currentSlide].title}</h2>
          <p className="text-lg font-mono leading-relaxed">{slides[currentSlide].description}</p>
          <button className="bg-[#EFE6DD] border border-black rounded-full px-8 py-3 font-mono text-sm tracking-wider shadow-[2px_3px_0_#000] hover:translate-y-[2px] hover:shadow-none transition-all">
            {slides[currentSlide].button}
          </button>

          {/* ARROWS */}
          <div className="flex space-x-4 pt-6">
            <button
              onClick={handlePrev}
              className="bg-[#EFE6DD] border border-black rounded p-3 shadow-[2px_3px_0_#000] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-[#EFE6DD] border border-black rounded p-3 shadow-[2px_3px_0_#000] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:w-1/2 mt-10 md:mt-0 flex justify-center transform transition-all duration-700 ease-in-out ${
            isAnimating ? "opacity-70 scale-95 translate-y-2" : "opacity-100 scale-100 translate-y-0"
          }`}
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            width={500}
            height={500}
            className="rounded-3xl w-[90%] max-w-lg aspect-square object-cover shadow-lg"
          />
        </div>
      </section>

      {/* ===== IMAGE CAROUSEL ===== */}
      <section className="w-full bg-[#FAEBDD] py-16 px-6 md:px-12 text-[#1E1E1E]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-0">See What We’re Whisking Up</h3>
          <a
            href="https://www.instagram.com/empressmatcha/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-b border-black font-mono text-sm tracking-wide hover:opacity-80 transition"
          >
            FOLLOW US
            <span className="bg-[#8BAE74] text-[#1A1A1A] rounded-md p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 6.75L6.75 17.25M17.25 6.75H9.75m7.5 0v7.5" />
              </svg>
            </span>
          </a>
        </div>

        <div
          ref={carouselRef}
          className="overflow-x-scroll scrollbar-hide flex space-x-10 pb-4 select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {doubledImages.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`carousel-${i}`}
              width={288}
              height={320}
              className="rounded-3xl object-cover flex-shrink-0 hover:scale-105 transition-transform duration-300 pointer-events-none"
              priority
            />
          ))}
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="border-t border-dotted border-[#333] mt-20 opacity-40"></div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="w-full bg-[#FAEBDD] text-black py-6 flex flex-col md:flex-row items-center justify-between px-8 text-sm font-mono border-t border-[#ccc]">
        <p className="mb-3 md:mb-0">&copy; {new Date().getFullYear()} Empress Matcha</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:opacity-80 transition">Privacy Policy</a>
          <a href="#" className="hover:opacity-80 transition">Terms</a>
          <a href="#" className="hover:opacity-80 transition">Contact</a>
        </div>
      </footer>
    </main>
  );
}
