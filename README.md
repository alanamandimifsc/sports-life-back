# SportsLife

## Descrição

O **SportsLife** é uma plataforma projetada para facilitar o gerenciamento de exercícios e locais para atividades físicas. Os usuários podem cadastrar novos locais de exercício, visualizar pontos próximos, e registrar suas próprias contribuições para o sistema. Este projeto faz parte do desenvolvimento de um MVP (Minimum Viable Product) que será uma API Rest utilizando Node.js, Express e PostgreSQL.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express**: Framework web para Node.js.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Sequelize**: ORM para Node.js que facilita a integração com o PostgreSQL.
- **JWT**: Utilizado para autenticação baseada em tokens.
- **bcrypt**: Utilizado para hashing de senhas.
- **Nominatim API**: Utilizado para obter coordenadas geográficas e gerar links do Google Maps.
- **Swagger**: Documentação dos endpoints da API.

## Requisitos do Sistema

1. **Node.js** e **npm** instalados.
2. **PostgreSQL** instalado e configurado.

## Estrutura do Projeto

```plaintext
sportslife/
├── src/
│   ├── config/
│   │   └── database.config.js
│   ├── controllers/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── models/
│   ├── routes/
│   └── index.js
├── .sequilizerc
├── .env
└── package.json
```

- **src/config**: Configurações do banco de dados e outras configurações do projeto.
- **src/controllers**: Lógica dos controladores de cada rota.
- **src/database**: Arquivos de migrações e seeders para o banco de dados.
- **src/models**: Definição dos modelos Sequelize.
- **src/routes**: Definição das rotas da aplicação.
- **src/index.js**: Arquivo principal que inicia a aplicação.

## Como Executar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/sportslife.git
    ```
2. Navegue até o diretório do projeto:
   ```bash
   cd sportslife
   ```

3. Instale as dependências:
 ```bash
   npm install
   ```

4. Configure o banco de dados no arquivo .env (será necessário criar dentro da pasta principal)

5. Execute as migrações para criar as tabelas:
    ```bash
    npx sequelize db:migrate
   ```
6. Execute os seeders para popular o banco de dados com dados iniciais:
    ```bash
    npx sequelize db:seed:all 
   ```
7. Inicie o servidor em modo de desenvolvimento:
    ```bash
    npm run start:dev
   ```
8. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

9.  Para acessar a documentação da API, vá para [http://localhost:3000/api-docs](http://localhost:3000/docs).

## Endpoints da API

A documentação completa dos endpoints está disponível através do Swagger. Após iniciar o servidor, acesse [`/docs`](http://localhost:3000/api-docs) para visualizar a documentação.

## Melhorias Futuras

- Implementação de testes automatizados.
- Otimização de performance nas consultas ao banco de dados.
- Adição de novos endpoints para funcionalidades avançadas.
- Criação de um perfil de administrador para gerenciamento das atividades por exemplo.

## Contribuindo

Pull requests são bem-vindos. Para mudanças maiores, por favor abra uma issue primeiro para discutir o que você gostaria de mudar.
