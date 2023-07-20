#language: pt

Contexto: 
Dado que eu adicione produtos no carrinho do site da EBAC-SHOP

Cenário: 1 - Habilitar cupom 10%

Quando eu adicionar produtos com valores entre R$ 200 e R$ 600
Então deve ser permitido adicionar cupom de 10% 

Cenário: 2 - Não habilitar cupom 10%

Quando eu adicionar produtos com valores entre R$ 0 e R$ 159
Então não deve ser permitido adicionar cupom de 10% 


Esquema do Cenário: exibir mensagem de alerta ao inserir mais de 10 itens do mesmo produto 

Quando eu adicionar 11 itens do mesmo produto no carrinho  
Então deve ser exibido mensagem de alerta 

Exemplos:
            | Produtos | n_itens | Exibir_Mensagem |
            | Item 01  | 9       | Não             |
            | Item 02  | 10      | Não             |
            | Item 03  | 11      | Sim             |



