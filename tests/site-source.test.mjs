import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("mantiene la identidad y el público profesional", async () => {
  const [page, config, layout] = await Promise.all([
    read("app/page.tsx"),
    read("app/site-config.ts"),
    read("app/layout.tsx"),
  ]);

  assert.match(page, /Cristina Gallo/);
  assert.match(config, /directoras y directores de coro/);
  assert.doesNotMatch(`${page}\n${config}\n${layout}`, /para estudiantes|alumnos de dirección coral/i);
});

test("presenta una única consultoría sin precios", async () => {
  const [page, config] = await Promise.all([
    read("app/page.tsx"),
    read("app/site-config.ts"),
  ]);

  assert.match(config, /consultation:/);
  assert.match(config, /features:/);
  assert.doesNotMatch(`${page}\n${config}`, /price:|currency:|Mercado Pago|PayPal/);
});

test("incluye metadata social portable", async () => {
  const layout = await read("app/layout.tsx");
  assert.match(layout, /NEXT_PUBLIC_SITE_URL/);
  assert.match(layout, /\/og\.png/);
  assert.match(layout, /summary_large_image/);
});
