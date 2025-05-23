import { useState } from 'react';
import { BsExclamationCircleFill } from 'react-icons/bs';

export const BoletoForm = () => {

    return (
        <div>
            <div className='border border-yellow-200 text-yellow-400 p-3 w-full rounded flex flex-col items-center gap-2 md:flex-row select-none'>
                <BsExclamationCircleFill className='rotate-180 text-lg' />
                <p className='text-xs text-justify'>O boleto bancário vence em 3 dias úteis. Após o pagamento, a compensação pode levar até 3 dias úteis.
                </p>
            </div>

            <div className="mb-4 mt-5">
                <label className="text-xs block mb-1.5 ">CPF</label>
                <input
                    type="text"
                    placeholder="000.000.000-00 "
                    required
                    className="outline-none w-full border border-zinc-200 p-1 rounded pl-3 pr-3 text-zinc-800 text-xs "
                />
            </div>

            <div className="mb-4">
                <label className="text-xs block mb-1.5 ">Nome completo</label>
                <input
                    type="text"
                    placeholder="Nome completo do pagador "
                    required
                    className="outline-none w-full border border-zinc-200 p-1 rounded pl-3 pr-3 text-zinc-800 text-xs "
                />
            </div>
        </div>
    )
}