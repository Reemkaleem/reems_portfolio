import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  python,
  c_programming,
  opencv,
  reactjs,
  github_logo,
  mysql,
  mongodb,
  git,
  fastapi,
  docker,
  cbse,
  vtu,
  codebattle,
  techavishkar,
  nptel_python,
  nptel_ethical,
  nvidia,
  iet,
  loan_eligibility,
  StreeRaksha,
  lung_disease,
  tensorflow,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI / ML Engineer",
    icon: web,
  },
  {
    title: "Computer Vision Engineer",
    icon: mobile,
  },
  {
    title: "Software Development Enthusiast",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C Programming",
    icon: c_programming,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "GitHub",
    icon: github_logo,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "BE – Computer Science & Engineering (AI & ML)",
    company_name: "ATME College of Engineering, VTU",
    icon: vtu,
    iconBg: "#383E56",
    date: "Dec 2022 – Present",
    points: [
      "CGPA: 9.15/10 (Till 6th Semester)",
      "Focused on Machine Learning, Computer Vision, and AI Systems",
      "Active member of IEEE and IET; involved in hackathons and tech events",
      "Completed coursework in Deep Learning, Data Structures, and Advanced Programming",
    ],
  },
  {
    title: "Class XII – CBSE",
    company_name: "Pramati Hill View Academy",
    icon: cbse,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Percentage: 83%",
      "Completed higher secondary education with focus on Science and Mathematics",
    ],
  },
  {
    title: "Class X – CBSE",
    company_name: "CFTRI School",
    icon: cbse,
    iconBg: "#383E56",
    date: "2020",
    points: [
      "Percentage: 92.6%",
      "Strong foundation in core subjects and extracurricular activities",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Secured runner-up position by building an AI-based solution under strict time constraints, competing against top tech talent from across the region.",
    name: "Runner-Up – CodeBattle Hackathon",
    designation: "KLS VDIT, Haliyal",
    company: "April 2025",
    image: codebattle,
  },
  {
    testimonial:
      "Organized and managed a national-level hackathon with 200+ participants, featuring workshops, expert sessions, and technical competitions.",
    name: "Tech Avishkar 2.0 – National Hackathon",
    designation: "Organizer & Documentation Head",
    company: "IET ATME 2025",
    image: techavishkar,
  },
  {
    testimonial:
      "Recognized for top performance in Python programming and data science fundamentals through rigorous online coursework and examinations.",
    name: "NPTEL – Python for Data Science",
    designation: "Silver Medal",
    company: "Feb 2024",
    image: nptel_python,
  },
  {
    testimonial:
      "Demonstrated expertise in cybersecurity principles, ethical hacking techniques, and network security through comprehensive NPTEL certification.",
    name: "NPTEL – Ethical Hacking",
    designation: "Silver Medal",
    company: "Oct 2024",
    image: nptel_ethical,
  },
  {
    testimonial:
      "Completed advanced training in building Large Language Model applications using prompt engineering techniques from NVIDIA Deep Learning Institute.",
    name: "Building LLM Applications With Prompt Engineering",
    designation: "NVIDIA Certification",
    company: "May 2025",
    image: nvidia,
  },
  {
    testimonial:
      "Leading documentation initiatives for IEEE and IET student chapters, organizing technical events and maintaining comprehensive records.",
    name: "Documentation Head – IET ATME",
    designation: "Leadership Role",
    company: "2025",
    image: iet,
  },
];

const projects = [
  {
    name: "Loan Eligibility Prediction System",
    description:
      "Production-grade ML pipeline to predict loan approvals, integrating Supabase PostgreSQL, Flask REST API, and Docker. Achieved AUC: 0.89 and F1-Score: 0.82 using Random Forest and XGBoost models with Deepchecks for drift detection.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: loan_eligibility,
    source_code_link: "https://github.com/Reemkaleem/Loan_Eligibility_Classification",
  },
  {
    name: "StreeRaksha - Women's Safety System",
    description:
      "Real-time AI system tackling public safety by detecting crowd patterns and classifying gender. Combined YOLOv5 + Deep SORT object tracking with live dashboard, automated alerts via FCM/Twilio, and real-time syncing using FastAPI and Supabase.",
    tags: [
      {
        name: "yolov5",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: StreeRaksha,
    source_code_link: "https://github.com/Reemkaleem/StreeRaksha_Dashboard",
  },
  {
    name: "Lung Disease Classification System",
    description:
      "Deep learning diagnostic tool for classifying chest X-ray images into Normal, COVID-19, Pneumonia, and Tuberculosis. Utilized transfer learning with VGG-19 on 8,000 X-ray images achieving 95.75% test accuracy.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "keras",
        color: "green-text-gradient",
      },
      {
        name: "vgg19",
        color: "pink-text-gradient",
      },
      {
        name: "cnn",
        color: "blue-text-gradient",
      },
    ],
    image: lung_disease,
    source_code_link: "https://github.com/Reemkaleem/Lung_disease_classifier",
  },
];

export { services, technologies, experiences, testimonials, projects };
