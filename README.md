# cadastroProdutos

# iniciando json Server
1. criar pasta backend 
2. npm init -y
3. npm i json-server
4. criar o db.json na pasta backend
5. inserir a estrutura de dados a ser trabalhada(nesse exemplo Produtos)
6. no package.json alterar a tag start em scripts: 
  "scripts": {
   "start":"json-server --watch db.json 3001"
  },
7. para iniciar o server digite npm start

# iniciando estrutura Angular com minimal
1. na pasta raiz do projeto digite npm i -g @angular/cli
2. ng new frontend --minimal
3. na parte de perguntas sobre rotas responda sim
4. na escolha de css use css mesmo

# iniciando o projeto
1. acesse a pasta frontend e digite npm start

# alteração de arquivos de configuração
1. angular.json altere o valor inlineTemplate e inlineStyle para false
devido ao uso do minimal é gerado essa config inline

# instalar o material design
1. ng add @angular/material

# criar os componentes básicos
1. Criar o header digite  ng g c components/template/header
2. Criar o footer digite  ng g c components/template/footer