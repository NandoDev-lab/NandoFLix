/**
 * ============================================================================
 * CATÁLOGO DE CONTINGÊNCIA E DADOS BASE DO NANDOFLIX
 * Usado para alimentar o banco de dados SQLite na inicialização e também
 * como fallback caso o navegador esteja sem internet para baixar o WebAssembly.
 * ============================================================================
 */
const catalogo = {
    'adao-negro': {
        titulo: 'Adão Negro',
        tipo: 'Filme',
        categoria: 'Filme • Ação e Fantasia',
        categoriasSlug: ['filmes', 'acao', 'fantasia', 'aventura'],
        relevancia: '96% relevante',
        ano: '2022',
        idade: '+16',
        poster: './img/Adão Negro.jpg',
        wallpaper: './img/bkgAdãoNegro.jpg',
        descricao: 'Após ser aprisionado por quase 5.000 anos, Teth-Adam é libertado de sua tumba terrena, pronto para descarregar sua forma única e implacável de justiça no mundo moderno. O que foi libertado: um herói ou um vilão?',
        videoUrl: 'https://www.youtube.com/embed/X0tOpBuYasI?autoplay=1'
    },
    'mulher-rei': {
        titulo: 'A Mulher Rei',
        tipo: 'Filme',
        categoria: 'Filme • Épico e Ação',
        categoriasSlug: ['filmes', 'acao', 'drama', 'epico'],
        relevancia: '98% relevante',
        ano: '2022',
        idade: '+16',
        poster: './img/A Mulher Rei.jpg',
        wallpaper: './img/A Mulher Rei.jpg',
        descricao: 'A extraordinária história das Agojie, uma unidade de guerreiras composta apenas por mulheres que protegiam o reino africano de Daomé nos anos 1800 com habilidades e uma fúria jamais vistas pelo mundo.',
        videoUrl: 'https://www.youtube.com/embed/3RDaPV_rJ1Y?autoplay=1'
    },
    'wakanda': {
        titulo: 'Wakanda Para Sempre',
        tipo: 'Filme',
        categoria: 'Filme • Ação e Ficção Científica',
        categoriasSlug: ['filmes', 'acao', 'ficcao', 'aventura', 'drama'],
        relevancia: '95% relevante',
        ano: '2022',
        idade: '+14',
        poster: './img/Wakanda Para Sempre.jpg',
        wallpaper: './img/Wakanda Para Sempre.jpg',
        descricao: 'A Rainha Ramonda, Shuri, M’Baku, Okoye e as Dora Milaje lutam para proteger sua nação contra potências mundiais intervenientes logo após a morte do Rei T’Challa.',
        videoUrl: 'https://www.youtube.com/embed/_Z3QKkl1WyM?autoplay=1'
    },
    'avatar': {
        titulo: 'Avatar: O Caminho da Água',
        tipo: 'Filme',
        categoria: 'Filme • Ficção Científica e Aventura',
        categoriasSlug: ['filmes', 'ficcao', 'aventura', 'acao', 'fantasia'],
        relevancia: '97% relevante',
        ano: '2022',
        idade: '+14',
        poster: './img/Avatar.jpg',
        wallpaper: './img/Avatar.jpg',
        descricao: 'Mais de uma década após os eventos do primeiro filme, Jake Sully e Ney\'tiri formaram uma família em Pandora e fazem de tudo para ficarem juntos diante de uma antiga ameaça que retorna.',
        videoUrl: 'https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1'
    },
    'pinoquio': {
        titulo: 'Pinóquio por Guillermo del Toro',
        tipo: 'Filme',
        categoria: 'Filme • Animação e Fantasia',
        categoriasSlug: ['filmes', 'animacao', 'fantasia', 'drama'],
        relevancia: '94% relevante',
        ano: '2022',
        idade: '+10',
        poster: './img/Pinóquio.jpg',
        wallpaper: './img/Pinóquio.jpg',
        descricao: 'O cineasta vencedor do Oscar Guillermo del Toro reinventa o clássico conto de Carlo Collodi sobre a marionete de madeira que ganha vida de forma mágica para confortar o coração de um entalhador em luto.',
        videoUrl: 'https://www.youtube.com/embed/Od2NW1sfRdA?autoplay=1'
    },
    'troll': {
        titulo: 'O Troll da Montanha',
        tipo: 'Filme',
        categoria: 'Filme • Aventura e Fantasia',
        categoriasSlug: ['filmes', 'aventura', 'fantasia', 'acao'],
        relevancia: '89% relevante',
        ano: '2022',
        idade: '+12',
        poster: './img/O Troll da Montanha.jpg',
        wallpaper: './img/O Troll da Montanha.jpg',
        descricao: 'Nas profundezas da montanha de Dovre, algo gigantesco desperta após ficar preso por mil anos. Destruindo tudo em seu caminho, a criatura se aproxima rapidamente da capital da Noruega.',
        videoUrl: 'https://www.youtube.com/embed/AiohkY_XQYQ?autoplay=1'
    },
    'hex': {
        titulo: 'Hex: Paraquedistas Amaldiçoados',
        tipo: 'Filme',
        categoria: 'Filme • Suspense e Ação',
        categoriasSlug: ['filmes', 'misterio', 'acao'],
        relevancia: '84% relevante',
        ano: '2022',
        idade: '+16',
        poster: './img/Hex.jpg',
        wallpaper: './img/Hex.jpg',
        descricao: 'Um grupo de paraquedistas de elite realiza um salto radical que desencadeia forças ocultas no ar, transformando a descida em uma luta desesperada pela sobrevivência.',
        videoUrl: 'https://www.youtube.com/embed/X0tOpBuYasI?autoplay=1'
    },
    'wandinha': {
        titulo: 'Wandinha',
        tipo: 'Série',
        categoria: 'Série • Mistério e Fantasia',
        categoriasSlug: ['series', 'misterio', 'fantasia'],
        relevancia: '99% relevante',
        ano: '2022',
        idade: '+14',
        poster: './img/serie- Wandinha.jpg',
        wallpaper: './img/serie- Wandinha.jpg',
        descricao: 'Inteligente, sarcástica e um pouco morta por dentro, Wandinha Addams investiga uma onda de assassinatos enquanto faz novos amigos — e inimigos — na Escola Nunca Mais.',
        videoUrl: 'https://www.youtube.com/embed/Di310WS8zLk?autoplay=1'
    },
    'willow': {
        titulo: 'Willow',
        tipo: 'Série',
        categoria: 'Série • Fantasia e Aventura',
        categoriasSlug: ['series', 'fantasia', 'aventura'],
        relevancia: '90% relevante',
        ano: '2022',
        idade: '+12',
        poster: './img/serie- Willow.jpg',
        wallpaper: './img/serie- Willow.jpg',
        descricao: 'Um grupo improvável de seis heróis parte em uma perigosa missão por lugares muito além de seu lar, enfrentando demônios interiores e unindo forças para salvar seu mundo.',
        videoUrl: 'https://www.youtube.com/embed/tbbveDpUZv4?autoplay=1'
    },
    'yellowstone': {
        titulo: 'Yellowstone',
        tipo: 'Série',
        categoria: 'Série • Drama e Faroeste Moderno',
        categoriasSlug: ['series', 'drama'],
        relevancia: '96% relevante',
        ano: '2022',
        idade: '+16',
        poster: './img/serie- Yelowstone.jpg',
        wallpaper: './img/serie- Yelowstone.jpg',
        descricao: 'A família Dutton controla o maior rancho contíguo dos Estados Unidos. Em meio a alianças instáveis, assassinatos não resolvidos e feridas abertas, eles defendem sua terra a qualquer custo.',
        videoUrl: 'https://www.youtube.com/embed/suobrMPBLlo?autoplay=1'
    },
    'challenge': {
        titulo: 'The Challenge',
        tipo: 'Série',
        categoria: 'Série • Reality de Competição',
        categoriasSlug: ['series', 'reality', 'acao'],
        relevancia: '88% relevante',
        ano: '2022',
        idade: '+14',
        poster: './img/serie- Challenge.jpg',
        wallpaper: './img/serie- Challenge.jpg',
        descricao: 'Competidores enfrentam provas extremas de resistência física, estratégia mental e alianças políticas em busca de um prêmio milionário.',
        videoUrl: 'https://www.youtube.com/embed/X0tOpBuYasI?autoplay=1'
    },
    'escolhidos': {
        titulo: 'Os Escolhidos (The Chosen)',
        tipo: 'Série',
        categoria: 'Série • Drama Histórico',
        categoriasSlug: ['series', 'drama', 'epico'],
        relevancia: '98% relevante',
        ano: '2022',
        idade: '+12',
        poster: './img/serie- Os Escolhidos.jpg',
        wallpaper: './img/serie- Os Escolhidos.jpg',
        descricao: 'Um olhar carismático e profundo sobre a jornada de pescadores, cobradores de impostos e pessoas comuns cujas vidas mudam completamente no século I.',
        videoUrl: 'https://www.youtube.com/embed/K1-FoFj8Jbo?autoplay=1'
    }
};

// Lista base de categorias para popular a tabela `categorias` do SQLite
const listaCategoriasBase = [
    { id: 1, nome: 'Filmes', slug: 'filmes' },
    { id: 2, nome: 'Séries', slug: 'series' },
    { id: 3, nome: 'Ação', slug: 'acao' },
    { id: 4, nome: 'Fantasia', slug: 'fantasia' },
    { id: 5, nome: 'Ficção Científica', slug: 'ficcao' },
    { id: 6, nome: 'Aventura', slug: 'aventura' },
    { id: 7, nome: 'Drama', slug: 'drama' },
    { id: 8, nome: 'Mistério & Suspense', slug: 'misterio' },
    { id: 9, nome: 'Animação & Família', slug: 'animacao' },
    { id: 10, nome: 'Épico & Histórico', slug: 'epico' },
    { id: 11, nome: 'Reality', slug: 'reality' }
];

// Estado global da aplicação
let midiaAtualId = 'adao-negro';
let categoriaSelecionadaSlug = 'todas';
let dbSQLite = null; // Instância do banco de dados SQLite em memória (sql.js)

/**
 * ============================================================================
 * INICIALIZAÇÃO DO BANCO DE DADOS SQLITE NO NAVEGADOR (SQL.JS / WEBASSEMBLY)
 * Cria as tabelas `categorias`, `midias` e `midia_categorias` (relação N:N)
 * e insere todos os registros via instruções SQL reais.
 * ============================================================================
 */
async function inicializarBancoSQLite() {
    const badgeEl = document.getElementById('sqlStatusBadge');

    try {
        // Verifica se a biblioteca sql.js foi carregada
        if (typeof initSqlJs === 'undefined') {
            throw new Error('Biblioteca sql.js não disponível.');
        }

        // Inicializa o motor WebAssembly do SQLite apontando para o arquivo .wasm na CDN
        const SQL = await initSqlJs({
            locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}`
        });

        // Cria uma nova instância de banco de dados SQLite
        dbSQLite = new SQL.Database();

        // 1. Executa o DDL (CREATE TABLE) para estruturar o banco relacional
        dbSQLite.run(`
            CREATE TABLE categorias (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL UNIQUE,
                slug TEXT NOT NULL UNIQUE
            );

            CREATE TABLE midias (
                id TEXT PRIMARY KEY,
                titulo TEXT NOT NULL,
                tipo TEXT NOT NULL,
                categoria_exibicao TEXT NOT NULL,
                relevancia TEXT NOT NULL,
                ano TEXT NOT NULL,
                idade TEXT NOT NULL,
                poster TEXT NOT NULL,
                wallpaper TEXT NOT NULL,
                descricao TEXT NOT NULL,
                video_url TEXT NOT NULL
            );

            CREATE TABLE midia_categorias (
                midia_id TEXT NOT NULL,
                categoria_id INTEGER NOT NULL,
                PRIMARY KEY (midia_id, categoria_id),
                FOREIGN KEY (midia_id) REFERENCES midias(id),
                FOREIGN KEY (categoria_id) REFERENCES categorias(id)
            );
        `);

        // 2. Insere todas as categorias usando Prepared Statement (segurança contra SQL Injection)
        const stmtCat = dbSQLite.prepare('INSERT INTO categorias (id, nome, slug) VALUES (?, ?, ?)');
        listaCategoriasBase.forEach(cat => {
            stmtCat.run([cat.id, cat.nome, cat.slug]);
        });
        stmtCat.free();

        // 3. Insere todas as mídias e seus relacionamentos N:N na tabela `midia_categorias`
        const stmtMidia = dbSQLite.prepare(`
            INSERT INTO midias (id, titulo, tipo, categoria_exibicao, relevancia, ano, idade, poster, wallpaper, descricao, video_url)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        const stmtRel = dbSQLite.prepare('INSERT INTO midia_categorias (midia_id, categoria_id) VALUES (?, ?)');

        Object.entries(catalogo).forEach(([id, item]) => {
            stmtMidia.run([
                id,
                item.titulo,
                item.tipo,
                item.categoria,
                item.relevancia,
                item.ano,
                item.idade,
                item.poster,
                item.wallpaper,
                item.descricao,
                item.videoUrl
            ]);

            // Vincula a mídia a cada uma de suas categorias na tabela associativa
            item.categoriasSlug.forEach(slug => {
                const catObj = listaCategoriasBase.find(c => c.slug === slug);
                if (catObj) {
                    stmtRel.run([id, catObj.id]);
                }
            });
        });

        stmtMidia.free();
        stmtRel.free();

        // Atualiza o indicador visual informando que o SQLite está online
        if (badgeEl) {
            badgeEl.innerHTML = '<i class="fa-solid fa-database"></i> SQLite Ativo (3 tabelas | 12 mídias)';
        }

        // Renderiza os botões de categorias e o dropdown consultando direto no SQLite
        renderizarControlesDeCategoria();

    } catch (erro) {
        console.warn('Aviso: Usando busca local em memória como fallback para o SQLite:', erro);
        if (badgeEl) {
            badgeEl.innerHTML = '<i class="fa-solid fa-circle-info"></i> Modo Local Ativo';
        }
        renderizarControlesDeCategoria();
    }
}

/**
 * Consulta no SQLite todas as categorias e a contagem de títulos vinculados a cada uma
 * usando INNER JOIN e GROUP BY, preenchendo a barra de botões e o select do topo.
 */
function renderizarControlesDeCategoria() {
    const pillsContainer = document.getElementById('categoryPills');
    const selectEl = document.getElementById('categorySelect');
    if (!pillsContainer || !selectEl) return;

    let categoriasComContagem = [];

    if (dbSQLite) {
        // Consulta SQL agregada: conta quantas mídias existem em cada categoria
        const resultadoSQL = dbSQLite.exec(`
            SELECT c.nome, c.slug, COUNT(mc.midia_id) AS total
            FROM categorias c
            INNER JOIN midia_categorias mc ON c.id = mc.categoria_id
            GROUP BY c.id, c.nome, c.slug
            ORDER BY c.id ASC;
        `);

        if (resultadoSQL.length > 0) {
            categoriasComContagem = resultadoSQL[0].values.map(row => ({
                nome: row[0],
                slug: row[1],
                total: row[2]
            }));
        }
    } else {
        // Fallback caso o WebAssembly não tenha carregado
        categoriasComContagem = listaCategoriasBase.map(cat => ({
            nome: cat.nome,
            slug: cat.slug,
            total: Object.values(catalogo).filter(m => m.categoriasSlug.includes(cat.slug)).length
        }));
    }

    // Limpa e recria os botões de categoria (Pills) e as opções do Select
    const totalGeral = Object.keys(catalogo).length;
    pillsContainer.innerHTML = `
        <button type="button" class="category-pill active" data-slug="todas" onclick="filtrarPorCategoria('todas')">
            Todas <span class="pill-count">${totalGeral}</span>
        </button>
    `;
    selectEl.innerHTML = `<option value="todas">Todas as Categorias (${totalGeral})</option>`;

    categoriasComContagem.forEach(cat => {
        // Cria o botão (pill) na barra horizontal
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'category-pill';
        btn.setAttribute('data-slug', cat.slug);
        btn.onclick = () => filtrarPorCategoria(cat.slug);
        btn.innerHTML = `${cat.nome} <span class="pill-count">${cat.total}</span>`;
        pillsContainer.appendChild(btn);

        // Cria a opção correspondente no dropdown da barra de navegação
        const opt = document.createElement('option');
        opt.value = cat.slug;
        opt.textContent = `${cat.nome} (${cat.total})`;
        selectEl.appendChild(opt);
    });
}

/**
 * Executa uma consulta SQL parametrizada no banco SQLite combinando filtro de
 * categoria (JOIN com `midia_categorias` e `categorias`) e busca por texto (LIKE).
 * @param {string} termoTexto - Texto digitado pelo usuário na caixa de pesquisa
 * @param {string} slugCategoria - Slug da categoria selecionada (ou 'todas')
 * @returns {{ itens: Array, sqlExibido: string }} Lista de mídias encontradas e string SQL demonstrativa
 */
function consultarMidiasNoSQLite(termoTexto, slugCategoria) {
    const termoLimpo = (termoTexto || '').trim().toLowerCase();
    const usarFiltroCategoria = slugCategoria && slugCategoria !== 'todas';

    // Se o banco SQLite estiver ativo, faz a consulta usando SQL real
    if (dbSQLite) {
        let querySQL = `
            SELECT DISTINCT m.id, m.titulo, m.categoria_exibicao, m.relevancia, m.ano, m.idade, m.poster
            FROM midias m
            INNER JOIN midia_categorias mc ON m.id = mc.midia_id
            INNER JOIN categorias c ON mc.categoria_id = c.id
            WHERE 1=1
        `;
        const parametros = [];

        if (usarFiltroCategoria) {
            querySQL += ` AND c.slug = ?`;
            parametros.push(slugCategoria);
        }

        if (termoLimpo) {
            querySQL += ` AND (LOWER(m.titulo) LIKE ? OR LOWER(m.descricao) LIKE ? OR LOWER(c.nome) LIKE ?)`;
            const likeParam = `%${termoLimpo}%`;
            parametros.push(likeParam, likeParam, likeParam);
        }

        querySQL += ` ORDER BY m.titulo ASC;`;

        // Prepara a consulta e faz o bind dos parâmetros com segurança
        const stmt = dbSQLite.prepare(querySQL);
        stmt.bind(parametros);

        const itensEncontrados = [];
        while (stmt.step()) {
            const row = stmt.getAsObject();
            itensEncontrados.push({
                id: row.id,
                titulo: row.titulo,
                categoria: row.categoria_exibicao,
                relevancia: row.relevancia,
                ano: row.ano,
                idade: row.idade,
                poster: row.poster
            });
        }
        stmt.free();

        // Monta uma string SQL legível de uma linha para exibir na interface
        let sqlDemo = `SELECT DISTINCT m.* FROM midias m JOIN midia_categorias mc ON m.id = mc.midia_id JOIN categorias c ON mc.categoria_id = c.id`;
        const condicoesDemo = [];
        if (usarFiltroCategoria) condicoesDemo.push(`c.slug = '${slugCategoria}'`);
        if (termoLimpo) condicoesDemo.push(`m.titulo LIKE '%${termoLimpo}%'`);
        if (condicoesDemo.length > 0) {
            sqlDemo += ` WHERE ` + condicoesDemo.join(' AND ');
        }
        sqlDemo += `;`;

        return { itens: itensEncontrados, sqlExibido: sqlDemo };
    }

    // Fallback em memória caso o WebAssembly não esteja carregado
    const itensFallback = Object.entries(catalogo)
        .filter(([, item]) => {
            const bateCategoria = !usarFiltroCategoria || item.categoriasSlug.includes(slugCategoria);
            const bateTexto = !termoLimpo ||
                item.titulo.toLowerCase().includes(termoLimpo) ||
                item.categoria.toLowerCase().includes(termoLimpo);
            return bateCategoria && bateTexto;
        })
        .map(([id, item]) => ({ id, ...item }));

    return {
        itens: itensFallback,
        sqlExibido: `SELECT * FROM midias WHERE categoria = '${slugCategoria}'`
    };
}

/**
 * Consulta no SQLite todas as categorias associadas a uma mídia específica
 * para exibir como tags clicáveis dentro do Modal de Informações.
 * @param {string} midiaId - ID da mídia no banco de dados
 * @returns {Array<{nome: string, slug: string}>}
 */
function obterCategoriasDaMidiaSQLite(midiaId) {
    if (dbSQLite) {
        const stmt = dbSQLite.prepare(`
            SELECT c.nome, c.slug
            FROM categorias c
            INNER JOIN midia_categorias mc ON c.id = mc.categoria_id
            WHERE mc.midia_id = ?
            ORDER BY c.id ASC;
        `);
        stmt.bind([midiaId]);
        const lista = [];
        while (stmt.step()) {
            const row = stmt.getAsObject();
            lista.push({ nome: row.nome, slug: row.slug });
        }
        stmt.free();
        return lista;
    }

    // Fallback
    const item = catalogo[midiaId];
    if (!item) return [];
    return item.categoriasSlug.map(slug => {
        const encontrada = listaCategoriasBase.find(c => c.slug === slug);
        return encontrada ? { nome: encontrada.nome, slug: encontrada.slug } : { nome: slug, slug };
    });
}

/**
 * Filtra o catálogo ao clicar em um botão de categoria ou selecionar no dropdown.
 * @param {string} slug - Slug da categoria escolhida (ou 'todas')
 */
function filtrarPorCategoria(slug) {
    categoriaSelecionadaSlug = slug;

    // Sincroniza o estado visual dos botões (pills)
    document.querySelectorAll('.category-pill').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-slug') === slug);
    });

    // Sincroniza o valor do select no cabeçalho
    const selectEl = document.getElementById('categorySelect');
    if (selectEl && selectEl.value !== slug) {
        selectEl.value = slug;
    }

    atualizarExibicaoDeBusca();
}

/**
 * Executa a busca combinada (Categoria + Texto) no SQLite e atualiza a grade na tela.
 */
function atualizarExibicaoDeBusca() {
    const searchInput = document.getElementById('searchInput');
    const searchSection = document.getElementById('searchSection');
    const searchGrid = document.getElementById('searchGrid');
    const searchResultTitle = document.getElementById('searchResultTitle');
    const sqlQueryPreview = document.getElementById('sqlQueryPreview');

    const termo = searchInput ? searchInput.value.trim() : '';

    // Se não há texto digitado e a categoria é "todas", oculta a grade de filtro
    if (!termo && categoriaSelecionadaSlug === 'todas') {
        searchSection.classList.add('d-none');
        searchGrid.innerHTML = '';
        return;
    }

    // Executa a consulta SQLite
    const { itens, sqlExibido } = consultarMidiasNoSQLite(termo, categoriaSelecionadaSlug);

    // Descobre o nome amigável da categoria selecionada
    const catObj = listaCategoriasBase.find(c => c.slug === categoriaSelecionadaSlug);
    const nomeCategoria = catObj ? catObj.nome : 'Todas';

    // Atualiza o título da seção e mostra a query SQL executada
    if (categoriaSelecionadaSlug !== 'todas' && termo) {
        searchResultTitle.textContent = `Categoria "${nomeCategoria}" • Busca por "${termo}" (${itens.length})`;
    } else if (categoriaSelecionadaSlug !== 'todas') {
        searchResultTitle.textContent = `Categoria: ${nomeCategoria} (${itens.length} títulos encontrados)`;
    } else {
        searchResultTitle.textContent = `Resultados para "${termo}" (${itens.length})`;
    }

    if (sqlQueryPreview) {
        sqlQueryPreview.textContent = sqlExibido;
    }

    searchSection.classList.remove('d-none');
    searchGrid.innerHTML = '';

    // Caso nenhum registro seja retornado pelo SELECT
    if (itens.length === 0) {
        searchGrid.innerHTML = '<p class="text-secondary">Nenhum título encontrado no banco de dados SQLite para este filtro.</p>';
        return;
    }

    // Renderiza os cards retornados pelo banco de dados SQLite
    itens.forEach(item => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = () => selecionarMidia(item.id);
        card.innerHTML = `
            <img class="img-filmes" src="${item.poster}" alt="Pôster de ${item.titulo}" loading="lazy">
            <div class="card-overlay" style="opacity: 1;">
                <h4>${item.titulo}</h4>
                <div class="card-meta">
                    <span class="match">${item.relevancia.split(' ')[0]}</span>
                    <span class="age-badge">${item.idade}</span>
                </div>
            </div>
        `;
        searchGrid.appendChild(card);
    });
}

/**
 * ============================================================================
 * INICIALIZAÇÃO DO CARROSSEL (OWL CAROUSEL 2) E DO BANCO SQLITE
 * ============================================================================
 */
$(document).ready(function () {
    // Inicializa os carrosséis responsivos
    $('.owl-carousel').owlCarousel({
        loop: true,      // Permite rolagem infinita dos itens
        margin: 14,      // Espaço em pixels entre cada card
        nav: false,      // Oculta setas padrão para manter o visual limpo
        dots: true,      // Exibe os indicadores de página abaixo do carrossel
        responsive: {
            0: {
                items: 2 // Celulares pequenos: 2 cards por vez
            },
            480: {
                items: 3 // Celulares maiores: 3 cards por vez
            },
            768: {
                items: 4 // Tablets: 4 cards por vez
            },
            1024: {
                items: 6 // Notebooks/Desktops: 6 cards por vez
            },
            1400: {
                items: 7 // Telas grandes / Ultrawide: 7 cards por vez
            }
        }
    });

    // Inicializa o banco de dados SQLite em memória
    inicializarBancoSQLite();
});

/**
 * Seleciona um filme ou série ao clicar no card correspondente.
 * Atualiza os textos e imagem do Banner Principal (Hero) e abre o modal de detalhes.
 * @param {string} id - Chave do título no banco de dados / catálogo
 */
function selecionarMidia(id) {
    const item = catalogo[id];
    if (!item) return;

    midiaAtualId = id;

    // Atualiza os elementos de texto do Banner Principal (Hero)
    document.getElementById('heroTitle').textContent = item.titulo;
    document.getElementById('heroCategory').textContent = item.categoria;
    document.getElementById('heroRelevance').textContent = item.relevancia;
    document.getElementById('heroYear').textContent = item.ano;
    document.getElementById('heroAge').textContent = item.idade;
    document.getElementById('heroDescription').textContent = item.descricao;

    // Atualiza a imagem de fundo do Banner Principal
    const wallpaperEl = document.getElementById('heroWallpaper');
    wallpaperEl.style.backgroundImage = `url('${item.wallpaper}')`;

    // Abre o modal de informações completas da obra selecionada
    abrirInfo();
}

/**
 * Abre o Modal do Player de Vídeo e carrega o trailer da mídia atual no iframe.
 */
function assistir() {
    const item = catalogo[midiaAtualId] || catalogo['adao-negro'];
    const modal = document.getElementById('playerModal');
    const player = document.getElementById('filme');
    const titleEl = document.getElementById('playerModalTitle');

    // Define o título no topo do modal e injeta a URL do vídeo no iframe
    titleEl.textContent = `Reproduzindo: ${item.titulo}`;
    player.src = item.videoUrl;

    // Torna o modal visível e trava a rolagem da página ao fundo
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

/**
 * Fecha o Modal do Player de Vídeo e limpa o src do iframe para parar o áudio/vídeo.
 */
function fecharPlayer() {
    const modal = document.getElementById('playerModal');
    const player = document.getElementById('filme');

    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    player.src = ''; // Interrompe imediatamente a reprodução do vídeo
    document.body.style.overflow = ''; // Restaura a rolagem da página
}

/**
 * Preenche e abre o Modal de Mais Informações com todos os dados da mídia atual,
 * incluindo as tags de categorias consultadas via JOIN no SQLite.
 */
function abrirInfo() {
    const item = catalogo[midiaAtualId] || catalogo['adao-negro'];
    const modal = document.getElementById('infoModal');

    // Preenche o pôster e os textos informativos dentro do modal
    document.getElementById('infoPoster').src = item.poster;
    document.getElementById('infoPoster').alt = `Pôster de ${item.titulo}`;
    document.getElementById('infoCategory').textContent = item.categoria;
    document.getElementById('infoTitle').textContent = item.titulo;
    document.getElementById('infoRelevance').textContent = item.relevancia;
    document.getElementById('infoYear').textContent = item.ano;
    document.getElementById('infoAge').textContent = item.idade;
    document.getElementById('infoDescription').textContent = item.descricao;

    // Consulta no SQLite as categorias vinculadas a este título e cria badges clicáveis
    const badgesContainer = document.getElementById('infoCategoryBadges');
    if (badgesContainer) {
        const categoriasDaMidia = obterCategoriasDaMidiaSQLite(midiaAtualId);
        badgesContainer.innerHTML = '';
        categoriasDaMidia.forEach(cat => {
            const span = document.createElement('span');
            span.className = 'info-cat-badge';
            span.title = `Filtrar pela categoria ${cat.nome}`;
            span.textContent = cat.nome;
            span.onclick = () => {
                fecharInfo();
                filtrarPorCategoria(cat.slug);
                document.getElementById('searchSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
            };
            badgesContainer.appendChild(span);
        });
    }

    // Exibe o modal na tela
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

/**
 * Fecha o Modal de Mais Informações e restaura a rolagem da página.
 */
function fecharInfo() {
    const modal = document.getElementById('infoModal');
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

/**
 * Limpa o campo de pesquisa, reseta a categoria para "todas" e oculta a seção de busca.
 */
function limparBusca() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    filtrarPorCategoria('todas');
}

/**
 * ============================================================================
 * EVENTOS DE BUSCA, DROPDOWN DE CATEGORIA, NAVEGAÇÃO E TECLADO
 * ============================================================================
 */
const searchInputEl = document.getElementById('searchInput');
if (searchInputEl) {
    searchInputEl.addEventListener('input', function () {
        atualizarExibicaoDeBusca();
    });
}

const categorySelectEl = document.getElementById('categorySelect');
if (categorySelectEl) {
    categorySelectEl.addEventListener('change', function (e) {
        filtrarPorCategoria(e.target.value);
    });
}

// Adiciona fundo escuro com efeito blur na Navbar quando a página é rolada para baixo
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Abre e fecha o menu de navegação em telas móveis (botão hambúrguer)
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navOptions = document.getElementById('navOptions');

if (mobileMenuBtn && navOptions) {
    mobileMenuBtn.addEventListener('click', function () {
        navOptions.classList.toggle('show');
    });
}

// Permite fechar qualquer modal aberto pressionando a tecla ESC do teclado
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        fecharPlayer();
        fecharInfo();
    }
});
