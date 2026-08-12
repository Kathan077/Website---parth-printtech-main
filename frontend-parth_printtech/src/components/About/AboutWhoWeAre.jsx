"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutWhoWeAre.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RegistrationMark = ({ style }) => (
  <div className={styles.regMark} style={style}>
    <div className={styles.regMarkCircle}></div>
  </div>
);

const highlights = [
  {
    id: "tech",
    title: "High-Speed Press Tech",
    description: "Multicolor rotogravure and CI flexo printing delivering ultra-sharp registration and vibrant color fidelity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    id: "engineering",
    title: "Precision Engineering",
    description: "Pre-distorted dieline software and 3D shrink contour simulations for seamless container fitting.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    id: "quality",
    title: "Micron-Level QA",
    description: "Automated optical inspection and strict micron tolerance checks at every phase of manufacturing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    id: "sustainability",
    title: "Eco Substrates",
    description: "Optimized PETG and recyclable film substrates engineered to minimize environmental impact.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  }
];

const AboutWhoWeAre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header entrance animation
      gsap.fromTo(
        ".ab-who-reveal",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Card grid entrance
      gsap.fromTo(
        ".ab-who-card",
        { y: 40, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ab-who-grid",
            start: "top 82%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Background blueprint overlay */}
      <div className={styles.blueprintOverlay}></div>

      {/* Alignment Marks */}
      <div className={styles.registrationOverlay}>
        <RegistrationMark style={{ left: "3%", top: "4%" }} />
        <RegistrationMark style={{ right: "3%", top: "4%" }} />
        <RegistrationMark style={{ left: "3%", bottom: "4%" }} />
        <RegistrationMark style={{ right: "3%", bottom: "4%" }} />
      </div>

      <div className={styles.container}>
        {/* Main Grid: Left Content & Right Visual Showcase */}
        <div className={styles.mainGrid}>
          
          {/* Left Column: Heading & Narrative */}
          <div className={styles.leftCol}>
            <div className={`${styles.subtitle} ab-who-reveal`}>
              <span className={styles.blueDot}></span> WHO WE ARE
            </div>
            
            <h2 className={`${styles.title} ab-who-reveal`}>
              Pioneers in <span className={styles.accentText}>Precision Packaging</span> & Modern Labeling
            </h2>

            <p className={`${styles.leadText} ab-who-reveal`}>
              At Parth Printtech, we combine technical excellence with state-of-the-art manufacturing to produce world-class shrink sleeve packaging and high-precision labeling solutions.
            </p>

            <p className={`${styles.bodyText} ab-who-reveal`}>
              Since 2009, we have partnered with leading brands across FMCG, cosmetics, pharmaceuticals, food & beverage, and industrial sectors. Our specialized facility operates high-speed gravure and flexographic presses engineered to meet demanding commercial volume while maintaining strict micron tolerances.
            </p>

            <div className={`${styles.metricsRow} ab-who-reveal`}>
              <div className={styles.metricCard}>
                <span className={styles.metricVal}>17+</span>
                <span className={styles.metricLbl}>Years of Experience</span>
              </div>
              <div className={styles.metricDivider}></div>
              <div className={styles.metricCard}>
                <span className={styles.metricVal}>50+</span>
                <span className={styles.metricLbl}>Sectors Served</span>
              </div>
              <div className={styles.metricDivider}></div>
              <div className={styles.metricCard}>
                <span className={styles.metricVal}>100%</span>
                <span className={styles.metricLbl}>Quality Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame & Blueprint Aesthetics */}
          <div className={styles.rightCol}>
            <div className={`${styles.imageFrame} ab-who-reveal`}>
              <div className={styles.wireframeBorder}></div>
              <img
                src="/images/Who_We_Are.jpg"
                alt="Parth Printtech State-of-the-art facility"
                className={styles.facilityImage}
              />
              
           
            </div>
          </div>

        </div>

        {/* Highlight Cards Grid */}
        

      </div>
    </section>
  );
};

export default AboutWhoWeAre;
