import { useContext, ReactNode } from 'react'
import { GameStage } from '../../../interface'
import { Settings } from '../../components/Provider'
import { MCEnteringPrompts } from './MCEnteringPrompts'
import { MCGeneratingImages } from './MCGeneratingImages'
import { MCSelectingChallenge } from './MCSelectingChallenge'
import { MCSelectingUserName } from './MCSelectingUserName'

export const MCSwitch = (): ReactNode => {
  const { stage } = useContext( Settings )

  switch ( stage ) {
    case GameStage.SelectingUserName:
      return MCSelectingUserName()
    case GameStage.SelectingChallenge:
      return MCSelectingChallenge()
    case GameStage.EnteringPrompts:
      return MCEnteringPrompts()
    case GameStage.GeneratingImages:
    case GameStage.SelectingImage:
      return MCGeneratingImages()
    default:
      return ( <h1>Error</h1> )
  }
}
