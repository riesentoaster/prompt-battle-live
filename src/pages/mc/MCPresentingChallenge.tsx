import { ReactNode, useContext, useState } from 'react'
import { socket } from '../../socket'
import { Settings } from '../../components/Provider'

export const MCPresentingChallenge = (): ReactNode => {
  const { challenge } = useContext( Settings )
  const [ duration, setDuration ] = useState( 60 )

  return (
    <>
      <h2>Challenges</h2>
      <p>Current Challenge: &quot;{challenge}&quot;</p>
      <input className='my-10' onChange={e => setDuration( parseInt( e.target.value ) )} type='number'></input>
      <button type='button' onClick={() => socket.emit( 'start-timer', duration )}>Start Timer</button>
    </>
  )
}
