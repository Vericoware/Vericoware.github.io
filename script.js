const lastUpdated = document.getElementById("last-updated");
const currentYear = document.getElementById("current-year");

if (lastUpdated) {
  const updated = new Date(document.lastModified);
  lastUpdated.textContent = updated.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
    },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const publicationResourceMap = {
  "StoryBlender: Inter-Shot Consistent and Editable 3D Storyboard with Spatial-temporal Dynamics": {
    official: "https://arxiv.org/abs/2604.03315",
    home: "https://engineeringai-lab.github.io/StoryBlender/",
    github: "https://github.com/EngineeringAI-LAB/StoryBlender",
    hugging: "https://huggingface.co/datasets/EngineeringAI-LAB/CineBoard3D",
  },
  "Learning Hierarchical Time-Frequency Representation for Long-Term Time Series Forecasting": {
    official: "https://doi.org/10.1016/j.ipm.2025.104358",
  },
  "3DXTalker: Unifying Identity, Lip Sync, Emotion, and Spatial Dynamics in Expressive 3D Talking Avatars": {
    official: "https://arxiv.org/abs/2602.10516",
    home: "https://engineeringai-lab.github.io/3DXTalker.github.io/",
    github: "https://github.com/EngineeringAI-LAB/3DXTalker",
    hugging: "https://huggingface.co/datasets/EngineeringAI-LAB/3DTalkingDataset",
  },
  "From Conflict to Consensus: Boosting Medical Reasoning via Multi-Round Agentic RAG": {
    official: "https://arxiv.org/abs/2603.03292",
  },
  "Beyond the Dirac Delta: Mitigating Diversity Collapse in Reinforcement Fine-Tuning for Versatile Image Generation": {
    official: "https://arxiv.org/abs/2601.12401",
  },
  "Scalable In-Context Q-Learning": {
    official: "https://arxiv.org/abs/2506.01299",
  },
  "T3-S2S: Training-free Triplet Tuning for Sketch to Scene Generation": {
    official: "https://arxiv.org/abs/2412.13486",
    github: "https://github.com/EngineeringAI-LAB/triplet_tuning",
  },
  "Text-to-Decision Agent: Offline Meta-Reinforcement Learning from Natural Language Supervision": {
    official: "https://neurips.cc/virtual/2025/poster/119507",
    github: "https://github.com/NJU-RL/T2DA",
  },
  "Hierarchical and Step-Layer-Wise Tuning of Attention Specialty for Multi-Instance Synthesis in Diffusion Transformers": {
    official: "https://arxiv.org/abs/2504.10148",
  },
  "Learning Informative Latent Representation for Quantum State Tomography": {
    official: "https://doi.org/10.1109/TETCI.2025.3543767",
  },
  "Tomography of Quantum States From Structured Measurements via Quantum-Aware Transformer": {
    official: "https://doi.org/10.1109/TCYB.2025.3556466",
  },
  "EGGen: Image Generation with Multi-Entity Prior Learning through Entity Guidance": {
    official: "https://doi.org/10.1145/3664647.3680898",
    github: "https://github.com/chaos-sun/eggen",
  },
  "Sketch2Scene: Automatic Generation of Interactive 3D Game Scenes from User's Casual Sketches": {
    official: "https://arxiv.org/abs/2408.04567",
    home: "https://xrvisionlabs.github.io/Sketch2Scene/",
  },
  "Towards Effective Usage of Human-Centric Priors in Diffusion Models for Text-based Human Image Generation": {
    official: "https://arxiv.org/abs/2403.05239",
    home: "https://hcplayercvpr2024.github.io/",
  },
  "Estimation of Quantum Channels Using Neural Networks": {
    official: "https://doi.org/10.1109/CDC49753.2023.10384297",
  },
  "Maximizing Spatio-Temporal Entropy of Deep 3D CNNs for Efficient Video Recognition": {
    official: "https://iclr.cc/virtual/2023/poster/11690",
    github: "https://github.com/alibaba/lightweight-neural-architecture-search",
  },
  "Attention-based Transformer Networks for Quantum State Tomography": {
    official: "https://arxiv.org/abs/2305.05433",
  },
  "MAE-DET: Revisiting Maximum Entropy Principle in Zero-Shot NAS for Efficient Object Detection": {
    official: "https://proceedings.mlr.press/v162/sun22c.html",
    github: "https://github.com/alibaba/lightweight-neural-architecture-search",
  },
  "Entropy-Driven Mixed-Precision Quantization for Deep Network Design": {
    official: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/86e7ebb16d33d59e62d1b0a079ea058d-Abstract-Conference.html",
    github: "https://github.com/alibaba/lightweight-neural-architecture-search",
  },
  "Jmpnet: Joint Motion Prediction for Learning-Based Video Compression": {
    official: "https://www2.securecms.com/ICASSP2022/view_paper.php?PaperNum=1670",
  },
  "Zen-NAS: A Zero-Shot NAS for High-Performance Image Recognition": {
    official: "https://openaccess.thecvf.com/content/ICCV2021/html/Lin_Zen-NAS_A_Zero-Shot_NAS_for_High-Performance_Image_Recognition_ICCV_2021_paper.html",
    github: "https://github.com/idstcv/ZenNAS",
  },
  "Learning Accurate Entropy Model with Global Reference for Image Compression": {
    official: "https://iclr.cc/virtual/2021/poster/2829",
  },
  "Interpolation Variable Rate Image Compression": {
    official: "https://arxiv.org/abs/2109.09280",
  },
  "Spatiotemporal Entropy Model Is All You Need for Learned Video Compression": {
    official: "https://arxiv.org/abs/2104.06083",
  },
};

const resourceIconMarkup = {
  official:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l4 4v16H6V2Zm8 1.5V7h3.5L14 3.5ZM8 10h8v1.5H8V10Zm0 3h8v1.5H8V13Zm0 3h6v1.5H8V16Z"/></svg>',
  home:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2 2.5 10.6l1 1.28L5 10.74V21h5.5v-6h3V21H19V10.74l1.5 1.14 1-1.28L12 3.2Z"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.08 1.83 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.37 11.37 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.66.25 2.89.12 3.19.78.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 12 .5Z"/></svg>',
  hugging:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 8.4a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm9.6 0a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM5.4 11.2c.7.45 1.55.68 2.5.68.86 0 1.66-.19 2.36-.56.2-.1.44.03.46.25.1 1.04.63 1.69 1.28 1.69s1.18-.65 1.28-1.69c.02-.22.26-.35.46-.25.7.37 1.5.56 2.36.56.95 0 1.8-.23 2.5-.68.22-.14.5.05.45.31-.56 3.11-3.45 5.29-7.05 5.29s-6.49-2.18-7.05-5.29c-.05-.26.23-.45.45-.31Z"/><path d="M4.25 8.92c-.6.46-1.25 1.44-1.25 3.36C3 17.3 6.82 21 12 21s9-3.7 9-8.72c0-1.92-.65-2.9-1.25-3.36-.37-.29-.89.02-.8.49.08.42.05.92-.17 1.38-.15.31.05.68.39.72.35.04.61.34.61.69 0 4.03-3.13 6.8-7.78 6.8s-7.78-2.77-7.78-6.8c0-.35.26-.65.61-.69.34-.04.54-.41.39-.72-.22-.46-.25-.96-.17-1.38.09-.47-.43-.78-.8-.49Z"/></svg>',
};

function normalizeTitle(text) {
  return text.replace(/\s+/g, " ").trim();
}

function createResourceLink(type, url) {
  const labels = {
    official: "Official",
    home: "Home",
    github: "Github",
    hugging: "Hugging",
  };

  const link = document.createElement("a");
  link.className = "resource-link";
  link.href = url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("aria-label", labels[type]);
  link.title = labels[type];
  link.innerHTML = `${resourceIconMarkup[type]}<span>${labels[type]}</span>`;
  return link;
}

function injectPublicationResources() {
  document.querySelectorAll(".publication-list li").forEach((item) => {
    if (item.querySelector(".resource-links")) {
      return;
    }

    const titleElement = item.querySelector(".publication-title");
    const venueElement = item.querySelector(".publication-venue");

    if (!titleElement || !venueElement) {
      return;
    }

    const titleClone = titleElement.cloneNode(true);
    titleClone
      .querySelectorAll(".publication-type")
      .forEach((tag) => tag.remove());
    const normalizedTitle = normalizeTitle(titleClone.textContent);
    const resources = publicationResourceMap[normalizedTitle];

    if (!resources) {
      return;
    }

    const resourceRow = document.createElement("div");
    resourceRow.className = "resource-links";

    ["official", "home", "github", "hugging"].forEach((type) => {
      if (!resources[type]) {
        return;
      }
      resourceRow.appendChild(createResourceLink(type, resources[type]));
    });

    if (resourceRow.children.length > 0) {
      venueElement.insertAdjacentElement("afterend", resourceRow);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectPublicationResources);
} else {
  injectPublicationResources();
}
