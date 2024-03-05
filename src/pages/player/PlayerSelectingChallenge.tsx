import { ReactNode } from 'react'

export const PlayerSelectingChallenge = ( { userName }: {userName: string} ): ReactNode => (
  <>
    <h1 className='mt-[30vh] text-center'>{userName}</h1>
    <h2 className='mt-5 text-center'>Get ready!</h2>
  </>
)
