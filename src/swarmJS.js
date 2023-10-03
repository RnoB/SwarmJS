import * as THREE from 'three';
import {sleep,InitSky,InitFloor} from "./js/controls/world.js" 

var camera, controls, scene;

var sky, floor;

var scene;
var camera;
var renderer = null;

var geometry = new THREE.BoxGeometry();

//var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var material = new THREE.MeshStandardMaterial();
var cameraBox = new THREE.Mesh(geometry, material);


function setUpWorld()
{
    console.log("Setting up World")
    var light = new THREE.DirectionalLight(0xab00ac, 1);
    light.position.set(1, 10, 1);
    light.castShadow = false;
    light.shadow.mapSize.width = 512;  // default   
    light.shadow.mapSize.height = 512; // default
    light.shadow.camera.near = 0.5;    // default
    light.shadow.camera.far = 500;     // default
    var light2 = new THREE.PointLight(0x00ff, 1, 1000);
    light2.position.set(0, 50, 50);
    
    scene.add(light2);
    light.shadow.bias = 0.0001

    //light.shadow.camera.top = 1000;
    //light.shadow.camera.bottom = 1000;
    var ambientLight = new THREE.AmbientLight( 0xaa00ff, 0.3 );
    scene.add( ambientLight );
    scene.add(light);  
//    let helper = new THREE.CameraHelper ( light.shadow.camera );
//    scene.add( helper );
    sky = new InitSky();
    sky.addToScene(scene);    
    floor = new InitFloor();
    floor.addToScene(scene);
    for (let i = 0; i < 2; ++i) {
        const controller = renderer.xr.getController(i);
        var controllerMesh = new THREE.Mesh( geometry, material );
        controllerMesh.scale.set(.01,.1,.1);
        controllerMesh.castShadow = true;
        controller.add( controllerMesh);
        scene.add(controller);
        controllers.push(controller);
    }   
}




function setup()
{
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xff00aa);

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