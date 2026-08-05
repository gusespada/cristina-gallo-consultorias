# Instrucciones para agentes de IA

## Antes de cambiar código

1. Leé `README.md` y `AI_HANDOFF.md` completos.
2. Revisá `app/site-config.ts`, `app/page.tsx`, `app/layout.tsx` y `app/globals.css`.
3. Ejecutá `npm install`, `npm run lint`, `npm run build` y `npm test`.
4. Conservá la web ejecutable al terminar cada fase.

## Reglas de producto

- La web pertenece a Cristina Gallo y está dirigida a directoras y directores de coro.
- Hay una única consultoría con tres abordajes; no presentar tres productos diferentes.
- No mostrar precios, horarios reales, testimonios o políticas no confirmadas.
- Los horarios actuales y la confirmación son una demostración.
- Pedí los datos faltantes antes de activar agenda, correo o pagos reales.

## Reglas de edición

- Centralizá contenido configurable en `app/site-config.ts`.
- Conservá la paleta, la jerarquía tipográfica, la fotografía y el diseño responsive salvo pedido explícito.
- No reemplaces la arquitectura completa por otra plantilla.
- No agregues dependencias sin una necesidad concreta.
- No guardes secretos ni archivos `.env.local` en Git.

## Validación obligatoria

- Ejecutá lint, build y las pruebas pertinentes después de cada cambio.
- Verificá manualmente el recorrido crítico en móvil y escritorio cuando cambie la interfaz.
- Comprobá que la miniatura social pública sea accesible y tenga 1200 × 630.
- Informá qué se cambió, qué se probó, qué sigue simulado y qué decisión se necesita.
