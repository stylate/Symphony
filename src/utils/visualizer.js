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
    scene.fog = new THREE.Fog( 0x000000, 1, 1000 );
    scene.add( new THREE.AmbientLight( 0x222222 ) );

    light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 1, 1, 1 );
	scene.add( light );

    // camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 2500;

    // uniforms, shader components
    uniforms = {
        scale: { type: "f", value: 30.0 },
        displacement: { type: "f", value: 300.0}
    };

    // material
    material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        color: 0xb7ff00,
        flatShading: true,
        wireframe: true
    });

    // mesh
    geometry = new THREE.SphereBufferGeometry( 400, 50, 50 );
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

	// postprocessing
	/*composer = new THREE.EffectComposer( renderer );
	composer.addPass( new THREE.RenderPass( scene, camera ) );

	var effect = new THREE.ShaderPass( THREE.DotScreenShader );
	effect.uniforms[ 'scale' ].value = 4;
	composer.addPass( effect );

	var effect = new THREE.ShaderPass( THREE.RGBShiftShader );
	effect.uniforms[ 'amount' ].value = 0.0015;
	effect.renderToScreen = true;
	composer.addPass( effect );*/

    render();
}

function render() {
    requestAnimationFrame(render);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
	renderer.render(scene, camera);
}

init();

// perlin/simplex noise
//
