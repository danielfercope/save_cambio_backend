# 💱 Conversor de Moedas - Backend

Este é o back-end de um aplicativo de conversão de moedas em tempo real, desenvolvido com **Node.js** e **Express**. Ele se conecta a uma API de câmbio para obter as taxas atuais e armazena um histórico local das conversões realizadas.

---

## 📦 Tecnologias Utilizadas

- [Node.js v18.x](https://nodejs.org/) – Plataforma para execução do JavaScript no backend.
- [Express v4.18.2](https://expressjs.com/) – Framework para criação de APIs web rápidas e minimalistas.
- [Axios v1.6.8](https://axios-http.com/) – Cliente HTTP para fazer requisições à API de câmbio.
- [Node-Cache v5.1.2](https://www.npmjs.com/package/node-cache) – Cache em memória simples para armazenar taxas de câmbio.
- [dotenv v16.4.5](https://www.npmjs.com/package/dotenv) – Carrega variáveis de ambiente a partir de um arquivo `.env`.
- [cors v2.8.5](https://www.npmjs.com/package/cors) – Middleware para permitir requisições entre diferentes origens (CORS).

Impotante: para funcionamento integral é necessário um arquivo .env na raiz do projeto contendo os valores requeridos.
---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/danielfercope/save_cambio_backend.git
cd save_cambio_backend

### Passo 2: Instale as dependências do projeto utilizando npm.
npm install

### Passo 3: Inicie o projeto.
npm start
