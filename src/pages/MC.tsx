import { ReactNode, useContext, useRef } from 'react'
import { Settings } from '../components/Provider'
import { socket } from '../socket'
import { GameStage } from '../../interface'
import { MCSelectingUserName } from './mc/MCSelectingUserName'
import { MCEnteringPrompts } from './mc/MCEnteringPrompts'
import { MCSelectingChallenge } from './mc/MCSelectingChallenge'
import { MCGeneratingImages } from './mc/MCGeneratingImages'
import { MCPresentingChallenge } from './mc/MCPresentingChallenge'

export const MC = (): ReactNode => {
  const { stage } = useContext( Settings )
  const dialogRef = useRef<HTMLDialogElement | null>( null )

  let current: ReactNode
  switch ( stage ) {
    case GameStage.SelectingUserName:
      current = <MCSelectingUserName/>
      break
    case GameStage.SelectingChallenge:
      current = <MCSelectingChallenge/>
      break
    case GameStage.PresentingChallenge:
      current = <MCPresentingChallenge/>
      break
    case GameStage.EnteringPrompts:
      current = <MCEnteringPrompts/>
      break
    case GameStage.GeneratingImages:
    case GameStage.SelectingImage:
      current = <MCGeneratingImages/>
      break
    default:
      current = ( <h1>Error</h1> )

  }

  return (
    <>
      <ul className='flex flex-wrap gap-5'>{
        Object.entries( GameStage ).filter( ( [ k, ] ) => isNaN( Number( k ) ) ).map( ( [ k, v ] ) => (
          <li className='grow basis-0' key={k}>
            <button
              type='button'
              className='w-full'
              disabled={v === stage}
              onClick={() => socket.emit( 'update-stage', v )}
            >
              {k}
            </button>
          </li>
        ) )
      }
      <li className='grow basis-0'>
        <button
          type='button'
          className='w-full'
          onClick={() => dialogRef.current?.showModal()}
        >
          RESET
        </button>
        <dialog ref={dialogRef} className='backdrop:bg-black/80 rounded-xl p-10'>
          <h1>RESET?</h1>
          <div className='flex w-full justify-around text-[2em] pt-20'>
            <button onClick={() => {
              socket.emit( 'reset' )
              dialogRef.current?.close()
            }}>YES</button>
            <button onClick={() => dialogRef.current?.close()}>NO</button>
          </div>
        </dialog>
      </li>
      </ul>
      {current}
    </>
  )
}
