#language: pt

Cenário: 1 - Autenticação usuário ativo

Dado que eu acesse a página de autenticação do portal ebac
Quando eu digitar o usuário "maria_silva@ebac.com.br"
E a senha "abc@123"
Então deve ser exibido a mensagem: "Olá Maria"

Cenário: 2 - Mensagem de login inválido

Dado que eu acesse a página de autenticação do portal ebac
Quando eu digitar o usuário "lucas_pera@ebac.com.br"
E a senha "abc@123"
Então deve ser exibido a mensagem: "Usuário ou senha inválidos"







