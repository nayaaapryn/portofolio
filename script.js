const DATA_VERSION = "2.4";
const defaultPortfolioData = {
  dataVersion: "2.4",
  profile: {
    name: "Nanda Apriyani",
    role: "Informatics Engineering Student",
    location: "Tanjungpinang, Kepulauan Riau",
    university: "Universitas Maritim Raja Ali Haji",
    availableForCollab: true,
    description: "Passionate Web Developer, UI/UX Designer, Multimedia Design Enthusiast & IoT Developer. Building elegant, user-centric web applications while bridging the gap between logic and creative design.",
    cvUrl: "#",
    email: "nandaapriyani2604@gmail.com",
    github: "https://github.com/nayaaapryn",
    linkedin: "https://www.linkedin.com/in/nanda-apriyani-24b42b307",
    instagram: "https://www.instagram.com/ndyvni/",
    profileImg: "assets/hero_profile.jpg"
  },
  about: {
    quote: "Technology and engineering provide the structure, but design and creativity bring the soul. I love bridging these worlds to create something meaningful.",
    author: "Nanda Apriyani",
    title: "Fusing Logic with Creative Design",
    text1: "I am currently pursuing a degree in Informatics Engineering at Universitas Maritim Raja Ali Haji (UMRAH) in Tanjungpinang, having completed my vocational education in Multimedia at SMK Negeri 4 Tanjungpinang. My background spans web development, graphic design, photography, and IoT projects.",
    text2: "With hands-on experience in PHP, JavaScript, UI design tools, and microcontroller programming, I thrive at the intersection of logic and aesthetics. I've also sharpened my customer service and communication skills through real-world work experience.",
    card1_title: "Development",
    card1_desc: "Translating wireframes into beautiful web application architectures.",
    card2_title: "Design",
    card2_desc: "Creating layouts that are elegant, responsive, and friendly to navigate."
  },
  skills: [
    // Frontend
    { id: 1, name: "HTML5", category: "Frontend Development", categoryIcon: "fa-code", icon: "fa-brands fa-html5" },
    { id: 2, name: "CSS3", category: "Frontend Development", categoryIcon: "fa-code", icon: "fa-brands fa-css3-alt" },
    { id: 3, name: "JavaScript", category: "Frontend Development", categoryIcon: "fa-code", icon: "fa-brands fa-js" },
    { id: 4, name: "Bootstrap", category: "Frontend Development", categoryIcon: "fa-code", icon: "fa-brands fa-bootstrap" },
    // Backend & Database
    { id: 5, name: "PHP", category: "Backend & Database", categoryIcon: "fa-server", icon: "fa-brands fa-php" },
    { id: 6, name: "MySQL", category: "Backend & Database", categoryIcon: "fa-server", icon: "fa-solid fa-database" },
    { id: 7, name: "Firebase", category: "Backend & Database", categoryIcon: "fa-server", icon: "fa-solid fa-fire" },
    { id: 8, name: "ESP32 & IoT", category: "Backend & Database", categoryIcon: "fa-server", icon: "fa-solid fa-microchip" },
    { id: 9, name: "Basic Networking", category: "Backend & Database", categoryIcon: "fa-server", icon: "fa-solid fa-network-wired" },
    // Design & Tools
    { id: 10, name: "Git & GitHub", category: "Design & Workflow Tools", categoryIcon: "fa-screwdriver-wrench", icon: "fa-brands fa-github" },
    { id: 11, name: "Figma & UI Design", category: "Design & Workflow Tools", categoryIcon: "fa-screwdriver-wrench", icon: "fa-brands fa-figma" },
    { id: 12, name: "Adobe Photoshop", category: "Design & Workflow Tools", categoryIcon: "fa-screwdriver-wrench", icon: "fa-solid fa-image" },
    { id: 13, name: "Adobe Premiere Pro", category: "Design & Workflow Tools", categoryIcon: "fa-screwdriver-wrench", icon: "fa-solid fa-film" },
    { id: 14, name: "CorelDRAW", category: "Design & Workflow Tools", categoryIcon: "fa-screwdriver-wrench", icon: "fa-solid fa-pen-nib" },
    { id: 15, name: "Canva", category: "Design & Workflow Tools", categoryIcon: "fa-screwdriver-wrench", icon: "fa-solid fa-palette" },
    { id: 16, name: "Adobe Flash", category: "Design & Workflow Tools", categoryIcon: "fa-screwdriver-wrench", icon: "fa-solid fa-bolt" }
  ],
  projects: [
    {
      id: 1,
      title: "Lautan Kita E-Commerce",
      img: "assets/project_lautan_kita.png",
      description: "A seafood e-commerce platform designed for local fishmongers. Features a complete product catalog, search filters, interactive shopping cart, secure checkout process, order tracking, and an admin dashboard for product management.",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      codeUrl: "https://github.com/Zahwaauliya5/Projek-Besar-",
      demoUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "FilMers App",
      img: "assets/project_filmers.png",
      description: "A dynamic movie discovery web application integrating the TMDB API. Browse trending films, filter by genre, view synopsis details, ratings, and cast members with a clean, responsive UI.",
      tags: ["PHP", "JavaScript", "TMDB API", "Tailwind CSS"],
      codeUrl: "https://github.com/nayaaapryn/films",
      demoUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Smart Apartment IoT",
      img: "assets/project_iot.png",
      description: "An ESP32-based smart apartment monitoring system with DHT22 temperature and MQ-2 gas sensors. Pushes real-time telemetry to a Firebase dashboard and sends automated Telegram alerts on threshold breaches.",
      tags: ["ESP32", "Firebase", "C++", "IoT"],
      codeUrl: "https://github.com/nayaaapryn/Smart-Apartment",
      demoUrl: "https://github.com/nayaaapryn/sistemUrgensi",
      demoIcon: "fa-circle-info",
      demoText: "Project Docs",
      featured: true
    },
    {
      id: 4,
      title: "AR Dimsum Web",
      img: "assets/project_lautan_kita.png",
      description: "An Augmented Reality-based website to interactively display dimsum products in 3D. Customers can view AR previews of food items before ordering, enhancing the digital menu experience.",
      tags: ["Augmented Reality", "JavaScript", "Three.js", "WebAR"],
      codeUrl: "https://github.com/nayaaapryn/ARdimsum",
      demoUrl: "https://ar-dimsum.vercel.app",
      demoIcon: "fa-vr-cardboard",
      demoText: "Live Demo",
      featured: true
    },
    {
      id: 5,
      title: "WarisAR – Budaya Kepri",
      img: "assets/project_iot.png",
      description: "An Augmented Reality mobile-web application to preserve and showcase Kepulauan Riau's local cultural heritage. Users can scan markers to trigger 3D cultural artifact experiences in their environment.",
      tags: ["AR", "C++", "Cultural Heritage", "WebAR"],
      codeUrl: "https://github.com/nayaaapryn/ARbudayaKepri",
      demoUrl: "#",
      demoIcon: "fa-circle-info",
      demoText: "View Project",
      featured: false
    },
    {
      id: 6,
      title: "Saga Shelter",
      img: "assets/project_filmers.png",
      description: "A web-based archive and document management system for crosschecking KTP (National ID) and KK (Family Card) civil data. Built during internship at Dinas Kependudukan dan Pencatatan Sipil Tanjungpinang to streamline administrative verification and document filing.",
      tags: ["PHP", "MySQL", "Bootstrap", "Archive System"],
      codeUrl: "https://github.com/BRYNNV2/saga-shelter",
      demoUrl: "#",
      demoIcon: "fa-circle-info",
      demoText: "Project Docs",
      featured: false
    },
    {
      id: 7,
      title: "Computer Graphics (Grafika Komputer)",
      img: "assets/project_iot.png",
      description: "Explores fundamental computer graphics algorithms and rendering pipelines using Python and OpenGL. Covers transformations, rasterization, shading techniques, and 2D/3D scene composition.",
      tags: ["Python", "OpenGL", "Computer Graphics", "Algorithms"],
      codeUrl: "https://github.com/nayaaapryn/grafika-komputer",
      demoUrl: "#",
      demoIcon: "fa-circle-info",
      demoText: "View Code",
      featured: false
    },
    {
      id: 8,
      title: "CampusLib – Library System Spec",
      img: "assets/project_filmers.png",
      description: "A comprehensive software requirements specification and system design for a university campus library management system — covering borrowing workflows, user roles, notifications, and reporting.",
      tags: ["Software Engineering", "UML", "Specification", "System Design"],
      codeUrl: "https://github.com/nayaaapryn/spesifikasi-perangkat-lunak-campuslib",
      demoUrl: "#",
      demoIcon: "fa-circle-info",
      demoText: "View Docs",
      featured: false
    },
    {
      id: 9,
      title: "Rata-Rata Cuaca (Weather Avg)",
      img: "assets/project_iot.png",
      description: "A C-language program that processes raw weather sensor data to calculate average temperature, humidity, and rainfall over configurable time windows for regional weather analytics.",
      tags: ["C", "Algorithm", "Data Processing", "Weather"],
      codeUrl: "https://github.com/nayaaapryn/rata-rata-cuaca",
      demoUrl: "#",
      demoIcon: "fa-circle-info",
      demoText: "View Code",
      featured: false
    },
    {
      id: 10,
      title: "X-Ray Chest Analyzer",
      img: "assets/project_filmers.png",
      description: "An AI-powered chest X-ray image analysis web application. Uses machine learning image classification to detect potential anomalies from lung X-ray scans, providing diagnostic support information for medical review.",
      tags: ["Python", "Machine Learning", "Image Processing", "Healthcare AI"],
      codeUrl: "https://github.com/BRYNNV2/X-Ray-Analyzer-Citra-Dada",
      demoUrl: "#",
      demoIcon: "fa-circle-info",
      demoText: "View Project",
      featured: false
    },
    {
      id: 11,
      title: "UK Pemrograman Web",
      img: "assets/project_lautan_kita.png",
      description: "A web programming final exam project demonstrating full-stack web development skills. Includes dynamic content rendering, form handling, database integration, and responsive multi-page layout design.",
      tags: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
      codeUrl: "https://github.com/Thesarss/UK-pemrograman-Web",
      demoUrl: "#",
      demoIcon: "fa-circle-info",
      demoText: "View Project",
      featured: false
    },
    {
      id: 12,
      title: "Smart Courier System",
      img: "assets/project_iot.png",
      description: "An IoT-powered smart courier package tracking and management system. Integrates sensor-based package condition monitoring with a real-time web dashboard for logistics tracking and delivery status updates.",
      tags: ["IoT", "Web Dashboard", "Tracking System", "Logistics"],
      codeUrl: "https://github.com/labwdy/Smart-Courier",
      demoUrl: "#",
      demoIcon: "fa-circle-info",
      demoText: "View Project",
      featured: false
    },
    {
      id: 13,
      title: "SISTER – Distributed Sensor System",
      img: "assets/project_filmers.png",
      description: "A distributed IoT sensor network project (Sistem Terdistribusi). Implements multi-node sensor data collection, communication protocols between nodes, and a centralized monitoring dashboard for network-wide data aggregation.",
      tags: ["IoT", "Distributed Systems", "Sensor Network", "MQTT"],
      codeUrl: "https://github.com/isadoreble/SISTER-Sensor",
      demoUrl: "#",
      demoIcon: "fa-circle-info",
      demoText: "View Project",
      featured: false
    }
  ],
  focus: [
    { id: 1, title: "Laravel", icon: "fa-brands fa-laravel" },
    { id: 2, title: "UI/UX Design", icon: "fa-solid fa-bezier-curve" },
    { id: 3, title: "Internet of Things (IoT)", icon: "fa-solid fa-network-wired" },
    { id: 4, title: "Augmented Reality", icon: "fa-solid fa-vr-cardboard" }
  ],
  creative: [
    { id: 1, title: "Golden Hour", subtitle: "Photography", category: "photography", img: "assets/sunset1.jpg" },
    { id: 2, title: "Twilight Dreams", subtitle: "Photography", category: "photography", img: "assets/sunset2.jpg" },
    { id: 3, title: "Horizon Glow", subtitle: "Photography", category: "photography", img: "assets/sunset3.jpg" },
    { id: 4, title: "Evening Hues", subtitle: "Photography", category: "photography", img: "assets/sunset4.jpg" },
    { id: 5, title: "Amber Skies", subtitle: "Photography", category: "photography", img: "assets/sunset5.jpg" },
    { id: 6, title: "Dusk Reflection", subtitle: "Photography", category: "photography", img: "assets/sunset6.jpg" },
    { id: 7, title: "Silhouette & Light", subtitle: "Photography", category: "photography", img: "assets/sunset7.jpg" },
    { id: 8, title: "Coastal Glow", subtitle: "Photography", category: "photography", img: "assets/sunset8.jpg" },
    { id: 9, title: "Purple Dusk", subtitle: "Photography", category: "photography", img: "assets/sunset9.jpg" },
    { id: 10, title: "Golden Ripple", subtitle: "Photography", category: "photography", img: "assets/sunset10.jpg" },
    { id: 11, title: "Flame Horizon", subtitle: "Photography", category: "photography", img: "assets/sunset11.jpg" },
    { id: 12, title: "Mirror Sea", subtitle: "Photography", category: "photography", img: "assets/sunset12.jpg" },
    { id: 13, title: "Skin Luxe Packaging", subtitle: "Packaging Design", category: "design", img: "assets/creative_packaging.png" },
    { id: 14, title: "Geometric Moods", subtitle: "Poster Design", category: "design", img: "assets/creative_poster.png" },
    { id: 15, title: "Brand Identity Kit", subtitle: "Branding Design", category: "design", img: "assets/creative_branding.png" }
  ],
  achievements: [
    { id: 1, date: "Jan – Mar 2026", title: "Internship – Disdukcapil Tanjungpinang", desc: "Completed practical work at Dinas Kependudukan dan Pencatatan Sipil — handled KTP document verification, public service administration, and developed an archive crosscheck system." },
    { id: 2, date: "2025", title: "KPPS Member – General Election Committee", desc: "Served as a KPPS (Voting Organizing Committee) member, assisting in election operations, voter data administration, and operating the official Sirekap application." },
    { id: 3, date: "2025", title: "Part-Time Food Stand Crew", desc: "Gained real-world customer service experience managing food orders, transactions, and customer interactions, strengthening communication and time management skills." },
    { id: 4, date: "2021", title: "PKL – Dinas Perindustrian dan Perdagangan Kepri", desc: "Vocational internship at the Provincial Industry & Trade Office (Klinik Kemasan dan Desain), assisting with packaging design for local SMEs and public administrative support." }
  ],
  organizations: [
    { id: 1, title: "Dies Natalis Informatics XVI (Volunteer)", icon: "fa-solid fa-wand-magic-sparkles", desc: "Helped coordinate stage logistics and operations for the 16th University Informatics Engineering anniversary festival." },
    { id: 2, title: "Dies Natalis Informatics XVII (Volunteer)", icon: "fa-solid fa-star", desc: "Active volunteer in the 17th Informatics Engineering anniversary event, supporting logistics, registration, and audience coordination." },
    { id: 3, title: "OSIS SMP", icon: "fa-solid fa-award", desc: "Active role in planning school events and student-staff communication relations during junior high school." },
    { id: 4, title: "Scouts (Pramuka)", icon: "fa-solid fa-compass", desc: "Trained in leadership, team coordination, discipline, and outdoor survival skills during vocational high school." },
    { id: 5, title: "Drumband Band", icon: "fa-solid fa-music", desc: "Practiced musical coordination, rhythmic timing, and synchronous group play as part of the school performance team." },
    { id: 6, title: "Red Cross Youth (PMR)", icon: "fa-solid fa-heart-pulse", desc: "Participated in community health campaigns and basic first aid emergency training." },
    { id: 7, title: "School Safety Patrol (PKS)", icon: "fa-solid fa-shield-halved", desc: "Assisted in maintaining discipline, order, and road safety around campus zones." }
  ],
  hobbies: [
    { id: 1, emoji: "📚", name: "Reading Novels", desc: "Exploring sci-fi, thriller, mystery, and fantasy universes to unlock imagination." },
    { id: 2, emoji: "📸", name: "Photography", desc: "Capturing scenery, human emotions, and street architecture through visual frames." },
    { id: 3, emoji: "🎮", name: "MOBA Gaming", desc: "Exercising micro-skills, teamwork coordination, map awareness, and fast callouts." },
    { id: 4, emoji: "🎵", name: "Lofi & Acoustic Music", desc: "Unwinding with soft instrumentals to boost concentration while coding backend logic." }
  ],
  articles: [
    {
      id: 1,
      title: "Bridging Art and Logic in Software Design",
      date: "June 23, 2026",
      excerpt: "How a background in multimedia and design elevates frontend programming, turning clean code into beautiful interfaces.",
      content: "As an Informatics Engineering student with a background in multimedia design, I often see software development as a balance between logic and aesthetics. Programming provides the functional skeleton, but UI/UX design is what connects the logic to the user.\n\nIn modern web engineering, developers who understand typography, color layouts, and spacing are highly valued. This intersection of skills allows you to build products that are not just technically efficient, but also highly intuitive.\n\nThis article outlines essential layout composition techniques that developers can immediately apply to make their software interfaces look pixel-perfect.",
      img: "assets/creative_poster.png"
    },
    {
      id: 2,
      title: "Photography Principles for UI Designers",
      date: "May 12, 2026",
      excerpt: "Applying camera framing rules like the Rule of Thirds and leading lines directly into web wireframes.",
      content: "Photography is about guiding the viewer's eye. Interestingly, the composition principles that make a photograph stand out are identical to the rules of UI/UX design.\n\nBy leveraging concepts like leading lines, framing, and contrast, web developers can direct a user's attention right toward high-priority elements like Call-to-Action buttons or announcements.\n\nWe break down how to map photographic composition directly onto web page wireframes to enhance user conversion rates.",
      img: "assets/creative_photography.png"
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. DATA INITIALIZATION ---
  let portfolioData = JSON.parse(localStorage.getItem('nanda-portfolio-data'));

  const isOldSchema = !portfolioData ||
    !portfolioData.focus ||
    !portfolioData.organizations ||
    !portfolioData.hobbies ||
    !portfolioData.articles ||
    !portfolioData.about ||
    !portfolioData.about.quote ||
    !portfolioData.skills ||
    portfolioData.skills.some(s => !s.category) ||
    portfolioData.dataVersion !== DATA_VERSION;

  if (isOldSchema) {
    portfolioData = defaultPortfolioData;
    localStorage.setItem('nanda-portfolio-data', JSON.stringify(portfolioData));
  }

  // --- 2. DYNAMIC RENDERING ---
  renderPortfolio(portfolioData);

  function renderPortfolio(data) {
    // 2.1 Hero Section
    const p = data.profile;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.innerHTML = `
        <div class="hero-badge-container">
          <span class="hero-badge"><i class="fa-solid fa-location-dot"></i> Tanjungpinang</span>
          <span class="hero-badge"><i class="fa-solid fa-graduation-cap"></i> UMRAH</span>
          <span class="hero-badge"><i class="fa-solid fa-circle-check" style="color: #62c370;"></i> ${p.availableForCollab ? 'Available for Collaboration' : 'Busy on Projects'}</span>
        </div>
        <span class="hero-pretitle">Welcome to my space</span>
        <h1 class="hero-title">Hi, I'm ${p.name}</h1>
        <h2 class="hero-subtitle">${p.role}</h2>
        <p class="hero-description">${p.description}</p>
        <div class="btn-group">
          <a href="#projects" class="btn btn-primary">View Projects <i class="fa-solid fa-arrow-down-long"></i></a>
          <a href="#contact" class="btn btn-secondary">Get in Touch <i class="fa-solid fa-paper-plane"></i></a>
        </div>
      `;
    }

    // Profile photo source update
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
      profileImg.src = p.profileImg || 'assets/hero_profile.png';
      profileImg.alt = `${p.name} - Informatics Engineering Student`;
    }

    // 2.2 About Section
    const ab = data.about;
    const aboutQuote = document.querySelector('.creative-quote');
    const aboutAuthor = document.querySelector('.creative-author');
    if (aboutQuote && aboutAuthor) {
      aboutQuote.textContent = `"${ab.quote}"`;
      aboutAuthor.textContent = ab.author;
    }

    const aboutTextContainer = document.querySelector('.about-text-container');
    if (aboutTextContainer) {
      aboutTextContainer.innerHTML = `
        <h3>${ab.title}</h3>
        <p>${ab.text1}</p>
        <p>${ab.text2}</p>
        <div class="about-info-grid">
          <div class="about-info-card">
            <i class="fa-solid fa-laptop-code"></i>
            <h4>${ab.card1_title}</h4>
            <p>${ab.card1_desc}</p>
          </div>
          <div class="about-info-card">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
            <h4>${ab.card2_title}</h4>
            <p>${ab.card2_desc}</p>
          </div>
        </div>
      `;
    }

    // 2.3 Skills Section (Grouped Dynamically)
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
      const groupedSkills = {};
      data.skills.forEach(skill => {
        const cat = skill.category || "Other Tools";
        if (!groupedSkills[cat]) {
          groupedSkills[cat] = {
            name: cat,
            icon: skill.categoryIcon || "fa-code",
            items: []
          };
        }
        groupedSkills[cat].items.push(skill);
      });

      skillsGrid.innerHTML = Object.values(groupedSkills).map(card => `
        <div class="tech-card card-base reveal reveal-up">
          <div class="tech-icon-circle">
            <i class="fa-solid ${card.icon}"></i>
          </div>
          <h3>${card.name}</h3>
          <div class="tech-list">
            ${card.items.map(item => `
              <div class="tech-item">
                <span class="tech-item-name">${item.name}</span>
                <i class="${item.icon || 'fa-solid fa-star'}"></i>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');
    }

    // 2.4 Projects Section
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
      projectsGrid.innerHTML = data.projects.map(proj => `
        <div class="project-card reveal reveal-up">
          ${proj.featured ? '<span class="project-badge"><i class="fa-solid fa-star"></i> Featured</span>' : ''}
          <div class="project-img-wrapper">
            <img src="${proj.img}" alt="${proj.title}">
          </div>
          <div class="project-content">
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-description">${proj.description}</p>
            <div class="project-tags">
              ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
            <div class="project-links">
              <a href="${proj.codeUrl || '#'}" class="project-link" target="_blank"><i class="fa-brands fa-github"></i> Code</a>
              <a href="${proj.demoUrl || '#'}" class="project-link" target="_blank"><i class="fa-solid ${proj.demoIcon || 'fa-arrow-up-right-from-square'}"></i> ${proj.demoText || 'Live Demo'}</a>
            </div>
          </div>
        </div>
      `).join('');
    }

    // 2.5 Focus Section
    const focusGrid = document.getElementById('focus-grid');
    if (focusGrid) {
      focusGrid.innerHTML = data.focus.map(foc => `
        <div class="focus-card card-base reveal reveal-up">
          <div class="focus-icon"><i class="${foc.icon}"></i></div>
          <h4>${foc.title}</h4>
        </div>
      `).join('');
    }

    // 2.6 Creative Works Gallery – Masonry Grid (natural photo sizes)
    const creativeSection = document.getElementById('creative-grid');
    if (creativeSection) {
      creativeSection.className = 'creative-masonry';

      function buildMasonry(filter) {
        const items = filter === 'all' ? data.creative : data.creative.filter(c => c.category === filter);
        creativeSection.innerHTML = items.map(c => `
          <div class="masonry-item" data-category="${c.category}">
            <div class="masonry-img-wrapper">
              <img src="${c.img}" alt="${c.title}" loading="lazy">
              <div class="masonry-overlay">
                <h4>${c.title}</h4>
                <span>${c.subtitle}</span>
                <button class="masonry-zoom-btn" data-src="${c.img}" data-title="${c.title}" data-sub="${c.subtitle}" aria-label="View fullscreen">
                  <i class="fa-solid fa-expand"></i>
                </button>
              </div>
            </div>
          </div>
        `).join('');

        // Zoom buttons open lightbox
        creativeSection.querySelectorAll('.masonry-zoom-btn').forEach(btn => {
          btn.addEventListener('click', e => {
            e.stopPropagation();
            const imageModal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImg');
            const modalCaption = document.getElementById('modalCaption');
            if (imageModal && modalImg && modalCaption) {
              modalImg.src = btn.getAttribute('data-src');
              modalImg.alt = btn.getAttribute('data-title');
              modalCaption.textContent = `${btn.getAttribute('data-title')} — ${btn.getAttribute('data-sub')}`;
              imageModal.classList.add('active');
              document.body.style.overflow = 'hidden';
            }
          });
        });
      }

      buildMasonry('all');

      // Wire filter buttons
      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          filterButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          buildMasonry(btn.getAttribute('data-filter'));
        });
      });
    }

    // 2.7 Articles Section
    const articlesGrid = document.getElementById('articles-grid');
    if (articlesGrid) {
      if (!data.articles || data.articles.length === 0) {
        articlesGrid.innerHTML = '<p class="no-data">No articles posted yet.</p>';
      } else {
        articlesGrid.innerHTML = data.articles.map(art => `
          <div class="project-card article-card reveal reveal-up" data-id="${art.id}">
            <div class="project-img-wrapper">
              <img src="${art.img || 'assets/creative_poster.png'}" alt="${art.title}">
            </div>
            <div class="project-content">
              <span class="project-badge" style="background-color: var(--primary-light); color: var(--primary-dark); font-weight:700;">
                <i class="fa-solid fa-calendar-days"></i> ${art.date}
              </span>
              <h3 class="project-title" style="margin-top:10px;">${art.title}</h3>
              <p class="project-description">${art.excerpt}</p>
              <button class="btn btn-secondary btn-read-article" style="padding: 10px 20px; border-radius: 20px; font-size: 0.85rem; width:100%; justify-content:center;">
                Read Article <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        `).join('');
      }
    }

    // 2.8 Achievements Timeline
    const timeline = document.querySelector('.timeline');
    if (timeline) {
      timeline.innerHTML = data.achievements.map((ach, idx) => `
        <div class="timeline-item ${idx % 2 === 0 ? 'left' : 'right'} reveal reveal-${idx % 2 === 0 ? 'left' : 'right'}">
          <div class="timeline-card">
            <span class="timeline-date">${ach.date}</span>
            <h3>${ach.title}</h3>
            <p>${ach.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // 2.9 Organizations Section
    const organizationsGrid = document.getElementById('organizations-grid');
    if (organizationsGrid) {
      organizationsGrid.innerHTML = data.organizations.map(org => `
        <div class="about-info-card card-base reveal reveal-up" style="border: 1px solid var(--card-border); box-shadow: var(--shadow-soft);">
          <i class="${org.icon || 'fa-solid fa-users'}" style="font-size: 1.6rem; color: var(--primary-dark); margin-bottom: 12px;"></i>
          <h4 style="font-size: 1.15rem; margin-bottom: 6px; color: var(--text-main); font-weight: 700;">${org.title}</h4>
          <p style="font-size: 0.9rem; margin-bottom: 0; line-height: 1.5; color: var(--text-muted);">${org.desc}</p>
        </div>
      `).join('');
    }

    // 2.10 Hobbies Section
    const hobbiesGrid = document.getElementById('hobbies-grid');
    if (hobbiesGrid) {
      hobbiesGrid.innerHTML = data.hobbies.map(hob => `
        <div class="focus-card card-base reveal reveal-up" style="border: 1px solid var(--card-border); box-shadow: var(--shadow-soft); text-align:center;">
          <div style="font-size:2.6rem; margin-bottom:15px;">${hob.emoji}</div>
          <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">${hob.name}</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.4; margin-top:5px;">${hob.desc}</p>
        </div>
      `).join('');
    }

    // 2.11 Social Info Left Column (Contact Section)
    const contactMethods = document.querySelector('.contact-methods');
    if (contactMethods) {
      contactMethods.innerHTML = `
        <div class="contact-method-card">
          <div class="contact-method-icon"><i class="fa-solid fa-envelope"></i></div>
          <div class="contact-method-details">
            <h4>Email Me</h4>
            <a href="mailto:${p.email}">${p.email}</a>
          </div>
        </div>
        
        <div class="contact-method-card">
          <div class="contact-method-icon"><i class="fa-brands fa-instagram"></i></div>
          <div class="contact-method-details">
            <h4>Instagram</h4>
            <a href="${p.instagram}" target="_blank">@${p.instagram.split('/').pop()}</a>
          </div>
        </div>

        <div class="contact-method-card">
          <div class="contact-method-icon"><i class="fa-brands fa-github"></i></div>
          <div class="contact-method-details">
            <h4>GitHub</h4>
            <a href="${p.github}" target="_blank">${p.github.replace('https://', '')}</a>
          </div>
        </div>

        <div class="contact-method-card">
          <div class="contact-method-icon"><i class="fa-brands fa-linkedin-in"></i></div>
          <div class="contact-method-details">
            <h4>LinkedIn</h4>
            <a href="${p.linkedin}" target="_blank">${p.linkedin.replace('https://', '')}</a>
          </div>
        </div>

        <!-- Quick email Compose box -->
        <div class="cta-box card-base" style="margin-top: 30px; padding: 25px; border: 1px solid var(--card-border); background-color: var(--bg-secondary); border-radius: var(--radius); text-align:center;">
          <div class="cta-icon-wrapper" style="font-size: 1.6rem; margin-bottom: 12px; display: inline-flex; width: 50px; height: 50px; border-radius: 50%; background-color: var(--primary-light); color: var(--primary-dark); align-items:center; justify-content:center;"><i class="fa-solid fa-envelope-open-text"></i></div>
          <h4 class="cta-title" style="font-size:1.1rem; font-weight:700; margin-bottom:5px;">Send Quick Email</h4>
          <p class="cta-desc" style="font-size:0.82rem; color:var(--text-muted); line-height:1.4; margin-bottom:15px;">Compose a direct mail instantly to connect about projects.</p>
          <a href="mailto:${p.email}" class="btn btn-primary" style="width: 100%; justify-content:center; padding: 10px 15px; border-radius: 20px; font-size:0.85rem;">
            <i class="fa-solid fa-paper-plane"></i> Launch Mail Client
          </a>
        </div>
      `;
    }

    // Footer Socials
    const footerSocials = document.querySelector('.footer-socials');
    if (footerSocials) {
      footerSocials.innerHTML = `
        <a href="${p.github}" target="_blank" class="footer-social-icon" aria-label="GitHub Profile"><i class="fa-brands fa-github"></i></a>
        <a href="${p.linkedin}" target="_blank" class="footer-social-icon" aria-label="LinkedIn Profile"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="${p.instagram}" target="_blank" class="footer-social-icon" aria-label="Instagram Profile"><i class="fa-brands fa-instagram"></i></a>
      `;
    }
  }


  // --- 3. PAGE LOADER ---
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (loader) {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
      }
    }, 500);
  });

  // Backup loader hide
  setTimeout(() => {
    if (loader && loader.style.opacity !== '0') {
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
    }
  }, 2500);


  // --- 4. DARK MODE TOGGLE ---
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      const isDark = body.classList.contains('dark-theme');
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    });
  }


  // --- 5. SCROLL PROGRESS INDICATOR & HEADER STYLE ---
  const scrollProgress = document.getElementById('scrollProgress');
  const header = document.querySelector('header');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    // Progress Bar
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll > 0) {
      const percentage = (window.scrollY / totalScroll) * 100;
      if (scrollProgress) scrollProgress.style.width = percentage + '%';
    } else {
      if (scrollProgress) scrollProgress.style.width = '0%';
    }

    // Header Background change on scroll
    if (header) {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
        header.style.padding = '10px 0';
      } else {
        header.style.boxShadow = 'none';
        header.style.padding = '20px 0';
      }
    }

    // Back to top button visibility
    if (backToTop) {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  // --- 6. MOBILE NAVIGATION ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinksItems = document.querySelectorAll('.nav-link-item');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Close mobile menu when a link is clicked
  navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks) navLinks.classList.remove('active');
      const icon = mobileToggle ? mobileToggle.querySelector('i') : null;
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  });


  // --- 7. ACTIVE NAVIGATION ELEMENT HIGHLIGHT ON SCROLL ---
  const sections = document.querySelectorAll('section');

  const activeNavObserverOptions = {
    root: null,
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0
  };

  const activeNavObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinksItems.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, activeNavObserverOptions);

  sections.forEach(section => {
    activeNavObserver.observe(section);
  });


  // --- 8. REVEAL ANIMATIONS ON SCROLL ---
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealObserverOptions);

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  // --- 9. CREATIVE WORKS FILTER ---
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');
      const creativeItems = document.querySelectorAll('.creative-item');

      creativeItems.forEach(item => {
        const category = item.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });


  // --- 10. LIGHTBOX IMAGE PREVIEW MODAL ---
  const imageModal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.getElementById('modalClose');

  const creativeGridElement = document.getElementById('creative-grid');
  if (creativeGridElement) {
    creativeGridElement.addEventListener('click', (e) => {
      const creativeItem = e.target.closest('.creative-item');
      if (!creativeItem) return;

      const img = creativeItem.querySelector('img');
      const title = creativeItem.querySelector('h4').textContent;
      const subtitle = creativeItem.querySelector('span').textContent;

      if (imageModal && modalImg && modalCaption) {
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalCaption.textContent = `${title} (${subtitle})`;
        imageModal.classList.add('active');
        body.style.overflow = 'hidden'; // Lock background scrolling
      }
    });
  }

  const closeModal = () => {
    if (imageModal) {
      imageModal.classList.remove('active');
      body.style.overflow = '';
    }
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (imageModal) {
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) closeModal();
    });
  }


  // --- 11. ARTICLE READER DETAIL MODAL ---
  const articleModal = document.createElement('div');
  articleModal.id = 'articleModal';
  articleModal.className = 'modal';
  articleModal.innerHTML = `
    <div class="modal-content-wrapper" style="max-width: 760px; max-height: 85vh; overflow-y: auto; padding: 40px; border-radius: var(--radius); border: 2px solid var(--card-border); background-color: var(--card-bg);">
      <button class="modal-close" id="articleModalClose" aria-label="Close article modal" style="top:20px; right:20px;"><i class="fa-solid fa-xmark"></i></button>
      <div class="article-modal-header" style="margin-bottom: 20px;">
        <span class="article-modal-date" style="font-size:0.85rem; color:var(--primary-dark); font-weight:700; display:flex; align-items:center; gap:6px; margin-bottom:8px;"></span>
        <h2 class="article-modal-title" style="font-size: 2rem; font-weight: 800; line-height: 1.25; margin:0;"></h2>
      </div>
      <div class="article-modal-img" style="width: 100%; height: 350px; border-radius: 12px; overflow: hidden; margin-bottom: 25px;">
        <img src="" alt="" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div class="article-modal-content" style="font-size:1.05rem; line-height:1.75; color:var(--text-main);"></div>
    </div>
  `;
  document.body.appendChild(articleModal);

  const articleModalClose = document.getElementById('articleModalClose');

  const articlesGridElement = document.getElementById('articles-grid');
  if (articlesGridElement) {
    articlesGridElement.addEventListener('click', (e) => {
      const card = e.target.closest('.article-card');
      if (!card) return;

      const articleId = parseInt(card.getAttribute('data-id'));
      const article = portfolioData.articles.find(a => a.id === articleId);
      if (!article) return;

      const modalTitle = articleModal.querySelector('.article-modal-title');
      const modalDate = articleModal.querySelector('.article-modal-date');
      const modalImg = articleModal.querySelector('.article-modal-img img');
      const modalContent = articleModal.querySelector('.article-modal-content');

      modalTitle.textContent = article.title;
      modalDate.innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${article.date}`;
      modalImg.src = article.img;
      modalImg.alt = article.title;

      modalContent.innerHTML = article.content.split('\n\n').map(pText => `<p style="margin-bottom:15px;">${pText}</p>`).join('');

      articleModal.classList.add('active');
      body.style.overflow = 'hidden';
    });
  }

  const closeArticleModal = () => {
    articleModal.classList.remove('active');
    body.style.overflow = '';
  };

  if (articleModalClose) articleModalClose.addEventListener('click', closeArticleModal);
  articleModal.addEventListener('click', (e) => {
    if (e.target === articleModal) closeArticleModal();
  });


  // Global escape key handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeArticleModal();
    }
  });


  // --- 12. CONTACT FORM SIMULATION ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      if (name && email && subject && message) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        setTimeout(() => {
          alert(`Thank you, ${name}! Your message has been sent successfully. Nanda will get back to you soon!`);
          contactForm.reset();
          submitBtn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
          submitBtn.disabled = false;
        }, 1500);
      }
    });
  }

});
