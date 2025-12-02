import * as THREE from 'three'
import vertexShader from './shaders/vertex.glsl?raw'
import fragmentShader from './shaders/fragment.glsl?raw'

export class Scene {
    constructor() {
        this.canvas = document.querySelector('#webgl-canvas')
        this.width = window.innerWidth
        this.height = window.innerHeight

        this.init()
    }

    init() {
        this.scene = new THREE.Scene()

        // Use PerspectiveCamera for better 3D object support
        this.camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000)
        this.camera.position.z = 5

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        })
        this.renderer.setSize(this.width, this.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        this.addObjects()
        this.addAboutObject()
        this.resize()
        this.setupResize()

        this.clock = new THREE.Clock()
        this.animate()
    }

    addObjects() {
        this.geometry = new THREE.PlaneGeometry(2, 2)
        this.material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2(this.width, this.height) }
            }
        })

        this.plane = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.plane)
    }

    addAboutObject() {
        const geometry = new THREE.IcosahedronGeometry(1.5, 1)
        const material = new THREE.MeshBasicMaterial({
            color: 0x4BB7FF,
            wireframe: true,
            transparent: true,
            opacity: 0.3
        })

        this.aboutSphere = new THREE.Mesh(geometry, material)
        // Position relative to camera or scene
        this.aboutSphere.position.set(3, 0, 0)
        this.aboutSphere.visible = false
        this.scene.add(this.aboutSphere)
    }

    setupResize() {
        window.addEventListener('resize', this.resize.bind(this))
    }

    resize() {
        this.width = window.innerWidth
        this.height = window.innerHeight

        this.renderer.setSize(this.width, this.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        this.material.uniforms.uResolution.value.set(this.width, this.height)

        this.camera.aspect = this.width / this.height
        this.camera.updateProjectionMatrix()

        // Calculate plane scale to fill screen at z=0
        // Camera z=5
        const dist = this.camera.position.z
        const vFOV = THREE.MathUtils.degToRad(this.camera.fov)
        const height = 2 * Math.tan(vFOV / 2) * dist
        const width = height * this.camera.aspect

        this.plane.scale.set(width, height, 1)
    }

    animate() {
        this.material.uniforms.uTime.value = this.clock.getElapsedTime()

        if (this.aboutSphere && this.aboutSphere.visible) {
            this.aboutSphere.rotation.x += 0.002
            this.aboutSphere.rotation.y += 0.003
        }

        this.renderer.render(this.scene, this.camera)

        requestAnimationFrame(this.animate.bind(this))
    }

    onScroll(scrollY) {
        // Simple visibility toggle based on scroll position
        // Assuming About section is the second section (index 1)
        // Height is window.innerHeight
        const triggerStart = window.innerHeight * 0.5
        const triggerEnd = window.innerHeight * 1.5

        if (scrollY > triggerStart && scrollY < triggerEnd) {
            this.aboutSphere.visible = true
            // Optional: Parallax or movement
            // this.aboutSphere.position.y = (scrollY - window.innerHeight) * 0.005
        } else {
            this.aboutSphere.visible = false
        }
    }
}
