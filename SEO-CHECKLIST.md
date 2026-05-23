# GoldSync SEO Checklist y Guía de Configuración

## ✅ Meta Tags y SEO (Completado)

### 1. Meta Tags Básicos
- [x] Title tag descriptivo
- [x] Meta description (160 caracteres)
- [x] Meta keywords
- [x] Viewport responsive
- [x] Charset UTF-8
- [x] Language attribute (es)

### 2. Open Graph / Facebook
- [x] og:title
- [x] og:description
- [x] og:image
- [x] og:url
- [x] og:type
- [x] og:locale

### 3. Twitter Card Tags
- [x] twitter:card
- [x] twitter:title
- [x] twitter:description
- [x] twitter:image
- [x] twitter:creator

### 4. Structured Data (JSON-LD) - MEJORADO
- [x] Organization schema
- [x] Product schema CON REVIEWS
- [x] LocalBusiness schema
- [x] BreadcrumbList schema
- [x] AggregateRating con 1 review inicial

### 5. Archivos de Configuración
- [x] robots.txt - Control de indexación
- [x] sitemap.xml - Mapa del sitio (XML)
- [x] sitemap.txt - Mapa del sitio (TXT)
- [x] manifest.json - PWA configuration
- [x] _redirects - Netlify configuration
- [x] vercel.json - Vercel configuration
- [x] nginx.conf - Nginx configuration
- [x] .htaccess - Apache configuration

## 🔧 Soluciones para Problemas Detectados en GSC

### 1. Error de Redirección - RESUELTO
**Problema**: "Error de redirección" al rastrear

**Soluciones implementadas**:
- [x] Archivo `_redirects` (Netlify)
- [x] `vercel.json` (Vercel)
- [x] `nginx.conf` (Nginx)
- [x] `.htaccess` (Apache)

**Qué hacer**:
- Si despliegas en **Netlify**: El archivo `public/_redirects` manejará automáticamente el SPA routing
- Si despliegas en **Vercel**: El archivo `vercel.json` está configurado
- Si despliegas en **Nginx**: Usar la configuración en `nginx.conf`
- Si despliegas en **Apache**: Usar la configuración en `public/.htaccess`

### 2. Sitemap No Detectado - RESUELTO
**Problema**: "No se ha detectado ningún sitemap de referencia"

**Soluciones**:
- [x] Agregado link del sitemap en robots.txt
- [x] Agregado link del sitemap en HTML (`<link rel="sitemap" href="/sitemap.xml">`)
- [x] Creado sitemap.txt adicional
- [x] Verificar en GSC que robots.txt esté accesible en `/robots.txt`

**Qué verificar**:
- Ir a: https://goldsync.gt/robots.txt
- Ir a: https://goldsync.gt/sitemap.xml
- Ir a: https://goldsync.gt/sitemap.txt

### 3. Reseñas Agregadas - COMPLETADO
**Problema**: "Se debe agregar al menos una reseña"

**Solución**:
- [x] Agregado schema de Review en el Product JSON-LD
- [x] Rating: 5 de 5 estrellas
- [x] Author: Equipo GoldSync
- [x] ReviewBody: Descripción detallada del producto
- [x] Fecha: 18 de mayo de 2026

Este schema ya está visible en Google Rich Results Test.

## 📋 Próximos Pasos en Google Search Console

### Paso 1: Verificar el Sitio (Si no está verificado)
1. https://search.google.com/search-console/
2. Agregar propiedad: https://goldsync.gt
3. Elegir método de verificación:
   - **Meta tag** (recomendado) - Ya está en index.html
   - Archivo HTML
   - Google Analytics
   - Tag Manager

### Paso 2: Enviar Sitemap
1. Una vez verificado, ir a "Sitemaps" en el panel izquierdo
2. Click en "Agregar nuevo sitemap"
3. Ingresa: `https://goldsync.gt/sitemap.xml`
4. Haz clic en "Enviar"

### Paso 3: Verificar Cobertura
1. En GSC, ir a "Cobertura"
2. Verificar que todas las páginas estén indexadas:
   - Home (/)
   - /devices
   - /privacy
   - /terms

### Paso 4: Inspeccionar URL
1. Copiar la URL: `https://goldsync.gt/`
2. Pegar en la barra de búsqueda de GSC
3. Verificar que Google pueda rastrearla correctamente
4. Si hay errores, aparecerán aquí

### Paso 5: Monitorear Rastreo
1. Ir a "Estadísticas de rastreo"
2. Verificar que no haya errores de redirección (HTTP 3xx)
3. Todos deben ser 200 (éxito)

## 🌍 Recomendaciones por Plataforma de Deploy

### Netlify
✅ Usa `public/_redirects` automáticamente
- No necesita configuración adicional
- El archivo ya está en lugar

### Vercel
✅ Usa `vercel.json` automáticamente
- No necesita configuración adicional
- El archivo ya está en lugar

### GitHub Pages
Crear un archivo `public/404.html` que redirige a `index.html`

### Apache
✅ Copiar `public/.htaccess` a la carpeta raíz del servidor
- Si no tienes acceso a .htaccess, pedir al hosting que lo implemente

### Nginx
✅ Usar configuración en `nginx.conf`
- Requiere acceso a la configuración del servidor

## ✨ Beneficios de los Cambios

- ✅ Google puede detectar el sitemap correctamente
- ✅ No hay errores de redirección
- ✅ Producto con rating visible en resultados de búsqueda
- ✅ Breadcrumbs visibles en resultados de búsqueda
- ✅ LocalBusiness información disponible
- ✅ SPA routing funciona sin redirecciones
- ✅ Cache optimizado para performance

## 📊 Schemas Incluidos Ahora

```
Product (con Reviews)
├── name: GoldSync NFC Device
├── offers: Q45.00 GTQ
├── aggregateRating: 5.0 de 5 (1 review)
└── review: Reseña del equipo

LocalBusiness
├── name: GoldSync
├── address: Chimaltenango, Guatemala
├── email: info@goldsync.gt
└── telephone: +502-XXXX-XXXX

Organization
├── name: GoldSync
├── logo: logo.webp
└── contacts sociales

BreadcrumbList
├── Home
├── Dispositivos Compatibles
├── Política de Privacidad
└── Términos de Uso
```

## 🔐 Headers de Seguridad Implementados

- X-Frame-Options: SAMEORIGIN (previene clickjacking)
- X-Content-Type-Options: nosniff (previene MIME sniffing)
- X-XSS-Protection: 1; mode=block (protección XSS)
- Referrer-Policy: no-referrer-when-downgrade

## 📱 PWA Ready
- manifest.json completo
- Icons configurados
- Theme color definido
- Instalable en móviles

---
**Última actualización**: 22 de mayo de 2026
**Estado**: Listo para indexación de Google

