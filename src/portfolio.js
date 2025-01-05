/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vijay's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and infrastructure and technical systems to create impact.",
  og: {
    title: "Vijay Chaurasia Portfolio",
    type: "website",
    url: "https://imvijaychaurasia.com/",
  },
};

//Home Page
const greeting = {
  title: "Vijay Chaurasia",
  logo_name: "VijayChaurasia",
//  nickname: "Vijay",
  subTitle:
      "I'm an IT Engineering professional with 15+ years of experience building scalable Cloud and Non-Cloud Infrastructure solutions with strong Security and Compliance frameworks",

resumeLink:
    "https://drive.google.com/file/d/1kIm7OgH5wOfbcdJim7GnOrcb7tXwycPq/view?usp=sharing",
  portfolio_repository: "https://github.com/imvijaychaurasia/masterPortfolio",
  githubProfile: "https://github.com/imvijaychaurasia",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/imvijaychaurasia",
  // linkedin: "https://www.linkedin.com/in/imvijaychaurasia/",
  // gmail: "imvijaychaurasia@gmail.com",
  // gitlab: "https://gitlab.com/imvijaychaurasia",
  // facebook: "https://www.facebook.com/",
  // twitter: "https://twitter.com/",
  // instagram: "https://www.instagram.com/"

  {
    name: "Github",
    link: "https://github.com/imvijaychaurasia",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/imvijaychaurasia/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
//  {
//    name: "YouTube",
//    link: "https://youtube.com/c/0",
//    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
//    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
//  },
  {
    name: "Gmail",
    link: "mailto:imvijaychaurasia@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
//  {
//    name: "X-Twitter",
//    link: "https://twitter.com/",
//    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
//    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
//  },
//  {
//    name: "Facebook",
//    link: "https://www.facebook.com/",
//    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
//    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
//  },
//  {
//    name: "Instagram",
//    link: "https://www.instagram.com/",
//    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
//    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
//  },
];

const skills = {
  data: [
    {
      title: "Infrastructure & Data Security",
      fileName: "DataScienceImg",
      skills: [
        "🔒 Building robust security frameworks for Data and Infrastructure Security",
        "⚡ Expertise in implementing scalable Compliance solutions across diverse environments",
        "⚡ Securing Cloud and On-Premise Infrastructure with advanced threat detection and prevention techniques",
        "⚡ Ensuring end-to-end IT Compliance with regulatory and industry standards",
      ],
      softwareSkills: [
        {
          skillName: "Data",
          fontAwesomeClassname: "icon-park:data-lock",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Security",
          fontAwesomeClassname: "material-symbols:security",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "AWS WAF",
          fontAwesomeClassname: "logos:aws-waf",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Semgrep",
          fontAwesomeClassname: "catppuccin:semgrep",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Network Security",
          fontAwesomeClassname: "mdi:security-network",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ISO/SOC2/ITGC/GDPR",
          fontAwesomeClassname: "hugeicons:policy",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Expertise in multi-cloud environments, performance optimization, and infrastructure automation",
        "⚡ Building hybrid architectures that seamlessly integrate Cloud and On-Premise systems",
        "⚡ Modernizing Office IT Infrastructure to enhance productivity and collaboration",
        "⚡ Ensuring robust security, disaster recovery, and compliance across all infrastructure layers",
        "⚡ Automating infrastructure provisioning, monitoring, and management using DevOps tools and practices",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Legal, Compliance and Policies",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing and implementing policies aligned with regulatory standards",
        "⚡ Establishing data protection and privacy frameworks",
        "⚡ Driving IT governance through end-to-end compliance audits and remediation strategies",
        "⚡ Streamlining compliance workflows for scalable and sustainable operations",
      ],
      softwareSkills: [
        {
          skillName: "Legal",
          fontAwesomeClassname: "hugeicons:legal-hammer",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Compliance",
          fontAwesomeClassname: "carbon:ibm-cloud-security-compliance-center",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Policies",
          fontAwesomeClassname: "carbon:policy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Process and Workflows",
          fontAwesomeClassname: "flat-color-icons:process",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
//    {
//      title: "UI/UX Design",
//      fileName: "DesignImg",
//      skills: [
//        "⚡ Designing highly attractive user interface for mobile and web applications",
//        "⚡ Customizing logo designs and building logos from scratch",
//        "⚡ Creating the flow of application functionalities to optimize user experience",
//      ],
//      softwareSkills: [
//        {
//          skillName: "Adobe XD",
//          fontAwesomeClassname: "simple-icons:adobexd",
//          style: {
//            color: "#FF2BC2",
//          },
//        },
//        {
//          skillName: "Figma",
//          fontAwesomeClassname: "simple-icons:figma",
//          style: {
//            color: "#F24E1E",
//          },
//        },
//        {
//          skillName: "Adobe Illustrator",
//          fontAwesomeClassname: "simple-icons:adobeillustrator",
//          style: {
//            color: "#FF7C00",
//          },
//        },
//        {
//          skillName: "Inkscape",
//          fontAwesomeClassname: "simple-icons:inkscape",
//          style: {
//            color: "#000000",
//          },
//        },
//      ],
//    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
//    {
//      siteName: "LeetCode",
//      iconifyClassname: "simple-icons:leetcode",
//      style: {
//        color: "#F79F1B",
//      },
//      profileLink: "https://leetcode.com/layman_brother/",
//    },
//    {
//      siteName: "HackerRank",
//      iconifyClassname: "simple-icons:hackerrank",
//      style: {
//        color: "#2EC866",
//      },
//      profileLink: "https://www.hackerrank.com/layman_brother",
//    },
//    {
//      siteName: "Codechef",
//      iconifyClassname: "simple-icons:codechef",
//      style: {
//        color: "#5B4638",
//      },
//      profileLink: "https://www.codechef.com/users/ashutosh_1919",
//    },
//    {
//      siteName: "Codeforces",
//      iconifyClassname: "simple-icons:codeforces",
//      style: {
//        color: "#1F8ACB",
//      },
//      profileLink: "http://codeforces.com/profile/layman_brother",
//    },
//    {
//      siteName: "Hackerearth",
//      iconifyClassname: "simple-icons:hackerearth",
//      style: {
//        color: "#323754",
//      },
//      profileLink: "https://www.hackerearth.com/@ashutosh391",
//    },
//    {
//      siteName: "Kaggle",
//      iconifyClassname: "simple-icons:kaggle",
//      style: {
//        color: "#20BEFF",
//      },
//      profileLink: "https://www.kaggle.com/laymanbrother",
//    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Yashwantrao Chavan Maharashtra Open University",
      subtitle: "B.S. in Computer Engineering (Undergraduate)",
      logo_path: "ycmop-logo.png",
      alt_name: "YCMOU",
      duration: "2005 - 2008",
      descriptions: [
        "⚡ I have studied basic software engineering and electronic engineering.",
        "⚡ Apart from this, I have done courses on Data Science, Cloud Computing and Security Development.",
      ],
      website_link: "https://www.ycmou.ac.in/",
    },
    {
      title: "Shardashram Vidyamandir International School",
      subtitle: "English Medium High School - S.S.C Board",
      logo_path: "svis_logo.png",
      alt_name: "SVIS",
      duration: "till 2003",
      descriptions: [
        "⚡ I have studied in English Medium till S.S.C - 10th standard.",
      ],
      website_link: "http://www.sharadashram.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cybersecurity Specialist",
      subtitle: "Google CyberSecurity",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/O6PM45N4JTRL",
      alt_name: "Google Cybersecurity Professional",
      color_code: "#0C9D5899",
    },
    {
      title: "Foundations of Cybersecurity",
      subtitle: "Google CyberSecurity",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/CR2EA01LK8ST",
      alt_name: "Foundations of Cybersecurity",
      color_code: "#0C9D5899",
    },
    {
      title: "Play It Safe - Manage Security Risks",
      subtitle: "Google CyberSecurity",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/LQZ47XI2Y2D7",
      alt_name: "Play It Safe - Manage Security Risks",
      color_code: "#0C9D5899",
    },
    {
      title: "Connect and Protect - Networks and Network Security",
      subtitle: "Google CyberSecurity",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/1SW6VPU560AH",
      alt_name: "Connect and Protect - Networks and Network Security",
      color_code: "#0C9D5899",
    },
    {
      title: "Tools of the Trade - Linux and SQL",
      subtitle: "Google CyberSecurity",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/5OV4SBC0O11O",
      alt_name: "Tools of the Trade - Linux and SQL",
      color_code: "#0C9D5899",
    },
    {
      title: "Assets, Threats, and Vulnerabilities",
      subtitle: "Google CyberSecurity",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/4JM0HL59CBLT",
      alt_name: "Assets, Threats, and Vulnerabilities",
      color_code: "#0C9D5899",
    },
    {
      title: "Detection and Response",
      subtitle: "Google CyberSecurity",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/BOZNJ6TSJBHC",
      alt_name: "Detection and Response",
      color_code: "#0C9D5899",
    },
    {
      title: "Automate Cybersecurity Tasks with Python",
      subtitle: "Google CyberSecurity",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/PEQEFLX7HXOR",
      alt_name: "Automate Cybersecurity Tasks with Python",
      color_code: "#0C9D5899",
    },
    {
      title: "Put It to Work - Prepare for Cybersecurity Jobs",
      subtitle: "Google CyberSecurity",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/V3HQO7MHZD7P",
      alt_name: "Put It to Work - Prepare for Cybersecurity Jobs",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship, Work and Freelancing",
  description:
    "I have worked with several evolving startups as an IT Infrastructure Engineer and Security Professional, delivering scalable solutions for Cloud and Non-Cloud environments. I have also contributed to well-established organizations, specializing in InfoSec, DevSecOps, and Compliance.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
//        {
//          title: "Machine Learning Intern",
//          company: "TikTok Inc.",
//          company_url: "https://www.tiktok.com/en/",
//          logo_path: "tiktok_logo.png",
//          duration: "May 2022 - Aug 2022",
//          location: "San Francisco, USA",
//          description:
//            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
//          color: "#000000",
//        },
      ],
    },
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Engineering Manager – Cloud & Security Engineering",
          company: "Bizongo (Smartpaddle Technology Private Limited)",
          company_url: "https://www.bizongo.com/",
          logo_path: "bizongo.jpeg",
          duration: "April 2024 - Present",
          location: "Andheri, Mumbai, INDIA",
          description:
            "Specialized in InfoSec Operations and Security Engineering, driving observability, security, and efficiency in infrastructure and data security. Support the CISO in managing ITGC, CICRA, VAPT, ISO, and SOC2 compliance. Oversee organization-wide security and compliance operations.",
          color: "#000000",
        },
        {
          title: "Senior Manager – IT & DevSecOps",
          company: "Bizongo (Smartpaddle Technology Private Limited)",
          company_url: "https://www.bizongo.com/",
          logo_path: "bizongo.jpeg",
          duration: "April 2021 - March 2024",
          location: "Andheri, Mumbai, INDIA",
          description:
            "Led an IT team while performing DevSecOps responsibilities, ensuring reliable infrastructure services. Designed and automated workloads, CI/CD pipelines, and deployments to enhance developer productivity. Maintained infrastructure uptime, managed incidents, drove projects, and supported audits and compliance.",
          color: "#000000",
        },
        {
          title: "Peoples Operations Manager (IT, HR, and Admin)",
          company: "Bizongo (Smartpaddle Technology Private Limited)",
          company_url: "https://www.bizongo.com/",
          logo_path: "bizongo.jpeg",
          duration: "April 2018 - March 2021",
          location: "Andheri, Mumbai, INDIA",
          description:
            "Streamlined IT, HR, and Admin functions through a tech-first approach to enhance organizational efficiency. Improved employee lifecycle processes, including onboarding, development, and offboarding. Implemented systems to optimize operations, drive productivity, and support audits and compliance initiatives.",
          color: "#000000",
        },
        {
          title: "Manager, IT Infrastructure and Operations Manager",
          company: "Bizongo (Smartpaddle Technology Private Limited)",
          company_url: "https://www.bizongo.com/",
          logo_path: "bizongo.jpeg",
          duration: "Oct 2016 - March 2018",
          location: "Andheri, Mumbai, INDIA",
          description:
            "Managed comprehensive IT infrastructure including VOIP systems, directory services, network security, surveillance, and disaster recovery solutions while overseeing IT procurement and cross-platform asset management.",
          color: "#000000",
        },
        {
          title: "Manager, IT Infrastructure",
          company: "Doormint",
          company_url: "",
          logo_path: "doormint_logo.jpeg",
          duration: "Sep 2015 - Sep 2016",
          location: "Andheri, Mumbai, INDIA",
          description:
            "Acted as the primary IT contact for centralized offices and Mumbai contact centers. Managed Asterisk VOIP, LDAP, Network Monitoring, Firewall, Cisco Router, surveillance systems, PRI lines, IT procurement, and asset management.",
          color: "#000000",
        },
        {
          title: "Senior Manager, IT",
          company: "Audi, Mumbai South",
          company_url: "https://www.audi-mumbaisouth.com/",
          logo_path: "audi.jpg",
          duration: "Aug 2014 - Aug 2015",
          location: "Mazgaon, Mumbai, INDIA",
          description:
            "Streamlined IT infrastructure across global offices and service centers, including Audi Mumbai South and Audi Nashik, leading a team of 5 IT Executives. Oversaw IT operations, disaster recovery, server upgrades, and systems like Domain Server, VOIP, Tally, Sonic Firewall, Hyper-V, VPN, CCTV, and Windows Servers. Managed vendor relations and procurement.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Freelancing",
      experiences: [
//        {
//          title: "Google Explore ML Facilitator",
//          company: "Google",
//          company_url: "https://about.google/",
//          logo_path: "google_logo.png",
//          duration: "June 2019 - April 2020",
//          location: "Hyderabad, Telangana",
//          description:
//            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
//          color: "#4285F4",
//        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
//    {
//      id: "neuro-symbolic-sudoku-solver",
//      name: "Neuro-Symbolic Sudoku Solver",
//      createdAt: "2023-07-02T00:00:00Z",
//      description: "Paper published in KDD KiML 2023",
//      url: "https://arxiv.org/abs/2307.00653",
//    },
//    {
//      id: "mdp-diffusion",
//      name: "MDP-Diffusion",
//      createdAt: "2023-09-19T00:00:00Z",
//      description: "Blog published in Paperspace",
//      url: "https://blog.paperspace.com/mdp-diffusion/",
//    },
//    {
//      id: "consistency-models",
//      name: "Consistency Models",
//      createdAt: "2023-10-12T00:00:00Z",
//      description: "Blog published in Paperspace",
//      url: "https://blog.paperspace.com/consistency-models/",
//    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vijay_chaurasia.png",
    description:
      "I am not on every Social Media but available on LinkedIn, Github, and Gmail. You can message me, I will reply within 24 hours. I can help and guide you in most of the IT Infrastructure Services such as AI, Automation, Cloud, Security, Compliance, and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
//    link: "https://blogs.imvijaychaurasia.com/",
//    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kandivali West, Mumbai, Maharashtra, India",
    locality: "Mumbai",
    country: "INDIA",
    region: "MAHARASHTRA",
    postalCode: "400067",
    streetAddress: "Kandivali West",
    avatar_image_path: "address_image.svg",
//    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  certifications, competitiveSites, contactPageData, degrees, experience, greeting, projectsHeader, publications, publicationsHeader, seo, settings, skills, socialMediaLinks
};

