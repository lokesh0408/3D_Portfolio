import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  twitter,
  task_tracker,
  tictactoe,
  dalle,
  socialmedia,
  portfolio,
  shopping_cart,
  programming,
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
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "Coder",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Lokesh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lokesh shows a willingness to share ideas, best practice techniques and new ways of doing things.",
    name: "Chris Brown",
    designation: "CEO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lokesh has a deep understanding of full-stack encompassing his domain and maintains awareness of industry trends and tools.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Task Tracker",
    description:
      "Building this task tracker was an incredible learning experience. One of the challenges I faced was implementing the task sorting feature based on due dates. I dived deep into sorting algorithms and finally settled on the merge sort algorithm, which significantly improved performance. So, I've created this task tracker using JavaScript which proactively help individuals prioritize and manage their work-load effectively. This Task Tracker helps offload mental clutter by capturing tasks and freeing up mental space for other important thoughts and ideas.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: task_tracker,
    source_code_link: "https://github.com/lokesh0408/Task-Tracker",
  },
  {
    name: "AI Image Generation App",
    description:
      "Created this stunning Image Generator App with OpenAI DALL-E API using MERN Stack. This App uses Cloudinary which is a cloud-based image storage service to store the images. With this app, users can witness the magic of AI in action. It allows users to generate stunning and unique images, be it abstract art, landscapes, or dreamy portraits. The possibilities are endless, and the results are truly mesmerizing! So, users will be able to get an AI generated image on entering the prompt and download the image as well.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/lokesh0408/DALL-E-CLONE",
  },
  {
    name: "Noughts and Crosses",
    description:
      "Developed this engaging and interactive game using JavaScript. Building Naughts and Crosses had its share of challenges. One key aspect was implementing the win and draw condition logic. I experimented with different algorithms to efficiently check for winning combinations, further enhancing the game's performance and playability. This game helps develop logical thinking, strategic planning, and problem-solving skills. The game has been made into a digital version that allows players to test their skills against computer opponents.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/lokesh0408/Tic_Tac_Toe_Game",
  },

  {
    name: "youAndme - Social Media App",
    description:
      "Engineered a social media app called 'youAndme' using Full-Stack. Step into a realm of trust and security as my full-stack app takes data protection to the next level with JWT authentication. Your privacy is my priority, ensuring that only you have the key to unlock your youAndme world. With JWT authentication, I’ve fortified youAndme against unauthorized access, securing user’s account while utilizing Redux for state management. My full-stack approach ensures a seamless, user-friendly interface that delights user’s senses and captivates his audience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
    ],
    image: socialmedia,
    source_code_link: "https://github.com/lokesh0408/youAndme_SocialMediaApp",
  },
  {
    name: "Portfolio",
    description:
      "Building my portfolio using React, Tailwind CSS, and Three.js was a transformative learning experience. I gained proficiency in React, mastering component-based architecture and state management. With Tailwind CSS, I honed my skills in responsive design and efficient styling. Additionally, incorporating Three.js allowed me to create stunning 3D visualizations and animations, showcasing my creativity and technical abilities. This project highlighted my expertise in modern web development technologies and demonstrated my capability to create visually appealing and interactive user experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/lokesh0408/My_Portfolio",
  },
  {
    name: "Programming Projects",
    description:
      "Through the development of the LRU Cache, Shopping-Cart, Guess-the-birthdate projects using C++, I acquired strong programming skills and problem-solving abilities. These projects allowed me to demonstrate my proficiency in data structures, algorithms, and object-oriented programming concepts. I gained hands-on experience in software development, enhancing my ability to design and implement efficient and reliable applications. These projects showcased my ability to work with C++ to create practical solutions and solidified my foundation in programming and software engineering.",
    tags: [
      {
        name: "datastructures",
        color: "blue-text-gradient",
      },
      {
        name: "oops",
        color: "green-text-gradient",
      },
      {
        name: "c++",
        color: "pink-text-gradient",
      },
    ],
    image: programming,
    source_code_link: "https://github.com/lokesh0408?tab=repositories",
  },
  {
    name: "React Crud and Twitter Clone",
    description:
      "Through the React Crud and Twitter Clone projects, I gained valuable experience in building complex web applications using React and CSS. These projects involved implementing features such as real-time collaboration, document editing, and tweet posting functionalities. By working on these clones, I deepened my understanding of React's component-based architecture, state management, and CSS styling techniques. These projects showcased my ability to create user-friendly and visually appealing interfaces while honing my skills in frontend development and UI/UX design.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/lokesh0408/Twitter_Clone",
  },
  {
    name: "Shopping-Cart Backend",
    description:
      "Used Object Oriented Programming (OOPs) and Data Structures such as map, vector etc. to build this software in C++. This project demonstrates the power of C++ in handling complex business logic and optimizing performance in the world of e-commerce. I'm proud to have developed a feature-rich backend to streamline the shopping experience for users. From adding products to managing quantities and calculating totals, this shopping cart handles it all with efficiency. It is an online shopping Real-time Website that makes it possible for customers to add products, remove the unwanted products, review their cart and finally, simple checkout by paying online or cash.",
    tags: [
      {
        name: "datastructures",
        color: "blue-text-gradient",
      },
      {
        name: "oops",
        color: "green-text-gradient",
      },
      {
        name: "c++",
        color: "pink-text-gradient",
      },
    ],
    image: shopping_cart,
    source_code_link:
      "https://github.com/lokesh0408/Online-Shopping-Cart-Backend",
  },
];

// export { services, technologies, experiences, testimonials, projects };
export { services, technologies, testimonials, projects };
