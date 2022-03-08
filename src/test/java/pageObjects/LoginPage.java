package pageObjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.support.PageFactory;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import utils.Utils;

public class LoginPage {

	public LoginPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}
	
	@AndroidFindBy(id = "com.android.packageinstaller:id/permission_allow_button")
	private MobileElement botaoPermitir;
	
	@AndroidFindBy(accessibility = "Pr�ximo")
	private MobileElement botaoProximo;
	
	@AndroidFindBy(accessibility = "Vamos come�ar")
	private MobileElement botaoVamosComecar;
	
	@AndroidFindBy(accessibility = "J� tenho conta")
	private MobileElement botaoJaTenhoConta;
	
	@AndroidFindBy(xpath = "//android.widget.EditText[@text='Seu e-mail']")
	private MobileElement campoEmail;
	
	@AndroidFindBy(xpath = "//android.widget.EditText[@text='Senha']")
	private MobileElement campoSenha;
	
	@AndroidFindBy(accessibility = "Acessar conta")
	private MobileElement botaoAcessarConta;
	
	@AndroidFindBy(accessibility = "N�o")
	private MobileElement botaoNaoHabilitarDigital;
	
	@AndroidFindBy(accessibility = "Informativo\nLogin ou senha incorretos")
	private MobileElement mensagemUsuarioOuSenhaInvalido;
	
	public void acionarBotaoPermitir() throws Exception {
		for (int i = 1; i <= 3; i++) {
			Utils.esperarElemento(2000);
			botaoPermitir.click();
		}
	}
	
	public void acionarBotaoProximo() throws Exception {
		Utils.esperarElemento(2000);
		botaoProximo.click();
	}
	
	public void acionarBotaoVamosComecar() throws Exception {
		Utils.esperarElemento(2000);
		botaoVamosComecar.click();
	}
	
	public void acionarBotaoJaTenhoConta() throws Exception {
		Utils.esperarElemento(2000);
		botaoJaTenhoConta.click();
	}
	
	public void preencherCampoEmail(String email) throws Exception {
		Utils.esperarElemento(2000);
		Utils.inputTextAppiumCommand(campoEmail, email);
	}
	
	public void preencherCampoSenha(String senha) throws Exception {
		Utils.esperarElemento(2000);
		Utils.inputTextAppiumCommand(campoSenha, senha);
	}

	public void acionarBotaoAcessarConta() throws Exception {
		Utils.esperarElemento(2000);
		botaoAcessarConta.click();
	}
	
	public void acionarBotaoNaoHabilitarDigital() throws Exception {
		Utils.esperarElemento(2000);
		botaoNaoHabilitarDigital.click();
	}
	
	public void validarUsuarioOuSenhaInvalido() throws Exception {
		Utils.esperarElemento(2000);
		assertTrue("A mensagem informando que o usu�rio ou senha est�o inv�lidos n�o apareceu", mensagemUsuarioOuSenhaInvalido.isDisplayed());
	}
}