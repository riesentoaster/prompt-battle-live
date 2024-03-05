import { ReactNode, useContext } from 'react'
import { ColorHorizontalGrid } from '../../components/ColorHorizontalGrid'
import { Settings } from '../../components/Provider'
import { useTimer } from 'react-timer-hook'

export const ScreenEnteringPrompts = (): ReactNode => {
  const { challenge, users: prompts, timerEnd } = useContext( Settings )
  const { totalSeconds } = useTimer( { expiryTimestamp: timerEnd } )

  return (
    <>
      <ColorHorizontalGrid elements={
        Object.entries( prompts ).sort( ( [ a, ], [ b, ] ) => a.localeCompare( b ) ).map( ( [ k, v ] ) => (
          <>
            <p className='text-left break-words break-keep'>{v}</p>
            <h2 className='mt-10 border-t-2'>{k}</h2>
          </>
        ) )
      }
      />
      <h2 className='border-y-2 mx-[20vw] my-10 text-white text-center'>{totalSeconds}</h2>
      <h1 className='mx-auto w-fit mt-10 text-white text-center'>{challenge}</h1>
    </>

  )
}
