import { ReactNode, useContext } from 'react'
import { Settings } from '../components/Provider'
import { GameStage } from '../../interface'

export const Debug = (): ReactNode => {
  const settings = useContext( Settings )
  return (
    <>
      <h1>Settings</h1>
      <p>Stage: {GameStage[settings.stage]}</p>
      <p>Challenge: &quot;{settings.challenge}&quot;</p>
      <h2>Prompts</h2>
      <ul>
        {
          Object.entries( settings.users ).map( ( [ k, v ], i ) => (
            <li key={i}>{k}: &quot;{v}&quot;</li>
          ) )
        }
      </ul>
    </>
  )
}
