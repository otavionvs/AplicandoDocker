#a imagem que usaremos de base
FROM node
#informar o diretório padrão
WORKDIR /
#variavel de ambiente durante o build do dockerfile
ARG PORT=3001 
#variavel de ambiente da aplicação
ENV PORT=$PORT
#deixar a porta da maquina visível
EXPOSE $PORT 
#copiar os arquivos do diretorio para a imagem que estamos criando
COPY ./ .
#comando em bash que pode ser usado para pré-iniciar a aplicação
RUN npm install
#executa o comando para iniciar a aplicação
ENTRYPOINT npm start

#docker build -t 0tavioneves/learning-docker:1.0.0 .
#-t para nome
#o nome segue padrao, a versão no final é uma boa pratica, mas opcional

#docker run -d -p 8080:3000 0tavioneves/learning-docker:1.0.0
#caso não usado o parametro -d, o terminal e parado, e o container morre 
#primeiro coloca a porta que quer usar, depois a utilizada, 8080:3000
