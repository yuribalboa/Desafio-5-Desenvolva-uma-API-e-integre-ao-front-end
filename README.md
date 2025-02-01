# 📚 Biblioteca Online - API e Frontend  

## 📌 Descrição  
Este projeto é um sistema de **biblioteca online**, onde usuários podem **cadastrar, listar, atualizar e deletar livros**. Ele foi desenvolvido com um **backend em Node.js + Express** e um **frontend em React**, utilizando um banco de dados **SQLite**.  

---

## 🚀 Tecnologias Utilizadas  

### 🔹 Backend  
- Node.js  
- Express.js  
- SQLite3  
- Zod (validação de dados)  

### 🔹 Frontend  
- React.js  
- Axios (para chamadas à API)  

---

## 🏗️ Estrutura do Projeto  

📦 biblioteca-online
│── 📂 backend
│   ├── 📄 server.js (configuração do servidor Express)
│   ├── 📄 database.js (configuração do SQLite)
│   ├── 📂 routes (rotas da API)
│   └── 📂 models (esquema dos dados)
│
│── 📂 frontend
   │   ├── 📄 App.js (componente principal)
   │   ├── 📂 services (requisições para a API)
   │   ├── 📂 components (componentes reutilizáveis)
   │
   └── 📄 README.md (documentação)

---

## 🔧 Como Rodar o Projeto  

### ▶️ Rodando o Backend (API)  
Acesse a pasta do backend:  
   ```
   cd backend
```

Instale as dependências:
```
npm install
```
Inicie o servidor:
```
node server.js
```

📌 O backend rodará em: http://localhost:3000

### ▶️ Rodando o Frontend
Acesse a pasta do frontend:
```
cd frontend
```

Instale as dependências:
```
npm install
```

Inicie o frontend:
```
npm start
```

📌 O frontend rodará em: http://localhost:5173 (ou outra porta disponível).
