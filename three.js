<!DOCTYPE html>
<html lang="fr">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Animated Portfolio</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script type="module">
        import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
        import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js';

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 5, -10);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        const loader = new GLTFLoader();
        let donatte;

        // Chargement du modèle de Donatte
        loader.load('donatte.glb', (gltf) => {
            donatte = gltf.scene;
            donatte.position.set(0, 0, -5);
            scene.add(donatte);

            // Déclencher l'animation de Donatte après le chargement
            animateDonatte();
        });

        function animateDonatte() {
            requestAnimationFrame(animateDonatte);

            if (donatte) {
                donatte.rotation.y += 0.02;
                // Ajoutez d'autres animations spécifiques à Donatte au besoin
            }

            renderer.render(scene, camera);
        }
    </script>
</head>
<body>
    <!-- Le reste du contenu HTML si nécessaire --><