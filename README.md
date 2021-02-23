![PomoadoroBannerWhite](https://user-images.githubusercontent.com/5461553/108886595-e84a2300-75e7-11eb-814d-e1f3eb085587.png)

## Sobre
Projeto realizado durante a NL#04. Pode ser visto em produção neste [link.](https://pomoadoro.vercel.app/)

## O que foi utilizado?
- create-next-app
- typescript
- tailwind
  - Curated colors
- google fonts
  - Inter Normal-400
  - Rajdhani Semi-bold 600

## Pontos para melhorar
- [ ] Melhorar a responsividade
- [ ] De complexidade para componente
  - [ ] Classes Tailwind duplicadas devem virar componentes

## Cores do projeto convertidas para Tailwind colors
- background:       gray-100
- gray-line:        gray-200
- text:             warmGray-500
- text-highlight:   indigo-300
- title:            blueGray-700
- red:              rose-500
- green:            lime-500
- blue:             indigo-500
- blue-dark:        indigo-700
- blue-twitter:     lightBlue-500

## Ajuda extra
- Foi necessário ativar as variantes ```first:``` e ```last:``` para as bordas. Isto deve ser feito no arquivo ***tailwind.config.js***.
  ```javascript
    variants: {
    extend: {
      borderColor: ['first', 'last'],
      borderWidth: ['first', 'last'],
    },
  ```

## Fontes externas de ajuda
- Traduzir uma cor em hexadecimal para um valor aproximado na paleta de cores do Tailwind: [link](https://find-nearest-tailwind-colour.netlify.app/)
- Adicionar cores extras da curadoria de cores do Tailwind: [link](https://tailwindcss.com/docs/customizing-colors)
- Adicionar fontes do google ao Tailwind: [link](https://dev.to/thomasledoux1/the-best-way-to-use-google-fonts-in-next-js-tailwind-43a2)