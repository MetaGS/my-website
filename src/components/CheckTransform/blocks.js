import javaScriptPic from "../../assets/javaScript.png";
import bestCodePic from "../../assets/best-code.png";
import clearCodePic from "../../assets/clear-code.png";
import animationPic from "../../assets/animation.png";
import reactPic from "../../assets/react.png";
import firebasePic from "../../assets/firebase.png";
import "./blocks.css";

const randomColor = () => {
  const color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
  return color;
};

export default [
  {
    photo: javaScriptPic,
    alt: "I have a huge expirience in JS",
    subtitle: "or TypeScript",
    title: "popular Language",
    description: `I'm a master of javaScript related technologies. I write the programs which turns over the world`,
  },
  {
    photo: animationPic,
    alt: "animation framerworks, and own solutions",
    subtitle: "Beautiful animations",
    photoClassName: "animation-block",
    children: (
      <div className="blocks__animation-block">
        {Array(7)
          .fill(null)
          .map((_, index) => {
            return (
              <span
                className={`animation-block__animation animation-block__animation${index}`}
                style={{
                  backgroundColor: randomColor(),
                  transform: `scaleY(${Math.random()})`,
                  animationDelay: `${Math.floor(Math.random() * 20)}s`,
                  animationDuration: `${Math.floor(Math.random() * 25 + 20)}s`,
                }}
              ></span>
            );
          })}
      </div>
    ),
    title: "Animations",
    description:
      "I use animation libriries and write them with pure css and javascript as well. So animation becomes less cpu consumable",
  },
  {
    photo: bestCodePic,
    alt: "Blocks Description",
    title: "My Applications",
    subtitle: "How do I write the Code",
    description: `Hi, This blocks' purposes is to show, how do I develop app. Please swipe or click to blocks to see.
  `,
  },
  {
    photo: clearCodePic,
    alt: "clear code",
    title: "Clear Code",
    subtitle: "for best support",
    description: `I think i’d rewrite it - If it was at a very early stage - And i’d keep it as is, if it’s a very late stage project and large codebase.
  `,
  },
  {
    photo: reactPic,
    photoClassName: "react-icon",
    alt: "Use react in projects",
    title: "React",
    subtitle: "Best library",
    description: `I have experience in React more than 3years an all my projects are written in this library. Experienced in all the component's lifecycles and library's quirk parts`,
  },
  {
    photo: firebasePic,
    alt: "use firebase ",
    title: `Backend languages, and firebase platform',
      `,
    description: `Expirienced in server languages, and platforms. Express.js as framerwork with node.js and Firebase for serverless app.`,
  },
];
