import { ReactNode, useContext } from 'react'
import { Settings } from '../../components/Provider'

export const PlayerPresentingChallenge = ( { userName }: {userName: string} ): ReactNode => {
  const { challenge } = useContext( Settings )
  return (
    <>
      <h2 className='text-center'>{challenge}</h2>
      <p className='text-center mt-20 pt-3 border-t-2 border-black'>{userName}</p>
    </>
  )
}
