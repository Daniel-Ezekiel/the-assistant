import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const modelContainer = document.querySelector(".modelContainer > #container");

const scene = new THREE.Scene();
// scene.background = null;
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Add a light
const light = new THREE.PointLight(0xffffff, 1000);
light.position.set(2.5, 2, 10);
scene.add(light);

const renderer = new THREE.WebGLRenderer({ alpha: true });
console.log(renderer);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(200, 150);
modelContainer.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 4, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

camera.position.z = 10;

var mixer;
var modelReady = false;

const loader = new FBXLoader();
loader.load("Talking.fbx", function (object) {
  // Scale and position the model
  object.scale.set(0.07, 0.07, 0.07);
  object.position.set(0, -5, 0);

  // Start the default animation
  mixer = new THREE.AnimationMixer(object);
  var action = mixer.clipAction(object.animations[0]);
  action.play();

  // Add it to the scene
  scene.add(object);

  modelReady = true;
});

// Add animation routine
var clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);

  // Call the animate on the objec
  if (modelReady) mixer.update(clock.getDelta());

  renderer.render(scene, camera);
}

animate();
