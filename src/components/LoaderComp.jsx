import { Loader } from 'rsuite';
import { Html } from '@react-three/drei'
import React from 'react'


const LoaderComp = () => {
  return (
    <Html>
   <div style={{ height: 200, background: '#000' }}>
    <Loader inverse center content="loading..." />
  </div>
    </Html>
  )
}

export default LoaderComp



