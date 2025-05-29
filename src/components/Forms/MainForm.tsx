// Components
import { CardForm } from "./CardForm";
import { BoletoForm } from "./Boleto";
import { PixForm } from "./PixForm";

interface PayMethodType {
    payMethod: string
}
export default function MainForm({ payMethod }: PayMethodType) {
    return (
        <>
            {
                payMethod === 'card' ? (
                    <CardForm />
                ) : payMethod === 'boleto' ? (
                    <BoletoForm />
                ) : (
                    <PixForm />
                )
            }
        </>
    )
}
