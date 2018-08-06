// init
function init() {
    // renderer
    var renderer = new THREE.WebGLRender();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // camera
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    camera.position.z = 2500;

    // scene
    var scene = new THREE.Scene();

    // uniforms
    
    // shaders
    
    // geometry, mesh
}

function render() {


}

init();

// perlin/simplex noise
//
