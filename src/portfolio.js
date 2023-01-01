/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "nyturhan",
  title: "Hey, I'm Yiğit",
  subTitle: emoji(
    "A passionate Software Developer that wants to create impactful and game-changing projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Cs-l6Efc0w6fvJLc0hp36aQ5Su6T1oO2/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Nyturhan",
  linkedin: "https://www.linkedin.com/in/nyturhan/",
  gmail: "nyturhan@gmail.com",
  medium: "https://medium.com/@nyturhan",
  stackoverflow: "https://stackoverflow.com/users/20905505/nyturhan",
  instagram: "https://www.instagram.com/nyturhari/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPMENT WITH A PREFERENCE TOWARDS BACKEND",
  skills: [
    emoji(
      "⚡ Develop interactive frontends for your web and mobile applications"
    ),
    emoji("⚙️ Create efficient backend applications"),
    emoji("🚂 Integrate third party services such as Firebase,AWS...")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      deviconClassname: "devicon-python-plain"
    },
    {
      skillName: "java",
      deviconClassname: "devicon-java-plain"
    },
    {
      skillName: "c++",
      deviconClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: "flutter",
      deviconClassname: "devicon-flutter-plain"
    },
    {
      skillName: "django",
      deviconClassname: "devicon-django-plain"
    },
    {
      skillName: "mongoDB",
      deviconClassname: "devicon-mongodb-plain"
    },
    {
      skillName: "postgresql",
      deviconClassname: "devicon-postgresql-plain"
    },
    {
      skillName: "spring boot",
      deviconClassname: "devicon-spring-plain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Middle East Technical University",
      logo: require("./assets/images/metu.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "September 2018 - Present",
      desc: "Took courses about OOP, Cloud Computing, Machine Learning... ",
      descBullets: [
        "My senior project was about creating a machine learning advisor web-app for people that weren't tech-savvy."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "TÜRKSAT Bilişim",
      companylogo: require("./assets/images/turksat.png"),
      date: "Aug 2022 - Sep 2022",
      desc: "I was part of a team of new hires and interns that created a system for tracking car usage (requesting cars, who used car X between Y and Z date, how much distance did personnel go, etc.) The mobile application we the interns created is used by the employees every day."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Achievements and some 'Cool Stuff' that I have done !",

  achievementsCards: [
    {
      title: "25th Annual Programming Competition Finalist",
      subtitle:
        "My team managed to become a finalist in the qualification round and ended up as 11th in the final round.",
      image: require("./assets/images/cclub.png"),
      imageAlt: "METU CCLUB logo",
      footerLink: []
    },
    {
      title: "HUPROG'22 Finalist",
      subtitle:
        "Being one of the top 15 teams in the qualification round, we entered the final round, and ended up 11th.",
      image: require("./assets/images/acm.png"),
      imageAlt: "ACM Hacettepe logo",
      footerLink: []
    },
    {
      title: "KODTÜ3 Top 10",
      subtitle: "Me and my team managed to be a part of the top 10 in KODTÜ3.",
      image: require("./assets/images/cclub.png"),
      imageAlt: "METU CCLUB logo",
      footerLink: []
    },
    {
      title: "KODTÜ2 Top 15",
      subtitle:
        "Being one of our first experiences in competitive programming, my team managed to be in top 15.",
      image: require("./assets/images/cclub.png"),
      imageAlt: "METU CCLUB logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📧"),
  subtitle:
    "Wanna discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "nyturhan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
