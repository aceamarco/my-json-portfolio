import { useEffect, useRef } from "react";

const GoogleCalendarButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Load the CSS (only once)
    if (
      !document.querySelector(
        'link[href="https://calendar.google.com/calendar/scheduling-button-script.css"]'
      )
    ) {
      const link = document.createElement("link");
      link.href =
        "https://calendar.google.com/calendar/scheduling-button-script.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // Load the script dynamically (only once)
    const existingScript = document.querySelector(
      'script[src="https://calendar.google.com/calendar/scheduling-button-script.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://calendar.google.com/calendar/scheduling-button-script.js";
      script.async = true;
      script.onload = () => {
        if (window.calendar && buttonRef.current) {
          // Clear previous buttons inside the target div
          buttonRef.current.innerHTML = "";

          window.calendar.schedulingButton.load({
            url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ12_aa6d6rubckWLP-7OYsixDbEs_5V1-7T0HmKBK5LniRQpUtW5Hb5Ch4ix46M4rdcl-0xMUJE?gv=true",
            color: "#EF6C00",
            label: "Book an appointment",
            target: buttonRef.current,
          });
        }
      };
      document.body.appendChild(script);
    } else if (window.calendar && buttonRef.current) {
      // Script is already loaded, just ensure the button doesn't duplicate
      buttonRef.current.innerHTML = "";
      window.calendar.schedulingButton.load({
        url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ12_aa6d6rubckWLP-7OYsixDbEs_5V1-7T0HmKBK5LniRQpUtW5Hb5Ch4ix46M4rdcl-0xMUJE?gv=true",
        color: "#EF6C00",
        label: "Book an appointment",
        target: buttonRef.current,
      });
    }
  }, []);

  return <div ref={buttonRef}></div>;
};

export default GoogleCalendarButton;
