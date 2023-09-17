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

      const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.set(100, 50, 200);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
      directionalLight.position.set(100, 50, 200)
      scene.add(directionalLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      
      let rotationSpeed = -2;
      controls.target.set(0, 0, 0)
      controls.enableZoom = false
      controls.autoRotate = true
      controls.autoRotateSpeed = rotationSpeed

      let loadedModel: GLTF;

      const gltfLoader = new GLTFLoader();
      gltfLoader.load('/models/lego_space_dart/scene.gltf', (gltf) => {
        scene.add(gltf.scene)

        loadedModel = gltf
        loadedModel.scene.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1))
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

        if (loadedModel) {
          const currentRotationAngle = controls.getAzimuthalAngle();

          // console.log(currentRotationAngle) 

          // Adjust rotation speed based on the current angle
          if (1.1 < currentRotationAngle && currentRotationAngle < 1.9) {
            rotationSpeed = -0.5;
          } else if (1.9 < currentRotationAngle && currentRotationAngle < Math.PI) {
            rotationSpeed -= 0.5;
          } else if (-Math.PI < currentRotationAngle && currentRotationAngle < -1) {
              rotationSpeed = -40;
          } else {
            // Normal speed in the middle section
            rotationSpeed = -20;
          }
        }
        
        controls.autoRotateSpeed = rotationSpeed;
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