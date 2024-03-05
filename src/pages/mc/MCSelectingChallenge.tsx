import { ReactNode, useContext, useState } from 'react'
import { socket } from '../../socket'
import { GameStage } from '../../../interface'
import { Settings } from '../../components/Provider'

export const MCSelectingChallenge = (): ReactNode => {
  const [ nextChallenges, setNextChallenges ] = useState( '' )
  const { challenge } = useContext( Settings )

  const setNextChallenge = (): void => {
    socket.emit( 'update-challenge', nextChallenge )
    socket.emit( 'update-stage', GameStage.PresentingChallenge )
    setNextChallenges( nextChallenges.split( '\n' ).slice( 1 ).join( '\n' ) )
  }

  const nextChallenge = nextChallenges.split( '\n' )[0]

  return (
    <>
      <h2>Challenges</h2>
      <p>Current Challenge: &quot;{challenge}&quot;</p>
      <p className='flex mb-5'>
        <span>Next Challenge: &quot;{nextChallenges.split( '\n' )[0]}&quot;</span>
        <button
          onClick={setNextChallenge}
          disabled={nextChallenge.trim().length === 0}
          className='ml-auto'
          type='button'
        >
        Set next challenge
        </button>
      </p>
      <textarea
        className='w-full h-[15em]'
        value={nextChallenges}
        onChange={( e ) => setNextChallenges( e.target.value )}
      />
    </>
  )
}
