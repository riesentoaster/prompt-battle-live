import { ReactNode, useContext } from 'react'
// import { ColorHorizontalGrid } from '../../components/ColorHorizontalGrid'
import { PacmanLoader } from 'react-spinners'
import { Settings } from '../../components/Provider'

export const ScreenGeneratingImages = (): ReactNode => {
  const { challenge } = useContext( Settings )
  return (
    <>
      <PacmanLoader color='white' size={150} className='mb-20 text-left mx-auto'/>
      {/* <ColorHorizontalGrid elements={
        Object.keys( users ).sort( ( a, b ) => a.localeCompare( b ) ).map( ( k ) => (
          <>
            <h2 className='mt-10 border-t-2'>{k}</h2>
          </>
        ) )
      }
      /> */}
      <h1 className='mx-auto w-fit mt-10 text-white text-center'>{challenge}</h1>
    </>
  )
}
