import React, { useState } from "react";
import { BsCreditCardFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

type SandStatuType = 'default' | 'sanding' | 'sent'

export const CardForm = () => {
    const [form, setForm] = useState({ cardNum: '', name: '', validade: '', cvv: '', saveCart: false });
    const [sandStatus, setSandStatus] = useState<SandStatuType>('default');
    const [msgAlert, setMsgAlert] = useState('');
    const [validation, setValidation] =
        useState({
            cardNumVal: false,
            nameVal: false,
            validadeVal: false,
            cvvVal: false
        });

    const handleCartNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (/^\d+$/.test(e.target.value) || e.target.value === '' ) {
            setForm({ ...form, cardNum: e.target.value });
            setValidation({ cardNumVal: false, nameVal: false, validadeVal: false, cvvVal: false });
        } else {
            setValidation({ cardNumVal: true, nameVal: false, validadeVal: false, cvvVal: false });
            setMsgAlert('Deve conter apenas números!');
        }
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (form.cardNum.trim().length === 0) {
            setValidation({ cardNumVal: true, nameVal: false, validadeVal: false, cvvVal: false });
            setMsgAlert('Este campo não pode estar vazia!');
        } else if (form.name.trim().length === 0) {
            setValidation({ cardNumVal: false, nameVal: true, validadeVal: false, cvvVal: false });
            setMsgAlert('Este campo não pode estar vazia!');
        } else if (form.validade.trim().length === 0) {
            setValidation({ cardNumVal: false, nameVal: false, validadeVal: true, cvvVal: false });
            setMsgAlert('Este campo não pode estar vazia!');
        } else if (form.cvv.trim().length === 0) {
            setValidation({ cardNumVal: false, nameVal: false, validadeVal: false, cvvVal: true });
            setMsgAlert('Este campo não pode estar vazia!');
        } else {
            setValidation({ cardNumVal: false, nameVal: false, validadeVal: false, cvvVal: false });
            setSandStatus('sanding');

            setTimeout(() => {
                setSandStatus('sent');
                setForm({ cardNum: '', name: '', validade: '', cvv: '', saveCart: false });
            }, 3000);

            setTimeout(() => {
                setSandStatus('default');
            }, 4500);

        }
    }

    return (
        <form onSubmit={handleSubmit} className="text-sm">

            <div className="mb-4 text-xs">
                <label className=" block mb-1.5 ">Número do Cartão</label>
                <div className="flex items-center border  p-1 rounded border-zinc-200 pl-3 pr-3 w-full">
                    <BsCreditCardFill className="text-zinc-400 mr-2" />
                    <input
                        onChange={handleCartNumberChange}
                        value={form.cardNum}
                        type="text"
                        disabled={sandStatus === 'sanding'}
                        placeholder="0000 0000 0000 0000"
                        className="outline-none text-zinc-800 grow"
                    />
                </div>
                {/* Error */}
                <div className={`bg-red-200 text-xs p-1 ${validation.cardNumVal ? 'block' : 'hidden'}`}>
                    <p>{msgAlert}</p>
                </div>
            </div>

            <div className="mb-4 text-xs">
                <label className=" block mb-1.5 ">Nome no Cartão</label>
                <input
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    value={form.name}
                    type="text"
                    disabled={sandStatus === 'sanding'}
                    placeholder="Nome como está no cartão  "
                    className="outline-none w-full border border-zinc-200 p-1 rounded pl-3 pr-3 text-zinc-800 "
                />
                {/* Error */}
                <div className={`bg-red-200 text-xs p-1 ${validation.nameVal ? 'block' : 'hidden'}`}>
                    <p>{msgAlert}</p>
                </div>
            </div>

            <div className="mb-4 grid screen-414:grid-cols-2 gap-4 text-xs">
                <div >
                    <label className=" block mb-1.5 ">Validade</label>
                    <input
                        onChange={(e) => setForm({ ...form, validade: e.target.value })}
                        value={form.validade}
                        type="text"
                        disabled={sandStatus === 'sanding'}
                        placeholder="MM/AA "
                        className="outline-none w-full border border-zinc-200 p-1 rounded pl-3 pr-3 text-zinc-800 "
                    />
                    {/* Error */}
                    <div className={`bg-red-200 text-xs p-1 ${validation.validadeVal ? 'block' : 'hidden'}`}>
                        <p>{msgAlert}</p>
                    </div>
                </div>

                <div >
                    <label className=" block mb-1.5 ">CVV</label>
                    <input
                        onChange={(e) => setForm({ ...form, cvv: e.target.value })}
                        value={form.cvv}
                        type="text"
                        disabled={sandStatus === 'sanding'}
                        placeholder="123 "
                        className="outline-none w-full border border-zinc-200 p-1 rounded pl-3 pr-3 text-zinc-800 "
                    />
                    {/* Error */}
                    <div className={`bg-red-200 text-xs p-1 ${validation.cvvVal ? 'block' : 'hidden'} `}>
                        <p>{msgAlert}</p>
                    </div>
                </div>
            </div>

            <div className="text-xs">
                <label className=" block mb-1.5 ">Parcelas</label>
                <select className="outline-none w-full border border-zinc-200 p-1 rounded pl-3 pr-3 text-zinc-800">
                    <option value="" selected>1 x de R$:299.90 (sem juros) </option>
                    <option value="">1 x de R$:199.90 (sem juros) </option>
                    <option value="">1 x de R$:169.90 (sem juros) </option>
                </select>
            </div>

            <div className="flex items-center mt-5">
                <input
                    type="checkbox"
                    className="m2"
                    checked={form.saveCart}
                    onChange={() => setForm({ ...form, saveCart: true })}
                />
                <p className="ml-2 text-xs">Salvar cartão para compras futuras</p>
            </div>

            <div className="flex text-xs w-full text-zinc-400  md:justify-center mt-7">
                <FaLock className="text-md mr-2" />
                <p>Seus dados estão protegidos com criptografia SSL</p>
            </div>

            {/* Submit buttom */}
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