import { ChevronCompactDown } from "react-bootstrap-icons";
import { TypeAnimation } from "react-type-animation";
import { palette } from "@/components/Common";

/**
 * Hero component displays a name and an animated sequence of descriptors.
 *
 * @param {Object} props - The props for the Hero component.
 * @param {string} props.name - The name to display.
 * @param {string} props.color - The color of the name text.
 * @param {string[]} props.descriptors - An array of strings for animated descriptors.
 * @param {number} props.delay - The delay between descriptors.
 * @param {string} props.descriptorColor - The color for the descriptor text.
 * @param {Object} [props.animationStyles=null] - Additional styles for the TypeAnimation component.
 * @returns {React.Component} - The Hero component with animated descriptors.
 */
export function Hero({
  name = "Marco Acea",
  color = palette.text,
  descriptors = ["Developer", "Designer", "Maker"],
  delay = 1500,
  descriptorColor = palette.accent.default,
  animationStyles = null,
}) {
  const styles = {
    frame_container: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "2%",
    },
    name_container: {
      width: "50%",
      display: "flex",
      justifyContent: "end",
    },
    descriptior_container: {
      width: "50%",
      display: "flex",
      justifyContent: "start",
    },
  };
  return (
    <div style={styles.frame_container}>
      <div style={styles.name_container}>
        <h1 id="name" style={{ color }}>
          {name}
        </h1>
      </div>
      <div style={styles.descriptior_container}>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            "", // Start with an empty string
            ...descriptors.flatMap((descriptor) => [descriptor, delay]),
            () => {
              console.log("sequence completed");
            },
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          style={{
            whiteSpace: "pre-line",
            color: descriptorColor, // Using descriptorColor for the descriptors text
            fontSize: "2em",
            display: "inline-block",
            ...animationStyles, // Spread additional styles
          }}
        />
      </div>
    </div>
  );
}

/**
 * LandingPageGuide component displays a guide icon with customizable color and size.
 *
 * @param {Object} props - The props for the LandingPageGuide component.
 * @param {string} [props.color=palette.text] - The color of the icon.
 * @param {number} [props.size=96] - The size of the icon.
 * @returns {React.Component} - The LandingPageGuide component with customizable icon.
 */
export function LandingPageGuide({ color = palette.text, size = 96 }) {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div style={styles.container}>
      <ChevronCompactDown size={size} color={color} />
    </div>
  );
}

export default function LandingFrame({
  HeroComponent = Hero,
  LandingPageGuideComponent = LandingPageGuide,
  heroProps,
  guideProps,
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ height: "80vh", width: "100%" }}>
        <HeroComponent {...heroProps} />
      </div>
      <div style={{ height: "20vh", width: "100%" }}>
        <LandingPageGuideComponent {...guideProps} />
      </div>
    </div>
  );
}
