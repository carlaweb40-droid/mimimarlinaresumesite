/* =====================================================
   MIMI MARLINA — PORTFOLIO SITE LOGIC
   -----------------------------------------------------
   Edit the DATA sections below to update content without
   touching index.html. Each block that renders to the page
   is generated from a plain JavaScript array/object here.
   ===================================================== */

/* ============ 1. SALES EXPERIENCE (Timeline) ============ */
const EXPERIENCE = [
  {
    role: "Sales Trainer / Product Educator",
    org: "Universe Pro",
    dates: "Mar 2026 – Present",
    location: "Remote",
    highlights: [
      "Create and deliver sales-training and product-education videos.",
      "Assist with product enquiries.",
      "Apply sales and marketing techniques to webinar-based course promotion.",
      "Help prospective customers understand products, offers and purchasing decisions.",
      "Translate complex product and sales concepts into clear, practical messaging."
    ],
    tag: "Current Role"
  },
  {
    role: "Sales Representative",
    org: "Hextron International",
    dates: "May 2025 – Dec 2025",
    location: "Remote",
    highlights: [
      "Acquired approximately 250 customers through inbound and outbound digital sales activity.",
      "Primary channel: TikTok Live — used to generate and convert leads.",
      "Handled prospect questions and objections through live, real-time conversation.",
      "Managed follow-up and conversion through to purchase."
    ],
    tag: "Signature Result"
  },
  {
    role: "Vice President of Sales",
    org: "Hextron International",
    dates: "Aug 2024 – May 2025",
    location: "Remote",
    highlights: [
      "Developed sales offers and go-to-market ideas designed to bring products to a broader mass-market audience.",
      "Advised on sales and marketing direction.",
      "Contributed to product education and sales messaging."
    ],
    tag: null
  },
  {
    role: "Founder / Marketing Director",
    org: "Cryptologicals Pte Ltd",
    dates: "Jan 2021 – Dec 2022",
    location: null,
    highlights: [
      "Taught and coached more than 300 students, guiding them through high-ticket sales and closing techniques.",
      "Closed high-ticket offers up to $10,000 per student.",
      "Achieved a highest recorded revenue of $50,000.",
      "Led client acquisition, onboarding and follow-up communication.",
      "Produced advertising copy and marketing campaigns; managed customer relationships and product education."
    ],
    tag: "High-Ticket Sales"
  },
  {
    role: "Teaching Lecturer",
    org: "KLIEC",
    dates: "2022 – 2023",
    location: null,
    highlights: [
      "Delivered presentations and workshops.",
      "Explained complex technical concepts to diverse audiences.",
      "Developed educational materials.",
      "Guided participants through practical exercises."
    ],
    tag: null
  }
];

/* ============ 2. TIKTOK LIVE PROCESS FLOW ============ */
const PROCESS_STEPS = [
  "TikTok Live",
  "Prospect Engagement",
  "Product Education",
  "Questions / Objections",
  "Follow-Up",
  "Customer"
];

/* ============ 3. SALES TOOLKIT ============ */
const TOOLKIT = [
  {
    category: "Sales Development",
    items: [
      "Lead Generation", "Sales Prospecting", "Inbound Sales", "Outbound Sales",
      "Lead Qualification", "Customer Acquisition", "Consultative Selling",
      "High-Ticket Sales", "Sales Communication"
    ]
  },
  {
    category: "Customer & Pipeline",
    items: [
      "Customer Relationship Management", "Customer Onboarding", "Lead Follow-Up",
      "Customer Engagement", "Sales Pipeline Management", "Product Enquiries"
    ]
  },
  {
    category: "Sales & Marketing",
    items: [
      "Sales Strategy", "Offer Development", "Product Education", "Social Selling",
      "Webinar Sales", "Digital Marketing", "Content Marketing"
    ]
  },
  {
    category: "Technology & AI",
    items: [
      "HubSpot CRM", "HubSpot Sales Hub", "Generative AI", "Prompt Engineering",
      "AI-Assisted Research", "AI Productivity"
    ]
  }
];

/* ============ 4. CERTIFICATIONS ============ */
/* To add a new certification later: copy one object below,
   update the fields, and drop the matching file into
   /assets/certifications/                                   */
const CERTIFICATIONS = [
  {
    name: "HubSpot Inbound Sales Certification",
    org: "HubSpot Academy",
    date: "2026",
    credentialId: "mfsl4bxs",
    credentialUrl: "https://app-eu1.hubspot.com/academy/achievements/mfsl4bxs/en/1/mimi-marlina/inbound-sales-certified",
    file: "assets/certifications/hubspot-inbound-sales.pdf",
    description: "Covers modern inbound selling: building trust with buyers, qualifying leads and guiding prospects through their buying journey.",
    skills: ["Inbound Sales", "Lead Qualification", "Sales Prospecting", "Buyer Journey", "Sales Communication"]
  },
  {
    name: "HubSpot Sales Hub Software Certification",
    org: "HubSpot Academy",
    date: "2026",
    credentialId: "zrhwl233",
    credentialUrl: "https://app-eu1.hubspot.com/academy/achievements/zrhwl233/en/1/mimi-marlina/hubspot-sales-hub-software-certified",
    file: "assets/certifications/hubspot-sales-hub.pdf",
    description: "Hands-on certification in using HubSpot's Sales Hub to manage pipeline, contacts and day-to-day sales operations.",
    skills: ["HubSpot CRM", "CRM Management", "Sales Pipeline", "Sales Technology", "Sales Operations"]
  },
  {
    name: "AI Fluency: Framework & Foundations",
    org: "Anthropic",
    date: "2026",
    credentialId: "cr2ff957eh4w",
    credentialUrl: "https://verify.skilljar.com/c/cr2ff957eh4w",
    file: "assets/certifications/anthropic-ai-fluency.pdf",
    description: "Foundational certification in working effectively with generative AI tools, prompt design and evaluating AI output.",
    skills: ["AI Fluency", "Generative AI", "Prompt Engineering", "AI-Assisted Research", "AI Productivity", "AI Output Evaluation"]
  }
];

/* ============ 5. PORTFOLIO / CASE STUDIES ============ */
const CASE_STUDIES = [
  {
    number: "01",
    title: "Customer Acquisition Through TikTok Live",
    stages: ["Challenge", "Approach", "Lead Generation", "Product Education", "Customer Conversion"],
    result: "Result: ~250 customers acquired",
    placeholders: ["Screenshot", "Live clip", "Sales script"]
  },
  {
    number: "02",
    title: "Sales Offer & Market Positioning",
    stages: ["VP Sales Experience", "Go-to-Market Ideas", "Offer Development", "Mass-Market Positioning"],
    result: "Based on VP of Sales experience at Hextron International",
    placeholders: ["Offer example", "Positioning notes", "Campaign example"]
  },
  {
    number: "03",
    title: "Product Education & Sales Training",
    stages: ["Training Design", "Product Education", "Webinar Promotion", "Customer Enquiries"],
    result: "Based on current role at Universe Pro",
    placeholders: ["Training video", "Webinar clip", "Course promotion example"]
  }
];

/* ============ 6. BEYOND WORK — TRAVEL GALLERY ============ */
/* Add a new photo by adding an object here and uploading the
   matching file to /assets/personal/                         */
const TRAVEL_GALLERY = [
  { file: "assets/personal/travel-01.jpg", caption: "[ADD CAPTION]" },
  { file: "assets/personal/travel-02.jpg", caption: "[ADD CAPTION]" },
  { file: "assets/personal/travel-03.jpg", caption: "[ADD CAPTION]" }
];

/* ============ 7. WHAT TRAVEL TAUGHT ME ============ */
const TRAVEL_LESSONS = [
  {
    quality: "Adaptability",
    text: "Plans change constantly on the road — flights, borders, accommodation. Adjusting quickly became routine."
  },
  {
    quality: "Resourcefulness",
    text: "Limited resources and unfamiliar systems meant finding workable solutions rather than perfect ones."
  },
  {
    quality: "Comfort with Uncertainty",
    text: "Overland travel rarely goes exactly to plan — staying calm and deciding anyway is a learned skill."
  },
  {
    quality: "Cross-Cultural Communication",
    text: "Moving through different countries meant adjusting how I communicated depending on who I was speaking with."
  }
];

/* ============ 8. LIFE OUTSIDE SALES ============ */
/* Edit this list freely — remove or add items as you like. */
const LIFE_OUTSIDE_SALES = [
  "Travel",
  "Cooking",
  "Music",
  "Reading"
];


/* =====================================================
   RENDERING
   ===================================================== */

function renderTimeline() {
  const el = document.getElementById("timeline");
  if (!el) return;
  el.innerHTML = EXPERIENCE.map(job => `
    <article class="tl-item">
      <div class="tl-meta">
        <span class="tl-dates">${job.dates}</span>
        ${job.location ? `<span class="tl-location">${job.location}</span>` : ""}
      </div>
      <div class="tl-body">
        <h3>${job.role}</h3>
        <p class="tl-org">${job.org}</p>
        <ul class="tl-highlights">
          ${job.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
        ${job.tag ? `<span class="tl-tag">${job.tag}</span>` : ""}
      </div>
    </article>
  `).join("");
}

function renderProcessFlow() {
  const el = document.getElementById("process-flow");
  if (!el) return;
  const stepsHtml = PROCESS_STEPS.map((step, i) => {
    const isLast = i === PROCESS_STEPS.length - 1;
    return `<div class="flow-step${isLast ? " flow-result" : ""}">${step}</div>` +
      (isLast ? "" : `<span class="flow-arrow" aria-hidden="true">&rarr;</span>`);
  }).join("");
  el.innerHTML = stepsHtml;
}

function renderToolkit() {
  const el = document.getElementById("toolkit-grid");
  if (!el) return;
  el.innerHTML = TOOLKIT.map(cat => `
    <div class="toolkit-cat">
      <h3>${cat.category}</h3>
      <ul>${cat.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
  `).join("");
}

function renderCertifications() {
  const el = document.getElementById("cert-grid");
  if (!el) return;
  el.innerHTML = CERTIFICATIONS.map(cert => `
    <article class="cert-card">
      <a class="cert-preview" href="${cert.file}" target="_blank" rel="noopener" aria-label="Open ${cert.name} certificate">
        <img src="${cert.file}" alt="" class="cert-preview-img"
             style="display:none;"
             onload="this.style.display='block'; this.nextElementSibling.style.display='none';">
        <span class="cert-preview-placeholder">
          <span>Certificate Preview</span>
          <small>${cert.file}</small>
        </span>
      </a>
      <div class="cert-body">
        <h3>${cert.name}</h3>
        <p class="cert-org">${cert.org}</p>
        <p class="cert-date">Issued ${cert.date}</p>
        <p class="cert-desc">${cert.description}</p>
        <div class="cert-skills">
          ${cert.skills.map(s => `<span class="cert-skill-tag">${s}</span>`).join("")}
        </div>
        <p class="cert-meta">Credential ID: ${cert.credentialId}</p>
        <a class="cert-link" href="${cert.credentialUrl}" target="_blank" rel="noopener">View credential &rarr;</a>
      </div>
    </article>
  `).join("");
}

function renderCaseStudies() {
  const el = document.getElementById("case-grid");
  if (!el) return;
  el.innerHTML = CASE_STUDIES.map(cs => `
    <article class="case-card">
      <div class="case-index">
        <span class="case-index-num">${cs.number}</span>
        <span class="case-index-label">Case Study</span>
      </div>
      <div class="case-content">
        <h3>${cs.title}</h3>
        <div class="case-stages">
          ${cs.stages.map(s => `<span class="case-stage">${s}</span>`).join("")}
        </div>
        <p class="case-result">${cs.result}</p>
        <div class="case-placeholders">
          ${cs.placeholders.map(p => `<span class="case-placeholder-tag">+ ${p} (add later)</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function renderTravelGallery() {
  const el = document.getElementById("beyond-gallery");
  if (!el) return;
  el.innerHTML = TRAVEL_GALLERY.map(photo => `
    <figure class="travel-photo">
      <img src="${photo.file}" alt="${photo.caption}" class="travel-photo-img"
           style="display:none;"
           onload="this.style.display='block'; this.nextElementSibling.style.display='none';">
      <span class="travel-photo-placeholder">
        <span>Travel Photo</span>
        <small>${photo.file}</small>
        <em>${photo.caption}</em>
      </span>
    </figure>
  `).join("");
}

function renderLessons() {
  const el = document.getElementById("lessons-grid");
  if (!el) return;
  el.innerHTML = TRAVEL_LESSONS.map(l => `
    <div class="lesson-card">
      <p class="lesson-quality">${l.quality}</p>
      <p class="lesson-text">${l.text}</p>
    </div>
  `).join("");
}

function renderLifeOutsideSales() {
  const el = document.getElementById("life-list");
  if (!el) return;
  el.innerHTML = LIFE_OUTSIDE_SALES.map(item => `<li>${item}</li>`).join("");
}

/* =====================================================
   CONTACT FORM (Netlify Forms — AJAX submit, no reload)
   ===================================================== */

function encodeFormData(formEl) {
  return new URLSearchParams(new FormData(formEl)).toString();
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "Sending...";
    status.className = "form-status";

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData(form),
    })
      .then(() => {
        status.textContent = "Thanks — your message has been sent. I'll get back to you soon.";
        status.className = "form-status success";
        form.reset();
      })
      .catch(() => {
        status.textContent = "Something went wrong. Please try emailing me directly instead.";
        status.className = "form-status error";
      });
  });
}

/* =====================================================
   NAVIGATION BEHAVIOR
   ===================================================== */

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* =====================================================
   INIT
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  renderProcessFlow();
  renderToolkit();
  renderCertifications();
  renderCaseStudies();
  renderTravelGallery();
  renderLessons();
  renderLifeOutsideSales();
  initMobileNav();
  initContactForm();
});
