"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutHistory.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutHistory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Fade-in section reveal
      gsap.fromTo(
        ".evolution-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} evolution-reveal`}>
          <span className={styles.badgeLabel}>2009 – 2026 EVOLUTION</span>
          <h2 className={styles.title}>
            Our Journey of <span className={styles.accentText}>Evolution</span>
          </h2>
        </div>

        {/* Compact Aligned 2-Card Transformation */}
        <div className={`${styles.evolutionGrid} evolution-reveal`}>
          {/* 2009 Card */}
          <div className={`${styles.card} ${styles.card2009}`}>
            <div className={styles.cardHeader}>
              <span className={styles.yearNumber}>2009</span>
              <span className={styles.tagPill}>INCEPTION</span>
            </div>
            <h3 className={styles.cardTitle}>Founding Printing Setup</h3>
            <p className={styles.cardSub}>Established core B2B label & packaging operations.</p>
          </div>

          {/* Center Connector */}
          <div className={styles.connector}>
            <div className={styles.line}></div>
            <div className={styles.badge}>
              <span>17 YEARS</span>
            </div>
          </div>

          {/* 2026 Card */}
          <div className={`${styles.card} ${styles.card2026}`}>
            <div className={styles.cardHeader}>
              <span className={`${styles.yearNumber} ${styles.yearActive}`}>2026</span>
              <span className={styles.tagPillActive}>GLOBAL LEADER</span>
            </div>
            <h3 className={styles.cardTitle}>Global Packaging Reach</h3>
            <p className={styles.cardSub}>Supplying 50+ industries with automated precision.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
