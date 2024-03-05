import { ReactNode } from 'react'

interface PlayerSelectingUserNameProps {
  userName: string
  onUserNameChange: ( newUserName: string ) => void
}
export const PlayerSelectingUserName = ( { userName, onUserNameChange }: PlayerSelectingUserNameProps ): ReactNode => (
  <form className='mx-auto w-fit my-[30vh]' onSubmit={( e ) => e.preventDefault()}>
    <label htmlFor='username' className='mx-auto w-fit block mb-10'>
      Enter Username
    </label>
    <input
      name='username'
      value={userName}
      onChange={e => onUserNameChange( e.target.value )}
    />
  </form>
)
