import React, { useEffect, useState } from "react";
import { palette } from "@/components/Common";
import "@/styles/NavPanel.css";

export default function NavPanel({ data }) {
  // State to track which frame is in view, default to first section
  const [inView, setInView] = useState(data[0].name);

  useEffect(() => {
    // Function to reset scroll position to the top of the page on component mount
    function noscroll() {
      window.scrollTo(0, 0);
    }

    // Add listener to disable scroll
    window.addEventListener("scroll", noscroll);

    // Remove the scroll disabling listener after a delay
    const timeoutId = setTimeout(() => {
      window.removeEventListener("scroll", noscroll);
    }, 0.5);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(entry.target.id); // assuming `id` or similar is present
          }
        });
      },
      { threshold: [0.8] }
    );

    data.forEach((item) => {
      if (item.ref.current) {
        observer.observe(item.ref.current);
      }
    });

    return () => {
      // Clean up the observer and timeout on component unmount
      data.forEach((item) => {
        if (item.ref.current) {
          observer.unobserve(item.ref.current);
        }
      });
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", noscroll);
    };
  }, [data]);

  // Function to scroll to the component at the given index
  const scrollToOnClick = (index) => {
    console.log("scroll!");
    if (data[index].ref.current) {
      data[index].ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nav-panel">
      {/* Render navigation divs based on data */}
      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => scrollToOnClick(index)}
          className={inView === item.name ? "in-view" : ""}
          style={{
            fontSize: inView === item.name ? "larger" : "initial",
            color: inView === item.name ? palette.accent.default : palette.text,
            cursor: "pointer",
            margin: "10%",
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
