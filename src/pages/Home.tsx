import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

const linkClassNames = 'h-[40vh] flex p-5 justify-center items-center rounded-xl'

export const Home = (): ReactNode => (
  <>
    <h1 className='mx-auto w-fit'>Prompt Battle</h1>
    <div className='grid grid-flow-col auto-cols-fr gap-5 justify-around text-center mt-20'>
      <NavLink className={`bg-green-400 ${linkClassNames}`} to='/player'>Player</NavLink>
      <NavLink className={`bg-yellow-400 ${linkClassNames}`} to='/mc'>Game Master</NavLink>
      <NavLink className={`bg-blue-400 ${linkClassNames}`} to='/screen'>Screen</NavLink>
    </div>
    <NavLink className='mx-auto border border-black rounded py-1 px-5 block w-fit mt-20' to='/debug'>
        Debug Information
    </NavLink>
  </>
)
