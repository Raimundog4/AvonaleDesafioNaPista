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
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});