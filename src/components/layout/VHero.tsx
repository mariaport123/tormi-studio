"use client";

import React, { useEffect, useRef } from 'react';

export const VideoHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.playbackRate = 0.2; 
      videoRef.current.play().catch(err => console.log(err));
    }
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-[#e5e5e5]">
      
      {/* Video with slightly softer entry */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 top-24 h-[calc(100%-6rem)] w-full object-cover grayscale contrast-110 brightness-95 opacity-90"
      >
        <source src="/hero-waves.mp4" type="video/mp4" />
      </video>

      {/* THE MULTI-STOP SOFT BLEND */}
      {/* This creates a 'feathered' edge that is impossible to see as a line */}
      <div className="absolute top-24 left-0 w-full h-64 z-10 pointer-events-none 
          bg-gradient-to-b 
          from-[#e5e5e5] 
          via-[#e5e5e5]/60 
          to-transparent">
      </div>

      {/* The Grain Overlay - helps hide the 'edge' of the video further */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </section>
  );
};