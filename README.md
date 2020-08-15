# Projeto NLW #02 - Proffy :purple_heart:
<p align="center">
  <img src="https://img.shields.io/github/languages/top/HallanCosta/proffy?style=flat-square%22">
  <img src="https://img.shields.io/github/license/HallanCosta/proffy">
</p>

<p align="center">
  <a href="#book-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#camera-pré-visualização">Pré-visualização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#bookmark-dependências">Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#video_game-como-executar-a-aplicação">Intalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-desenvolvimento">Author</a>
</p>

<img src="https://user-images.githubusercontent.com/60573155/90304907-ef52e480-de92-11ea-83dd-67811a6e8eeb.png">

# :book: Sobre
><<
 &nbsp; O **Proffy** é uma plataforma para melhorar a comunicação entre alunos e professores(proffys).
&nbsp; Na plataforma você pode ser um professor podendo colocar a sua biografia, contato, sua melhor foto e dar aulas sobre o que  você mais conhece. Se você é um estudando você pode filtrar os professores pela matéria, hora, dia e encontrar vários professores para ensinar você.

:exclamation:IMPORTATE: Essa aplicação foi desenvolvida, visando a comeração do dia 06 de agosto que é o dia nacional dos profissionais de educação.

## :camera: Pré-visualização

### :computer: Web
**Home**
<img src="https://user-images.githubusercontent.com/60573155/90321779-42747800-df23-11ea-83e4-fbc5d469d65e.png">
**Formulário**
<img src="https://user-images.githubusercontent.com/60573155/90321778-41dbe180-df23-11ea-9ab0-15fbcb326893.png">
**Listagem**
<img src="https://user-images.githubusercontent.com/60573155/90321780-43a5a500-df23-11ea-9651-d247fb6de660.png">
**Sem resultados**
<img src="https://user-images.githubusercontent.com/60573155/90321781-43a5a500-df23-11ea-8b9e-6b6bad074cc3.png">


### :iphone: Mobile    
| Splash | Home |
|--|--|
| <img src="https://user-images.githubusercontent.com/60573155/90316626-b4d06280-def9-11ea-8ba6-d985469a8e19.png" width="190px" height="380px">  | <img src="https://user-images.githubusercontent.com/60573155/90316620-b1d57200-def9-11ea-8308-8949b663339d.png" width="190px" height="380px"> |

| Quero estudar | Favoritos |
|--|--|
| <img src="https://user-images.githubusercontent.com/60573155/90316625-b39f3580-def9-11ea-8919-136de5faba65.png" width="190px" height="380px"> | <img src="https://user-images.githubusercontent.com/60573155/90316618-b0a44500-def9-11ea-83df-5548ace018a0.png" width="190px" height="380px"> |

| Filtro expandido | Dar aulas |
|--|--|
| <img src="https://user-images.githubusercontent.com/60573155/90316619-b1d57200-def9-11ea-9cc2-ca378929760b.png" width="200px" height="780px"> | <img src="https://user-images.githubusercontent.com/60573155/90316624-b39f3580-def9-11ea-89a5-c04820f51a44.png" width="190px" height="380px"> |


## :rocket: Tecnologias utilizadas
 - [x] NodeJS
 - [x] React JS
 - [x] React Native
 - [x] Typescript
 - [x] Expo


## :bookmark: Dependências
### Backend:
 - [x] Axios
 - [x] Cors
 - [x] Express
 - [x] Knex
 - [x] Sqlite3
 - [ ] Celebrate


###  Web:
 - [x] Axios
 - [x] React router dom
 - [ ] Yup

### Mobile:
 - [x] Axios
 - [x] Expo google fonts
 - [x] React native gesture handler
 - [x] React-native-picker-select
 - [x] React navigation
 - [x] React native community / Async-storage
 - [x] React native community / Datetimepicker
 - [x] React native modal datetimepicker

## :video_game: Como executar a aplicação
```sh
  # Instalação do projeto.
  $ mkdir proffy && cd proffy
  # Inicializando um projeto.
  $ git init
  # Clonando o projeto
  $ git clone git pull https://github.com/HallanCosta/proffy.git .

  # API
  $ cd server
  # Instale as dependências do projeto.
  $ yarn install # ou npm install
  # Crie o banco de dados e configure a as tabelas.
  $ yarn knex:migrate # ou npm run knex:migrate
  # Inicie a API
  $ yarn start # ou npm start

  # Aplicação web
  $ cd web
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start

  # Aplicação mobile
  $ cd mobile
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação mobile
  $ yarn start # ou npm start
```

## :memo: Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/HigorSnt/proffy/blob/master/LICENSE.md) para mais detalhes.

## :computer: Desenvolvimento
| Author | Contribuidor |
|--|--|
| [<img src="https://avatars2.githubusercontent.com/u/60573155?s=115&v=3"><br><sub>@HallanCosta</sub>](https://github.com/HallanCosta) | [<img src="https://avatars0.githubusercontent.com/u/28929274?s=115&v=3"><br><sub>@Rocketseat</sub>](https://github.com/rocketseat) |

