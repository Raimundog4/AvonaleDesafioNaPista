package stepsDefinitions;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class LoginSteps {

	@Dado("que o usuario esteja na tela principal do aplicativo")
	public void queOUsuarioEstejaNaTelaPrincipalDoAplicativo() {
	}

	@Quando("o usuario acionar a opcao Ja tenho conta")
	public void oUsuarioAcionarAOpcaoJaTenhoConta() {
	}

	@E("preencher o campo Seu e-mail como {string}")
	public void preencherOCampoSeuEMailComo(String string) throws Exception {
	}

	@E("preencher o campo Senha como {string}")
	public void preencherOCampoSenhaComo(String string) throws Exception {
	}

	@E("acionar o botao Acessar conta")
	public void acionarOBotaoAcessarConta() {
	}

	@E("acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?")
	public void acionarOBotaoNaoParaAPeguntaDesejaHabilitarOUsoDaBiometria() {
	}
	
	@Entao("o sistema ira apresentar a mensagem Informativo Login ou senha incorretos")
	public void oSistemaIraApresentarAMensagemInformativoLoginOuSenhaIncorretos() {
	}
	
}
