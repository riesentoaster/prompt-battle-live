import { ReactNode, useContext } from 'react'
import { Settings } from '../../components/Provider'
import { PacmanLoader } from 'react-spinners'

export const PlayerGeneratingImages = (): ReactNode => {
  const { challenge } = useContext( Settings )
  return (
    <form className='h-full'>
      <h2 className='text-center'>{challenge}</h2>
      <PacmanLoader className='mx-auto mt-20' size={100}/>
    </form>
  )
}
