# Desafio API PetStore[![Circle CI](https://circleci.com/gh/DarlingL/api_test_PetStore.svg?style=shield)](https://circleci.com/gh/DarlingL/api_test_PetStore)

## **Objetivo:**
  Teste de API/Contrato, realizando os seguintes cenários: 

  ```
 
  ```

## **Frameworks Utilizados:**

<img src="https://github.com/DarlingL/api_test_PetStore/blob/master/suporte/frameworks.png?raw=true" width="550">



## **Dependências:**
```
Node.js
```
Pode ser instalado via Brew:
```
brew install node
```
## **Atualizando o Projeto:**

Executar o comando na raiz do projeto:
```
sudo npm install --safe
```
O comando vai instalar ou atualizar todos os frameworks utilizados no projeto, caso falhe instale manualmente:

```
sudo npm install supertest -g
sudo npm install mocha -g
sudo npm install chai -g
sudo npm install joi -g
sudo npm install joi-assert -g
sudo npm install mochawesome -g
sudo npm install faker -g
```


## **Execução dos testes:**
Executar o comando na raiz do projeto:
```
npm run exec_teste
```

Cada Execução gera um relatório HTML, que pode ser acessado em:
```
/mochawesome-report/mochawesome.html
```
