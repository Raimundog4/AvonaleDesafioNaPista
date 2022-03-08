#language: pt
#enconding: UTF-8
@Login @End2End
Funcionalidade: Login

  Contexto: 
    Dado que o usuario esteja na tela principal do aplicativo

  @EmailInvalido
  Cenario: Email Inválido
    Quando o usuario acionar a opcao Ja tenho conta
    E preencher o campo Seu e-mail como "comprador@hotmail.com"
    E preencher o campo Senha como "123qwe"
    E acionar o botao Acessar conta
    E acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?
    Entao o sistema ira apresentar a mensagem Informativo Login ou senha incorretos
