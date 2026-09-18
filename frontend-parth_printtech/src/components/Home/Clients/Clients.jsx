"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Clients.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const clientLogos = [
  {
    id: "gulab",
    name: "Gulab Oils",
    logoSrc: "/logo/gulab_oils.webp"
  },
  {
    id: "flexibond",
    name: "Flexibond",
    logoSrc: "/logo/flexibond.webp"
  },
  {
    id: "gokul",
    name: "Gokul Sweets",
    logoSrc: "/logo/gokul.webp"
  }
];

// Column 1, 2, and 3 logo sequences for infinite smooth movement
const col1Logos = [clientLogos[0], clientLogos[1], clientLogos[2]];
const col2Logos = [clientLogos[1], clientLogos[2], clientLogos[0]];
const col3Logos = [clientLogos[2], clientLogos[0], clientLogos[1]];

const Clients = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal header details
      gsap.fromTo(
        ".clients-reveal",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Reveal grid block
      gsap.fromTo(
        ".clients-grid-reveal",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.mainContainer}>
        
        {/* Left Side: Title & Description */}
        <div className={`${styles.contentSide} clients-reveal`}>
          <h2 className={styles.title}>
            Trusted by the <span className={styles.outlinedText}>Industry Leaders</span>
          </h2>
          <p className={styles.description}>
            We design, manufacture, and print high-performance packaging and shrink sleeves for trusted market leaders like Gulab Oils, Flexibond, and Gokul Sweets.
          </p>
        </div>

        {/* Right Side: Triple Vertical Columns for real brand logos */}
        <div className={`${styles.marqueeSide} clients-grid-reveal`}>
          
          {/* Column 1 */}
          <div className={styles.column}>
            <div className={`${styles.track} ${styles.trackDown}`}>
              {[...col1Logos, ...col1Logos, ...col1Logos].map((item, idx) => (
                <div key={`${item.id}-c1-${idx}`} className={styles.logoCard}>
                  <Image
                    src={item.logoSrc}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={styles.clientLogoImage}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className={styles.column}>
            <div className={`${styles.track} ${styles.trackUp}`}>
              {[...col2Logos, ...col2Logos, ...col2Logos].map((item, idx) => (
                <div key={`${item.id}-c2-${idx}`} className={styles.logoCard}>
                  <Image
                    src={item.logoSrc}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={styles.clientLogoImage}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div className={styles.column}>
            <div className={`${styles.track} ${styles.trackDown}`}>
              {[...col3Logos, ...col3Logos, ...col3Logos].map((item, idx) => (
                <div key={`${item.id}-c3-${idx}`} className={styles.logoCard}>
                  <Image
                    src={item.logoSrc}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={styles.clientLogoImage}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Clients;
