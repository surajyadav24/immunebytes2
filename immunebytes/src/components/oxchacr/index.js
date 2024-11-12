import React, { useEffect } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

const easeOutQuad = t => t * (2 - t);

const ASCIICHARACTERS = ' .+/X0';

class Intro {
  constructor() {
    this.camera = null;
    this.controls = null;
    this.scene = null;
    this.renderer = null;
    this.composer = null;
    this.logo = null;
    this.pointLight1 = null;
    this.pointLight2 = null;
    this.mouseCoords = new THREE.Vector3(0, 0, 0);
    this.dots = []; // Array to hold dots
    this.dotSpreadDistance = 100; // Maximum spread distance
    this.start = Date.now();

    // Initialize the scene
    this.init();
  }

  init() {
    console.log('init');

    // Setup camera
    this.camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 5000);
    this.camera.position.y = 0;
    this.camera.position.z = 500;

    // Setup scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0, 0, 0);

    // Setup lights
    this.pointLight1 = new THREE.PointLight(0xffffff, 0.0);
    this.pointLight1.position.set(400, 400, 400);
    this.scene.add(this.pointLight1);

    this.pointLight2 = new THREE.PointLight(0x00ffff, 0.6);
    this.pointLight2.position.set(-500, -500, 20);
    this.pointLight2.decay = 20;
    this.pointLight2.distance = 800;
    this.scene.add(this.pointLight2);

    // Setup renderer
    this.renderer = new THREE.WebGLRenderer({
      powerPreference: "low-power",
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    // Setup composer for post-processing
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    // Load the logo
    const loader = new STLLoader();
    loader.load('path/to/your/logo.stl', (geometry) => {
      const material = new THREE.MeshPhongMaterial({ flatShading: true });
      this.logo = new THREE.Mesh(geometry, material);
      this.logo.position.set(0, 0, 0.2);
      this.scene.add(this.logo);
    });

    // Initialize dots
    this.initDots();

    // Add event listeners
    document.addEventListener('mousemove', this.onDocumentMouseMove.bind(this), false);
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  initDots() {
    const dotGeometry = new THREE.CircleGeometry(0.5, 32); // Circle shape for the dot
    const dotMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 100; i++) { // Create 100 dots
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      dot.position.set(Math.random() * 800 - 400, Math.random() * 800 - 400, 0); // Random positions
      this.dots.push(dot);
      this.scene.add(dot); // Add each dot to the scene
    }
  }

  onWindowResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  }

  onDocumentMouseMove(event) {
    this.mouseCoords.set(event.clientX, event.clientY, 0);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  render() {
    const timer = Date.now() - this.start;

    if (this.logo) {
      this.logo.rotation.z += 0.01; // Rotate logo for visual interest

      // Handle dot spreading
      const mouse = new THREE.Vector2(
        (this.mouseCoords.x / window.innerWidth) * 4 - 1,
        -(this.mouseCoords.y / window.innerHeight) * 4   + 1
      );

      // Spread dots based on mouse position
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, this.camera);
      const intersects = raycaster.intersectObjects(this.dots);

      if (intersects.length > 0) {
        const point = intersects[0].point;

        this.dots.forEach(dot => {
          const distance = dot.position.distanceTo(point);
          const spreadAmount = Math.max(0, 2 - distance / this.dotSpreadDistance); // Adjust the divisor for spread distance
          dot.position.x += (Math.random() - 2) * spreadAmount * this.dotSpreadDistance; // Spread x position
          dot.position.y += (Math.random() - 2) * spreadAmount * this.dotSpreadDistance; // Spread y position
        });
      }
    }

    this.composer.render();
  }
}

// React component to use the intro class
const IntroComponent = () => {
  useEffect(() => {
    const introInstance = new Intro();
    introInstance.animate(); // Start animation

    return () => {
      // Cleanup logic here if necessary
      // e.g., remove event listeners, dispose of geometries, etc.
    };
  }, []);

  return <div style={{ width: '100%', height: '100vh' }} />;
};

export default IntroComponent;
