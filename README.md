# Web de Cristina Gallo

¿Qué contiene este repositorio? Es el código fuente de una web profesional para que directoras y directores de coro conozcan a Cristina Gallo, comprendan su propuesta de consultoría y recorran una demostración del proceso de reserva.

La versión entregada incluye la interfaz responsive, fotografía, currículum, una consultoría con tres abordajes, agenda simulada, formulario, páginas legales provisionales y miniatura social. La agenda, el envío del formulario, Google Calendar, los correos y los pagos todavía no están conectados a servicios reales.

## Requisitos

- Node.js 22.13 o posterior.
- Git.
- Una cuenta en el servicio donde se publicará la web.

## Instalación local

```bash
git clone URL_DE_ESTE_REPOSITORIO
cd NOMBRE_DEL_REPOSITORIO
cp .env.example .env.local
npm install
npm run dev
```

Abrí `http://localhost:3000` en el navegador. Para detener el servidor, usá `Ctrl+C`.

## Verificaciones

```bash
npm run lint
npm run build
npm test
```

El proyecto debe compilar sin errores antes de publicarse.

## Dónde editar

- `app/site-config.ts`: biografía, consultoría, credenciales y preguntas frecuentes.
- `app/page.tsx`: estructura de la página y recorrido de reserva simulado.
- `app/globals.css`: colores, tipografía y diseño responsive.
- `app/layout.tsx`: título, descripción, SEO y miniatura social.
- `public/cristina-gallo.jpeg`: fotografía principal.
- `public/og.png`: miniatura para WhatsApp y redes sociales.
- `app/privacidad`, `app/terminos` y `app/cancelaciones`: borradores legales.

## Configurar el dominio

Copiá `.env.example` como `.env.local` y reemplazá el valor:

```env
NEXT_PUBLIC_SITE_URL=https://dominio-final.example
```

La variable se usa para construir las direcciones absolutas de la miniatura social. No agregues barras al final.

## Publicación

El proyecto usa Next.js mediante vinext y produce una salida compatible con Cloudflare Workers/Sites. Otra IA puede adaptarlo a Vercel u otra plataforma, pero debe conservar la interfaz y verificar nuevamente el build.

El archivo `.openai/hosting.json` se entrega sin `project_id`; cada nueva propietaria debe vincular la copia a su propia cuenta y proyecto de hosting.

## Subirlo a GitHub

1. Creá un repositorio vacío en GitHub, sin README automático.
2. Descomprimí este paquete.
3. Desde la carpeta del proyecto ejecutá:

```bash
git init -b main
git add .
git commit -m "Initial Cristina Gallo website"
git remote add origin URL_DEL_REPOSITORIO
git push -u origin main
```

También se pueden arrastrar los archivos desde la opción **Add file → Upload files** de GitHub.

## Trabajo pendiente

- Confirmar textos finales, duración real, políticas y datos de contacto.
- Reemplazar los horarios de muestra por disponibilidad real.
- Conectar el formulario y enviar confirmaciones por correo.
- Integrar Google Calendar con una base de datos que impida dobles reservas.
- Definir si habrá cobro y, en ese caso, integrar el proveedor desde el servidor.
- Revisar privacidad, términos y cancelaciones con asesoramiento profesional.
- Cambiar `robots` a indexable únicamente cuando el dominio y el contenido sean definitivos.

## Para continuar con otra IA

Pedile que lea primero [AI_HANDOFF.md](AI_HANDOFF.md) y [AGENTS.md](AGENTS.md). Esos archivos explican el estado del producto, sus límites y el orden seguro para terminarlo.
