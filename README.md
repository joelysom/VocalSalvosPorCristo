# Vocal SPC

Projeto recriado em `React + Vite + Tailwind CSS`, com foco em uma apresentação mais profissional para o ministério vocal `Salvos por Cristo`.

## Stack

- React
- Vite
- Tailwind CSS via `@tailwindcss/vite`
- ESLint
- Vercel pronto para deploy

## Como rodar

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy na Vercel

O projeto já inclui `vercel.json` com:

- detecção explícita de projeto `vite`
- pasta de saída `dist`
- rewrite SPA para deep links

Com a CLI instalada:

```bash
npm run vercel:preview
npm run deploy:vercel
```
