// assets
import MercuryImage from "assets/images/mercury.png";
import VenusImage from "assets/images/venus.png";
import EarthImage from "assets/images/earth.png";
import MarsImage from "assets/images/mars.png";
import JupiterImage from "assets/images/jupiter.png";
import SaturnImage from "assets/images/saturn.png";
import UranusImage from "assets/images/uranus.png";
import NeptuneImage from "assets/images/neptune.png";
import { randomDate } from "utils";

type Job_Type =
  | "full time"
  | "contract"
  | "part-time"
  | "freelance"
  | "moonlighting"
  | "internship";
export const JOB_TYPES: Job_Type[] = [
  "full time",
  "contract",
  "part-time",
  "freelance",
  "moonlighting",
  "internship",
];

type Job_Field =
  | "ui design"
  | "front-end development"
  | "back-end development"
  | "app development";
export const JOB_FILEDS: Job_Field[] = [
  "ui design",
  "front-end development",
  "back-end development",
  "app development",
];

type Planet =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

export type PlanetObject = { name: Planet; color: string; image: string };
export const PLANETS: PlanetObject[] = [
  {
    name: "mercury",
    color: "#34A789",
    image: MercuryImage,
  },
  {
    name: "venus",
    color: "#DD6F6B",
    image: VenusImage,
  },
  {
    name: "earth",
    color: "#82AE25",
    image: EarthImage,
  },
  {
    name: "mars",
    color: "#E15E38",
    image: MarsImage,
  },
  {
    name: "jupiter",
    color: "#E1B12D",
    image: JupiterImage,
  },
  {
    name: "saturn",
    color: "#EA8C49",
    image: SaturnImage,
  },
  {
    name: "uranus",
    color: "#1B92B0",
    image: UranusImage,
  },
  {
    name: "neptune",
    color: "#1F96B9",
    image: NeptuneImage,
  },
];

export type Skill =
  | "NODEJS 91"
  | "SUPER JS"
  | "HTML 45"
  | "CSS 43"
  | "REACTJS 53";
export const SKILLS: Skill[] = [
  "NODEJS 91",
  "SUPER JS",
  "HTML 45",
  "CSS 43",
  "REACTJS 53",
];

export type Job = {
  _id: string;
  title: string;
  description: string;
  necessarySkills: Skill[];
  jobField: Job_Field;
  company: { name: string; image: string };
  jobType: Job_Type;
  location: PlanetObject;
  pays: number;
  date: Date;
};

// created using online json generator [https://next.json-generator.com/]
export const Jobs: Job[] = [
  {
    _id: "6030f7b8e6f44224faa77f59",
    company: {
      name: "Facebook",
      image:
        "https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_640.png",
    },
    location: {
      name: "neptune",
      color: "#1F96B9",
      image: NeptuneImage,
    },
    description:
      "Dolor dolore in sunt fugiat excepteur ut qui enim deserunt ex commodo labore culpa. Ex in aute fugiat dolor incididunt sit. Enim ad veniam quis qui ut mollit aute laborum. Non ut in labore exercitation deserunt sit aliqua Lorem. Enim dolore do consectetur ipsum cupidatat magna ex excepteur sit in adipisicing sit.",
    title: "laboris",
    jobType: "full time",
    jobField: "front-end development",
    necessarySkills: ["REACTJS 53", "SUPER JS"],
    pays: 1000,
    date: new Date(),
  },
  {
    _id: "6030f7b9a5ee0aae17ad3e30",
    company: {
      name: "Instagram",
      image:
        "https://cdn.neow.in/news/images/uploaded/2017/09/1506096601_insta01_story.jpg",
    },
    location: {
      name: "mercury",
      color: "#34A789",
      image: MercuryImage,
    },
    description:
      "Lorem reprehenderit veniam sit reprehenderit magna voluptate anim dolore pariatur labore veniam eiusmod ea quis. Ex occaecat fugiat nisi duis et reprehenderit reprehenderit ea anim pariatur nostrud. Et eu ea occaecat nisi quis esse nulla quis.",
    title: "ex",
    jobType: "internship",
    jobField: "back-end development",
    necessarySkills: ["SUPER JS", "CSS 43"],
    pays: 2000,
    date: randomDate(new Date(), new Date(2021, 3, 0)),
  },
  {
    _id: "6030f7b91653a54782e2cd70",
    company: {
      name: "Facebook",
      image:
        "https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_640.png",
    },
    location: {
      name: "saturn",
      color: "#EA8C49",
      image: SaturnImage,
    },
    description:
      "Excepteur enim ex deserunt qui et duis nulla eiusmod. Est laborum eu qui voluptate adipisicing amet id. Tempor cupidatat ea sint occaecat magna. Qui ut amet non aliqua est eu. Commodo aliqua aliquip quis ex quis anim fugiat quis. Dolor excepteur id sint fugiat aliqua.",
    title: "ut",
    jobType: "freelance",
    jobField: "app development",
    necessarySkills: ["SUPER JS", "CSS 43"],
    pays: 1500,
    date: randomDate(new Date(), new Date(2021, 3, 0)),
  },
  {
    _id: "6030f7b9ac99a2bd233c35e8",
    company: {
      name: "Facebook",
      image:
        "https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_640.png",
    },
    location: {
      name: "mars",
      color: "#E15E38",
      image: MarsImage,
    },
    description:
      "Qui aliquip id velit commodo elit id duis amet. Labore sunt dolor do amet velit sit. Esse consequat sit cillum elit adipisicing Lorem ipsum Lorem. Deserunt duis commodo amet sit incididunt ullamco quis ea excepteur. Non laboris nostrud anim ipsum sit esse cupidatat ut ut minim.",
    title: "anim",
    jobType: "part-time",
    jobField: "front-end development",
    necessarySkills: ["REACTJS 53", "HTML 45"],
    pays: 4000,
    date: randomDate(new Date(), new Date(2021, 3, 0)),
  },
  {
    _id: "6030f7b920fe00038598b1fe",
    company: {
      name: "Facebook",
      image:
        "https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_640.png",
    },
    location: {
      name: "earth",
      color: "#82AE25",
      image: EarthImage,
    },
    description:
      "Est duis dolore do dolor. Nostrud non irure cupidatat ut do aliqua eu non veniam dolor nisi sint excepteur. Excepteur duis culpa aliqua sit consectetur ad duis magna duis culpa ut.",
    title: "aliquip",
    jobType: "internship",
    jobField: "back-end development",
    necessarySkills: ["HTML 45", "SUPER JS"],
    pays: 5000,
    date: randomDate(new Date(), new Date(2021, 3, 0)),
  },
  {
    _id: "6030f7b950d26f596449be01",
    company: {
      name: "Facebook",
      image:
        "https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_640.png",
    },
    location: {
      name: "earth",
      color: "#82AE25",
      image: EarthImage,
    },
    description:
      "Ea fugiat ex nisi incididunt ex. Nostrud aliquip nulla consectetur consequat ullamco. Ex id dolor tempor aliquip adipisicing duis dolore occaecat excepteur esse qui. In eiusmod cupidatat aliquip et ullamco.",
    title: "quis",
    jobType: "contract",
    jobField: "ui design",
    necessarySkills: ["NODEJS 91", "CSS 43"],
    pays: 6000,
    date: randomDate(new Date(), new Date(2021, 3, 0)),
  },
  {
    _id: "6030f7b9882ac8194d2c91cc",
    company: {
      name: "Twitter",
      image:
        "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/Twitter_Social_Icon_Square_Color-400px.png",
    },
    location: {
      name: "earth",
      color: "#82AE25",
      image: EarthImage,
    },
    description:
      "Magna ullamco laboris adipisicing mollit qui sunt ex excepteur veniam tempor nisi est. Officia qui et reprehenderit anim non consequat occaecat. Velit pariatur non dolore magna irure excepteur nisi proident. Et dolore aliqua ullamco laborum aliquip est ad et irure anim.",
    title: "aliquip",
    jobType: "internship",
    jobField: "back-end development",
    necessarySkills: ["HTML 45", "CSS 43"],
    pays: 2000,
    date: randomDate(new Date(), new Date(2021, 3, 0)),
  },
];
