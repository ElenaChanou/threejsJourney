import * as THREE from "three";

const canvas = document.querySelector("canvas.webgl");

//scene
const scene = new THREE.Scene();

//object
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 1.5;
group.rotation.y = -2;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff000 }),
);
group.add(cube2);
cube2.position.x = -2;

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x000ff }),
);
group.add(cube3);
cube3.position.x = 2;

//axis helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

//size
const sizes = {
  width: 800,
  height: 600,
};

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.z = 3;
scene.add(camera);

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
