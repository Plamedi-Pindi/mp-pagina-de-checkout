import { useState } from "react";
import { BsCreditCardFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";

export const CardForm = () => {
    const [inputCard, setInputCart] = useState('');

    const handleInputCart = ()=> {
        
    }

    return (
        <div>
            <div className="mb-4 text-xs">
                <label className=" block mb-1.5 ">Número do Cartão</label>
                <div className="flex items-center border  p-1 rounded border-zinc-200 pl-3 pr-3 w-full">
                    <BsCreditCardFill className="text-zinc-400 mr-2" />
                    <input
                        onChange={handleInputCart}
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        required
                        className="outline-none text-zinc-800 grow"
                    />
                </div>
            </div>

            <div className="mb-4 text-xs">
                <label className=" block mb-1.5 ">Nome no Cartão</label>
                <input
                    type="text"
                    placeholder="Nome como está no cartão  "
                    required
                    className="outline-none w-full border border-zinc-200 p-1 rounded pl-3 pr-3 text-zinc-800 "
                />
            </div>

            <div className="mb-4 grid screen-414:grid-cols-2 gap-4 text-xs">
                <div >
                    <label className=" block mb-1.5 ">Validade</label>
                    <input
                        type="text"
                        placeholder="MM/AA "
                        required
                        className="outline-none w-full border border-zinc-200 p-1 rounded pl-3 pr-3 text-zinc-800 "
                    />
                </div>
                <div >
                    <label className=" block mb-1.5 ">CVV</label>
                    <input
                        type="text"
                        placeholder="123 "
                        required
                        className="outline-none w-full border border-zinc-200 p-1 rounded pl-3 pr-3 text-zinc-800 "
                    />
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
                <input type="checkbox" className="m2  " />
                <p className="ml-2 text-xs">Salvar cartão para compras futuras</p>
            </div>

            <div className="flex text-xs w-full text-zinc-400  md:justify-center mt-7">
                <FaLock className="text-md mr-2" />
                <p>Seus dados estão protegidos com criptografia SSL</p>
            </div>
        </div>
    )
}