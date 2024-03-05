import { ReactNode, createContext, useEffect, useState } from 'react'
import { socket } from '../socket'
import { Settings as SettingsInterface, defaultSettings } from '../../interface'

export const Settings = createContext<SettingsInterface>( defaultSettings )
export const Provider = ( { children }: {children: ReactNode} ): ReactNode => {
  const [ settings, setSettings ] = useState<SettingsInterface>( defaultSettings )

  const updateSettings = ( s: SettingsInterface ): void => {
    s.timerEnd = new Date( s.timerEnd ) // transform string to Date element
    setSettings( s )
  }

  useEffect( () => {
    socket.on( 'settings', updateSettings )

    return () => {
      socket.off( 'settings', updateSettings )
    }
  }, [] )
  return ( <Settings.Provider value={settings}>
    {children}
    {
      socket.disconnected && (
        <div className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-red-900/75' >
          <p className='mx-auto w-fit mt-[20vh] border border-white rounded-xl p-10 bg-white'>Lost connection</p>
        </div>
      )
    }
  </Settings.Provider> )
}
