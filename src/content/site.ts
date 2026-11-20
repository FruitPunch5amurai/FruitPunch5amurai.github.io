export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "itch";
};

export type SkillGroup = {
  title: string;
  /** Each string is one skill in this group. */
  skills: string[];
};

export type Project = {
  title: string;
  year: string;
  /** Each string is one bullet under the project title. */
  summary: string[];
  tags: string[];
  href?: string;
  note?: string;
  /** File in `public`, such as `/projects/ruff-city.jpg`, or a full image URL. Shown on the left. */
  image?: string;
  /** Alt text for `image`. Defaults to the project title. */
  imageAlt?: string;
};

type Site = {
  name: string;
  role: string;
  availability: string;
  location: string;
  email: string;
  summary: string;
  about: string[];
  focus: string[];
  socials: SocialLink[];
  experience: Project[];
  projects: Project[];
  skills: SkillGroup[];
};

/**
 * Everything visitors read lives here. Update this file, then rebuild.
 */
export const site: Site = {
  name: "Jason Marrero",
  role: "Fullstack Engineer",
  availability: "Open to new work",
  location: "Berkeley, California",
  email: "inquire.jasonalmarrero@gmail.com",
  summary:
    "I build the systems a player feels, and the tools a team needs.",
  about: [
    "Enthusiastic Fullstack Engineer with 8+ years of professional experience in software development and 5+ shipping mobile, PC, and web games.",
    "Able to work as Fullstack Engineer using suite of tools such as Typescript, Node.js, and Amazon Web Services.",
    "Strong C++ foundations with hands-on experience in Unity and custom engine development.",
    "Focused on optimization and performance to drive smooth user experiences and development.",
  ],
  focus: ["FullStack Development", "Game Development", "C++", "Game Systems and Architecture", "Algorithms and Design"],
  socials: [
    { label: "GitHub", href: "https://github.com/FruitPunch5amurai", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jmarrero234", icon: "linkedin" },
    { label: "Itch.io", href: "https://jason-marrero.itch.io/", icon: "itch" },
  ],
  experience: [
    {
      title: "Software Engineer II - Series Entertainment",
      year: "2024-2026",
      summary: [
        "Worked as a FullStack Engineer on a project for Netflix alongside a team of talented engineers to build a multiplayer Action RPG that utilized Artificial Intelligence to generate the narrative while the world and gameplay was built in Unity Game Engine.",
      ],
      tags: ["Unity Game Engine", "TypeScript", "Node.js", "Mobile"],
    },
    {
      title: "Software Engineer II - Pixelberry Studios",
      year: "2025",
      summary: [
        "Contributed as primary engineer to in-house C++ game engine utilizing Cocos2D and OpenGL.",
        "Designed and implemented core gameplay systems including Autoplay and Daily Rewards resulting in improved player engagement and satisfaction.",
        "Owned gameplay features end-to-end: implementation, iteration, bug fixing, and release.",
        "Maintained and contributed to backend services and tools using AWS S3 and DynamoDB to expand gameplay functionality. This involved gameplay features like a Rating System for content that allowed players to see how popular a piece of content is and a handful of other features that allowed for more interaction between users such as a Referral Program.",
        "Collaborated closely with design, QA, and production on feature polish and live support to maintain stable releases and troubleshoot issues.",
        "Created and extended internal tools that empowered our in-house writers to create more engaging and interesting content for our player base resulting in higher retention.",
      ],
      tags: ["C++", "Amazon Web Services", "Game Engine Architecture", "Python"],
      note: "https://www.pixelberrystudios.com/",
    },
    {
      title: "Senior Applications Engineer - United Parcel Service (UPS)",
      year: "2018 - 2021",
      summary: [
         "Developed microservices in C++ and C# to improve automation efficiency in UPS hub operations.",
 "Updated legacy applications and technologies to help alleviate tech debt resulting in more robust tools.",
 "Collaborated with UI/UX teams to prototype and implement user-facing applications.",
"Developed a mobile application in C# enabling scanning and fast Bluetooth printing for our UPS workers in the hubs to introduce a new system to alleviate pain points and improve work speed.",
      ],
      tags: ["C++", "Java", "Spring MVC"],
      note: "",
    },
  ],
  projects: [
     {
       title: "Ruff City",
       year: "",
       summary: ["Solo designed and developed a 2D side-scrolling action game using Unity Game Engine"],
       tags: ["Unity Game Engine", "C#"],
       href: "https://store.steampowered.com/app/2644040/Ruff_City/",
       image: "/projects/RuffCity.jpg",
       imageAlt: "Ruff City",
     },
          {
       title: "Code Crafters",
       year: "",
       summary: ["Building various things in C for Code Crafters Challenges"],
       tags: ["C", "Systems Programming"],
       href: "https://github.com/FruitPunch5amurai",
       image: "/projects/Codecrafters.jpg",
       imageAlt: "Code Crafters",
     },
     {
       title: "Ludus Engine",
       year: "",
       summary: [" Work in progress custom game engine written in C++"],
       tags: ["Game Engine Development", "C++"],
       href: "https://github.com/FruitPunch5amurai/GreyboxEngine",
       image: "/projects/GameControllerIcon.png",
       imageAlt: "Ruff City",
     },     
  ],
  skills: [
    {
      title: "Frontend",
      skills: ["TypeScript", "React", "C#", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "C++ & C", "Java", "Next.js","Spring MVC"],
    },
    {
      title: "Database",
      skills: ["DynamoDB", "Redis", "Firebase"],
    },
    {
      title: "Tools",
      skills: ["Amazon Web Services", "Python", "Git", "Docker"],
    },
    {
      title: "Game Development",
      skills: ["Unity Game Engine", "OpenGL", "Vulkan"],
    },
  ],
};
