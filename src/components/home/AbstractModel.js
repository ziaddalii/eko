/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 src/models/abstractModel.glb -j -r src
Author: riach (https://sketchfab.com/riach)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/abstract-rainbow-translucent-pendant-fd730e2886e748a0bd645d05fd96040d
Title: Abstract Rainbow Translucent Pendant
*/

import React, { useMemo, useRef } from 'react'
import { Environment, MeshDistortMaterial, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber'
// import "../../models/hero-abstract/scene.bin"
import { MeshPhysicalMaterial } from 'three'

function Model (props){
  const { nodes, materials } = useGLTF(require('../../models/abstractModel.glb'));
  const texture = useTexture(require('../../models/Material_0_baseColor.png'));

  const groupRef = useRef();
  useFrame(() => (groupRef.current.rotation.y -= 0.003 ))

  const customMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        map: texture,
        opacity: 0.6, // Set the desired opacity value (0 to 1)
        roughness: 0.1, // Set the desired roughness value (0 to 1)
        metalness: 0.8, // Set the desired metalness value (0 to 1)
        transparent: true, // Enable transparency for the material
      }),
    [texture]
  );
console.log("materials:",materials);
  return (
    <mesh {...props}>
      <group {...props} dispose={null}>
        <group ref={groupRef} scale={0.030}>
          <mesh geometry={nodes['Hedra001_Material_#0_0'].geometry} 
          // material={materials.Material_0}
          material={customMaterial} // Use the custom material with modified properties
          position={[-0.618, 0, 3.478]} 
          rotation={[-Math.PI / 2, 0, 0]} 
          scale={1} 
          />
        </group>
      </group>
      <OrbitControls makeDefault enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    </mesh>
  )
}
export function AbstractModel(props) {

  return (
    <Canvas>
      <Environment preset='forest'/>
      <Model/>
    </Canvas>
  )
}

useGLTF.preload(require('../../models/abstractModel.glb'))
