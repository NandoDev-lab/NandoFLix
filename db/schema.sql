-- ============================================================================
-- BANCO DE DADOS RELACIONAL SQLITE - NANDOFLIX
-- Estrutura de tabelas (DDL) e carga inicial de dados (DML) para o catálogo
-- de filmes, séries e relacionamento N:N (muitos-para-muitos) com categorias.
-- ============================================================================

-- 1. Tabela de Categorias (Gêneros e Tipos de Mídia)
CREATE TABLE IF NOT EXISTS categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE
);

-- 2. Tabela Principal de Mídias (Filmes e Séries)
CREATE TABLE IF NOT EXISTS midias (
    id TEXT PRIMARY KEY,
    titulo TEXT NOT NULL,
    tipo TEXT NOT NULL,            -- 'Filme' ou 'Série'
    categoria_exibicao TEXT NOT NULL,
    relevancia TEXT NOT NULL,
    ano TEXT NOT NULL,
    idade TEXT NOT NULL,
    poster TEXT NOT NULL,
    wallpaper TEXT NOT NULL,
    descricao TEXT NOT NULL,
    video_url TEXT NOT NULL
);

-- 3. Tabela Associativa N:N entre Mídias e Categorias
CREATE TABLE IF NOT EXISTS midia_categorias (
    midia_id TEXT NOT NULL,
    categoria_id INTEGER NOT NULL,
    PRIMARY KEY (midia_id, categoria_id),
    FOREIGN KEY (midia_id) REFERENCES midias(id) ON DELETE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE CASCADE
);

-- ============================================================================
-- INSERÇÃO DAS CATEGORIAS DISPONÍVEIS
-- ============================================================================
INSERT INTO categorias (id, nome, slug) VALUES
    (1, 'Filmes', 'filmes'),
    (2, 'Séries', 'series'),
    (3, 'Ação', 'acao'),
    (4, 'Fantasia', 'fantasia'),
    (5, 'Ficção Científica', 'ficcao'),
    (6, 'Aventura', 'aventura'),
    (7, 'Drama', 'drama'),
    (8, 'Mistério & Suspense', 'misterio'),
    (9, 'Animação & Família', 'animacao'),
    (10, 'Épico & Histórico', 'epico'),
    (11, 'Reality', 'reality');

-- ============================================================================
-- INSERÇÃO DOS FILMES E SÉRIES NO CATÁLOGO
-- ============================================================================
INSERT INTO midias (id, titulo, tipo, categoria_exibicao, relevancia, ano, idade, poster, wallpaper, descricao, video_url) VALUES
    ('adao-negro', 'Adão Negro', 'Filme', 'Filme • Ação e Fantasia', '96% relevante', '2022', '+16', './img/Adão Negro.jpg', './img/bkgAdãoNegro.jpg', 'Após ser aprisionado por quase 5.000 anos, Teth-Adam é libertado de sua tumba terrena, pronto para descarregar sua forma única e implacável de justiça no mundo moderno. O que foi libertado: um herói ou um vilão?', 'https://www.youtube.com/embed/X0tOpBuYasI?autoplay=1'),
    ('mulher-rei', 'A Mulher Rei', 'Filme', 'Filme • Épico e Ação', '98% relevante', '2022', '+16', './img/A Mulher Rei.jpg', './img/A Mulher Rei.jpg', 'A extraordinária história das Agojie, uma unidade de guerreiras composta apenas por mulheres que protegiam o reino africano de Daomé nos anos 1800 com habilidades e uma fúria jamais vistas pelo mundo.', 'https://www.youtube.com/embed/3RDaPV_rJ1Y?autoplay=1'),
    ('wakanda', 'Wakanda Para Sempre', 'Filme', 'Filme • Ação e Ficção Científica', '95% relevante', '2022', '+14', './img/Wakanda Para Sempre.jpg', './img/Wakanda Para Sempre.jpg', 'A Rainha Ramonda, Shuri, M’Baku, Okoye e as Dora Milaje lutam para proteger sua nação contra potências mundiais intervenientes logo após a morte do Rei T’Challa.', 'https://www.youtube.com/embed/_Z3QKkl1WyM?autoplay=1'),
    ('avatar', 'Avatar: O Caminho da Água', 'Filme', 'Filme • Ficção Científica e Aventura', '97% relevante', '2022', '+14', './img/Avatar.jpg', './img/Avatar.jpg', 'Mais de uma década após os eventos do primeiro filme, Jake Sully e Ney''tiri formaram uma família em Pandora e fazem de tudo para ficarem juntos diante de uma antiga ameaça que retorna.', 'https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1'),
    ('pinoquio', 'Pinóquio por Guillermo del Toro', 'Filme', 'Filme • Animação e Fantasia', '94% relevante', '2022', '+10', './img/Pinóquio.jpg', './img/Pinóquio.jpg', 'O cineasta vencedor do Oscar Guillermo del Toro reinventa o clássico conto de Carlo Collodi sobre a marionete de madeira que ganha vida de forma mágica para confortar o coração de um entalhador em luto.', 'https://www.youtube.com/embed/Od2NW1sfRdA?autoplay=1'),
    ('troll', 'O Troll da Montanha', 'Filme', 'Filme • Aventura e Fantasia', '89% relevante', '2022', '+12', './img/O Troll da Montanha.jpg', './img/O Troll da Montanha.jpg', 'Nas profundezas da montanha de Dovre, algo gigantesco desperta após ficar preso por mil anos. Destruindo tudo em seu caminho, a criatura se aproxima rapidamente da capital da Noruega.', 'https://www.youtube.com/embed/AiohkY_XQYQ?autoplay=1'),
    ('hex', 'Hex: Paraquedistas Amaldiçoados', 'Filme', 'Filme • Suspense e Ação', '84% relevante', '2022', '+16', './img/Hex.jpg', './img/Hex.jpg', 'Um grupo de paraquedistas de elite realiza um salto radical que desencadeia forças ocultas no ar, transformando a descida em uma luta desesperada pela sobrevivência.', 'https://www.youtube.com/embed/X0tOpBuYasI?autoplay=1'),
    ('wandinha', 'Wandinha', 'Série', 'Série • Mistério e Fantasia', '99% relevante', '2022', '+14', './img/serie- Wandinha.jpg', './img/serie- Wandinha.jpg', 'Inteligente, sarcástica e um pouco morta por dentro, Wandinha Addams investiga uma onda de assassinatos enquanto faz novos amigos — e inimigos — na Escola Nunca Mais.', 'https://www.youtube.com/embed/Di310WS8zLk?autoplay=1'),
    ('willow', 'Willow', 'Série', 'Série • Fantasia e Aventura', '90% relevante', '2022', '+12', './img/serie- Willow.jpg', './img/serie- Willow.jpg', 'Um grupo improvável de seis heróis parte em uma perigosa missão por lugares muito além de seu lar, enfrentando demônios interiores e unindo forças para salvar seu mundo.', 'https://www.youtube.com/embed/tbbveDpUZv4?autoplay=1'),
    ('yellowstone', 'Yellowstone', 'Série', 'Série • Drama e Faroeste Moderno', '96% relevante', '2022', '+16', './img/serie- Yelowstone.jpg', './img/serie- Yelowstone.jpg', 'A família Dutton controla o maior rancho contíguo dos Estados Unidos. Em meio a alianças instáveis, assassinatos não resolvidos e feridas abertas, eles defendem sua terra a qualquer custo.', 'https://www.youtube.com/embed/suobrMPBLlo?autoplay=1'),
    ('challenge', 'The Challenge', 'Série', 'Série • Reality de Competição', '88% relevante', '2022', '+14', './img/serie- Challenge.jpg', './img/serie- Challenge.jpg', 'Competidores enfrentam provas extremas de resistência física, estratégia mental e alianças políticas em busca de um prêmio milionário.', 'https://www.youtube.com/embed/X0tOpBuYasI?autoplay=1'),
    ('escolhidos', 'Os Escolhidos (The Chosen)', 'Série', 'Série • Drama Histórico', '98% relevante', '2022', '+12', './img/serie- Os Escolhidos.jpg', './img/serie- Os Escolhidos.jpg', 'Um olhar carismático e profundo sobre a jornada de pescadores, cobradores de impostos e pessoas comuns cujas vidas mudam completamente no século I.', 'https://www.youtube.com/embed/K1-FoFj8Jbo?autoplay=1');

-- ============================================================================
-- RELACIONAMENTO ENTRE MÍDIAS E CATEGORIAS (N:N)
-- ============================================================================
INSERT INTO midia_categorias (midia_id, categoria_id) VALUES
    -- Adão Negro: Filmes, Ação, Fantasia, Aventura
    ('adao-negro', 1), ('adao-negro', 3), ('adao-negro', 4), ('adao-negro', 6),
    -- A Mulher Rei: Filmes, Ação, Drama, Épico & Histórico
    ('mulher-rei', 1), ('mulher-rei', 3), ('mulher-rei', 7), ('mulher-rei', 10),
    -- Wakanda Para Sempre: Filmes, Ação, Ficção Científica, Aventura, Drama
    ('wakanda', 1), ('wakanda', 3), ('wakanda', 5), ('wakanda', 6), ('wakanda', 7),
    -- Avatar: Filmes, Ficção Científica, Aventura, Ação, Fantasia
    ('avatar', 1), ('avatar', 5), ('avatar', 6), ('avatar', 3), ('avatar', 4),
    -- Pinóquio: Filmes, Animação & Família, Fantasia, Drama
    ('pinoquio', 1), ('pinoquio', 9), ('pinoquio', 4), ('pinoquio', 7),
    -- O Troll da Montanha: Filmes, Aventura, Fantasia, Ação
    ('troll', 1), ('troll', 6), ('troll', 4), ('troll', 3),
    -- Hex: Filmes, Mistério & Suspense, Ação
    ('hex', 1), ('hex', 8), ('hex', 3),
    -- Wandinha: Séries, Mistério & Suspense, Fantasia
    ('wandinha', 2), ('wandinha', 8), ('wandinha', 4),
    -- Willow: Séries, Fantasia, Aventura
    ('willow', 2), ('willow', 4), ('willow', 6),
    -- Yellowstone: Séries, Drama
    ('yellowstone', 2), ('yellowstone', 7),
    -- The Challenge: Séries, Reality, Ação
    ('challenge', 2), ('challenge', 11), ('challenge', 3),
    -- Os Escolhidos: Séries, Drama, Épico & Histórico
    ('escolhidos', 2), ('escolhidos', 7), ('escolhidos', 10);
