import { ReactNode, useContext } from 'react'
import { ColorHorizontalGrid } from '../../components/ColorHorizontalGrid'
import { Settings } from '../../components/Provider'

export const ScreenPresentingChallenge = (): ReactNode => {
  const { challenge, users: prompts } = useContext( Settings )
  return (
    <>
      <ColorHorizontalGrid elements={
        Object.keys( prompts ).sort().map( ( k, i ) => (
          <h2 key={i}>{k}</h2>
        ) )
      }
      />
      <h1 className='mx-auto w-fit mt-10 text-white text-center'>{challenge}</h1>
    </>

  )
}
