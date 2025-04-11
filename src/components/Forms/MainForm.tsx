import { ReactNode } from "react"

interface MainFormType {
    children: ReactNode
}
export default function MainForm({ children }: MainFormType) {
    return (
        <div> {children} </div>
    )
}
