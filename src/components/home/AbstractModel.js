import React, {useMemo, useRef } from 'react'
import { Environment, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshPhysicalMaterial } from 'three'

function Model (props){
  const { nodes } = useGLTF(require('../../models/abstractModel.glb'));
  const texture = useTexture(require('../../models/Material_0_baseColor.png'));
  const groupRef = useRef();
  useFrame(() => (groupRef.current.rotation.y -= 0.003 ))

  const customMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        map: texture,
        opacity: 0.7,
        roughness: 0.1,
        metalness: 0.8,
        transparent: true,
      }),
    [texture]
  );

  return (
    <mesh {...props}>
      <group {...props} dispose={null}>
        <group ref={groupRef} scale={0.030}>
          <mesh geometry={nodes['Hedra001_Material_#0_0'].geometry} 
          // material={materials.Material_0}
          material={customMaterial}
          position={[-0.618, 0, 3.478]} 
          rotation={[-Math.PI / 2, 0, 0]} 
          scale={1} 
          />
        </group>
      </group>
      <OrbitControls makeDefault enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
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
