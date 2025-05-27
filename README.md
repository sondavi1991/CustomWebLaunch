# Site sob Medida - Landing Page

Uma landing page moderna e atraente para "Site sob Medida" com formulário integrado ao WhatsApp.

## 🚀 Funcionalidades

- **Design Moderno**: Interface atraente com tema escuro/claro
- **Formulário Inteligente**: Coleta dados e redireciona para WhatsApp
- **Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Animações Suaves**: Elementos flutuantes e transições elegantes
- **SEO Otimizado**: Meta tags e estrutura otimizada para mecanismos de busca

## 📋 Tecnologias Utilizadas

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Animações**: Framer Motion
- **Formulários**: React Hook Form + Zod
- **Componentes**: Radix UI + shadcn/ui
- **Build**: Vite

## 🛠️ Instalação e Uso

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev
```

### Build para Produção

```bash
# Fazer build da aplicação
npm run build

# Executar versão de produção
npm start
```

## 🐳 Deploy com Docker

### Usando Docker

```bash
# Fazer build da imagem
docker build -t site-sob-medida .

# Executar container
docker run -p 5000:5000 site-sob-medida
```

### Usando Docker Compose

```bash
# Executar com docker-compose
docker-compose up -d
```

## 🌐 Deploy no Coolify com Nixpacks

1. **Crie um novo projeto no Coolify**
2. **Configure o repositório Git** com seus arquivos
3. **Selecione Nixpacks** como build pack
4. **Configure as variáveis de ambiente**:
   - `NODE_ENV=production`
   - `PORT=5000`
5. **Deploy**: Coolify usará automaticamente o `nixpacks.toml`

### Configurações do Nixpacks:

O arquivo `nixpacks.toml` já está configurado com:
- **Node.js 20**: Versão LTS mais recente
- **Build automático**: `npm run build`
- **Start automático**: `npm start`
- **Port**: 5000 (configurável via ambiente)

## 📱 Funcionalidades do Formulário

O formulário coleta as seguintes informações:
- **Nome Completo**: Validação de caracteres e tamanho
- **E-mail**: Validação de formato
- **Nicho Desejado**: Campo livre para especificar o nicho
- **Comentário**: Campo opcional para detalhes adicionais

### Integração WhatsApp

Após o envio, o usuário é redirecionado para o WhatsApp com uma mensagem formatada contendo:
- Dados pessoais
- Nicho de interesse
- Comentários adicionais
- Origem do lead (Site sob Medida)

**Número do WhatsApp**: +55 16 99711-2388

## 🎨 Temas

A aplicação suporta modo claro e escuro:
- **Alternância automática**: Botão no cabeçalho
- **Persistência**: Preferência salva no localStorage
- **Responsivo**: Ambos os temas funcionam em todos os dispositivos

## 📁 Estrutura do Projeto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── hooks/         # Hooks customizados
│   │   ├── lib/           # Utilitários e configurações
│   │   └── pages/         # Páginas da aplicação
├── server/                # Backend Express
├── shared/                # Tipos e schemas compartilhados
├── Dockerfile            # Configuração Docker
├── docker-compose.yml    # Orquestração Docker
└── package.json          # Dependências e scripts
```

## 🚀 Performance

- **Bundle otimizado**: Build com Vite
- **Lazy loading**: Componentes carregados sob demanda
- **Otimização de imagens**: SVGs e otimização automática
- **Cache eficiente**: Headers de cache configurados

## 📞 Contato

Para dúvidas sobre o projeto, entre em contato via WhatsApp: +55 16 99711-2388

---

**Desenvolvido com ❤️ para Site sob Medida**