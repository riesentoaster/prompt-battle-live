import { ReactNode, useState, useEffect } from 'react'
import { SOCKET_URL } from '../socket'
import PhotoAlbum, { ClickHandler } from 'react-photo-album'
import style from './ImageGrid.module.css'

interface ImageGridProps {
  userName: string
  columns: ( numberOfPictures: number ) => number
  onClick?: ClickHandler
  onlyShow?: number
}

export const ImageGrid = ( { userName, columns: calcColumns, onClick, onlyShow }: ImageGridProps ): ReactNode => {
  const [ src, setSrc ] = useState<string[] | null>( null )

  useEffect( () => {
    const loadImage = async (): Promise<void> => {
      const imagePath = `${SOCKET_URL || ''}/images/${userName}`
      const response = await fetch( imagePath )
      const rawImageData = await response.json()
      const newSrc = rawImageData.map( ( e: string ) => `data:content/type;base64,${e}` )
      console.log( 'loaded for', userName, newSrc.length )
      setSrc( newSrc )
    }
    loadImage()
  }, [ userName ] )
  if ( !src ) return undefined
  const photos = src.map( e => ( { src: e, width: 1024, height: 1024 } ) )
  const shownPhotos = onlyShow !== undefined ? [ photos[onlyShow] ] : photos
  const columns = onlyShow !== undefined ? 1 : calcColumns( src.length )
  const onClickHandler = onlyShow !== undefined ? undefined : onClick
  console.log( photos.length, shownPhotos.length, onClickHandler, photos[0].src.substring( 0, 20 ) )
  return (
    <div className={`mx-auto max-w-[80vh] ${style.outer}`}>
      <PhotoAlbum
        layout={'masonry'}
        photos={shownPhotos}
        columns={columns}
        onClick={onClickHandler}
      />
    </div>
  )
}
