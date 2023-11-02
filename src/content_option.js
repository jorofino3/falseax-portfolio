import takeOffGraph from "./assets/images/takeoff-graph.png";
import takeOffNumbers from "./assets/images/takeoff-numbres.png";
import landingEntire from "./assets/images/landing-entire.jpg";
import landingPart1 from "./assets/images/landing-part1.jpg";
import landingPart2 from "./assets/images/landing-part2.jpg";
import platformEntire from "./assets/images/platform-entire.png";
import platformGraph from "./assets/images/platform-graph.png";
import controlEntire from "./assets/images/control-entire.jpg";
import controlDark from "./assets/images/control-dark.png";
import controlGraph from "./assets/images/control-graph.jpg";

const logotext = "Avery";
const meta = {
  title: "Avery's Portfolio", // this is in the tab title
  description:
    "I'm Avery Truax. I am a student at Georgia Tech studying Aerospace Engineering.",
  // ^^this is in the meta description of the website. It is mostly used for SEO optimization. If you want to have your website pop up when people search for certain keywords, you should put them here, add those terms or phrases here.
};

const introdata = {
  title: "I’m Avery Truax",
  animated: {
    first: "I am a Student at Georgia Tech",
    second: "I am the Co-Founder of GTSC",
    third: "I am a Team Lead at Design, Build, Fly",
    fourth: "Lose in Smash to Joey allll the time ",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [
  {
    jobtitle: "Title 1",
    where: "Georgia Tech",
    date: "2020 - 2024",
  },
  {
    jobtitle: "Title 2",
    where: "Georgia Tech",
    date: "2020 - 2024",
  },
  {
    jobtitle: "Title 3",
    where: "Georgia Tech",
    date: "2020 - 2024",
  },
];

const skills = [
  // name: name of skill
  // value: percentage of confidence in skill
  {
    name: "Skill 1",
    value: 90,
  },
  {
    name: "Skill 2",
    value: 85,
  },
  {
    name: "Skill 3",
    value: 80,
  },
  {
    name: "Skill 4",
    value: 60,
  },
  {
    name: "Skill 5",
    value: 85,
  },
];

const interests = [
  {
    title: "Computational Fluid Dynamics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Planez",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Lila",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];
const dataportfolio = [
  {
    projectTitle: "Takeoff Distance Simulation",
    description:
      "During This project, I wrote a script that would intake certain parameters about a plane such as the thrust it produces, some of the platform details like wingspan and AR, and the weight of the payload and structure based on historical data. The script would then iterate through starting incidence angles that the plane takes off at and output a plot showing what sort of takeoff distances you would be getting from certain incidence angles.",
    images: [takeOffGraph, takeOffNumbers],
    // images: [takeOffGraph, takeOffNumbers, takeOffCode1, takeOffCode2] looks wack
  },
  {
    projectTitle: "Landing Gear Design",
    description:
      "During this project, I was tasked with making the landing gear for our new plane configuration. The gear needed redesign because of the bottom geometry of the planform changing. I designed the gear with the load path in mind, with the goal of distributing the load as much as possible throughout the bottom of the bulkheads in the fuselage. The Mounts to the Landing gear were also a challenge as the mounting points were at a point of curvature and needed to allow space between the mounts and the gear so that we could strengthen the Gear. Afterwards The CAD was finished, the landing gear was manufactured using a 3d printed mold and composite layup around to add bending stiffness to the structure.",
    images: [landingEntire, landingPart1, landingPart2],
  },

  {
    projectTitle: "Planform Geometry Optimization",
    description:
      "In this project, we used results that we obtained from running a neural network of 14 design parameters to create 10,000 different design points for our plane. We then selected the parameters that would suit the performance of our aircraft the best and I parametrized them in a Python wrapper that would interface with an analysis software called VORSTAB. I would then collect data on the performance of the aircraft and iterate through different design points that we wanted to hit to see what kind of different results we would get for our aircraft. It was through this analysis as well as CFD that was run later that we chose the optimal design point for our aircraft.",
    images: [platformEntire, platformGraph],
  },
  {
    projectTitle: "Control Surface Sizing",
    description:
      "During this project. I was tasked with appropriately sizing the Vertical Stabilizer for an aircraft that we had to develop in less than two weeks. I iterated between two different design points, those being one with one vertical stabilizer, and the other being one with two outboard vertical stabilizers. The choice was made to go with one as it would save structural weight in the final design and we would get the added bonus of having the control surface being blown for additional yaw authority. Once appropriately sized, a basic vstab was cadded so that we could run CFD to see where the prop wash was hitting the stabilizer. We analyzed this specific point so that we could see if we would be getting any sort of passive stability from the rudder. We ended up making the Vstab tall enough so that it gave us enough passivle stability to complete the mission and the initial design flew successfully. During this I also built a calculator that would take geometric parameters that we wanted for the Vstab and output coordinates that could then be put into the AVL file used to analyze the aircraft.",
    images: [controlEntire, controlDark, controlGraph],
  },
];

const frequentlyAskedQuestions = [
  {
    question: "What is my graduation date?",
    answer: "example answer..",
  },
  {
    question: "Questions 2?",
    answer: "example answer..",
  },
  {
    question: "Question 3?",
    answer: "example answer..",
  },
];

const contactConfig = {
  YOUR_EMAIL: "name@domain.com",
  YOUR_FONE: "(555)123-4567",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  instagram: "https://www.instagram.com/avery_truax/",
  linkedin: "https://www.linkedin.com/in/avery-truax/",
  //   email: "mailto: atruax3@gatech.edu",
};
export {
  meta,
  dataabout,
  dataportfolio,
  frequentlyAskedQuestions,
  worktimeline,
  skills,
  interests,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
