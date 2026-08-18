# pdi-frontend

Ambiente para testar os exercícios do curso.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · pnpm.

```bash
pnpm install
pnpm dev     # http://localhost:3000
```

Outros comandos: `pnpm build`, `pnpm start`, `pnpm lint`.

## Estrutura

```
src/app/page.tsx     renderiza o exercício da vez
modulos_pdi/         exercícios e anotações do curso (fora do lint)
```

Para ver um exercício, importe em `src/app/page.tsx`:

```tsx
import Tarefa4 from "../../modulos_pdi/tarefa4";
```

Componente com hooks ou evento precisa de `"use client";` na primeira linha —
no App Router tudo é Server Component por padrão.
