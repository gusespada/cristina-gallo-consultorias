# Traspaso para la IA que continuará el proyecto

## Objetivo

Terminar y publicar una web profesional de Cristina Gallo destinada a directoras y directores de coro que desean realizar una consultoría con ella. La web debe conservar su identidad editorial, cálida y sobria.

## Estado actual

La interfaz pública está implementada y es responsive. Incluye:

- presentación y fotografía de Cristina Gallo;
- currículum y actividad académica/coral;
- una única consultoría presentada mediante tres abordajes;
- agenda con horarios ficticios;
- formulario y confirmación simulados;
- privacidad, términos y cancelaciones como borradores;
- metadata y miniatura social de 1200 × 630.

No existe aún un sistema transaccional real. Los botones no crean reservas, no envían datos, no bloquean horarios y no generan eventos.

## Contratos de contenido

- El público son profesionales: directoras y directores de coro. No describirlos como estudiantes.
- La oferta es una sola consultoría, aunque se presenten tres posibles abordajes.
- No mostrar precios hasta que Cristina los confirme.
- No inventar premios, cargos, agrupaciones, testimonios, disponibilidad ni políticas.
- Mantener el nombre `Cristina Gallo` de forma consistente.

## Archivos principales

- `app/site-config.ts`: fuente central del contenido.
- `app/page.tsx`: componentes e interacción de la demostración.
- `app/globals.css`: sistema visual.
- `app/layout.tsx`: metadata y URL pública.
- `public/cristina-gallo.jpeg` y `public/og.png`: identidad visual.

## Dirección visual

- Verde bosque `#10291f`.
- Oro suave `#dcc65c`.
- Azul profundo `#233f72`.
- Marfil `#faf6e9`.
- Tipografía editorial con serif para énfasis y sans serif para navegación y cuerpo.
- Inspiración brasileña sutil; no convertir la interfaz en una bandera literal.

## Orden recomendado de implementación

1. Confirmar con Cristina contenidos, duración, zona horaria, disponibilidad, contacto y políticas.
2. Actualizar `app/site-config.ts` y los borradores legales.
3. Diseñar el dominio de disponibilidad con UTC y zona IANA.
4. Incorporar base SQL para holds y reservas, con protección contra solapamientos.
5. Conectar Google Calendar mediante FreeBusy y crear eventos sólo después de confirmar la reserva.
6. Enviar correos transaccionales idempotentes.
7. Agregar pagos únicamente si se aprueban proveedor, moneda, política y flujo de webhooks.
8. Añadir pruebas unitarias, de integración y end-to-end del recorrido crítico.
9. Validar teclado, lector de pantalla, dispositivos móviles, SEO y miniatura social pública.
10. Publicar y documentar operación, alertas, reconciliación y recuperación.

## Reglas técnicas críticas

- No confiar en precios, horarios ni estados enviados por el navegador.
- Google Calendar no debe ser la única base transaccional.
- Crear una retención temporal antes del checkout si se habilitan pagos.
- Confirmar pagos exclusivamente mediante verificación del proveedor desde el servidor.
- Hacer idempotentes la creación de reservas, webhooks, eventos y correos.
- No guardar tarjetas, secretos, tokens ni datos personales en Git.
- No exponer títulos o participantes de eventos de Calendar; usar FreeBusy.
- Ante incertidumbre de Calendar o base de datos, no ofrecer el horario.

## Criterio de terminado

Una integración está terminada cuando funciona, tiene pruebas, registra errores sin exponer datos sensibles, documenta configuración y posee un procedimiento de recuperación. Una pantalla que simula el caso feliz no equivale a una integración productiva.

## Primer mensaje sugerido para otra IA

> Leé `README.md`, `AI_HANDOFF.md`, `AGENTS.md`, `app/site-config.ts`, `app/page.tsx`, `app/layout.tsx` y `app/globals.css`. Ejecutá instalación, lint, build y tests. Informame qué decisiones faltan antes de cambiar código. No actives integraciones reales ni inventes datos. Proponé la siguiente fase más pequeña que deje el proyecto ejecutable y verificable.
