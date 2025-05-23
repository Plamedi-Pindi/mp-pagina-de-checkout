import { ReactNode } from "react"

interface PayMethodComponentType {
    children: ReactNode
}


export const PayMethodComponent = ({children}: PayMethodComponentType) => {

    return (
        <div className='w-full h-[2rem] bg-zinc-100 text-xs mt-4 flex space-between gap-2 p-1 rounded font-medium mb-5 select-none'>
            {children}
        </div>
    )
}