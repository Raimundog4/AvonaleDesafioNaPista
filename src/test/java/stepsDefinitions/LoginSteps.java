package stepsDefinitions;

import static utils.Utils.driver;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.E;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.LoginPage;

public class LoginSteps {

	LoginPage lp = new LoginPage(driver);
	
	@Dado("que o usuario esteja na tela principal do aplicativo")
	public void queOUsuarioEstejaNaTelaPrincipalDoAplicativo() throws Exception {
		lp.acionarBotaoPermitir();
		lp.acionarBotaoProximo();
		lp.acionarBotaoProximo();
		lp.acionarBotaoVamosComecar();
	}

	@Quando("o usuario acionar a opcao Ja tenho conta")
	public void oUsuarioAcionarAOpcaoJaTenhoConta() throws Exception {
		lp.acionarBotaoJaTenhoConta();
	}

	@E("preencher o campo Seu e-mail como {string}")
	public void preencherOCampoSeuEMailComo(String string) throws Exception {
		lp.preencherCampoEmail(string);
	}

	@E("preencher o campo Senha como {string}")
	public void preencherOCampoSenhaComo(String string) throws Exception {
		lp.preencherCampoSenha(string);
	}

	@E("acionar o botao Acessar conta")
	public void acionarOBotaoAcessarConta() throws Exception {
		lp.acionarBotaoAcessarConta();
	}

	@E("acionar o botao Nao para a pegunta Deseja Habilitar o uso da biometria?")
	public void acionarOBotaoNaoParaAPeguntaDesejaHabilitarOUsoDaBiometria() throws Exception {
		lp.acionarBotaoNaoHabilitarDigital();
	}
	
	@Entao("o sistema ira apresentar a mensagem Informativo Login ou senha incorretos")
	public void oSistemaIraApresentarAMensagemInformativoLoginOuSenhaIncorretos() throws Exception {
		lp.validarUsuarioOuSenhaInvalido();
	}

	@Entao("^o sistema ira apresentar a tela com as ofertas do NaPista$")
	public void oSistemaIraApresentarATelaComAsOfertasDoNaPista() throws Exception {
		lp.validarLoginRealizadoComSucesso();
	}

	@Entao("^o sistema ira apresentar o botao Recuperar  minha senha com a mensagem Acho que voce esqueceu seu login ou sua senha$")
	public void oSistemaIraApresentarOBotaoRecuperarMinhaSenhaComAMensagemAchoQueVoceEsqueceuSeuLoginOuSuaSenha() throws Exception {
		lp.validarMensagemSugerindoRecuperarSenha();
	}

}
