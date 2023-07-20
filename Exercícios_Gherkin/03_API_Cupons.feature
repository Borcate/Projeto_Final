#language: pt

Cenário: 1 - Listar cupons buscando por ID

Dado que eu liste cupons cadastros via GET
Quando eu digitar o id = "8197"
E clicar em execute
Então deve exibir o cupom cadastrado 


Esquema do Cenário: cadastrar novo cupom - POST 

Quando eu inserir os campos <code>, <amount>, <discount_type> e <description>
E clicar em clicar em <execute>
Então deve cadastrar o cupom 

Exemplos:
            | code         | amount | discount_type | description                |
            | cupom_ontem  | 9      | fixed_product | Cupom de desconto de teste |
            | cupom_hoje   | 10     | fixed_product | Cupom de desconto de teste |
            | cupom_amanha | 11     | fixed_product | Cupom de desconto de teste |

