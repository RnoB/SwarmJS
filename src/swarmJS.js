import * as THREE from 'three';

var camera, controls, scene;

var sky, floor;

var scene;
var camera;
var renderer = null;

function setup()
{
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.01, 10000);
    
    cameraBox.visible = false;
    camera.add(cameraBox);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    //renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.body.appendChild(renderer.domElement);




}

/* rendering */

function animate() {
    renderer.setAnimationLoop(render);
    renderer.render(scene, camera); 
}

function render() {
    var t = new Date().getTime();
}

setup();
animate();