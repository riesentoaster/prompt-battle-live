import { ReactNode, useContext, useEffect } from 'react'
import { Settings } from '../components/Provider'
import { GameStage } from '../../interface'
import { ScreenEnteringPrompts } from './screen/ScreenEnteringPrompts'
import { ScreenSelectingUserName } from './screen/ScreenSelectingUserName'
import { ScreenGeneratingImages } from './screen/ScreenGeneratingImages'
import { ScreenSelectingImage } from './screen/ScreenSelectingImage'
import { ScreenPresentingChallenge } from './screen/ScreenPresentingChallenge'

export const Screen = (): ReactNode => {
  useEffect( () => {
    const prev = document.body.style.backgroundColor
    document.body.style.backgroundColor = 'black'
    return () => {
      document.body.style.backgroundColor = prev
    }
  }, [] )

  const { stage } = useContext( Settings )

  let content: ReactNode

  switch ( stage ) {
    case GameStage.SelectingUserName: // fallthrough
    case GameStage.SelectingChallenge:
      content = <ScreenSelectingUserName/>
      break
    case GameStage.PresentingChallenge:
      content = <ScreenPresentingChallenge/>
      break
    case GameStage.EnteringPrompts:
      content = <ScreenEnteringPrompts/>
      break
    case GameStage.GeneratingImages:
      content = <ScreenGeneratingImages/>
      break
    case GameStage.SelectingImage:
      content = <ScreenSelectingImage/>
      break
    default:
      content = <h1>Error</h1>
      break
  }

  return (
    <div className='h-[100vh]'>
      {content}
    </div>
  )
}
