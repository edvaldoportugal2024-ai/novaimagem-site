# NovaImagem.pt — pacote para GitHub Pages

Este pacote é um site estático, sem processo de build, dependências, fontes externas ou serviços pagos obrigatórios. O `index.html` está na raiz do pacote e os recursos usam caminhos relativos, incluindo as imagens em `assets/`.

## Conteúdo

- `index.html` — conteúdo, navegação, metadados e ligações de contacto.
- `styles.css` — apresentação responsiva.
- `script.js` — menu móvel e atualização do ano.
- `favicon.svg` — ícone do site.
- `assets/hero-digital-studio.webp` — imagem conceptual do cabeçalho.
- `assets/product-stilllife.webp` — imagem conceptual de produto.
- `.nojekyll` — indica que não é necessário processar o site com Jekyll.

As imagens são conceptuais e não representam clientes ou projetos concluídos da NovaImagem.pt. Os elementos de sites, aplicações e antes/depois que não têm materiais reais são ilustrações ou espaços reservados.

## Carregar para o repositório `novaimagem-site`

Extraia o ZIP e carregue o conteúdo extraído para a raiz do repositório, mantendo a pasta `assets/`. Não carregue o ZIP como uma subpasta do site: o `index.html` deve ficar diretamente na raiz publicada. Depois, nas definições do GitHub, escolha Pages e publique a partir do branch principal e da pasta raiz. A publicação não foi efetuada neste pacote.
