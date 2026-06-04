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
        },{id: "news-musdet-accepted-at-the-mula-workshop-cvpr-2026-a-lightweight-multi-scale-architecture-for-wearable-stress-detection-pdf-code",
          title: 'MuSDeT accepted at the MULA Workshop, CVPR 2026 — a lightweight multi-scale architecture...',
          description: "",
          section: "News",},{id: "news-presenting-musdet-at-the-mula-workshop-cvpr-2026-denver",
          title: 'Presenting MuSDeT at the MULA Workshop, CVPR 2026, Denver.',
          description: "",
          section: "News",},{id: "news-clip-cc-bench-accepted-as-a-long-paper-at-evalmg-sigir-2026-melbourne-a-benchmark-for-paragraph-level-video-description-evaluation-in-vision-language-models-code-data",
          title: 'CLIP-CC Bench accepted as a long paper at EvalMG @ SIGIR 2026, Melbourne...',
          description: "",
          section: "News",},{id: "projects-musdet-lightweight-wearable-stress-detection",
          title: 'MuSDeT — Lightweight Wearable Stress Detection',
          description: "Multi-scale encoding, gated fusion, and temporal context for stress detection on wearable biosignals. Published at MULA@CVPR 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_musdet/";
            },},{id: "projects-vcs-vcb-long-form-video-description-evaluation",
          title: 'VCS / VCB — Long-Form Video Description Evaluation',
          description: "Video Comprehension Score (VCS) and Benchmark (VCB) for paragraph-level video description. In preparation, targeting CVPR 2027.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_vcs/";
            },},{id: "projects-clip-cc-bench-paragraph-level-video-description-evaluation",
          title: 'CLIP-CC Bench — Paragraph-Level Video Description Evaluation',
          description: "Dataset + benchmark for evaluating paragraph-level video descriptions in vision-language models. Accepted (long paper) at EvalMG @ SIGIR 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_clipccbench/";
            },},{id: "projects-uncertainty-aware-multimodal-physiological-fusion",
          title: 'Uncertainty-aware Multimodal Physiological Fusion',
          description: "Representation learning and trustworthiness auditing for multimodal physiological signals. In preparation for Knowledge-Based Systems (KBS).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_physiofusion/";
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
