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
          description: "Selected research from my PhD in the Multimodal Intelligence (MINT) Lab at South Dakota State University.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-entered-the-final-year-of-my-phd-at-south-dakota-state-university-graduation-targeted-for-fall-2026",
          title: 'Entered the final year of my PhD at South Dakota State University; graduation...',
          description: "",
          section: "News",},{id: "news-first-author-paper-musdet-accepted-at-the-mula-workshop-cvpr-2026-pdf-code",
          title: 'First-author paper MuSDeT accepted at the MULA Workshop, CVPR 2026. [PDF] [Code]',
          description: "",
          section: "News",},{id: "news-heading-to-cvpr-2026-in-denver-co-presenting-musdet-at-the-mula-workshop-happy-to-meet-other-folks-working-on-multimodal-learning-wearable-biosignals-or-long-form-video-understanding-please-reach-out",
          title: 'Heading to CVPR 2026 in Denver, CO. Presenting MuSDeT at the MULA Workshop....',
          description: "",
          section: "News",},{id: "projects-musdet-lightweight-wearable-stress-detection",
          title: 'MuSDeT — Lightweight Wearable Stress Detection',
          description: "Multi-scale encoding, gated fusion, and temporal context for stress detection on wearable biosignals. Published at MULA@CVPR 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_musdet/";
            },},{id: "projects-uncertainty-aware-multimodal-physiological-fusion",
          title: 'Uncertainty-aware Multimodal Physiological Fusion',
          description: "Representation learning and trustworthiness auditing for multimodal physiological signals. In preparation for Knowledge-Based Systems (KBS).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_kbs/";
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
            },},{
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
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mokhtiarali", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rkft9HUAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-8729-4133", "_blank");
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
