import { ReactNode, useContext } from 'react'
import { Settings } from '../../components/Provider'
import { socket } from '../../socket'
import { useTimer } from 'react-timer-hook'

export const MCEnteringPrompts = (): ReactNode => {
  const { users: prompts, timerEnd } = useContext( Settings )
  const { totalSeconds } = useTimer( { expiryTimestamp: timerEnd } )
  return (
    <>
      <p className='my-10'>Timer: {totalSeconds}</p>
      <h2>Players</h2>
      <ul>
        {
          Object.entries( prompts ).map( ( [ k, v ] ) => (
            <li key={k} className='flex mb-3'>
              <span className='mr-auto'>&quot;{k}&quot;: &quot;{v}&quot;</span>
              <button type='button' onClick={() => socket.emit( 'remove-player', k )}>Remove</button>
            </li>
          ) )
        }
      </ul>
      <button className='mt-10' type='button' onClick={() => socket.emit( 'generate-images' )}>Generate Images</button>
    </>

  )
}
