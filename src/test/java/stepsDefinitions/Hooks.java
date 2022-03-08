package stepsDefinitions;

import static utils.Utils.*;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;


public class Hooks {
	
	@Before
	public void setUp() throws Exception {
		acessarApp();
	}
	
	@After
	public void tearDown(Scenario cenario) {
		capturarTela(cenario);
		driver.quit();
	}

}
