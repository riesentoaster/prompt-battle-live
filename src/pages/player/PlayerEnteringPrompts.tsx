import { FormEvent, ReactNode, useContext } from 'react'
import { Prompt } from '../../../interface'
import { socket } from '../../socket'
import { Settings } from '../../components/Provider'
import { useTimer } from 'react-timer-hook'

export const PlayerEnteringPrompts = ( { userName }: {userName: string} ): ReactNode => {
  const { challenge, timerEnd } = useContext( Settings )
  const { totalSeconds } = useTimer( { expiryTimestamp: timerEnd } )

  const onPromptChange = ( e: FormEvent<HTMLTextAreaElement> ): void => {
    if ( !userName ) throw new Error( 'attempted to send prompt without userName' )
    const newPrompt: Prompt = {
      user: userName,
      prompt: e.currentTarget.value
    }
    socket.emit( 'update-prompt', newPrompt )
  }

  return (
    <form className='h-full'>
      <h2 className='text-center'>{challenge}</h2>
      <h2 className='border-y-2 border-black mx-[20vw] my-10 text-center'>{totalSeconds}</h2>
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <textarea className='w-[60%] h-[20em] mx-auto' autoFocus onChange={onPromptChange} />
    </form>
  )
}
