import '../style.css'
import { initSmoothScroll } from './utils/smoothScroll.js'
import gsap from 'gsap'

// Initialize core components
const lenis = initSmoothScroll()

// --- Data ---
const portfolioItems = [
  {
    title: "네온 제네시스",
    category: "VFX / 시뮬레이션",
    img: "assets/images/portfolio/work-01.png",
    video: "assets/videos/project1.mp4",
    description: "미래 도시의 네온 사인과 비 내리는 거리를 시뮬레이션한 프로젝트입니다. Houdini를 사용하여 절차적인 도시 생성을 구현하고, Redshift로 렌더링하여 사이버펑크 분위기를 극대화했습니다."
  },
  {
    title: "사이버 보이드",
    category: "모션 그래픽",
    img: "assets/images/portfolio/work-02.png",
    video: "assets/videos/project2.mp4",
    description: "데이터가 붕괴되는 과정을 추상적으로 표현한 모션 그래픽입니다. Cinema 4D와 After Effects를 활용하여 글리치 효과와 역동적인 타이포그래피를 결합했습니다."
  },
  {
    title: "데이터 플로우",
    category: "인터랙티브",
    img: "assets/images/portfolio/work-03.png",
    video: "assets/videos/project3.mp4",
    description: "실시간 데이터 시각화 프로젝트로, 사용자의 입력에 따라 흐름이 변화하는 인터랙티브 아트입니다. TouchDesigner를 사용하여 데이터의 유기적인 움직임을 구현했습니다."
  },
  {
    title: "뉴럴 넷",
    category: "합성",
    img: "assets/images/portfolio/work-04.png",
    video: "assets/videos/project4.mp4",
    description: "인공지능 신경망의 구조를 시각화한 합성 작업입니다. Nuke를 사용하여 복잡한 레이어를 합성하고, 깊이감 있는 룩을 완성했습니다."
  },
  {
    title: "크로마틱",
    category: "3D 아트",
    img: "assets/images/portfolio/work-05.png",
    video: "",
    description: "빛의 분산과 굴절을 탐구한 3D 아트워크입니다. 다양한 재질과 조명 세팅을 통해 몽환적이고 다채로운 색감을 표현했습니다."
  },
  {
    title: "글리치 스톰",
    category: "실험적",
    img: "assets/images/portfolio/work-06.png",
    video: "",
    description: "디지털 노이즈와 왜곡을 예술적으로 승화시킨 실험적인 영상입니다. 아날로그 소스를 디지털로 변환하는 과정에서 발생하는 우연한 효과들을 적극 활용했습니다."
  },
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

// --- Portfolio Modal Logic ---

// Inject Modal HTML
const modalHTML = `
  <div id="portfolio-modal" class="portfolio-modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <div class="modal-body">
        <div class="modal-media">
          <img src="" alt="" id="modal-img" />
          <video src="" id="modal-video" controls style="display: none;"></video>
        </div>
        <div class="modal-info">
          <h3 id="modal-title"></h3>
          <p id="modal-category"></p>
          <p id="modal-desc"></p>
        </div>
      </div>
    </div>
  </div>
`
document.body.insertAdjacentHTML('beforeend', modalHTML)

const modal = document.querySelector('#portfolio-modal')
const modalImg = document.querySelector('#modal-img')
const modalVideo = document.querySelector('#modal-video')
const modalTitle = document.querySelector('#modal-title')
const modalCategory = document.querySelector('#modal-category')
const modalDesc = document.querySelector('#modal-desc')
const modalClose = document.querySelector('.modal-close')
const modalOverlay = document.querySelector('.modal-overlay')

function openModal(item) {
  modalTitle.textContent = item.title
  modalCategory.textContent = item.category
  modalDesc.textContent = item.description

  if (item.video) {
    modalVideo.src = item.video
    modalVideo.style.display = 'block'
    modalImg.style.display = 'none'
  } else {
    modalImg.src = item.img
    modalImg.style.display = 'block'
    modalVideo.style.display = 'none'
    modalVideo.pause()
  }

  modal.classList.add('active')
  document.body.style.overflow = 'hidden' // Prevent background scrolling
}

function closeModal() {
  modal.classList.remove('active')
  document.body.style.overflow = ''
  modalVideo.pause()
}

// Event Listeners
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    openModal(portfolioItems[index])
  })
})

modalClose.addEventListener('click', closeModal)
modalOverlay.addEventListener('click', closeModal)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal()
})
