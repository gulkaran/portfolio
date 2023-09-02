'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      // scene.add(new THREE.AxesHelper(5))

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight-64);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.set(100, 50, 200);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(100, 50, 200)
      scene.add(directionalLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true

      controls.target.set(0, 0, 0)
      controls.enableZoom = false
      controls.autoRotate = true
      controls.autoRotateSpeed = -2

      let loadedModel: GLTF;

      const gltfLoader = new GLTFLoader();
      gltfLoader.load('/models/lego_space_dart/scene.gltf', (gltf) => {
        scene.add(gltf.scene)

        loadedModel = gltf
        loadedModel.scene.rotateY(0.5)
        loadedModel.scene.translateX(150)
      })


      // const fbxLoader = new FBXLoader()
      // fbxLoader.load(
      //     '/models/robot.fbx',
      //     (object) => {
      //         object.traverse(function (child) {
      //             if ((child as THREE.Mesh).isMesh) {
      //                 // (child as THREE.Mesh).material = material
      //                 if ((child as THREE.Mesh).material) {
      //                     ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).transparent = false
      //                 }
      //             }
      //         })
      //         object.scale.set(.01, .01, .01)
      //         scene.add(object)
      //     },
      //     (xhr) => {
      //         console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      //     },
      //     (error) => {
      //         console.log(error)
      //     }
      // )
    
    // Render the scene and camera
      renderer.render(scene, camera);

      const animate = () => {
        requestAnimationFrame(animate);

        // if (loadedModel) {
        //   loadedModel.scene.rotateY(-0.005)
        // }

        controls.update()

        renderer.render(scene, camera);
      };
      
      animate();

      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
  
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
  
        renderer.setSize(width, height);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', handleResize);
      };

    }
  }, []);
  return <div ref={containerRef} />;
};
export default ThreeScene;