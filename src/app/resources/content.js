import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Misha",
  lastName: "Borovyk",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Software Developer",
  avatar: "/images/avatar.jpg",
  email: "borovykmis@gmail.com",
  location: "Europe/Kyiv", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Ukrainian", "German"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MihuNt3r",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/misha-borovyk-9197b9203/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/mihunt3r/",
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/mihunt3r",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning dreams into code that touches lives</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Misha, a software developer who transforms dreams into projects that matter.
      My goal is simple: build technology that uplifts, supports, and gives people strength — especially when they need it most.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I’m Misha — a full-stack developer who’s passionate about Web3, blockchain, and building microservices that actually make a difference.<br/>
        <br/>
        I work across the stack, writing both backend and frontend code using C#/.NET, Rust, Node.js, and modern JavaScript frameworks like Vue.js or React.<br/>
        <br/>
        For me, coding isn’t just about solving technical problems — it’s a way to express myself. It’s how I bring ideas to life, connect with others, and build things that matter.<br/>
        <br/>
        I care deeply about mental health and self-development, and I try to bring that purpose into everything I create — especially when it can help someone through their hardest moments.<br/>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Out of The Box Systems",
        timeframe: "Dec 2024 - Apr 2025",
        role: "Intern Rust Developer",
        shortDescription: "Intern Rust developer on Rustcamp. For the 4 months I was studying Rust concepts with mentors and peers.",
        achievements: [
          <>
            Learned basics of Rust language(ownership, borrowing, lifetimes,
            generics and traits)
          </>,
          <>
            Learned core concepts of Rust language(smart pointers, interior
            mutability pattern, static and dynamic dispatch, phantom data)
          </>,
          <>
            Learned how to write idiomatic code in Rust(newtype and typestate
            patterns with phantom types, exhaustivity, sealing)
          </>,
          <>
            Learned about Rust ecosystem(testing, procedural and declarative
            macros, immutable collections, serialization/deserialization, logging
            crates, command line arguments parsing, multithreading and async)
          </>,
          <>
            Learned about applying Rust on backend
          </>,
          <>
            Used Diesel ORM and PostgreSQL
          </>,
          <>
            Developed thick and thin HTTP clients with reqwest crate
          </>,
          <>
            Developed REST, gRPC and GraphQL APIs with Axum framework
          </>,
        ],
        shortConclusion: "As a final capstone project I developed decentralized voting system\n" +
            "with Solana blockchain. I used Anchor framework for smart contract\n" +
            "development, React for UI development, Phantom wallet adapters for\n" +
            "wallet connection. I received 4 approves for my project from mentors\n" +
            "and peers. Also, I publicly defended this project.\n",
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Elfo SRL",
        timeframe: "Nov 2021 - Jun 2024",
        role: "Full Stack Developer(ASP.NET/Vue.js)",
        shortDescription: "Mainly focused on back-end, was developing REST APIs with ASP.NET and background processes with Hangfire. Most often used NHibernate and Dapper as ORMs and MSSQL as a database.",
        achievements: [
          <>
            Worked with DDD approach and Clean Architecture
          </>,
          <>
            Worked with CQRS pattern and MediatR library
          </>,
          <>
            Developed Hangfire Jobs to validate and insert CSV data into staging tables<br/>
          </>,
          <>
            Implemented SQL procedures to ensure data integrity in imported items
          </>,
          <>
            Worked on refactoring of existing legacy SQL views and procedures.
            Improved performance of existing queries
          </>,
          <>
            Worked on front-end part with Typescript, Vue.js and Vuetify library
          </>,
          <>
            Contributed to internal library of UI components
          </>,
          <>
            Worked with Azure and Azure DevOps
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  education: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "State University of Trade and Economics",
        description: <>Master of Software Engineering</>,
        timeframe: "2023 - 2024"
      },
      {
        name: "National Aviation University",
        description: <>Bachelor of Software Engineering</>,
        timeframe: "2019 - 2023"
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Front End Development",
        description: <>Vue.js, Vuetify, React</>,
      },
      {
        title: "Rust Backend Development",
        description: <>Axum, Diesel ORM, SQLx</>,
      },
      {
        title: "Rust Smart Contracts Development",
        description: <>Solana, Anchor Framework</>,
      },
      {
        title: "Node.js Backend Development",
        description: <>Express.js, Nest.js, TypeScript</>,
      },
      {
        title: "C#/.Net Backend Development",
        description: <>ASP.NET, NHibernate, Dapper, HangFire</>,
      },
      {
        title: "Database Development",
        description: <>MS SQL, Oracle, PostgreSQL, MongoDB</>,
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
