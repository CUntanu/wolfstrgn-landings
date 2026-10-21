# 🐺 GUÍA WOLFSTRGN — Publica tus landings en internet (GRATIS)

Sigue estos pasos en orden. Tarda unos **15-20 minutos** la primera vez.
No necesitas saber programar. Solo tu navegador.

---

## PASO 1 — Descarga y descomprime

1. Descarga el archivo `wolfstrgn-landings.zip`
2. Haz clic derecho → **Extraer todo** (o "Descomprimir")
3. Te quedará una carpeta llamada `wolfstrgn-landings`

⚠️ IMPORTANTE: recuerda DÓNDE la has extraído (por ejemplo, en Escritorio).

---

## PASO 2 — Crea tu cuenta de GitHub (gratis)

1. Entra en **https://github.com**
2. Pulsa **Sign up** y regístrate con tu email
3. Verifica tu email cuando te llegue el correo

> GitHub es como un "Google Drive para código". Es gratis y es donde
> Vercel va a buscar tu web. No compartas tu contraseña con nadie.

---

## PASO 3 — Sube la web a GitHub

1. Estando dentro de GitHub, pulsa el botón **`+`** (arriba a la derecha) → **New repository**
2. Nombre del repositorio: `wolfstrgn-landings`
3. Selecciona **Public** ✅ (necesario para que Vercel lo lea gratis)
4. NO marques ninguna casilla de "README" ni ".gitignore"
5. Pulsa el botón verde **Create repository**
6. Ahora pulsa el enlace **"uploading an existing file"** (o el botón **Add file → Upload files**)

### ⚠️ EL PASO MÁS IMPORTANTE DE TODA LA GUÍA

Abre la carpeta `wolfstrgn-landings` que descomprimiste.
Entra DENTRO de la carpeta y **selecciona TODO LO DE DENTRO**
(las carpetas `src`, `public`, y todos los archivos: package.json, etc.)
y **ARRÁSTRALOS a la ventana de GitHub**.

```
✅ CORRECTO:  arrastras src, public, package.json... (lo que está DENTRO)
❌ INCORRECTO: arrastras la carpeta wolfstrgn-landings entera
```

Si arrastras la carpeta entera, la web NO funcionará
(el error más común — revisa que en GitHub veas `src` y `package.json`
en la primera pantalla, no dentro de otra carpeta).

7. Espera a que suba todo (verás una lista verde de archivos subidos)
8. Pulsa el botón verde **Commit changes**

---

## PASO 4 — Crea tu cuenta de Vercel (gratis, sin tarjeta)

1. Entra en **https://vercel.com**
2. Pulsa **Sign Up** → elige **Continue with GitHub**
3. Autoriza a Vercel (botón verde "Authorize Vercel")

> Vercel es la empresa donde se alojan webs de Netflix, Nike o Uber.
> Su plan gratis es de sobra para tus landings y no pide tarjeta.

---

## PASO 5 — Publica la web (1 clic)

1. En el panel de Vercel, pulsa **Add New... → Project**
2. Verás tu repositorio `wolfstrgn-landings` → pulsa **Import**
3. NO toques ninguna opción (Vercel detecta todo solo)
4. Pulsa el botón **Deploy**
5. Espera 1-2 minutos ⏳ (verás cómo se construye en pantalla)
6. 🎉 Aparecerá la pantalla de fiesta 🎉 con tu web ONLINE

Tu enlace será algo como: `https://wolfstrgn-landings.vercel.app`

Púlsalo y verás tus landings con el banner de cuenta atrás funcionando.

---

## PASO 6 — Ponle tu dominio propio (OPCIONAL, recomendado)

Puedes usar `go.wolfstrgn.com` en vez de la dirección de Vercel:

1. En Vercel, entra en tu proyecto → pestaña **Settings → Domains**
2. Escribe `go.wolfstrgn.com` → **Add**
3. Vercel te mostrará unos registros DNS que debes copiar
4. Ve a donde compraste el dominio `wolfstrgn.com` (Shopify, GoDaddy, Namecheap...)
   → zona **DNS** → añade el registro que te indique Vercel
5. Espera unos minutos a que se propague (puede tardar hasta 24h, normalmente 10 min)

> Si tu tienda está en wolfstrgn.com y Shopify gestiona el dominio,
> puedes crear el subdominio `go.wolfstrgn.com` desde
> Shopify Admin → Settings → Domains → Edit DNS settings (CNAME).

---

## PASO 7 — ¿Dónde comparto mi enlace? 💰

| Canal | Cómo usarlo |
|---|---|
| Bio de Instagram / TikTok | Link con texto: "🔥 10% DTO solo HOY ⏰" |
| Anuncios (Meta / Google) | El anuncio lleva a la landing del producto, no a la tienda |
| QR en paquetes | Genera QR gratis (qr-code-generator.com) → cada pedido lleva su QR |
| WhatsApp Business | Estado + mensajes: "Tu 10% acaba hoy a medianoche ⏰ + enlace" |
| Email | Firma de correo con el enlace |

---

## PREGUNTAS RÁPIDAS

**¿Cada cuánto se reinicia el timer del banner?**
Cada día a medianoche, automáticamente. Cero mantenimiento.

**¿Puedo cambiar textos o precios?**
Sí: edita el archivo `src/lib/landings.ts` (los textos están en español,
claro y ordenado). Al guardar, GitHub → Vercel red publicará sola la versión nueva.

**¿Se me rompió el deploy (sale un error)?**
Lo más probable: en el Paso 3 arrastraste la carpeta en vez de su contenido.
Borra el repo de GitHub, créalo de nuevo y repite el Paso 3 con cuidado.

**¿El timer sale `--:--:--` unos segundos?**
Normal: se sincroniza con la hora del visitante en cuanto carga la página.

**¿Cuánto cuesta?**
0 €. GitHub gratis + Vercel gratis. Sin letra pequeña.
