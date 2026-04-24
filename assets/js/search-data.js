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
  },{id: "nav-publications",
          title: "publications",
          description: "Published, under review, and in-preparation work — grouped by year, newest first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects from the PhD, prior graduate work, and undergrad — in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Last updated April 2026. Tailored academic and internship variants are available directly on request.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-entered-the-final-year-of-my-phd-at-sdsu-graduation-targeted-for-fall-2026-on-the-market-for-research-scientist-research-engineer-and-applied-scientist-roles-as-well-as-postdocs-and-assistant-professor-positions",
          title: 'Entered the final year of my PhD at SDSU. Graduation targeted for Fall...',
          description: "",
          section: "News",},{id: "news-first-author-paper-musdet-accepted-at-the-mula-workshop-cvpr-2026-code",
          title: 'First-author paper MuSDeT accepted at the MULA Workshop, CVPR 2026. [Code]',
          description: "",
          section: "News",},{id: "news-co-first-author-submission-to-miccai-2026-on-uncertainty-aware-multimodal-physiological-fusion-is-under-review",
          title: 'Co-first-author submission to MICCAI 2026 on uncertainty-aware multimodal physiological fusion is under review....',
          description: "",
          section: "News",},{id: "news-registered-for-cvpr-2026-in-denver-and-submitted-cv-to-the-jobs-amp-amp-recruitment-program",
          title: 'Registered for CVPR 2026 in Denver and submitted CV to the Jobs &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "projects-musdet-lightweight-wearable-stress-detection",
          title: 'MuSDeT — Lightweight Wearable Stress Detection',
          description: "Multi-scale encoding, gated fusion, and temporal context for stress detection on wearable biosignals. Accepted at MULA@CVPR 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_musdet/";
            },},{id: "projects-uncertainty-aware-multimodal-physiological-fusion",
          title: 'Uncertainty-aware Multimodal Physiological Fusion',
          description: "Representation learning and trustworthiness auditing for multimodal physiological signals. Under review at MICCAI 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_miccai/";
            },},{id: "projects-vcs-vcb-long-form-video-description-evaluation",
          title: 'VCS / VCB — Long-Form Video Description Evaluation',
          description: "Video Comprehension Score (VCS) and Benchmark (VCB) for paragraph-level video description. In preparation, targeting CVPR 2027.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_vcs/";
            },},{id: "projects-clip-cc-bench-long-form-video-description-evaluation-suite",
          title: 'CLIP-CC Bench — Long-Form Video Description Evaluation Suite',
          description: "Dataset + evaluation pipeline for long-form paragraph-level video description using CLIP-style encoders. In preparation, targeting CVPR 2027 workshop.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_clipccbench/";
            },},{id: "projects-roambee-spatial-data-and-route-optimization",
          title: 'Roambee — Spatial Data and Route Optimization',
          description: "Geospatial and graph-based analysis of transportation sensor data to optimize routes and identify low-coverage regions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_roambee/";
            },},{id: "projects-breast-cancer-detection-with-cnns",
          title: 'Breast Cancer Detection with CNNs',
          description: "Deep-learning classifier for Invasive Ductal Carcinoma on IDC histopathology datasets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_breast_cancer/";
            },},{id: "projects-driver-drowsiness-detection",
          title: 'Driver Drowsiness Detection',
          description: "Deep-learning eye-state classifier with threshold-based drowsiness alarm for driver safety.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_drowsiness/";
            },},{id: "projects-sentiment-analysis-of-social-media-pakistan-2018-general-election",
          title: 'Sentiment Analysis of Social Media — Pakistan 2018 General Election',
          description: "SVM-based sentiment classifier applied to social-media posts to analyze political sentiment around the 2018 Pakistan general election.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_sentiment/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv_industry.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%4D%75%6B%68%74%69%61%72.%41%6C%69@%6A%61%63%6B%73.%73%64%73%74%61%74%65.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/GitAliGator", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
