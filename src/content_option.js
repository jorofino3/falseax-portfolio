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
import CFD1 from "./assets/images/3d-cfd-1.jpg";
import CFD2 from "./assets/images/3d-cfd-2.jpg";
import CFD3 from "./assets/images/3d-cfd-3.jpg";
import CFD4 from "./assets/images/3d-cfd-4.jpg";
import circuit1 from "./assets/images/Circuit1.jpg";
import circuit2 from "./assets/images/Circuit2.png";
import circuit3 from "./assets/images/Circuit3.png";
import circuit4 from "./assets/images/Circuit4.png";
import circuit5 from "./assets/images/Circuit5.jpg";
import constraint1 from "./assets/images/constraint1.png";
import constraint2 from "./assets/images/constraint2.png";
import constraint3 from "./assets/images/constraint3.png";
import vortex1 from "./assets/images/vortexshed1.png";
import vortex2 from "./assets/images/vortexshed2.png";
import vortex3 from "./assets/images/vortexshed3.png";
import vortex4 from "./assets/images/vortexshed4.png";
import vortex5 from "./assets/images/vortexshed5.png";
import doe0 from "./assets/images/doe_result_0.png";
import doe1 from "./assets/images/doe_result_1.png";
import doe2 from "./assets/images/doe_result_2.png";
import doe3 from "./assets/images/doe_result_3.png";
import doe4 from "./assets/images/doe_result_4.png";
import ASDL1 from "./assets/images/ASDL_workflow.png";
import ASDL2 from "./assets/images/ASDL_interp.png";
import ASDL3 from "./assets/images/ASDL_conv1.png";
import ASDL4 from "./assets/images/ASDL_conv2.png";
import PID_1 from "./assets/images/PID_1.png";
import PID_2 from "./assets/images/PID_2.png";
import PID_3 from "./assets/images/PID_3.png";
import PID_4 from "./assets/images/PID_4.png";
import PID_5 from "./assets/images/PID_5.png";
import hypersonic_1 from "./assets/images/hypersonic_1.png";
import hypersonic_2 from "./assets/images/hypersonic_2.png";



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
    first: "I am a Georgia Tech Graduate",
    second: "I have a bachelor's in Aerospace engineering and mathematics",
    third: "I won the SAE Aero Design competition",
    fourth: "I am the Co-Founder of GTSC",
    fifth: "I enjoy learning about all things in my free time",
  },
  description:
    " I am a recent graduate from the Georgia Institute of Technology with a Bachelor's degree in Aerospace Engineering and Mathematics. Over the past few years, I have developed my technical and professional skills and am eager to contribute to a company that fosters both my growth as an individual and my knowledge base as an engineer. Welcome to my portfolio.",
};

const dataabout = {
  title: "A bit about my self",
  aboutme:
    "The past few years in undergrad have played a major role in shaping me as an engineer and as a leader. As the former leader of Georgia Tech’s Design Build Fly team, I gained hands-on experience in conceptual design, flight test engineering, manufacturing, and collaboration within a talented team. As a Co-founder and former Aerodynamics Team Lead for the Georgia Tech Supersonics Club, I had the privilege of organizing and mentoring a group of passionate engineers, while developing expertise in performance analysis, testing hardware, structures, and more. Outside of aerospace, I enjoy playing guitar, and spending my time with friends and family.",
};
const worktimeline = [
  {
    jobtitle: "Aerodynamics Team Lead",
    where: "Georgia Tech",
    date: "August 2023 - December 2024",
  },
  {
    jobtitle: "Micro Class Team Lead",
    where: "Georgia Tech",
    date: "August 2023 - December 2024",
  },
  {
    jobtitle: "Research Engineer Intern",
    where: "NASA Glenn Research Center",
    date: "June 2024 - August 2024",
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
    name: "Star-CCM+",
    value: 75,
  },
  {
    name: "Matlab",
    value: 80,
  },
  {
    name: "C++",
    value: 60,
  },
  {
    name: "SolidWorks",
    value: 85,
  },
  {
    name: "Python",
    value: 90,
  },
  {
    name: "VORSTAB",
    value: 80,
  },
  {
    name: "ANSYS Fluent",
    value: 70,
  },
  {
    name: "Java",
    value: 55,
  },
  {
    name: "Tecplot",
    value: 85,
  },
  {
    name: "Open VSP",
    value: 90,
  },
  {
    name: "Pointwise",
    value: 75,
  },
];

const interests = [
  {
    title: "Computational Fluid Dynamics",
    description:
      "Computational Fluid Dynamics (CFD) is one of my preferred tools for analyzing and optimizing aerodynamic designs. I take pride in the entire process—from creating meshes that accurately capture the physics of a given scenario to interpreting and validating results to ensure their reliability.",
  },
  {
    title: "Aerodynamic / Performance Analysis",
    description:
      "I love creating unconventional aircraft configurations that have unique aerodynamic characteristics and analyzing their performance traits before manufacturing ever begins.",
  },
  {
    title: "Control Systems",
    description:
      "I am new to this realm of Aerospace Engineering, but I thoroughly enjoy watching how mathematical systems translate to real life phenomenons and how we can predict the behavior of complex dynamic systems using different mathematical methods \n Through various projects, my interest in this field has only grown, and I am continuing to delve into more theory to deepen my understanding of control system design",
  },
  {
    title: "Flight Test Engineering",
    description:
      "I love conducting performance tests on aircrafts. Having a tangible objective for the aircraft to deliver on and planning out tests to determine if the aircraft is capable is something that I love doing and find myself putting into practice frequently at DBF. I have also found myself designing and manufacturing pieces of flight test hardware that are used to validate analysis data from low and high fidelity analysis tools.",
  },
];
const dataportfolio = [
  {
    projectTitle: "Ogive Planform DOE",
    description:
      "This Design of Experiments was conducted to investigate the potential benefits of switching from a conventional delta to an ogive delta configuration in Design Build Fly. The leading edge of the planform was defined using a curve described in the first image below. Wing area was held constant across all runs to ensure consistent nondimensionalization. A Python wrapper around VORSTAB was modified to generate the desired planform based on the specified equation. The results showed that true ogive configurations did not achieve sufficient lift coefficients and exhibited worse induced drag parameters compared to the standard delta configuration. It was concluded that the straight leading edge of the standard delta provided better performance for low Reynolds number applications, while ogive planforms are more suited to scenarios involving wave drag or high Mach number phenomena.",
    images: [doe0 , doe1 , doe2, doe3, doe4],
  },
  {
    projectTitle: "NPSS Model CFD Aircraft Trimming.",
    description:
      "This project was conducted as part of my research at the Aerospace Systems Design Lab (ASDL). I developed a STAR-CCM+ macro to integrate engine face boundary conditions from a simulation with a Numerical Propulsion System Simulation (NPSS) model. Additionally, I wrote a Python script to perform radial basis function interpolation on the NPSS dataset, which allowed the simulation to use continuous flow metrics (Total Temperature, Total Pressure, Mass Flow Rate) instead of being limited to discrete data points from the engine model. The simulation was run with two different residual targeting methods, adjusting engine conditions to drive the net forces on the body to zero while maintaining the correct engine boundary conditions.",
    images: [ASDL1 , ASDL2 , ASDL3 , ASDL4],
  },
  {
    projectTitle: "PID Controller Design",
    description:
      "The objective of this project was to make a control system that would use a rudementary brake to  maintain a target speed of a cart place on an inclined slope. The brake design consisted of an ruler attached to a hi torque servo, that would defect the ruler onto one the cart's wheels to apply a frictional force. The speed of the cart was determined by using a magnetic rotary encoder to measure the angular position of the wheel, after which physical constants determined the speed. The control logic for the cart speed came from an Arduino Uno. The initial PID gains came from a matlab simulink model of the system in which a first order system was used to approximate the behavior of the servo. Afterwards, expermintal testing was used to determine what gains would get the system to behave best. A major component of the controller was the moving average that was implemented into the encoder positinal reading. This effectively mitigated the noise coming from the encoder, which allowed for succesful computation of positional derivatives and intergration.",
    images: [PID_1 , PID_2 , PID_3 , PID_4 , PID_5],
  },
  {
    projectTitle: "Control Surface Sizing",
    description:
      "During this project, I was tasked with sizing the vertical stabilizer for an aircraft that we needed to develop in less than two weeks. I evaluated two design configurations: one with a single vertical stabilizer and another with two outboard vertical stabilizers. The single vertical stabilizer was ultimately chosen, as it reduced structural weight in the final design and offered the added benefit of having the control surface blown by the propeller wash for increased yaw authority. After determining the appropriate size, a basic vertical stabilizer was modeled in CAD, allowing us to run CFD simulations to analyze the prop wash's impact on the stabilizer. This analysis focused on determining whether the rudder provided any passive stability. The vertical stabilizer was designed to be tall enough to ensure sufficient passive stability for mission success, and the initial design performed well in flight tests. Additionally, I created a calculator that generated coordinate data for the vertical stabilizer based on desired geometric parameters, which could then be directly integrated into the AVL file used for aircraft analysis.",
    images: [controlEntire, controlDark, controlGraph],
  },
  {
    projectTitle: "Vortex Shedding Simulation",
    description:
      "During this project, I conducted a transient simulation of flow over a tandem cylinder arrangement using two different RANS modeling methods: the k-omega turbulence model and the GEKO turbulence model. The GEKO model is a variation of the k-omega model, offering the flexibility to adjust specific coefficients within the equations, enabling different levels of 'aggressiveness' in predicting flow separation. One interesting aspect of steady flow over the cylinders is that it reaches a quasi-steady state, where the oscillation frequency of the vortices being shed remains nearly constant. This behavior allows for the extraction of RMS values for the lift and drag coefficients and enables an FFT analysis to determine the characteristic frequency of vortex shedding oscillations. Using this frequency, the Strouhal number was calculated, as described below. These results were then compared with experimental data to identify areas for improvement and enhance the validity of the simulation results.",
    images: [vortex1, vortex2, vortex3, vortex4, vortex5 ],
  },
  {
    projectTitle: "Hypersonic Vehicle Trajectory Simulation",
    description: 
      "In this project, given the 'skipping' re-entry trajectory of a hypersonic vehicle, I used MATLAB to analyze the flight conditions, including speed and altitude, to determine the properties of the shockwaves experienced by the spacecraft. The post-shock conditions were then used to calculate the stagnation heat flux at the front of the vehicle and the heat flux at two additional points on its sides. The heating data from this trajectory was subsequently applied to size a Thermal Protection System (TPS) for the vehicle, tailored to different material selections..",
    images: [hypersonic_1 , hypersonic_2],
  },
  {
    projectTitle: "Monoplane Tail",
    description:
      "During this project, I used a python script that interfaced with AVL to quickly run through and analyze different configurations for a monoplane tail. The configuration that we were looking at was extremely unconventional and analyzing it was a challenge in and of itself. We needed to keep the stability of the plane within a certain range, but also keep in mind the effects of the large amount of downwash we would be getting from our wing. After correctly sizing the tail and confirming the interface of the tail with other people on the team, I developed the tail and the means of load transference between the tail and the fuselage. After the concepts were laid out I created a fully Parametrized CAD of the tail configuration in a week. This allowed us to change important dimensions that drove the construction of the tail itself such as the offset distance between the leading edge of the VStab and the torsion box. While I was making the tail I had to keep in mind our manufacturing process and also integrate tolerances into the drawings and dimensions so that we accounted for the width of the laser cutting the surfaces and also so we maintained good contact between the pieces during construction.",
    images: [Tail1, Tail2, Tail3],
  },
  {
    projectTitle: "Heating System Physics Simulation",
    description:
      "In this project, I used finite differencing methods and physics based models to help me simulate a capacitor discharging into a steel rod. The goal of the simulation was to appropriately size and charge a capacitor such that when it discharged into the circuit, the steel rod reached a peak temperature of 500 degrees C at exactly 15 seconds after the circuit was closed. The whole project ended up taking a little over 200 lines of code to accomplish.",
    images: [circuit1, circuit5, circuit4, circuit2, circuit3],    
  },
  {
    projectTitle: "Planform Geometry Optimization",
    description:
      "In this project, we used results that we obtained from running a neural network of 14 design parameters to create 10,000 different design points for our plane. We then selected the parameters that would suit the performance of our aircraft the best and I parametrized them in a Python wrapper that would interface with an analysis software called VORSTAB. I would then collect data on the performance of the aircraft and iterate through different design points that we wanted to hit to see what kind of different results we would get for our aircraft. It was through this analysis as well as CFD that was run later that we chose the optimal design point for our aircraft.",
    images: [platformEntire, platformGraph],
  },
  {
    projectTitle: "Performance Constraint analysis",
    description:
      "In this project, a constraint analysis calculator was made using energy based constraint analysis for a high performance RC aircraft with an EDF propulsion system. Several flight conditions were considered to help find a solution space that met our planes desired flight characteristics. Geometric Constraintes were implemented to find the portions of the solution space that we could operate in. Geometric constraints came from budget, time, and manufacturing constraints. After the desired solution space was found, an OML of the vehicle was developed to perform a weight and CG buildup for a preliminary configuration. This was then used to see if the Vehicle was plausable and if modifications needed to be made to accomodate the plane to the solution space.",
    images: [constraint1, constraint2, constraint3], 
  },
  {
    projectTitle: "Transonic Wing Analysis",
    description:
      "In this CFD Case I compared Experimental data of an ONERA M6 aifoil at transonic speeds to experimental Data in order to validate the shock capturing that was occuring in the CFD solver.",
    images: [CFD1, CFD2, CFD3, CFD4],
    
  },
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
  YOUR_EMAIL: "atruax3@gatech.edu",
  YOUR_FONE: "(678)-674-0882",
  description:
    "Feel free to reach out to me if you would like to get to know me more or ask about other projects I've worked on! ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_qhq4gkn",
  YOUR_TEMPLATE_ID: "template_0ca6mvo",
  YOUR_USER_ID: "xRQNc37JBc03rkqve",
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
