# Sistema de Jogos Eliminatórios 

Este é um código JavaScript que utiliza manipulação do DOM para adicionar clubes a uma lista e gerar uma tabela de jogos com esses clubes.

## Funcionalidades

### `adicionarClube()`
* Esta função é chamada quando o botão "Adicionar" é clicado. Ela verifica se o campo de texto "inClube" possui um valor válido. Se não houver valor, exibe um alerta e retorna. Caso contrário, adiciona o clube à lista "clubes", limpa o campo de texto e chama a função "listarClubes()".
### `listarClubes()`
* Esta função é chamada quando o botão "Listar" é clicado. Ela verifica se a lista "clubes" está vazia e exibe um alerta caso esteja. Em seguida, percorre a lista "clubes" e cria uma string formatada com o número do clube e seu nome. Essa string é exibida no elemento HTML com o id "outLista".
### `montarTabela()`
* Esta função é chamada quando o botão "Tabela" é clicado. Ela verifica se a lista "clubes" possui pelo menos dois clubes e se o número de clubes é par. Caso contrário, exibe um alerta correspondente. Se as condições forem atendidas, a função cria uma tabela de jogos com base na lista de clubes. A tabela é exibida no elemento HTML com o id "outLista".

## Tecnologias Utilizadas
* HTML
* Css
* JavaScript
  
## Como Usar
1. Faça o clone deste repositório para o seu ambiente local. <br>
2. Abra o arquivo index.html em um navegador da web. <br>
3. Preencha os campos de "Clubes" e clique no botão "Adicionar" para adicionar um clube à lista. <br>
4. A lista de clubes será exibida abaixo do formulário. <br>
5. Clique em montar tabela para montar tabela entre clube x clube. <br>

![image](https://github.com/Maycondev01/Jogos-eliminatorios/assets/89277603/50ce4a1b-5cc8-4e38-bfe8-63ca0602568d)

## Contribuições
Contribuições para melhorias são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com suas sugestões.

## Autor
mayconlundgren186@gmail.com
