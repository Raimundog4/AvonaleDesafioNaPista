$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:Features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario esteja na tela principal do aplicativo",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.queOUsuarioEstejaNaTelaPrincipalDoAplicativo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Usu�rio Inv�lido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@UsuarioInvalido"
    }
  ]
});
formatter.step({
  "name": "o usuario acionar a opcao Ja tenho conta",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.oUsuarioAcionarAOpcaoJaTenhoConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Seu e-mail como \"comprador@hotmail.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.preencherOCampoSeuEMailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Senha como \"123qwe\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.preencherOCampoSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Acessar conta",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.acionarOBotaoAcessarConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.acionarOBotaoNaoParaAPeguntaDesejaHabilitarOUsoDaBiometria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema ira apresentar a mensagem Informativo Login ou senha incorretos",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaIraApresentarAMensagemInformativoLoginOuSenhaIncorretos()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario esteja na tela principal do aplicativo",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.queOUsuarioEstejaNaTelaPrincipalDoAplicativo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Senha Inv�lida",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@SenhaInvalida"
    }
  ]
});
formatter.step({
  "name": "o usuario acionar a opcao Ja tenho conta",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.oUsuarioAcionarAOpcaoJaTenhoConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Seu e-mail como \"comprador@crystal.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.preencherOCampoSeuEMailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Senha como \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.preencherOCampoSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Acessar conta",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.acionarOBotaoAcessarConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.acionarOBotaoNaoParaAPeguntaDesejaHabilitarOUsoDaBiometria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema ira apresentar a mensagem Informativo Login ou senha incorretos",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaIraApresentarAMensagemInformativoLoginOuSenhaIncorretos()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario esteja na tela principal do aplicativo",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.queOUsuarioEstejaNaTelaPrincipalDoAplicativo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Tr�s tentativas seguidas de fazer login com usu�rio ou senha incorretos - mensagem para recuperar a senha",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@MensagemSugestivaParaRecuperarASenha"
    }
  ]
});
formatter.step({
  "name": "o usuario acionar a opcao Ja tenho conta",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.oUsuarioAcionarAOpcaoJaTenhoConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Seu e-mail como \"comprador@crystal.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.preencherOCampoSeuEMailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Senha como \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.preencherOCampoSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Acessar conta",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.acionarOBotaoAcessarConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.acionarOBotaoNaoParaAPeguntaDesejaHabilitarOUsoDaBiometria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Acessar conta",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.acionarOBotaoAcessarConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.acionarOBotaoNaoParaAPeguntaDesejaHabilitarOUsoDaBiometria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Acessar conta",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.acionarOBotaoAcessarConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.acionarOBotaoNaoParaAPeguntaDesejaHabilitarOUsoDaBiometria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema ira apresentar o botao Recuperar  minha senha com a mensagem Acho que voce esqueceu seu login ou sua senha",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaIraApresentarOBotaoRecuperarMinhaSenhaComAMensagemAchoQueVoceEsqueceuSeuLoginOuSuaSenha()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario esteja na tela principal do aplicativo",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.queOUsuarioEstejaNaTelaPrincipalDoAplicativo()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Realizado com sucesso",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@End2End"
    },
    {
      "name": "@LoginRealizadoComSucesso"
    }
  ]
});
formatter.step({
  "name": "o usuario acionar a opcao Ja tenho conta",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.oUsuarioAcionarAOpcaoJaTenhoConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Seu e-mail como \"comprador@crystal.com\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.preencherOCampoSeuEMailComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencher o campo Senha como \"123qwe\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.preencherOCampoSenhaComo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Acessar conta",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.acionarOBotaoAcessarConta()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.acionarOBotaoNaoParaAPeguntaDesejaHabilitarOUsoDaBiometria()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema ira apresentar a tela com as ofertas do NaPista",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginSteps.oSistemaIraApresentarATelaComAsOfertasDoNaPista()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
});