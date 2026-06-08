# 🎨 Design System - Agro Forte

## 📋 Visão Geral

Design System criado para manter consistência visual e profissionalismo no projeto **Agro Forte**. Segue as tendências de design moderno 2024-2026.

---

## 1️⃣ PALETA DE CORES

### Cores Primárias

| Nome | Hex | RGB | Uso Principal | Exemplo |
|------|-----|-----|---------------|---------| 
| **Verde Primário** | `#2D7A3E` | rgb(45, 122, 62) | Headers, Títulos, Footer | 🎯 Identidade marca |
| **Verde Secundário** | `#52B788` | rgb(82, 183, 136) | Hovers, Cards, Acentos | ✨ Elementos interativos |
| **Laranja Quente** | `#E67E22` | rgb(230, 126, 34) | Botões CTA, Links ativos | 🚀 Call-to-Action |
| **Fundo Neutro** | `#F5F7F0` | rgb(245, 247, 240) | Backgrounds, Seções alt. | 📄 Fundos seções |

### Cores de Texto

| Nome | Hex | Uso |
|------|-----|-----|
| **Texto Escuro** | `#1A2C2A` | Títulos, corpo principal |
| **Texto Médio** | `#6B7280` | Parágrafos, descrições |
| **Texto Leve** | `#9CA3AF` | Placeholders, desabilitado |

### Paleta em Gradiente (Signature)
```
linear-gradient(135deg, #2D7A3E 0%, #52B788 100%)
```
✅ Usado em: Header, Hero, CTA, Footer

---

## 2️⃣ TIPOGRAFIA - GOOGLE FONTS

### Fonte para Títulos: Plus Jakarta Sans
- **Peso**: Bold (700), ExtraBold (800)
- **Uso**: H1, H2, H3, títulos de seções
- **Características**: Moderna, exuberante, alta legibilidade
- **Link**: `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800`

**Exemplo visualmente:**
```
Equilíbrio entre Produção e Consumo
(Plus Jakarta Sans - Bold - Grande destaque)
```

### Fonte para Corpo: Poppins
- **Peso**: Regular (400), Medium (500), SemiBold (600)
- **Uso**: Parágrafos, descrições, texto corpo
- **Características**: Clara, moderna, ótima legibilidade em telas
- **Link**: `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700`

**Exemplo visualmente:**
```
Construindo um futuro agrícola resiliente diante das mudanças climáticas
(Poppins - Regular - Suave e profissional)
```

---

## 3️⃣ VARIÁVEIS CSS (:root)

Seu arquivo `style.css` foi atualizado com variáveis organizadas:

```css
:root {
    /* CORES */
    --color-primary: #2D7A3E;      /* Verde escuro */
    --color-secondary: #52B788;    /* Verde claro */
    --color-accent: #E67E22;       /* Laranja */
    --color-bg-light: #F5F7F0;     /* Fundo neutro */
    --color-text-dark: #1A2C2A;    /* Texto escuro */
    --color-text-light: #6B7280;   /* Texto claro */
    
    /* TIPOGRAFIA */
    --font-heading: 'Plus Jakarta Sans', sans-serif;
    --font-body: 'Poppins', sans-serif;
    
    /* ESPAÇAMENTO */
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    
    /* OUTROS */
    --border-radius: 8px;
    --transition: all 0.3s ease;
}
```

### Como Usar as Variáveis

```css
/* Exemplo 1: Botão */
.btn-primary {
    background-color: var(--color-accent);
    color: var(--color-text-dark);
    padding: var(--spacing-md) var(--spacing-lg);
}

/* Exemplo 2: Card */
.card {
    background: var(--color-bg-white);
    border-left: 4px solid var(--color-primary);
    padding: var(--spacing-xl);
    border-radius: var(--border-radius);
}

/* Exemplo 3: Seção alternada */
.section-alt {
    background-color: var(--color-bg-light);
    padding: var(--spacing-2xl) var(--spacing-lg);
}
```

---

## 4️⃣ RECOMENDAÇÕES DE APLICAÇÃO

### Header
- **Background**: Gradiente com verde primário e secundário
- **Texto**: Branco
- **Links hover**: Laranja com transição suave

### Hero Section
- **Background**: Gradiente verde + overlay
- **Título (H2)**: Plus Jakarta Sans Bold, branco, grande
- **Descrição**: Poppins Regular, branco com opacidade
- **Botão CTA**: Laranja com hover mais intenso

### Cards e Elementos
- **Borda superior**: Verde primário (4px)
- **Hover**: Sombra mais pronunciada + translation para cima
- **Ícones**: Verde secundário

### Buttons
- **Primary**: Laranja com hover #d86c1a
- **Secondary**: Transparente com borda branca
- **Transition**: 0.3s ease com transform Y

### Footer
- **Background**: Texto escuro (#1A2C2A)
- **Títulos**: Laranja
- **Links hover**: Laranja com transição

---

## 5️⃣ TOKENS DE ESPAÇAMENTO

Use a escala para manter consistência:

| Variable | Valor | Uso |
|----------|-------|-----|
| `--spacing-xs` | 0.25rem | Gaps pequenos entre elementos |
| `--spacing-sm` | 0.5rem | Gaps entre componentes |
| `--spacing-md` | 1rem | Padding padrão |
| `--spacing-lg` | 1.5rem | Padding Cards |
| `--spacing-xl` | 2rem | Padding Seções |
| `--spacing-2xl` | 3rem | Padding Hero, CTA |

---

## 6️⃣ CHECKLIST DE APLICAÇÃO

- ✅ Fontes importadas do Google Fonts
- ✅ Variáveis :root estruturadas
- ✅ H1-H6 usando Plus Jakarta Sans
- ✅ Body usando Poppins
- ✅ Cores atualizadas conforme paleta
- ✅ Gradientes usando primário + secundário
- ✅ Botões com laranja quente
- ✅ Espaçamento consistente
- ✅ Transições suaves (0.3s)

---

## 📱 Responsividade

Mantém a paleta consistente em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

---

## 🎯 Próximas Etapas (Opcional)

1. Adicionar modo dark (usando CSS variables em media query)
2. Criar componentes reutilizáveis em HTML
3. Documentar estados (hover, active, disabled)
4. Implementar sistema de tipografia (font-size scale)

---

**Criado em**: 2026-06-08  
**Versão**: 1.0  
**Designer**: UI/UX Senior 🚀
