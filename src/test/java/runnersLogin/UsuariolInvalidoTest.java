package runnersLogin;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;


@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty", "html:target/cucumber-reports"},
		features = "classpath:Features",
		glue = "stepsDefinitions",
		tags = "@UsuariolInvalido",
		snippets = SnippetType.CAMELCASE,
		monochrome = true,
		dryRun = false
		)
public class UsuariolInvalidoTest {

}
