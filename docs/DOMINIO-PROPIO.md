# Migrar el portfolio a un dominio propio

> Por qué importa: hoy el sitio vive en `https://gabo8191.github.io/portfolio/`, una
> **subruta** de un dominio compartido. Eso tiene dos consecuencias medibles:
>
> 1. `robots.txt` y `llms.txt` **solo son válidos en la raíz del dominio**. Los que hay
>    en `public/` se publican en `/portfolio/robots.txt` y `/portfolio/llms.txt`, y
>    ningún crawler los lee. El `robots.txt` que sí manda es el del repo
>    `gabo8191.github.io` (si existe).
> 2. La autoridad y las señales de entidad se reparten con el resto del dominio. Un
>    dominio propio consolida la entidad "Gabriel Castillo" en un identificador único.
>
> El código ya está preparado: `astro.config.mjs` lee `SITE_URL` y `BASE_PATH`.

## Opción A — dominio propio (recomendada)

1. **Registra el dominio.** Sugerencias coherentes con la marca personal:
   `gabrielcastillo.dev`, `gabocastillo.dev`, `gabo8191.dev`.

2. **DNS.** En tu registrador, apunta a GitHub Pages:

   | Tipo    | Nombre | Valor                  |
   | ------- | ------ | ---------------------- |
   | `A`     | `@`    | `185.199.108.153`      |
   | `A`     | `@`    | `185.199.109.153`      |
   | `A`     | `@`    | `185.199.110.153`      |
   | `A`     | `@`    | `185.199.111.153`      |
   | `CNAME` | `www`  | `gabo8191.github.io.`  |

3. **Archivo `CNAME`.** Crea `public/CNAME` con una sola línea y el dominio desnudo:

   ```
   gabrielcastillo.dev
   ```

4. **Variables de build.** En `.github/workflows/deploy.yml`, en el paso
   `Build with Astro`:

   ```yaml
   - name: Build with Astro
     run: npm run build
     env:
       SITE_URL: https://gabrielcastillo.dev
       BASE_PATH: /
   ```

5. **Ajusta las URLs absolutas** que quedaron escritas a mano:
   - `public/robots.txt` → línea `Sitemap:`
   - `public/llms.txt` → todas las apariciones de `gabo8191.github.io/portfolio`
   - `src/layouts/RootLayout.astro` → el `@id` del `Person`
     (`.../#gabriel-castillo`)
   - Repo de Vulcano, `src/app/[locale]/page.tsx` → el `@id` y la `url` del fundador
     Gabriel Castillo dentro de `organization.founder`
   - Repo de Diana, `scripts/prerender.mjs` e `index.html` → el `colleague.url`

   > Los tres `@id` deben cambiar **a la vez**. Si quedan desincronizados, los
   > buscadores ven dos personas distintas en lugar de una.

6. **Redirección de la URL vieja.** En el repo `gabo8191/portfolio`, deja un
   `index.html` mínimo en la raíz publicada con
   `<link rel="canonical" href="https://gabrielcastillo.dev/">` y un
   `<meta http-equiv="refresh" content="0; url=https://gabrielcastillo.dev/">`.
   GitHub Pages no permite 301 reales, así que el canonical es la señal que cuenta.

7. **Search Console.** Añade la nueva propiedad, envía `sitemap-index.xml` y usa
   **Cambio de dirección** si llegas a tener verificada la propiedad antigua.

8. **Actualiza los perfiles externos**: LinkedIn, GitHub (campo *Website* del perfil y
   del README), X, y el sitio de Vulcano.

## Opción B — sin comprar dominio

Sirve el portfolio desde el repo raíz `gabo8191/gabo8191.github.io` en vez de
`gabo8191/portfolio`. Queda en `https://gabo8191.github.io/` con `BASE_PATH=/`, así
`robots.txt` y `llms.txt` pasan a la raíz y sí se leen. Sigue compartiendo el dominio
`github.io` con el resto de GitHub Pages, así que la autoridad sigue siendo prestada,
pero soluciona el problema de los archivos de la raíz sin coste.

## Checklist

- [ ] Dominio registrado y DNS propagado
- [ ] `public/CNAME` creado
- [ ] `SITE_URL` y `BASE_PATH` en el workflow
- [ ] URLs absolutas actualizadas en los **tres** repos (portfolio, vulcano, diana)
- [ ] Redirección/canonical desde la URL antigua
- [ ] Search Console: propiedad nueva + sitemap enviado
- [ ] Perfiles externos actualizados
