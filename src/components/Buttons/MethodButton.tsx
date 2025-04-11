
interface MethodButtonType {
    onclick: () => void,
    method: boolean,
    title: string,
    gridStyle: string | any
}

export default function MethodButton({ onclick, method, title, gridStyle }: MethodButtonType) {
    return (
        <button
            onClick={onclick}
            className={`block  ${method ? 'bg-white' : 'text-zinc-400'} rounded  ${gridStyle} `}  >
            {title}
        </button>
    )
}
