# GoldSync SEO Checklist y Guía de Configuración

## ✅ Meta Tags y SEO (Completado)

### 1. Meta Tags Básicos
- [x] Title tag descriptivo
- [x] Meta description (160 caracteres)
- [x] Meta keywords
- [x] Viewport responsive
- [x] Charset UTF-8
- [x] Language attribute (es)

### 2. Open Graph Tags (Social Media)
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

### 4. Structured Data (JSON-LD)
- [x] Organization schema
- [x] Product schema

### 5. Archivos de Configuración
- [x] robots.txt - Control de indexación
- [x] sitemap.xml - Mapa del sitio
- [x] manifest.json - PWA configuration

## 📋 Pasos Siguientes para Indexación de Google

### 1. Google Search Console
1. Ir a: https://search.google.com/search-console/
2. Agregar propiedad: https://goldsync.gt
3. Verificar sitio (opciones):
   - Archivo HTML (descarga y sube a public/)
   - Meta tag (ya está en index.html)
   - Google Analytics
   - Tag Manager
   - Proveedor de dominio

### 2. Verificación Meta Tag (YA IMPLEMENTADA)
El meta tag de verificación se agregará automáticamente en el head. Solo copia el meta tag proporcionado por Google Search Console en el index.html:
```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
```

### 3. Submit Sitemap
Después de verificar en GSC:
1. Ve a Sitemaps (en la sección de indexación)
2. Ingresa: https://goldsync.gt/sitemap.xml
3. Haz clic en "Enviar"

### 4. Google Analytics (Recomendado)
Agrega Google Analytics para mejor monitoreo:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 5. Google My Business
1. Crear cuenta en https://www.google.com/business/
2. Ingresar información de GoldSync
3. Agregar ubicación: Chimaltenango, Guatemala
4. Verificar ubicación

## 🔍 SEO Best Practices Implementadas

### En HTML
- [x] Titles únicos por página
- [x] Meta descriptions descriptivas
- [x] Lenguaje establecido (es-GT)
- [x] Canonical URLs
- [x] Open Graph para redes sociales
- [x] Structured data (schema.org)
- [x] Mobile-friendly
- [x] PWA ready

### En Sitemap
- [x] Todas las páginas principales
- [x] Prioridades establecidas
- [x] Fechas de última modificación
- [x] Imágenes incluidas

### En robots.txt
- [x] Permitir indexación
- [x] Referencia a sitemap
- [x] Crawl delay apropiado
- [x] Descartar páginas admin

## 📱 PWA Configuration
- [x] manifest.json con íconos
- [x] Theme colors
- [x] Display standalone
- [x] App name y short name

## 🚀 Performance SEO
- Verificar velocidad: https://pagespeed.web.dev/
- Responsive design: ✅
- CSS/JS minificados: Vite lo hace automáticamente
- Imágenes optimizadas: .webp utilizado

## 📧 Contactos Útiles
- Google Search Console: https://search.google.com/search-console/
- Bing Webmaster Tools: https://www.bing.com/webmasters/
- SEO Tools: https://www.semrush.com/, https://ahrefs.com/

## 🎯 Próximos Pasos (Después del Deploy)
1. Verificar sitio en Google Search Console
2. Submit sitemap a GSC
3. Monitorear indexación
4. Agregar Google Analytics
5. Configurar Google My Business
6. Crear backlinks (artículos, directorios)
7. Monitorear posiciones en búsqueda

---
Última actualización: 2026-05-18
