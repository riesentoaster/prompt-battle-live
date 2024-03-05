import { ReactNode, useContext } from 'react'
import { Settings } from '../../components/Provider'
import { ImageGrid } from '../../components/ImageGrid'
import { socket } from '../../socket'
import { ClickHandler } from 'react-photo-album'
import { ImageSelectUpdate } from '../../../interface'

export const PlayerSelectingImage = ( { userName }: {userName: string} ): ReactNode => {
  const { challenge, imageSelections } = useContext( Settings )

  const onClick: ClickHandler = ( { index } ) => {
    const update: ImageSelectUpdate = { userName, index }
    socket.emit( 'select-image', update )
  }
  return (
    <>
      <h1 className='text-center pb-3'>{challenge}</h1>
      <ImageGrid
        userName={userName}
        columns={e => e}
        onClick={onClick}
        onlyShow={imageSelections[userName]}
      />
    </>
  )
}
