#language: pt
#enconding: UTF-8
@Login @End2End
Funcionalidade: Login

  Contexto: 
    Dado que o usuario esteja na tela principal do aplicativo

  @UsuarioInvalido
  Cenario: Usuário Inválido
    Quando o usuario acionar a opcao Ja tenho conta
    E preencher o campo Seu e-mail como "comprador@hotmail.com"
    E preencher o campo Senha como "123qwe"
    E acionar o botao Acessar conta
    E acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?
    Entao o sistema ira apresentar a mensagem Informativo Login ou senha incorretos
    
  @SenhaInvalida
  Cenario: Senha Inválida
    Quando o usuario acionar a opcao Ja tenho conta
    E preencher o campo Seu e-mail como "comprador@crystal.com"
    E preencher o campo Senha como "12345678"
    E acionar o botao Acessar conta
    E acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?
    Entao o sistema ira apresentar a mensagem Informativo Login ou senha incorretos
    
  @MensagemSugestivaParaRecuperarASenha
  Cenario: Três tentativas seguidas de fazer login com usuário ou senha incorretos - mensagem para recuperar a senha
    Quando o usuario acionar a opcao Ja tenho conta
    E preencher o campo Seu e-mail como "comprador@crystal.com"
    E preencher o campo Senha como "12345678"
    E acionar o botao Acessar conta
    E acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?
    E acionar o botao Acessar conta
    E acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?
    E acionar o botao Acessar conta
    E acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?
    Entao o sistema ira apresentar o botao Recuperar  minha senha com a mensagem Acho que voce esqueceu seu login ou sua senha 
    
  @LoginRealizadoComSucesso
  Cenario: Login Realizado com sucesso
    Quando o usuario acionar a opcao Ja tenho conta
    E preencher o campo Seu e-mail como "comprador@crystal.com"
    E preencher o campo Senha como "123qwe"
    E acionar o botao Acessar conta
    E acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?
    Entao o sistema ira apresentar a tela com as ofertas do NaPista