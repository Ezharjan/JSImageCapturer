import * as THREE from './plugins/threejs/three.module.js';
import { TrackballControls } from './plugins/TrackballControls.js';
import { OBJLoader } from './plugins/OBJLoader.js';

var camera, controls, scene, renderer;
var mouse = new THREE.Vector2();
var object;


init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.x = 1000;
    camera.position.y = 1000;
    camera.position.z = 1000;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x056000);


    scene.add(new THREE.AmbientLight(0xfffff5));

    var light = new THREE.SpotLight(0xffffff, 1.5);
    light.position.set(1003, 1002, 1002);
    scene.add(light);

    var defaultMaterial = new THREE.MeshPhongMaterial({ color: 0xff0055, flatShading: true, vertexColors: THREE.VertexColors, shininess: 0 });

    function loadModel() {

        object.traverse(function(child) {

            if (child.isMesh) child.material.map = texture;

        });

        object.position.x = 999;
        object.position.y = 998;
        object.position.z = 999;

        scene.add(object);
    }

    var manager = new THREE.LoadingManager(loadModel);

    manager.onProgress = function(item, loaded, total) {

        console.log(item, loaded, total);

    };

    function onProgress(xhr) {

        if (xhr.lengthComputable) {

            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log('model ' + Math.round(percentComplete, 2) + '% downloaded');
        }
    }

    var textureLoader = new THREE.TextureLoader(manager);
    var texture = textureLoader.load('../resources/01.jpg');


    function onError() {}


    var loader = new OBJLoader(manager);
    loader.load('../resources/tree.obj', function(obj) {

        object = obj;

    }, onProgress, onError);


    renderer = new THREE.WebGLRenderer({

        //将渲染保存到缓冲区，否则获取的图片会是空的
        preserveDrawingBuffer: true, //是否保留缓冲区直到手动清除或覆盖。默认值为false

        antialias: true
    });

    function getImgShot() {
        var img = new Image();
        img.src = renderer.domElement.toDataURL(); //将渲染载体canvas转化为base64
        img.setAttribute('crossOrigin', 'anonymous');
        console.log("The url of the image data is : " + img.src);
        document.body.appendChild(img);
    }

    var btn = document.querySelector('button');
    var di = document.getElementById("container");
    btn.addEventListener('click', getImgShot);



    renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(779, 576);
    container.appendChild(renderer.domElement);

    controls = new TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.01;
    controls.zoomSpeed = 0.001;
    controls.panSpeed = 0.01;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;

    renderer.domElement.addEventListener('mousemove', onMouseMove);

}

function onMouseMove(e) {

    mouse.x = e.clientX;
    mouse.y = e.clientY;

}

function animate() {

    requestAnimationFrame(animate);

    render();

}

function render() {

    controls.update();
    renderer.setRenderTarget(null);
    renderer.render(scene, camera);

}

console.log("hello");