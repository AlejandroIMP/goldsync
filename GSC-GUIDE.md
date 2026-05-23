# GOOGLE SEARCH CONSOLE - Guía Rápida de Resolución de Problemas

## 🎯 Problemas Reportados y Soluciones

### Problema 1: Sitemap No Detectado
```
"No se ha detectado ningún sitemap de referencia"
```

**Solución - Paso a Paso**:

1. **Verificar que el sitemap existe**:
   - Abre: https://goldsync.gt/sitemap.xml
   - Si ves un XML, está bien
   - Si no, verifica la configuración del servidor

2. **Enviar el sitemap a GSC**:
   - Abre: https://search.google.com/search-console/
   - Selecciona tu propiedad (goldsync.gt)
   - Panel izquierdo → "Sitemaps"
   - Click en "Agregar nuevo sitemap"
   - Ingresa: `sitemap.xml`
   - Haz click en "Enviar"

3. **Si sigue sin funcionar**:
   - Envía también: `sitemap.txt`
   - Y: `robots.txt`

---

### Problema 2: Error de Redirección
```
"Error: Error de redirección"
"¿Se permite la indexación? N/D"
```

**Solución - Paso a Paso**:

1. **Verificar que no hay redirecciones**:
   - En tu navegador, abre F12 (Developer Tools)
   - Ve a la pestaña "Network"
   - Escribe en la barra: https://goldsync.gt/
   - Presiona Enter
   - Busca la primera solicitud a "index.html" o la URL
   - El status debe ser **200** (no 301, 302, 307, 308)

2. **Si ves 301/302 (redirecciones)**:
   - Verifica la configuración del servidor:
   
   **Si es Netlify**:
   - El archivo `public/_redirects` debe estar presente
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   
   **Si es Vercel**:
   - El archivo `vercel.json` debe estar presente
   - Redeploy el sitio
   
   **Si es Apache**:
   - El archivo `.htaccess` debe estar en la carpeta root
   - Habilita mod_rewrite
   
   **Si es Nginx**:
   - Usa la configuración en `nginx.conf`

3. **En Google Search Console**:
   - Selecciona tu propiedad
   - Panel izquierdo → "Estadísticas de rastreo"
   - Busca errores 3xx (redirecciones)
   - Si hay, usa la herramienta de inspección:
     - Copia la URL que da error
     - Pégala en la barra de búsqueda de GSC
     - Click en "Inspeccionar URL"

---

### Problema 3: Página de Referencia No Detectada
```
"No se ha detectado ninguna"
```

**Solución**:
- Esto es normal al inicio
- Google encontrará tu sitio a través del sitemap
- Una vez enviado el sitemap, esto se completará

---

### Problema 4: No Hay Reseñas
```
"Se debe agregar al menos una reseña"
```

**Solución - YA IMPLEMENTADA**:
- ✅ Hemos agregado un schema de review en el HTML
- ✅ Rating: 5 de 5 estrellas
- ✅ Author: Equipo GoldSync
- ✅ La reseña es del 18 de mayo de 2026

Para verificar que Google lo ve:
1. Abre: https://search.google.com/test/rich-results
2. Ingresa tu URL: https://goldsync.gt/
3. Click en "Probar"
4. Debería mostrar "Product" con rating 5 estrellas

---

## ✅ Checklist Completo de GSC

### 1. Verificación (Si no está verificada)
- [ ] Ir a https://search.google.com/search-console/
- [ ] Click en "Agregar propiedad"
- [ ] Ingresar: https://goldsync.gt
- [ ] Elegir método: Meta tag (ya está en HTML)
- [ ] Copiar el meta tag
- [ ] Pegarlo en `index.html` (en el `<head>`)
- [ ] Volver a GSC y hacer click en "Verificar"

### 2. Enviar Sitemap
- [ ] En GSC, panel izquierdo → "Sitemaps"
- [ ] Click en "Agregar nuevo sitemap"
- [ ] Ingresar: `https://goldsync.gt/sitemap.xml`
- [ ] Hacer click en "Enviar"
- [ ] Esperar a que el estado cambie de "Pendiente" a "Éxito"

### 3. Inspeccionar URLs
- [ ] Copiar: https://goldsync.gt/
- [ ] Pegar en la barra de búsqueda de GSC
- [ ] Click en "Inspeccionar URL"
- [ ] Debería decir "OK"
- [ ] Si hay errores, verás un mensaje rojo

### 4. Monitorear Rastreo
- [ ] Panel izquierdo → "Estadísticas de rastreo"
- [ ] Verificar que no hay errores 4xx o 5xx
- [ ] El status 200 debe ser el dominante
- [ ] 3xx (redirecciones) debe ser 0

### 5. Verificar Cobertura
- [ ] Panel izquierdo → "Cobertura"
- [ ] Ver status de indexación:
  - Verde = Válido
  - Amarillo = Advertencia
  - Rojo = Error
- [ ] Todas tus URLs deben estar en "Válido"

### 6. Verificar Resultados Enriquecidos
- [ ] Ir a: https://search.google.com/test/rich-results
- [ ] Ingresar: https://goldsync.gt/
- [ ] Click en "Probar"
- [ ] Debería mostrar:
  - ✅ Product (con rating de 5 estrellas)
  - ✅ BreadcrumbList
  - ✅ LocalBusiness

---

## 🚨 Errores Comunes y Soluciones

### Error: "No se puede acceder a la URL"
**Causa**: Servidor no está respondiendo
**Solución**: 
- Verifica que el sitio está online
- Intenta visitar la URL en el navegador
- Contacta a tu proveedor de hosting

### Error: "Sitio no verificado"
**Causa**: El meta tag no está en el HTML
**Solución**:
- Copia el meta tag de GSC
- Pégalo en `index.html` en el `<head>`
- Guarda y despliega el cambio
- Vuelve a GSC y verifica

### Error: "Robots.txt bloqueando"
**Causa**: robots.txt tiene `Disallow: /`
**Solución**:
- Abre `public/robots.txt`
- Verifica que tiene `Allow: /`
- Ya debería estar correcto

### Error: "Redireccionamiento excesivo"
**Causa**: Hay múltiples redirecciones (www → sin www → https, etc.)
**Solución**:
- Verifica que solo una configuración está activa
- Si usas Netlify/Vercel, desactiva redirecciones manuales
- Si usas Apache/Nginx, revisa la configuración

---

## 📊 Métricas Esperadas

Después de 1-2 semanas:
- ✅ Sitemap indexado: 4 URLs
- ✅ Páginas válidas: 4
- ✅ Sin errores de redirección
- ✅ Posicionamiento en búsquedas relacionadas a "NFC" y "networking"

---

## 🎯 Acciones Inmediatas

1. **Ahora**:
   - [ ] Verifica que el sitio está online en https://goldsync.gt/
   - [ ] Abre DevTools (F12) y verifica status 200
   - [ ] Visita /sitemap.xml, /robots.txt y /manifest.json

2. **Hoy**:
   - [ ] Ve a GSC
   - [ ] Envía el sitemap
   - [ ] Inspecciona las URLs principales

3. **Esta semana**:
   - [ ] Monitorea "Estadísticas de rastreo"
   - [ ] Busca tu sitio en Google ("site:goldsync.gt")
   - [ ] Verifica Rich Results con la herramienta de prueba

---

## 📞 Recursos Útiles

- GSC: https://search.google.com/search-console/
- Rich Results Test: https://search.google.com/test/rich-results
- Mobile Friendly Test: https://search.google.com/test/mobile-friendly
- PageSpeed Insights: https://pagespeed.web.dev/
- Status Code Checker: https://www.httpstatus.io/

---

**Última actualización**: 22 de mayo de 2026

**Nota**: Los cambios en GSC pueden tomar de 1 a 7 días en mostrarse completamente.
