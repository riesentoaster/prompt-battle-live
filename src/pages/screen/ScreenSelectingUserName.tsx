import { ReactNode, useContext } from 'react'
import { Settings } from '../../components/Provider'
import { ColorHorizontalGrid } from '../../components/ColorHorizontalGrid'

export const ScreenSelectingUserName = (): ReactNode => {
  const { users: prompts } = useContext( Settings )
  return (
    <ColorHorizontalGrid elements= {
      Object.keys( prompts ).sort( ( a, b ) => a.localeCompare( b ) ).map( ( e, i ) => (
        <h1 key={i}>{e}</h1>
      ) )
    }
    />
  )
}
