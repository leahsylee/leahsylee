// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Hands-on engineering work — from composite vehicle structures to accessible device design.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Robotics and sensor research at the RoboTouch Lab, UIUC.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Conference papers and patents.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, experience, and skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-joined-illini-solar-car-mechanical-structures-subteam-working-on-composite-fairing-manufacturing",
          title: 'Joined Illini Solar Car — Mechanical/Structures subteam, working on composite fairing manufacturing.',
          description: "",
          section: "News",},{id: "news-started-undergraduate-research-at-the-robotouch-lab-uiuc-working-on-climbing-robot-controls-and-tactile-sensor-fabrication",
          title: 'Started undergraduate research at the RoboTouch Lab, UIUC — working on climbing robot...',
          description: "",
          section: "News",},{id: "news-patent-filed-for-spherical-gelsight-tactile-sensor-design",
          title: 'Patent filed for spherical GelSight tactile sensor design.',
          description: "",
          section: "News",},{id: "projects-assistive-technology-devices",
          title: 'Assistive Technology Devices',
          description: "Designed single-hand-operable assistive devices under strict accessibility, safety, and manufacturing constraints.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/assistive_tech/";
            },},{id: "projects-self-actuated-climbing-amp-inspection-robot",
          title: 'Self-Actuated Climbing &amp;amp; Inspection Robot',
          description: "Designed the contact mechanism and implemented closed-loop control for a robot that tracks flat, curved, and inverted surfaces.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/climbing_robot/";
            },},{id: "projects-spherical-gelsight-tactile-sensor",
          title: 'Spherical GelSight Tactile Sensor',
          description: "Designed and fabricated a novel spherical tactile sensor with a calibration pipeline and photometric stereo reconstruction. Patent filed.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gelsight_sensor/";
            },},{id: "projects-illini-solar-car-composite-structures-amp-vehicle-integration",
          title: 'Illini Solar Car: Composite Structures &amp;amp; Vehicle Integration',
          description: "Designed and fabricated composite fairing components for a formula-style solar race car, from mold design through final assembly.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/solar_car/";
            },},{id: "projects-terrain-adaptive-spider-robot",
          title: 'Terrain-Adaptive Spider Robot',
          description: "Built a walking robot with 4-bar linkage legs for terrain adaptation, demonstrated at Engineering Open House to 1000+ visitors.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spider_robot/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/leahsylee", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
