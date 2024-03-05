import { ReactNode } from 'react'

interface ColorHorizontalGridProps {
  elements: ReactNode[]
  className?: string
}

const colors = [ 'bg-green-900', 'bg-red-900', 'bg-blue-900', 'bg-yellow-900', 'bg-orange-900' ]

export const ColorHorizontalGrid = ( { elements, className }: ColorHorizontalGridProps ): ReactNode => (
  <div className={`grid grid-flow-col auto-cols-fr gap-10 text-white ${className}`}>
    {
      elements.map( ( c, i ) => (
        <div key={i} className={`text-center rounded-3xl p-10 ${colors[i % colors.length]}`} >
          {c}
        </div>
      ) )
    }
  </div>

)
