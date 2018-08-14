var camera, scene, renderer, controls;
var group, container;
var uniforms, vertexShader, fragmentShader;
var material, geometry, mesh;
var planeGeometry, planeMaterial, plane, plane2;

// init
function init() {
    // renderer
    renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    // scene
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0x000000, 1, 1000 );
    scene.add( new THREE.AmbientLight( 0x222222 ) );

    light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 1, 1, 1 );
	scene.add( light );

    // camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;
    camera.lookAt(scene.position);
    controls = new THREE.OrbitControls(camera);
    controls.autoRotate = true;
    controls.update();


    // plane
    planeGeometry = new THREE.PlaneGeometry(800, 800, 20, 20);
    planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xb19cd9,
        side: THREE.DoubleSide,
        wireframe: true
    });

    plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(0, 40, 0);

    plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
    plane2.rotation.x = -0.5 * Math.PI;
    plane2.position.set(0, -40, 0);

    // uniforms, shader components
    uniforms = {
        scale: { type: "f", value: 30.0 },
        displacement: { type: "f", value: 300.0}
    };

    // material
    material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        color: 0xb7ff00,
        wireframe: true
    });

    // mesh
    geometry = new THREE.SphereBufferGeometry( 8, 10, 10 );
    mesh = new THREE.Mesh(geometry, material);

    // processing
    group = new THREE.Group();
    group.add(plane);
    group.add(plane2);
    group.add(mesh);
    scene.add(group);
    scene.add(camera);

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
    controls.update();
	renderer.render(scene, camera);
}

init();

// perlin/simplex noise
//
