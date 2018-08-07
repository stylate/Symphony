var container, camera, scene, renderer;
var uniforms, vertexShader, fragmentShader;
var material, geometry, mesh;


// init
function init() {
    // renderer
    renderer = new THREE.WebGLRender();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    camera.position.z = 2500;

    // scene
    scene = new THREE.Scene();

    // uniforms
    
    // shaders
    
    // geometry, mesh
}

function render() {


}

init();

// perlin/simplex noise
//
