var container, camera, scene, renderer;
var uniforms, vertexShader, fragmentShader;
var material, geometry, mesh;


// init
function init() {
    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 100;

    // material
    material = new THREE.MeshBasicMaterial({
        color: 0xb7ff00,
        wireframe: true
    });

    // mesh
    mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(20, 4), material);
    scene.add(mesh);

    render();

}

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

init();

// perlin/simplex noise
//
