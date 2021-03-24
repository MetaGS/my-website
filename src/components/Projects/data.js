import storePic from "../../assets/first-project.png";
import aiProjectPic from "../../assets/third-project.jpg";
import smallBusinessPic from "../../assets/second-project.jpg";
import turanGroup from "../../assets/fourth-project.jpg";

const projectItems = [
  {
    name: "Online shop",
    description:
      'This project was ordered by shop store from Bishkek, the fronend written in Reactjs, the "back" is on firebase, production ready',
    photo: storePic,
  },
  {
    name: "Ai face Identification",
    description:
      "This project was ordered by Malaysian startup Darkface, which wanted to have technology to layer glasses on face with ai. The companies web app made by me, The startup is on stage of gaining venture capitals",
    photo: aiProjectPic,
  },
  {
    name: "Turan Group",
    description:
      "I created web app for company called Turan group, which engaged in logistics. Created, maintained through 2018 to 2020, the app uses in their own network due to privacy",
    photo: turanGroup,
  },
  {
    name: "Small Business cashmachine app",
    description:
      "Developed the web app for startup to easy the bookkeeping for small businesses in Kyrgyzstan. The app is in private repository due to the customer cares of commercial privacy before full production",
    photo: smallBusinessPic,
  },
];

export default projectItems;
