# Página de checkout

Este projeto é uma interface de checkout que simula uma experiência de finalização de compra em um e-commerce. O objetivo é permitir ao usuário escolher entre diferentes métodos de pagamento — Cartão de Crédito, Boleto Bancário e Pix — e preencher os dados necessários para concluir a compra. O layout também apresenta um resumo do pedido com subtotal, desconto e total final, além de destacar os métodos de pagamento aceitos e o prazo de entrega.

## 🔨 Requisitos

#### Requisito 1
O usuário deve poder alternar entre os três métodos de pagamento: Cartão de Crédito, Boleto e Pix.

#### Requisito 2
O formulário de pagamento deve exibir os campos específicos de acordo com o método selecionado:

- Cartão de Crédito: número do cartão, nome, validade, CVV e parcelas.

- Boleto Bancário: CPF e nome completo.

- Pix: exibição de QR Code e código copiável.

#### Requisito 3
Deve ser exibido ao lado o resumo da compra, com:

- Nome do produto

- Quantidade

- Subtotal, desconto e valor total

- Métodos de pagamento aceitos

- Prazo estimado de entrega

## 🔨 Desafio extra para quem quer ir além

- Implementar validação dos dados dos formulários em tempo real.

- Exibir mensagem de sucesso ou erro após clicar no botão "Finalizar pagamento".

## 🎨 Design Sugerido

Temos uma sugestão de design no Figma. Entretanto, fique à vontade para montar a aplicação conforme a sua criatividade.

### Figma

🔗 [Link do design](https://www.figma.com/community/file/1491765228337897918/mini-projeto-pagina-de-checkout)

## 👉🏽 Sobre esse mini-projeto

### O que você irá praticar:

#### React
- Manipulação de estado para alternar entre os métodos de pagamento.

- Renderização condicional de formulários com base na opção selecionada.

#### TailwindCSS
- Construção de layouts responsivos com grid e flex.

- Estilização consistente utilizando classes utilitárias para espaçamento, tipografia e cores.
