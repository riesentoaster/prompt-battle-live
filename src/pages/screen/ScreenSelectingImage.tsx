import { ReactNode, useContext } from 'react'
import { ColorHorizontalGrid } from '../../components/ColorHorizontalGrid'
import { Settings } from '../../components/Provider'
import { ImageGrid } from '../../components/ImageGrid'

export const ScreenSelectingImage = (): ReactNode => {
  const { challenge, users, imageSelections } = useContext( Settings )

  return (
    <>
      <ColorHorizontalGrid
        elements={
          Object.keys( users ).sort( ( a, b ) => a.localeCompare( b ) ).map( ( userName ) => {
            return (
              <div key={userName}>
                <div className='mx-auto'>
                  <ImageGrid
                    userName={userName}
                    columns={() => Math.min( 3, Object.keys( imageSelections ).length )}
                    onlyShow={imageSelections[userName]}
                  />
                </div>
                <h2 className='mt-10 border-t-2'>{userName}</h2>
              </div>
            )
          } )
        }
      />
      <h1 className='mx-auto w-fit mt-10 text-white text-center'>{challenge}</h1>
    </>
  )
}
