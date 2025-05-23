// Components
import { CardForm } from "./CardForm";
import { BoletoForm } from "./Boleto";
import { PixForm } from "./PixForm";
import React, { SetStateAction, useState } from "react";

import { BsCheckCircleFill } from "react-icons/bs";

interface PayMethodType {
    payMethod: string
}

type SandStatuType = 'default' | 'sanding' | 'sent' | 'error'


export default function MainForm({ payMethod }: PayMethodType) {
    const [sandStatus, setSandStatus] = useState<SandStatuType>('default');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setSandStatus('sanding');

    }

    let buttonText = ''
    payMethod === 'card' || 'pix'
        ? buttonText = 'Finalizar pagamento (R$299,90)'
        : buttonText = 'Gerar Boleto (R$299,90)'


    return (
        <form onSubmit={handleSubmit} className="text-sm">
            {
                payMethod === 'card' ? (
                    <CardForm />
                ) : payMethod === 'boleto' ? (
                    <BoletoForm />
                ) : (
                    <PixForm />
                )
            }

            <button type="submit" className="bg-black text-white w-full text-center p-2.5 rounded mt-8 text-xs md:mt-6 select-none flex items-center justify-center gap-4">

                {
                    sandStatus === 'sanding' 
                    ? (
                        <img src="./load.gif" className="w-6" />
                    ) : sandStatus === 'sent' ? (
                        <BsCheckCircleFill className="text-lg" />
                    ) : ''
                }

                {buttonText}
            </button>
        </form>
    )
}
