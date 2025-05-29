import React, { useState } from 'react';
import { BsCheckCircleFill, BsExclamationCircleFill } from "react-icons/bs";

type SandStatuType = 'default' | 'sanding' | 'sent';

export const BoletoForm = () => {
    const [sandStatus, setSandStatus] = useState<SandStatuType>('default');
    const [form, setForm] = useState({ cpf: '', name: '' });
    const [validation, setValidation] = useState({ cpfVal: false, nameVal: false });
    const [msgAlert, setMsgAlert] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.cpf.trim().length === 0) {
            setValidation({ cpfVal: true, nameVal: false });
            setMsgAlert('Este campo não pode estar vazia!');
        } else if (form.name.trim().length === 0) {
            setValidation({ cpfVal: false, nameVal: true });
            setMsgAlert('Este campo não pode estar vazia!');
        } else {
            setSandStatus('sanding');
            setValidation({ cpfVal: false, nameVal: false });

            setTimeout(() => {
                setSandStatus('sent');
                setForm({ cpf: '', name: '' });

            }, 3000);

            setTimeout(() => {
                setSandStatus('default');
            }, 4500);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="text-sm">
            <div className='border border-yellow-200 text-yellow-400 p-3 w-full rounded flex flex-col items-center gap-2 md:flex-row select-none'>
                <BsExclamationCircleFill className='rotate-180 text-lg' />
                <p className='text-xs text-justify'>O boleto bancário vence em 3 dias úteis. Após o pagamento, a compensação pode levar até 3 dias úteis.
                </p>
            </div>

            <div className="mb-4 mt-5">
                <label className="text-xs block mb-1.5 ">CPF</label>
                <input
                    type="text"
                    value={form.cpf}
                    onChange={(e) => setForm({ ...form, cpf: e.target.value })}
                    placeholder="000.000.000-00 "
                    className="outline-none w-full border border-zinc-200 p-1 rounded pl-3 pr-3 text-zinc-800 text-xs "
                />
                <div className={`bg-red-200 text-xs p-1 ${validation.cpfVal ? 'block' : 'hidden'}`}>
                    <p>{msgAlert}</p>
                </div>
            </div>

            <div className="mb-4">
                <label className="text-xs block mb-1.5 ">Nome completo</label>
                <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nome completo do pagador "
                    className="outline-none w-full border border-zinc-200 p-1 rounded pl-3 pr-3 text-zinc-800 text-xs "
                />
                <div className={`bg-red-200 text-xs p-1 ${validation.nameVal ? 'block' : 'hidden'}`}>
                    <p>{msgAlert}</p>
                </div>
            </div>

            {/* Submit button   */}
            <button type="submit" className="bg-black text-white w-full text-center p-2.5 rounded mt-8 text-xs md:mt-6 select-none flex items-center justify-center gap-4">
                {
                    sandStatus === 'sanding'
                        ? (
                            <img src="./load.gif" className="w-5" />
                        ) : sandStatus === 'sent' ? (
                            <BsCheckCircleFill className="text-xl text-green-500" />
                        ) : ''
                }
                Gerar Boleto (R$299,90)
            </button>
        </form>
    )
}