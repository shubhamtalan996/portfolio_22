import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { JPEG } from "../../assets";

export const createAndRenderBackground = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);
  camera.position.setX(-3);

  renderer.render(scene, camera);

  //adding torus

  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const material = new THREE.MeshStandardMaterial({
    color: 0xff6347,
  });

  const torus = new THREE.Mesh(geometry, material);

  scene.add(torus);

  //add skills geometry

  // let geo = new THREE.IcosahedronGeometry(5, 1);

  // const skillsGeometry = new THREE.WireframeGeometry(geo);

  // const matLine = new THREE.LineBasicMaterial({
  //   color: 0xffffff,
  //   linewidth: 5, // in pixels
  //   //resolution:  // to be set by renderer, eventually
  //   dashed: false,
  // });

  // const wireframe = new THREE.WireframeGeometry(skillsGeometry, matLine);
  // // wireframe.computeBoundingBox();
  // // wireframe.scale.set(1, 1, 1);
  // scene.add(wireframe);

  // geo = new THREE.WireframeGeometry(geo);

  // const matLineBasic = new THREE.LineBasicMaterial({ color: 0x4080ff });
  // const matLineDashed = new THREE.LineDashedMaterial({
  //   scale: 2,
  //   dashSize: 1,
  //   gapSize: 1,
  // });

  // const wireframe1 = new THREE.LineSegments(geo, matLineBasic);
  // wireframe1.computeLineDistances();
  // wireframe1.visible = false;
  // scene.add(wireframe1);

  // adding light

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 5);

  const ambientLight = new THREE.AmbientLight(0xffffff);

  //helpers
  // const lightHelper = new THREE.PointLightHelper(pointLight);
  // scene.add(lightHelper);

  // const gridHelper = new THREE.GridHelper(200, 50);
  // scene.add(gridHelper);

  scene.add(pointLight, ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);

  const addStar = () => {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
  };

  //adding stars
  Array(200).fill().forEach(addStar);

  //adding background texture

  const spaceTexture = new THREE.TextureLoader().load(JPEG.space);
  scene.background = spaceTexture;

  //my image texture

  const myImageTexture = new THREE.TextureLoader().load(JPEG.myProfile);

  const myImage = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial({ map: myImageTexture })
  );

  scene.add(myImage);

  // adding moon

  const moonTexture = new THREE.TextureLoader().load(JPEG.moon);
  const roughTexture = new THREE.TextureLoader().load(JPEG.normal);

  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
      map: moonTexture,
      normalMap: roughTexture,
    })
  );

  scene.add(moon);

  moon.position.z = 30;
  moon.position.setX(-10);

  myImage.position.z = -5;
  myImage.position.x = 2;

  //move camera

  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    // moon.rotation.x += 0.05;
    moon.rotation.y += 0.075;
    // moon.rotation.z += 0.05;

    myImage.rotation.y += 0.01;
    // myImage.rotation.z += 0.01;

    camera.position.x = t * -0.0002;
    camera.position.y = t * -0.0002;
    camera.position.z = t * -0.01;
  }

  document.body.onscroll = moveCamera;

  //animation loop
  function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    controls.update();

    renderer.render(scene, camera);
  }

  animate();
};
