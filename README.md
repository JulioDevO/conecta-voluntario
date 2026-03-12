# Conecta Voluntário 🤝

Plataforma web desenvolvida para conectar cidadãos interessados em trabalho voluntário a Organizações Não Governamentais (ONGs) que necessitam de apoio. 

## 💻 Sobre o Projeto

Este projeto é um protótipo Front-end responsivo e interativo, focado em resolver a lacuna de comunicação no terceiro setor. Desenvolvido com foco na usabilidade (UX/UI) e na separação de responsabilidades (*Clean Code*), ele simula fluxos reais de acesso e listagem de dados.

O desenvolvimento deste sistema faz parte das atividades práticas e de extensão acadêmica (Desafio Unifacisa).

## 🚀 Funcionalidades Implementadas

* **Página Inicial (Landing Page):** Apresentação do projeto com navegação âncora e roteamento inteligente por parâmetros de URL.
* **Mural de Oportunidades:** * Renderização dinâmica de vagas (DOM Manipulation).
  * Motor de busca reativo em tempo real (Filtro por título ou área de atuação).
  * Estilização modular com CSS-in-JS.
* **Sistema de Autenticação (Simulado):**
  * Layout *Split Card* moderno.
  * Navegação assíncrona entre 3 telas na mesma página (Login, Cadastro de Voluntário e Cadastro de ONG).
  * Diferenciação de regras de negócio (Inclusão de CPF para voluntários e CNPJ para instituições).
  * Banco de dados local utilizando `localStorage` para salvar e validar sessões em formato JSON.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Semântica e estruturação acessível.
* **CSS3:** Flexbox, CSS Grid, Variáveis Globais (Custom Properties) e Design Responsivo (*Mobile First*).
* **JavaScript (ES6+):** Manipulação do DOM, Event Listeners, manipulação de Arrays/Objetos e Web Storage API.

## ⚙️ Como executar o projeto

Como o projeto é totalmente baseado em tecnologias Front-end nativas (Vanilla), não é necessária nenhuma instalação complexa de pacotes.