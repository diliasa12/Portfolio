const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Experiences", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const experiences = [
  {
    id: 1,
    date: "August 19, 2024 - Present",
    image: "/images/LOGO_UPNVJ.png",
    contribution: [
      {
        description:
          "Maintain and Develop Digntion Web App from VeteranTech (LMS)",
        link: "https://dignition.veterantech.id/",
      },
      {
        description: "Semi-Finalist IBCC Ganesha 2026",
        link: "https://www.linkedin.com/posts/muhammad-assya-dili_businesscase-sbmitb-ganeshabusinessfestival-ugcPost-7479523062774657024-KUXv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCIxskBgBmvwb5XiONaXYgzETV6Qpo6kd8",
      },
      {
        description: "GPA: 3.94",
        link: "https://drive.google.com/file/d/1M56g8MrZ6X6ePxognAMhVr8gf1xZCrVY/view?usp=sharing",
      },
    ],
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Hono", "Laravel"],
  },
  {
    category: "CI/CD Tools",
    items: ["Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Linear"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/diliasa12",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/muhammad-assya-dili/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  experiences,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "DailyMind API",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "DailyMind Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "DailyMind is a backend API for a personal wellbeing and productivity app, covering journals, mood tracking, pomodoro sessions, todos, and user feedback.",
            "Instead of a single-purpose tracker, it brings daily reflection, task management, and focus sessions together under one authenticated, per-user data model.",
            "Think of it like a personal daily companion—jotting down your mood, journaling your day, managing your to-dos, and running focus timers, all in one place.",
            "It's built with Hono running on Bun, using Drizzle ORM with PostgreSQL and Better Auth for authentication, giving it a fast, type-safe, and modern REST API foundation.",
            "It also ships with an auto-generated OpenAPI spec and Swagger UI, plus admin tooling for moderating feedback and maintaining a banned-words filter on public journal timelines.",
          ],
        },
        {
          id: 2,
          name: "DailyMind.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://be-dailymind.vercel.app/ui",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "DailyMind.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/dailymind.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Field Booking API",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Field Booking Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "This is a microservices-based sports field booking platform, split into an API Gateway plus three independent backend services for auth, fields, and bookings.",
            "Instead of one monolithic backend, requests flow through an Express gateway that handles rate limiting, JWT verification, and routing, then proxies to the right service behind the scenes.",
            "Think of it like booking a futsal or badminton court online—browsing available fields and courts, checking open time slots, locking a slot, and confirming payment via DP or full payment, with everything staying in sync across services.",
            "The Auth Service (Node.js/Express + MySQL) handles registration, login, JWT + refresh tokens, token blacklisting, and Google OAuth. The Field Service (Laravel + MySQL) manages field categories, fields, schedules, and time slots. The Booking Service (Node.js/Express + MySQL) handles bookings, payments, and status logs, coordinating with the Field Service to lock and release slots in real time.",
            "Services never trust each other blindly—a shared gateway secret header ensures only the gateway can reach internal services directly, while user identity is passed downstream via trusted headers after JWT validation.",
          ],
        },
        {
          id: 2,
          name: "field-booking-platform.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/diliasa12/field-booking-platform.git",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Room Monitoring API",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "IoT Room Monitoring & Smart Booking Platform Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "SmartCity is a full microservices platform for managing IoT-monitored shared spaces, combining environmental sensing, comfort prediction, and seat/room booking into one connected system.",
            "Instead of a single app, requests flow through an Express API Gateway with JWT verification and rate limiting, which routes to an OAuth2 auth server, a Laravel core service, a Node.js IoT bridge, and a Python ML service.",
            "Think of it like a smart co-working or campus space—sensors track temperature, humidity, and noise in each room, an ML model classifies how comfortable the room currently is and predicts its next busy hour, and users can book seats or rooms while admins manage zones, rooms, and bookings from a dashboard.",
            "The OAuth Server (Node.js + oauth2-server) issues and introspects JWTs for password, client-credentials, and refresh-token grants. The Laravel Service handles zones, rooms, seat bookings, telemetry ingestion, and an admin dashboard, publishing sensor readings to RabbitMQ for async processing. The IoT Service bridges MQTT devices to REST. The Python ML Service (FastAPI) trains and serves three models—comfort classification, busy-hour prediction, and anomaly detection—plus a rule-based seat recommendation engine.",
            "Telemetry flows asynchronously: Laravel queues sensor readings to RabbitMQ, a Python worker classifies and predicts on them, then calls back into Laravel to update room status and trigger IoT device commands (like turning on a fan or LED) automatically.",
            "The whole stack is container-first, deployable via Docker Compose for local development or Kubernetes manifests (namespace, ConfigMaps, Secrets, StatefulSet for MySQL) for production.",
          ],
        },
        {
          id: 2,
          name: " IoT Room Monitoring & Smart Booking Platform.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/diliasa12/smart-city-platform.git",
          position: "top-10 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/formal-picture.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/profile-picture.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/formal-picture.jpg",
      description: [
        "Hey! I'm a backend-leaning full-stack developer who enjoys building apps that actually hold up once real users start poking at them 👋",
        "I work mainly with Node.js, Express, Hono, and Laravel on the backend, paired with React, TypeScript, and Tailwind CSS on the frontend—so I can ship a feature end-to-end without waiting around.",
        "I'm comfortable around PostgreSQL and MongoDB, and I like designing schemas and APIs that don't fall apart the moment someone adds a weird edge case.",
        "Docker, Kubernetes, and GitHub Actions are part of my everyday toolkit too—I'd rather automate the boring stuff than repeat it manually for the tenth time.",
        "Outside of coding, I'm usually refactoring something that already worked fine, tracking my tasks in Linear a little too obsessively, or debugging life the same way I debug code—one console.log at a time 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
