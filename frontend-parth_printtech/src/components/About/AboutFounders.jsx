"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutFounders.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RegistrationMark = ({ style }) => (
  <div className={styles.regMark} style={style}>
    <div className={styles.regMarkCircle}></div>
  </div>
);

const AboutFounders = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".ab-founders-reveal",
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

      // Card animation
      gsap.fromTo(
        ".ab-founders-card",
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.blueprintOverlay}></div>

      {/* Alignment Marks */}
      <div className={styles.registrationOverlay}>
        <RegistrationMark style={{ left: "3%", top: "4%" }} />
        <RegistrationMark style={{ right: "3%", top: "4%" }} />
        <RegistrationMark style={{ left: "3%", bottom: "4%" }} />
        <RegistrationMark style={{ right: "3%", bottom: "4%" }} />
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={`${styles.subtitle} ab-founders-reveal`}>
            <span className={styles.blueDot}></span> LEADERSHIP & VISION
          </div>
          <h2 className={`${styles.title} ab-founders-reveal`}>
            Meet Our <span className={styles.accentText}>Founders</span>
          </h2>
          <p className={`${styles.description} ab-founders-reveal`}>
            Driven by technical innovation and an unwavering commitment to packaging excellence.
          </p>
        </div>

        {/* 1 Image on the left + 2 Names & 1-line descriptions on the right */}
        <div className={`${styles.foundersCard} ab-founders-card`}>
          
          {/* Single Image Column */}
          <div className={styles.imageColumn}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/clients/world_map_blueprint.png"
                alt="Parth Printtech Founders"
                fill
                className={styles.founderImage}
                priority
                onError={(e) => {
                  e.target.src = "/images/world_map_blueprint.png";
                }}
              />
              <div className={styles.imageOverlayBadge}>
                <span>FOUNDERS & DIRECTORS</span>
              </div>
            </div>
          </div>

          {/* Two Founders Details Column */}
          <div className={styles.detailsColumn}>
            
            {/* Founder 1 */}
            <div className={styles.founderBlock}>
              <div className={styles.founderHeader}>
                <span className={styles.founderIndex}>01</span>
                <div>
                  <h3 className={styles.founderName}>Parth Patel</h3>
         
                </div>
              </div>
              <p className={styles.founderDesc}>
                Leading strategic vision and technology adoption in high-precision shrink sleeves and printing innovation.
              </p>
            </div>

            <div className={styles.divider}></div>

            {/* Founder 2 */}
            <div className={styles.founderBlock}>
              <div className={styles.founderHeader}>
                <span className={styles.founderIndex}>02</span>
                <div>
                  <h3 className={styles.founderName}>Shailesh Patel</h3>

                </div>
              </div>
              <p className={styles.founderDesc}>
                Pioneering industrial print engineering, rotogravure calibrations, and operational excellence across commercial markets.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutFounders;
