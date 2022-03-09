## AvonaleDesafioNaPista

O projeto consiste na construção de 4 cenários de testes baseados na funcionalidade 'Login'. São eles: 

1. Usuário Inválido;
2. Senha Inválida;
3. Três tentativas seguidas de fazer login com usuário ou senha incorretos - mensagem para recuperar a senha;
4. Realizar Login com sucesso.

## Ferramentas Utilizadas

* O projeto foi escrito na linguagem Java. 
* Utilização da IDE Eclipse.
* Para o controle de dependências foi utilizado a pom, tendo em visto que o projeto foi criado como Maven Project.
* Metodologia de desenvolvimento BDD com Gherkin.
* Appium.
* JUnit.
* Cucumber.
* Selenium.

## Evidências

Foi gerado um relatório automático para visualização do resultado dos testes. Ao fim de cada cenário foi gerado uma screenshot.
O relatório encontra-se com o nome 'index.html' no diretório: AvonaleDesafioNaPista\target\cucumber-reports.
As screenshots encontram-se no diretório: AvonaleDesafioNaPista\target\screenshots.

## Instruções para abrir e executar o projeto no Eclipse com o Appium
1. File > Import > Maven > Existing Maven Projects > Browse > "Diretório que foi baixado o projeto" > Selecionar Pasta > Finish
2. Aguardar o download das dependências.
3. Abrir o emulador em que o apk esteja instalado.
4. Executar o Appium como administrador.
5. Após abrir o Appium clicar em Start Server.
6. Com o Appium startado agora é só ir ao Eclipse, abrir a package 'runners' no diretório src/test/java, abrir alguma runner de teste desejada e executá-la através do JUnit.