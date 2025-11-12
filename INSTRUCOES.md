# Landing Page - Comunidade Homens Fortes

## 📋 Visão Geral

Esta é uma landing page moderna e responsiva para a **Comunidade Homens Fortes**, desenvolvida com React, Tailwind CSS e TypeScript. A página foi projetada para atrair e converter homens cristãos interessados em desenvolvimento pessoal baseado em princípios bíblicos.

---

## 🎨 Identidade Visual

### Cores Principais
- **Vermelho Vibrante** (`#E63946`): Cor primária, usada em CTAs e destaques
- **Preto/Cinza Escuro** (`#1a1a1a`): Cor de texto e fundo escuro
- **Branco** (`#FFFFFF`): Fundo principal e texto em áreas vermelhas

### Logo
O logo da Comunidade Homens Fortes está localizado em `/client/public/logo.svg` e é exibido no header da página.

---

## 📱 Seções da Landing Page

### 1. **Header (Cabeçalho)**
- Logo da marca no topo esquerdo
- Botão "ENTRAR" em vermelho no topo direito
- Fixo no topo da página para fácil acesso

### 2. **Hero Section (Seção Principal)**
- Headline: "QUEM É O HOMEM DE VERDADE?"
- Subheadline explicando o conceito
- Dois botões de CTA:
  - "ENTRAR NO GRUPO WHATSAPP"
  - "COMEÇAR AGORA" (leva ao formulário)
- Frase de reforço: "2026 COMEÇA HOJE"

### 3. **Positioning Section**
- Explica o conceito de 2026 como o início de uma transformação
- Posiciona a comunidade como um movimento de mudança

### 4. **Os 5 Pilares da Transformação**
Apresenta os cinco pilares fundamentais:
1. **Vida com Deus** - Disciplina e Constância
2. **Casamento** - Sendo um Marido Melhor
3. **Paternidade** - Sendo um Pai Melhor
4. **Vencendo Vícios** - Liberdade da Pornografia
5. **Enfrentando Dificuldades** - Força na Adversidade

Cada pilar possui um ícone, título, subtítulo e descrição.

### 5. **Benefits Section**
- Explica os benefícios de se juntar à comunidade
- Reforça o conceito de transformação real

### 6. **Urgency Section**
- Seção em vermelho com mensagem de urgência
- Incentiva ação imediata
- Botões de CTA secundários

### 7. **Reinforcement Section**
- Citações inspiradoras em cards
- Reforça os valores da comunidade

### 8. **Final CTA Section**
- Última oportunidade de conversão
- Botões de CTA em destaque

### 9. **Formulário de Inscrição**
- Campo para nome completo
- Campo para email
- Campo para telefone (WhatsApp)
- Campo para mensagem pessoal
- Validação básica de formulário
- Mensagem de sucesso após envio

### 10. **Footer (Rodapé)**
- Copyright e direitos reservados
- Mensagem de marca

### 11. **Botão Flutuante de Voltar ao Topo**
- Aparece após rolar 300px para baixo
- Permite voltar ao topo da página com scroll suave

---

## 🔧 Customização

### Alterar Link do WhatsApp
Abra o arquivo `/client/src/pages/Home.tsx` e procure por:
```typescript
const whatsappLink = "https://chat.whatsapp.com/YOUR_GROUP_LINK";
```

Substitua `YOUR_GROUP_LINK` pelo link real do seu grupo de WhatsApp.

### Alterar Logo
1. Substitua o arquivo `/client/public/logo.svg` por seu próprio logo
2. O logo será automaticamente exibido no header

### Alterar Cores
As cores estão definidas em `/client/src/index.css` usando variáveis CSS:
- `--primary`: Vermelho vibrante
- `--foreground`: Texto escuro
- `--background`: Fundo claro

Para alterar as cores, edite os valores OKLCH neste arquivo.

### Alterar Textos
Todos os textos estão no arquivo `/client/src/pages/Home.tsx`. Você pode editá-los diretamente.

---

## 📧 Integração do Formulário

O formulário está em `/client/src/components/FormularioInscricao.tsx`. Atualmente, ele apenas exibe uma mensagem de sucesso. Para integrar com um backend real:

1. Modifique a função `handleSubmit` para enviar dados para seu servidor
2. Exemplo com fetch:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setCarregando(true);

  try {
    const response = await fetch("https://seu-servidor.com/api/inscricao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setEnviado(true);
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    }
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
  } finally {
    setCarregando(false);
  }
};
```

---

## 📱 Responsividade

A landing page é totalmente responsiva e foi testada em:
- **Mobile** (320px - 768px)
- **Tablet** (768px - 1024px)
- **Desktop** (1024px+)

Todos os componentes se adaptam automaticamente ao tamanho da tela.

---

## 🚀 Deployment

Para fazer deploy da landing page:

1. **Build do projeto:**
   ```bash
   pnpm build
   ```

2. **Arquivos gerados em:** `/dist`

3. **Fazer upload para seu servidor ou plataforma de hosting**

---

## 📊 Analytics (Opcional)

A landing page está configurada para suportar analytics. Se você quiser rastrear conversões:

1. Adicione um script de analytics (Google Analytics, Hotjar, etc.)
2. Rastreie eventos de clique nos botões de CTA
3. Rastreie submissões de formulário

---

## 🔐 Segurança

- Validação básica de formulário implementada
- Campos obrigatórios marcados com asterisco (*)
- Mensagem de confidencialidade no formulário

Para produção, considere:
- Adicionar CAPTCHA ao formulário
- Implementar rate limiting
- Validar dados no backend
- Usar HTTPS

---

## 📞 Suporte

Se você precisar fazer ajustes ou melhorias na landing page, os arquivos principais são:

- `/client/src/pages/Home.tsx` - Página principal
- `/client/src/components/FormularioInscricao.tsx` - Componente do formulário
- `/client/src/index.css` - Estilos globais e cores
- `/client/public/logo.svg` - Logo da marca

---

## ✅ Checklist de Customização

Antes de publicar, verifique:

- [ ] Link do WhatsApp atualizado
- [ ] Logo customizado
- [ ] Cores da marca aplicadas
- [ ] Textos revisados e corrigidos
- [ ] Formulário integrado com seu backend
- [ ] Links de redes sociais adicionados (se desejado)
- [ ] Favicon atualizado (via Management Dashboard)
- [ ] Testado em mobile, tablet e desktop
- [ ] Analytics implementado
- [ ] Domínio customizado configurado

---

## 📝 Notas Importantes

1. **Link do WhatsApp**: Certifique-se de que o link está correto e público
2. **Formulário**: Teste o formulário antes de publicar
3. **Responsividade**: Sempre teste em diferentes dispositivos
4. **Cores**: As cores foram escolhidas para máximo contraste e legibilidade
5. **Copy**: A copy foi desenvolvida para ser persuasiva e inspiradora

---

## 🎯 Próximos Passos

1. Atualize o link do WhatsApp
2. Customize o logo
3. Integre o formulário com seu backend
4. Teste tudo em diferentes dispositivos
5. Publique a landing page

Boa sorte com a Comunidade Homens Fortes! 💪
