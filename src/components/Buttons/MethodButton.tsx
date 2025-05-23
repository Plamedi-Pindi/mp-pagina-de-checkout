import { ReactNode } from "react"

interface MethodButtonType {
    onclick: () => void,
    method: boolean,
    children: ReactNode,
    gridStyle: string | any
}

export default function MethodButton({ onclick, method, children, gridStyle }: MethodButtonType) {
    return (
        <button
            onClick={onclick}
            className={`block  ${method ? 'bg-white' : 'text-zinc-400'} rounded  ${gridStyle} `}  >
            {children}
        </button>
    )
}
