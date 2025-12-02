import '../style.css'
import { initSmoothScroll } from './utils/smoothScroll.js'
import gsap from 'gsap'

// Initialize core components
const lenis = initSmoothScroll()

// --- Data ---
const portfolioItems = [
  { title: "네온 제네시스", category: "VFX / 시뮬레이션", img: "/assets/images/portfolio/work-01.png", video: "/assets/videos/project1.mp4" },
  { title: "사이버 보이드", category: "모션 그래픽", img: "/assets/images/portfolio/work-02.png", video: "/assets/videos/project2.mp4" },
  { title: "데이터 플로우", category: "인터랙티브", img: "/assets/images/portfolio/work-03.png", video: "/assets/videos/project3.mp4" },
  { title: "뉴럴 넷", category: "합성", img: "/assets/images/portfolio/work-04.png", video: "/assets/videos/project4.mp4" },
  { title: "크로마틱", category: "3D 아트", img: "/assets/images/portfolio/work-05.png", video: "" },
  { title: "글리치 스톰", category: "실험적", img: "/assets/images/portfolio/work-06.png", video: "" },
]

// --- HTML Injection ---

// Navbar
document.querySelector('#navbar').innerHTML = `
  <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
    <div class="logo" style="font-weight: 900; font-size: 2rem; letter-spacing: -0.05em; cursor: pointer;" onclick="window.scrollTo(0,0)">
      KIM HYEYEONG
    </div>
    <ul style="display: flex; gap: 3rem; list-style: none;">
      <li><a href="#portfolio" class="nav-link" data-target="#portfolio">작업</a></li>
      <li><a href="#about" class="nav-link" data-target="#about">소개</a></li>
      <li><a href="#contact" class="nav-link" data-target="#contact">문의</a></li>
    </ul>
  </div>
`

// Main Content
document.querySelector('#main-content').innerHTML = `
  <section class="hero">
    <div class="sticker sticker-guitar">
      <svg viewBox="0 0 100 100">
        <path d="M30,90 C20,90 10,80 10,60 C10,40 20,30 30,30 L30,10 L40,10 L40,30 C50,30 60,40 60,60 C60,80 50,90 40,90 Z M35,40 C32,40 30,42 30,45 C30,48 32,50 35,50 C38,50 40,48 40,45 C40,42 38,40 35,40 Z" fill="var(--color-accent)" stroke="black" stroke-width="3"/>
        <line x1="35" y1="10" x2="35" y2="90" stroke="black" stroke-width="2"/>
      </svg>
    </div>
    <div class="sticker sticker-ai">
      <svg viewBox="0 0 100 100">
        <rect x="10" y="20" width="80" height="60" rx="10" fill="var(--color-text)" />
        <text x="50" y="65" font-size="40" text-anchor="middle" fill="var(--color-accent)" font-weight="900" font-family="sans-serif">AI</text>
        <circle cx="20" cy="30" r="5" fill="var(--color-accent)"/>
        <circle cx="80" cy="30" r="5" fill="var(--color-accent)"/>
      </svg>
    </div>

    <div class="hero-content">
      <h1 class="text-graphic">
        VISUAL<br>
        <span class="text-outline">EFFECTS</span>
      </h1>
      <div class="hero-subtitle">
        VFX 아티스트 & 크리에이티브 개발자
      </div>
    </div>
  </section>

  <section id="about">
    <div class="sticker sticker-tangerine">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="60" r="35" fill="#FF9900" stroke="black" stroke-width="3"/>
        <path d="M50,25 Q60,10 80,20 Q60,30 50,25" fill="green" stroke="black" stroke-width="2"/>
      </svg>
    </div>
    <div class="sticker sticker-pen">
      <svg viewBox="0 0 100 100" transform="rotate(45)">
        <rect x="40" y="10" width="20" height="60" fill="var(--color-accent-secondary)" stroke="black" stroke-width="3"/>
        <path d="M40,70 L50,90 L60,70 Z" fill="black"/>
      </svg>
    </div>

    <div class="container">
      <div class="about-content">
        <h2 style="font-size: 4rem; margin-bottom: 2rem; color: var(--color-text);">안녕하세요.</h2>
        <p class="about-text">
          뇌리에 박히는 <span style="background: var(--color-text); color: var(--color-accent); padding: 0 0.5rem;">강렬한</span> 시각 경험을 만듭니다.
        </p>
        <p style="font-size: 1.5rem; margin-top: 2rem; font-weight: 500;">
          서울을 기반으로 활동하며, 하이엔드 VFX와 모션 그래픽, 인터랙티브 아트를 전문으로 합니다.
        </p>
      </div>
    </div>
  </section>

  <section id="portfolio" class="portfolio-section container">
    <h2 style="font-size: 4rem; margin-bottom: 4rem; text-align: right;">주요 작업</h2>
    <div class="portfolio-grid">
      ${portfolioItems.map((item, index) => `
        <div class="project-card">
          <div class="card-media">
            <img src="${item.img}" alt="${item.title}" loading="lazy" />
          </div>
          <div class="card-info">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-category">${item.category}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <section id="showreel">
    <div class="sticker sticker-note">
      <svg viewBox="0 0 100 100">
        <path d="M30,80 L30,30 L70,20 L70,70" fill="none" stroke="var(--color-accent)" stroke-width="5"/>
        <circle cx="20" cy="80" r="15" fill="var(--color-text)"/>
        <circle cx="60" cy="70" r="15" fill="var(--color-text)"/>
      </svg>
    </div>
    <div class="play-button interactive">
      <div class="play-icon"></div>
    </div>
    <h2 style="position: absolute; bottom: 10%; font-size: 2rem; letter-spacing: 0.2em;">SHOWREEL 2025</h2>
  </section>

  <section id="contact">
    <div class="container">
      <h2 style="font-size: 4rem; margin-bottom: 3rem;">프로젝트 문의</h2>
      <form class="contact-form">
        <div style="margin-bottom: 1rem;">
          <label style="font-weight: 700; display: block; margin-bottom: 0.5rem;">이름</label>
          <input type="text" class="input-graphic" placeholder="이름을 입력하세요" />
        </div>
        <div style="margin-bottom: 1rem;">
          <label style="font-weight: 700; display: block; margin-bottom: 0.5rem;">이메일</label>
          <input type="email" class="input-graphic" placeholder="이메일을 입력하세요" />
        </div>
        <div style="margin-bottom: 2rem;">
          <label style="font-weight: 700; display: block; margin-bottom: 0.5rem;">내용</label>
          <textarea rows="4" class="input-graphic" placeholder="프로젝트에 대해 알려주세요"></textarea>
        </div>
        <button type="submit" class="btn-graphic">문의 보내기</button>
      </form>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 VFX PORTFOLIO. ALL RIGHTS RESERVED.</p>
  </footer>
`

// --- Logic & Interactions ---

// Hero Animations
const heroTitle = document.querySelector('.hero h1')
const heroSubtitle = document.querySelector('.hero-subtitle')

const tl = gsap.timeline({ delay: 0.2 })

tl.from(heroTitle, {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: 'elastic.out(1, 0.5)' // Bouncy effect
})
  .from(heroSubtitle, {
    scale: 0,
    rotation: -10,
    duration: 1,
    ease: 'elastic.out(1, 0.5)'
  }, '-=1')

// Navigation Scroll Logic
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const targetId = link.getAttribute('data-target')
    const targetSection = document.querySelector(targetId)
    if (targetSection) {
      lenis.scrollTo(targetSection, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Custom easing if needed
      })
    }
  })
})
