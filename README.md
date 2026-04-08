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

Para testar as rotas serverless da Vercel localmente, incluindo o novo e-mail customizado de redefinição de senha:

```bash
npm run dev:vercel
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

## Redefinição de Senha Customizada

O projeto agora suporta e-mail customizado de redefinição de senha com:

- remetente com nome do ministério
- HTML próprio com a logo do Vocal
- geração do link de reset usando Firebase Admin
- envio via SMTP para melhorar branding e entregabilidade

### Variáveis de ambiente

Use [.env.example](.env.example) como referência e configure essas variáveis na Vercel:

- `VITE_GOOGLE_DRIVE_API_KEY`
- `VITE_GOOGLE_DRIVE_CLIENT_ID`
- `VITE_GOOGLE_DRIVE_APP_ID`
- `APP_BASE_URL` (opcional)
- `FIREBASE_ADMIN_PROJECT_ID`
- `FIREBASE_ADMIN_CLIENT_EMAIL`
- `FIREBASE_ADMIN_PRIVATE_KEY`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM_NAME`
- `SMTP_FROM_EMAIL`
- `SMTP_REPLY_TO`

### Observações importantes para o reset no deploy

- O erro de `google-analytics.com` bloqueado por `ERR_BLOCKED_BY_CLIENT` ou Tracking Prevention não é a causa do reset falhar. Isso é apenas bloqueio de Analytics por navegador/extensão.
- O erro real é a resposta `500` da rota `/api/auth/password-reset`.
- `APP_BASE_URL` é opcional. Se você usar essa variável, o domínio configurado precisa estar autorizado em Firebase Authentication.
- Se `APP_BASE_URL` estiver ausente, inválido ou não autorizado, a API agora volta para o link padrão do Firebase automaticamente.
- Se o envio customizado por SMTP falhar, o front-end agora tenta enviar o e-mail padrão do Firebase como fallback para não travar a recuperação de senha.

### Google Drive Picker

O upload de músicas, letras e partituras agora pode usar um Google Drive Picker real, além do seletor nativo do aparelho.

Para funcionar, configure no Google Cloud:

- uma API key para o Picker/Drive API
- um OAuth Client ID Web autorizado para o domínio local e produção
- o Project Number como `VITE_GOOGLE_DRIVE_APP_ID`

Origens JavaScript autorizadas do OAuth:

- inclua `http://localhost:5173` para desktop local
- inclua também a URL da sua rede local usada no celular, por exemplo `http://192.168.1.15:5173`
- inclua o domínio final de produção

Escopo usado no front-end:

- `https://www.googleapis.com/auth/drive.readonly`

Observação:

- o Picker aceita arquivos reais do Drive; documentos nativos do Google Docs/Sheets precisam ser exportados antes para PDF, imagem ou áudio compatível.

### Observações de entregabilidade

Para reduzir a chance de spam, o ideal é usar um domínio próprio no remetente e configurar SPF, DKIM e DMARC no seu provedor de e-mail transacional.
