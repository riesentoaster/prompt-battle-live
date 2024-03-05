import { ReactNode, useState, useContext } from 'react'
import { socket } from '../socket'
import { GameStage, UserNameUpdate } from '../../interface'
import { Settings } from '../components/Provider'
import { PlayerSelectingUserName } from './player/PlayerSelectingUserName'
import { PlayerSelectingChallenge } from './player/PlayerSelectingChallenge'
import { PlayerEnteringPrompts } from './player/PlayerEnteringPrompts'
import { PlayerSelectingImage } from './player/PlayerSelectingImage'
import { PlayerGeneratingImages } from './player/PlayerGeneratingImages'
import { PlayerPresentingChallenge } from './player/PlayerPresentingChallenge'

export const Player = (): ReactNode => {
  const [ userName, setUserName ] = useState<string>( '' )
  const { stage } = useContext( Settings )

  const onUserNameChange = ( newUserName: string ): void => {
    const updateObject: UserNameUpdate = {
      old: userName,
      new: newUserName
    }
    socket.emit( 'update-username', updateObject )
    setUserName( newUserName )
  }

  switch ( stage ) {
    case GameStage.SelectingUserName:
      return ( <PlayerSelectingUserName userName={userName} onUserNameChange={onUserNameChange}/> )
    case GameStage.SelectingChallenge:
      return ( <PlayerSelectingChallenge userName={userName}/> )
    case GameStage.PresentingChallenge:
      return ( <PlayerPresentingChallenge userName={userName}/> )
    case GameStage.EnteringPrompts:
      return ( <PlayerEnteringPrompts userName={userName}/> )
    case GameStage.GeneratingImages:
      return ( <PlayerGeneratingImages/> )
    case GameStage.SelectingImage:
      return ( <PlayerSelectingImage userName={userName}/> )
    default:
      return <h1>Error</h1>
  }
}

