//  Icons
import { BsQrCodeScan } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import React, { useState } from "react";

type SandStatuType = 'default' | 'sanding' | 'sent';



export const PixForm = () => {
    const [sandStatus, setSandStatus] = useState<SandStatuType>('default');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSandStatus('sanding');

        setTimeout(() => {
            setSandStatus('sent');
        }, 3000);

        setTimeout(() => {
            setSandStatus('default');
        }, 4500);
    }

    return (
        <form onSubmit={handleSubmit} className="text-sm">

            <div>
                <div className="text-[0.7rem] text-green-700 border border-green-700 p-1.5 md:p-0.5 rounded flex flex-col items-center gap-1 text-center md:flex-row md:pl-4 md:gap-4 ">
                    <BsQrCodeScan className="text-base md:text-sm" />
                    <p>Pagamento instantâneo! Apois o pagamento via PIX. a confirmação é imediata.</p>
                </div>

                <div className="text-xs">
                    <div className="border m-auto w-48 h-40 md:w-44 md:h-36 rounded mt-5 mb-4 flex items-center justify-center">
                        <div className=" w-[84%] h-[84%] bg-zinc-200 flex justify-center items-center ">
                            <BsQrCodeScan className="text-6xl md:text-6xl" />
                        </div>
                    </div>

                    <button className="block m-auto border rounded p-1 mb-4 w-40 md:p-1.5 select-none">Atualizar QR code</button>

                    <p className="mb-4">Ou copie e cole o código PIX:</p>

                    <div className="border rounded overflow-hidden p-2">
                        <p>00020126580014BR.GOV.BCB.PIX0136a629534e-7e14-rrrerererrffdffa1-...</p>
                    </div>

                    <p className="text-zinc-400 text-center mt-4">Abra o aplicativo do seu banco, escolha a opção PIX e escaneie o QR code ou cole o código acima para realizar o pagamento.</p>
                </div>
            </div>
            <button type="submit" className="bg-black text-white w-full text-center p-2.5 rounded mt-8 text-xs md:mt-6 select-none flex items-center justify-center gap-4">
                {
                    sandStatus === 'sanding'
                        ? (
                            <img src="./load.gif" className="w-5" />
                        ) : sandStatus === 'sent' ? (
                            <BsCheckCircleFill className="text-xl text-green-500" />
                        ) : ''
                }
                Finalizar pagamento (R$299,90)
            </button>
        </form>
    )
}