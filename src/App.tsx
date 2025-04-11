// Icons
import { BsBagFill } from 'react-icons/bs';

// Components
import MethodButton from './components/Buttons/MethodButton';
import MainForm from './components/Forms/MainForm';
import CardForm from './components/Forms/CardForm';
import BoletoForm from './components/Forms/BoletoForm';
import PixForm from './components/Forms/PixForm';

// Hooks
import { useState } from 'react';


function App() {
  const [payMethod, setPayMethid] = useState('card')

  const cardMethod = payMethod === 'card';
  const boletoMethod = payMethod === 'boleto';
  const pixMethod = payMethod === 'pix';

  const handleClickCard = () => {
    setPayMethid('card')
  }
  const handleClickBoleto = () => {
    setPayMethid('boleto')
  }
  const handleClickPix = () => {
    setPayMethid('pix')
  }

  return (
    <div className=''>
      {/* Container Start */}
      <div className='flex flex-col-reverse items-center '>

        {/* Finalizar compra Start */}
        <div className='bg-white w-[18rem] h-[30rem] mt-4 mb-4 p-6  rounded-md '>
          <h1 className='text-2xl font-bold '>Finalizar Compra</h1>
          <p className='text-sm text-zinc-400'>Escolha seu método de pagamento preferido</p>

          {/* Escolher Metodo de pagamento Start */}
          <div className='w-full bg-zinc-100 text-xs mt-4 grid grid-cols-4 gap-2 p-1 rounded font-medium'>
            <MethodButton method={cardMethod} onclick={handleClickCard} title='Cartao de crédito' gridStyle='col-span-2' />
            <MethodButton method={boletoMethod} onclick={handleClickBoleto} title='Boleto' gridStyle='' />
            <MethodButton method={pixMethod} onclick={handleClickPix} title='Pix' gridStyle='' />
          </div>
          {/* Escolher Metodo de pagamento End */}

          {/* Form start */}
          <MainForm>
            {payMethod === 'card' ? (
              <div>
                Card
              </div>
            ) : payMethod === 'boleto' ? (
              <div>
                Bolero
              </div>
            ) : (
              <div>
                Pix
              </div>
            )}
          </MainForm>
          {/* Form End */}
        </div>
        {/* Finalizar compra End */}

        {/* Resumo Start */}
        <div className='bg-white w-[18rem] min-h-[30rem] mt-4 pt-7 pb-7 p-6 rounded-md '>
          <h2 className='text-lg font-bold'>Resumo do Pedido</h2>
          <p className='text-sm text-zinc-400'>Detalhes da sua compra</p>

          <div className='mt-4 flex justify-between'>
            <div className='bg-zinc-100 w-20 h-16 rounded flex items-center justify-center '>
              <BsBagFill className='text-3xl text-zinc-300' />
            </div>
            <div className=''>
              <p className='text-base font-bold'>Produto</p>
              <p className='text-base font-bold'>Premium R$279,90</p>
              <span className='text-sm text-zinc-400'>quantidade: 1</span>
            </div>
          </div>

          <ul className='text-sm border-t border-b border-zinc-200 mt-4 pt-4 pb-4 '>
            <li className='flex justify-between items-center mb-3 '>
              <p className='text-zinc-400'>Subtotal</p>
              <div className='font-medium flex justify-between min-w-20'>
                <span> R$ </span>
                <p>279,90 </p>
              </div>
            </li>
            <li className='flex justify-between items-center mb-3 '>
              <p className='text-zinc-400'>Frete</p>
              <div className='font-medium flex justify-between min-w-20'>
                <span> R$ </span>
                <p>9,90 </p>
              </div>
            </li>
            <li className='flex justify-between items-center '>
              <p className='text-zinc-400'>Desconto</p>
              <div className='font-medium text-green-600 flex justify-between min-w-20'>
                <span> R$ </span>
                <p> -9,90 </p>
              </div>
            </li>
          </ul>

          <div className='flex justify-between intems-center font-medium text-lg mt-4 mb-4'>
            <p>Total</p>
            <p> R$279,90  </p>
          </div>

          <p className='text-xs text-zinc-400 '>* Frete calculado para CEP: 01000-000</p>
          <p className='text-xs text-zinc-400 '>* Entrega estimada: 3-5 dias uteis</p>

          <h3 className='font-medium text-base mt-4 mb-4 '> Métodos de pagamentos aceitos: </h3>
          <ul className='flex space-x-3'>
            <li className='bg-zinc-100 p-1 text-[0.6rem] font-medium rounded'>visa</li>
            <li className='bg-zinc-100 p-1 text-[0.6rem] font-medium rounded'>Mastercard</li>
            <li className='bg-zinc-100 p-1 text-[0.6rem] font-medium rounded'>Elo</li>
            <li className='bg-zinc-100 p-1 text-[0.6rem] font-medium rounded'>Boleto</li>
            <li className='bg-zinc-100 p-1 text-[0.6rem] font-medium rounded'>Pix</li>
          </ul>
        </div>
        {/* Resumo End */}
      </div>
      {/* Container End */}
    </div>
  )
}

export default App
