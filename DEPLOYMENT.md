# DEPLOYMENT GUIDE - GoldSync

## 🚀 Instrucciones de Despliegue

Este documento explica cómo desplegar GoldSync en diferentes plataformas y resolver problemas de SEO/redirecciones.

---

## 1. NETLIFY (RECOMENDADO)

### Pasos:
1. Conecta tu repositorio a Netlify
2. Asegúrate de que estos comandos estén configurados:
   ```
   Build command: pnpm run build
   Publish directory: dist
   ```
3. Netlify detectará automáticamente el archivo `_redirects` en `public/`

### Verificación:
- Visita https://goldsync.gt/
- Prueba la navegación: Click en "Dispositivos Compatibles"
- No debería haber redirecciones HTTP (debería ser 200)

### En Google Search Console:
- El error de redirección se resolverá automáticamente
- Puedes inspeccionar la URL directamente en GSC

---

## 2. VERCEL

### Pasos:
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente `vercel.json`
3. Asegúrate que el build está configurado:
   ```
   Framework: Other
   Build Command: pnpm run build
   Output Directory: dist
   ```

### Verificación:
- El archivo `vercel.json` maneja todas las redirecciones
- No debería haber errores de redirección en GSC

---

## 3. APACHE (Tu Servidor Web)

### Si tienes acceso SSH:

1. Asegúrate de que `mod_rewrite` está habilitado:
   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```

2. El archivo `.htaccess` debe estar en `public/.htaccess`

3. Sube el proyecto:
   ```bash
   pnpm run build
   scp -r dist/* user@goldsync.gt:/var/www/html/
   ```

### Si NO tienes acceso SSH:
Pide a tu proveedor de hosting que:
1. Habilite `mod_rewrite`
2. Implemente la configuración de `.htaccess`
3. Configure HTTPS (SSL/TLS)

---

## 4. NGINX (Tu Servidor Web)

### Pasos:
1. Copia la configuración de `nginx.conf` a tu servidor:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/goldsync
   sudo ln -s /etc/nginx/sites-available/goldsync /etc/nginx/sites-enabled/
   sudo systemctl restart nginx
   ```

2. Asegúrate de tener certificados SSL (Let's Encrypt):
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d goldsync.gt -d www.goldsync.gt
   ```

---

## 5. GITHUB PAGES

GitHub Pages requiere un archivo especial `404.html`:

1. Ya existe en `public/404.html` (puedes crearla si no existe)
2. Asegúrate de que redirige a `index.html`

---

## 🔍 Verificación de Errores de Redirección

### En tu navegador:
```
✅ https://goldsync.gt/ → Status 200
✅ https://goldsync.gt/devices → Status 200
✅ https://goldsync.gt/privacy → Status 200
✅ https://goldsync.gt/terms → Status 200
✅ https://goldsync.gt/robots.txt → Status 200
✅ https://goldsync.gt/sitemap.xml → Status 200
```

Para verificar, abre la consola del navegador (F12) → Network tab y visita cada URL.

### En Google Search Console:
1. Abre GSC
2. Selecciona tu propiedad
3. Ve a "Cobertura"
4. Busca errores de redirección (HTTP 301, 302, etc.)
5. Si ves "Error de redirección", usa la herramienta de inspección de URL

---

## 🛠️ Troubleshooting

### Error: "Error de redirección" en GSC

**Causa**: El servidor está redirigiendo `www` a sin `www` (o viceversa)

**Solución**:
- Asegúrate de que solo UNA versión responda (www o sin www)
- Los archivos de configuración ya están preparados para esto

### Error: "Sitemap no encontrado"

**Verificar**:
1. Visita https://goldsync.gt/sitemap.xml
2. Si ves un XML, está bien
3. En GSC, ve a "Sitemaps" y envía manualmente:
   - `https://goldsync.gt/sitemap.xml`
   - `https://goldsync.gt/sitemap.txt`

### Error: "No se indexa" 

**Soluciones**:
1. Verificar que robots.txt permite indexación:
   - Visita https://goldsync.gt/robots.txt
   - Debe tener `Allow: /`

2. Inspeccionar URL en GSC:
   - Copiar URL completa
   - Pegarla en la barra de búsqueda de GSC
   - Hacer clic en "Inspeccionar"
   - Hacer clic en "Solicitar indexación"

---

## 📊 Monitoreo en Google Search Console

### Pasos después de desplegar:

1. **Verificar el sitio** (si no está verificado):
   - https://search.google.com/search-console/
   - Agregar propiedad
   - Copiar meta tag de verificación
   - Ya está en `index.html`

2. **Enviar Sitemap**:
   - Panel izquierdo → "Sitemaps"
   - Agregar: `https://goldsync.gt/sitemap.xml`

3. **Monitorear rastreo**:
   - "Estadísticas de rastreo" → Ver errores
   - "Cobertura" → Ver indexación por estado

4. **Inspeccionar URLs**:
   - Copiar cada URL principal
   - Pegarla en la barra de búsqueda
   - Revisar si hay errores

---

## 🔐 HTTPS/SSL

**IMPORTANTE**: Google Search Console solo funciona con HTTPS

### Opciones:
- **Netlify**: Automático (HTTPS gratis)
- **Vercel**: Automático (HTTPS gratis)
- **Apache/Nginx**: Let's Encrypt (gratis)
  ```bash
  sudo certbot --nginx -d goldsync.gt
  # o
  sudo certbot --apache -d goldsync.gt
  ```

---

## 📋 Checklist Final de Deploy

- [ ] Build command configurado: `pnpm run build`
- [ ] Output directory: `dist`
- [ ] HTTPS/SSL habilitado
- [ ] `_redirects` (Netlify) o `vercel.json` (Vercel) en lugar
- [ ] `.htaccess` (Apache) copiado a servidor
- [ ] `nginx.conf` (Nginx) implementado
- [ ] Dominio apuntando al servidor correcto
- [ ] DNS propagado (puede tomar hasta 24h)
- [ ] Sitio accesible en https://goldsync.gt/
- [ ] Google Search Console verificado
- [ ] Sitemap enviado a GSC
- [ ] No hay errores de redirección en GSC
- [ ] URLs se rastran correctamente

---

## 📞 Soporte

Si tienes problemas:
1. Verificar los logs del servidor
2. Usar la herramienta "Inspeccionar URL" en GSC
3. Verificar que los archivos de configuración están en el lugar correcto
4. Usar PageSpeed Insights: https://pagespeed.web.dev/

---

**Última actualización**: 22 de mayo de 2026
