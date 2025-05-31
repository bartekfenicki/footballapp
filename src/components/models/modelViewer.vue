<template>
  <div class="model-card">
    <div class="username">bartekfeni826 <div class="profile"></div></div>
    <div ref="container" class="viewer"></div>
    <button class="change-avatar-btn">Change Avatar</button>
  </div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default {
  name: 'ModelViewer',
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      // Create scene
      const scene = new THREE.Scene();

      // Create camera
      const camera = new THREE.PerspectiveCamera(
        75,
        this.$refs.container.clientWidth / this.$refs.container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 1.7;

      // Create renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(this.$refs.container.clientWidth, this.$refs.container.clientHeight);
      this.$refs.container.appendChild(renderer.domElement);

      // Add light
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      // Load model
      const loader = new GLTFLoader();
      loader.load(
        './src/assets/models/modelPlayer.glb', // Replace with your path
        (gltf) => {
          this.model = gltf.scene;
          this.model.rotation.y = -0.2;
          scene.add(this.model);
        },
        undefined,
        (error) => {
          console.error(error);
        }
      );

 // Rotation logic (horizontal rotation)
let isDragging = false;
let previousX = 0;

const onMouseDown = (event) => {
  isDragging = true;
  previousX = event.clientX;
};

const onMouseMove = (event) => {
  if (isDragging && this.model) {
    const deltaX = event.clientX - previousX;
    this.model.rotation.y += deltaX * 0.01;
    previousX = event.clientX;
  }
};

const onMouseUp = () => {
  isDragging = false;
};

renderer.domElement.addEventListener('mousedown', onMouseDown);
renderer.domElement.addEventListener('mousemove', onMouseMove);
renderer.domElement.addEventListener('mouseup', onMouseUp);
renderer.domElement.addEventListener('mouseleave', onMouseUp);

      // Animate
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();

      // Resize
      window.addEventListener('resize', () => {
        camera.aspect = this.$refs.container.clientWidth / this.$refs.container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(this.$refs.container.clientWidth, this.$refs.container.clientHeight);
      });
    },
  },
};
</script>

<style scoped>
.model-card {
  background-color: #1e1e1e;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-left: auto;
  margin-right: 10px; */
}

.username {
  display: flex;
  justify-content: center;
  background-color: #37FF8B;
  color: #1e1e1e;
  width: 100%;
  text-align: center;
  align-items: center;
  font-weight: bold;
  padding: 0.5rem;
  gap: 10px;
}

.profile {
  border-radius: 30px;
  height: 30px;
  width: 30px;
  background-color: #1e1e1e;
}

.change-avatar-btn {
  background-color: transparent;
  color: #37FF8B;
  border: 2px solid #37FF8B;
  border-radius: 9999px;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.change-avatar-btn:hover {
  background-color: #37FF8B;
  color: #1e1e1e;
}
.viewer {
  width: 100%;
  height: 500px;
  overflow: hidden;
}
</style>
