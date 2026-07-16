import * as THREE from "three";
import gsap from "gsap";

const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

// Clock

//gsap
gsap.to(mesh.position, { duration: 2 ,delay: 1, x: 2})
gsap.to(mesh.position, { duration: 2 ,delay: 2, x: 0})

//animations
const tick = () => {
  //clock
  // const elapseTime = clock.getElapsedTime();

  //Update Objects
  // camera.position.y = Math.sin(elapseTime);
  // camera.position.x = Math.cos(elapseTime);
  // camera.lookAt(mesh.position);
  //Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
