import gsap from 'gsap'

export class Cursor {
    constructor() {
        this.cursor = document.querySelector('#cursor')
        this.pos = { x: 0, y: 0 }
        this.mouse = { x: 0, y: 0 }
        this.speed = 0.1

        this.init()
    }

    init() {
        // Initial style setup is done in CSS, but we ensure it's positioned correctly
        gsap.set(this.cursor, { xPercent: -50, yPercent: -50 })

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX
            this.mouse.y = e.clientY
        })

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, .interactive')
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.enter())
            el.addEventListener('mouseleave', () => this.leave())
        })

        this.animate()
    }

    animate() {
        const dt = 1.0 - Math.pow(1.0 - this.speed, gsap.ticker.deltaRatio())

        this.pos.x += (this.mouse.x - this.pos.x) * dt
        this.pos.y += (this.mouse.y - this.pos.y) * dt

        gsap.set(this.cursor, { x: this.pos.x, y: this.pos.y })

        requestAnimationFrame(this.animate.bind(this))
    }

    enter() {
        gsap.to(this.cursor, { scale: 1.5, duration: 0.3 })
    }

    leave() {
        gsap.to(this.cursor, { scale: 1, duration: 0.3 })
    }
}
