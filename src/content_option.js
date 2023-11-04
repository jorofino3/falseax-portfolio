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
import Tail1 from "./assets/images/Tail1.JPG";
import Tail2 from "./assets/images/Tail2.JPG";
import Tail3 from "./assets/images/Tail3.JPG";
import VSP from "./assets/images/VSP.png";

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
    fourth: "I love playing Guitar and Soccer",
    fifth: "I enjoy learning about all things in my free time",
  },
  description:
    " I'm an Aerospace Engineering major at the Georgia Institute of Technology, where I've honed my passion for aerospace engineering over the past year. My academic journey includes three years of intensive mathematical study at the University of North Georgia, further fueling my analytical skills. \r Welcome To My Portfolio",
};

const dataabout = {
  title: "A bit about my self",
  aboutme:
    "Currently, I wear multiple hats: I lead the Design Build Fly team at Georgia Tech, where I work with a team to dive into the realm of conceptual design, flight test engineering, manufacturing, and many other disciplines. Additionally, as a Co-founder and Aerodynamics Team Lead for the Georgia Tech Supersonics Club, I have the privilege of organizing a dedicated group of engineers and enthusiasts. Here I am developing skills in the realms of Performance Analysis, Controls, Structures, and much more.  \n Beyond the world of aerospace, I find joy in my simple interests. You might find me playing my guitar, navigating disc golf courses, or perfecting my pickleball game with friends and family.",
};
const worktimeline = [
  {
    jobtitle: "Aerodynamics Team Lead",
    where: "Georgia Tech",
    date: "August 2023 - Present",
  },
  {
    jobtitle: "Micro Class Team Lead",
    where: "Georgia Tech",
    date: "August 2023 - Present",
  },
  {
    jobtitle: "Supplemental Instructor",
    where: "University of North Georgia",
    date: "Jan 2020 - May 2020",
  },
  {
    jobtitle: "Lead Instructor",
    where: "Mathnasium",
    date: "June 2020 - July 2021",
  },
];

const skills = [
  // name: name of skill
  // value: percentage of confidence in skill
  {
    name: "AVL",
    value: 95,
  },
  {
    name: "Matlab",
    value: 75,
  },
  {
    name: "SolidWorks",
    value: 85,
  },
  {
    name: "Python",
    value: 60,
  },
  {
    name: "VORSTAB",
    value: 80,
  },
  {
    name: "ANSYS Fluent",
    value: 65,
  },
  {
    name: "Open VSP",
    value: 90,
  },
];

const interests = [
  {
    title: "Computational Fluid Dynamics",
    description:
      "I am Currently involved in undergraduate research and coursework pertaining to this field. I enjoy the whole process of creating meshes that appropriately capture the physics of the given scenario as well as interpreting and validating results.",
  },
  {
    title: "Aerodynamic / Performance Analysis",
    description:
      "I love creating wacky aircraft configurations that have unique aerodynamic characteristics and analyzing their performance traits before manufacturing ever begins.",
  },
  {
    title: "Control Systems",
    description:
      "I am new to this realm of Aerospace Engineering, but I thoroughly enjoy watching how mathematical systems translate to real life phenomenons and how we can predict the behavior of complex dynamic systems using different mathematical methods \n I hope to grow my knowledge in this field via future projects and courses.",
  },
  {
    title: "Flight Test Engineering",
    description:
      "I love conducting performance tests on aircrafts. Having a tangible objective for the aircraft to deliver on and planning out tests to determine if the aircraft is capable is something that I love doing and find myself putting into practice frequently at DBF",
  }
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
      "During this project. I was tasked with appropriately sizing the Vertical Stabilizer for an aircraft that we had to develop in less than two weeks. I iterated between two different design points, those being one with one vertical stabilizer, and the other being one with two outboard vertical stabilizers. The choice was made to go with one as it would save structural weight in the final design and we would get the added bonus of having the control surface being blown for additional yaw authority. Once appropriately sized, a basic Vstab was Cadded so that we could run CFD to see where the prop wash was hitting the stabilizer. We analyzed this specific point so that we could see if we would be getting any sort of passive stability from the rudder. We ended up making the Vstab tall enough so that it gave us enough passive stability to complete the mission and the initial design flew successfully. During this I also built a calculator that would take geometric parameters that we wanted for the Vstab and output coordinates that could then be put into the AVL file used to analyze the aircraft.",
    images: [controlEntire, controlDark, controlGraph],
  },
  {
    projectTitle: "Monoplane Tail",
    description:
      "During this project, I used a python script that interfaced with AVL to quickly run through and analyze different configurations for a monoplane tail. The configuration that we were looking at was extremely unconventional and analyzing it was a challenge in and of itself. We needed to keep the stability of the plane within a certain range, but also keep in mind the effects of the large amount of downwash we would be getting from our wing. After correctly sizing the tail and confirming the interface of the tail with other people on the team, I developed the tail and the means of load transference between the tail and the fuselage. After the concepts were laid out I created a fully Parametrized CAD of the tail configuration in a week. This allowed us to change important dimensions that drove the construction of the tail itself such as the offset distance between the leading edge of the VStab and the torsion box. While I was making the tail I had to keep in mind our manufacturing process and also integrate tolerances into the drawings and dimensions so that we accounted for the width of the laser cutting the surfaces and also so we maintained good contact between the pieces during construction.",
    images: [Tail1, Tail2, Tail3],
  },
  {
    projectTitle: "VSP onboarding",
    description:
      "During this project, I developed an introduction / tutorial to the aircraft modeling software known as OpenVSP. This 5000+ word tutorial goes through the basics of the software, some tips and tricks that make life easier when using it, some annoying features to avoid, and goes into depth on some of the analysis tools that the software employs. It also runs the user through the full process of building their own model from scratch. The goal of the tutorial was to train members that me and other team leads had brought on so that they could quickly portray their ideas to us. It also allowed underclassmen to get exposed to more advanced aerodynamics concepts through some ideas mentioned in the tutorial, as well as through trial and error.",
    images: [VSP],
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

