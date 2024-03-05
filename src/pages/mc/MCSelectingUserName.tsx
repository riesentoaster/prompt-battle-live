import { ReactNode, useContext } from 'react'
import { Settings } from '../../components/Provider'
import { socket } from '../../socket'

export const MCSelectingUserName = (): ReactNode => {
  const { users: prompts } = useContext( Settings )
  return (
    <>
      <h2>Registered Players</h2>
      <ul>
        {
          Object.keys( prompts ).sort( ( a, b ) => a.localeCompare( b ) ).map( p => (
            <li key={p} className='flex mb-3'>
              <span className='mr-auto'>&quot;{p}&quot;</span>
              <button type='button' onClick={() => socket.emit( 'remove-player', p )}>Remove</button>
            </li>
          ) )
        }
      </ul>
    </>
  )
}
