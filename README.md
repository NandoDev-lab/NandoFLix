# 🎬 NandoFlix

Interface moderna de plataforma de streaming inspirada na **Netflix**, desenvolvida com foco em **UI/UX responsivo**, interatividade dinâmica e **Banco de Dados Relacional SQLite** executando diretamente no navegador via WebAssembly (`sql.js`).

---

## ✨ Funcionalidades

- **Banco de Dados Relacional SQLite (`sql.js`):**
  - Modelagem relacional com 3 tabelas (`categorias`, `midias` e tabela associativa N:N `midia_categorias`).
  - Consultas SQL reais com `INNER JOIN`, `GROUP BY`, `COUNT()` e `Prepared Statements` contra SQL Injection.
  - Exibição em tempo real da query SQL executada ao filtrar categorias ou pesquisar títulos.
  - Arquivo de estrutura e carga disponível em [`db/schema.sql`](./db/schema.sql).
- **Filtro de Categorias Interativo:** Barra de categorias (Pills) com contagem de títulos por gênero, seletor dropdown na barra superior e tags clicáveis dentro do modal de informações.
- **Banner Dinâmico (Hero Section):** Destaque cinematográfico com *vignette* suave, selo Top 1, classificação indicativa, relevância e avaliação por estrelas.
- **Player de Vídeo em Modal:** Reprodução limpa de trailers em tela dedicada sem poluir o layout principal, interrompendo o vídeo automaticamente ao fechar (ou pressionar `ESC`).
- **Design Responsivo & Glassmorphism:** Navbar fixa com desfoque de fundo (`backdrop-filter`), menu mobile adaptável e carrosséis responsivos com **Owl Carousel 2**.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico** (Acessibilidade e estrutura limpa)
- **CSS3 Moderno** (CSS Variables, Flexbox, CSS Grid, Aspect-Ratio, Glassmorphism)
- **JavaScript (ES6+)** (Manipulação de DOM, eventos e integração com banco de dados)
- **SQLite (`sql.js` / WebAssembly)** (Banco de dados SQL relacional executando 100% no cliente)
- **Bootstrap 5** & **Font Awesome 6**
- **jQuery** & **Owl Carousel 2**
- **Google Fonts** (*Bebas Neue* e *Inter*)

---

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/NandoFLix.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd NandoFLix
   ```
3. Abra o arquivo `index.html` no navegador ou utilize a extensão **Live Server** no VS Code (também funciona direto no **GitHub Pages** sem necessidade de servidor backend).

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
