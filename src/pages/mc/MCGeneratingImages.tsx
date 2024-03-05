import { ReactNode, useContext } from 'react'
import { Settings } from '../../components/Provider'

export const MCGeneratingImages = (): ReactNode => {
  const { users, challenge } = useContext( Settings )
  return (
    <>
      <h1>Generating Images</h1>
      <p>Challenge: &quot;{challenge}&quot;</p>
      <h2>Prompts</h2>
      <ul>
        {
          Object.entries( users ).map( ( [ k, v ], i ) => (
            <li key={i}>{k}: &quot;{v}&quot;</li>
          ) )
        }
      </ul>
    </>

  )
}
