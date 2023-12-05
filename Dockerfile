FROM node:latest

WORKDIR /app

# Copie os arquivos do projeto para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . /app

# Comando padrão para iniciar o servidor
CMD ["npm" ,"start"]