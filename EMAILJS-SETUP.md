# EmailJS Integration Guide - GoldSync

## ¿Qué es EmailJS?

EmailJS es un servicio que permite enviar emails directamente desde tu aplicación web sin necesidad de un servidor backend.

## Pasos para Configurar EmailJS

### 1. Crear una Cuenta en EmailJS

1. Ve a: https://www.emailjs.com/
2. Click en "Sign Up" (o "Get Started")
3. Registrate con tu correo electrónico
4. Verifica tu correo

### 2. Crear un Email Service

1. En el Dashboard de EmailJS, ve a "Email Services"
2. Click en "Add New Service"
3. Elige tu proveedor (Gmail, Outlook, etc.)
4. Configura tu correo y contraseña
5. Guarda el **SERVICE_ID** (ej: service_abc123xyz)

### 3. Crear un Email Template

1. Ve a "Email Templates"
2. Click en "Create New Template"
3. Nombre: "goldsync_contact_form" (o el que prefieras)
4. Configura el template con estas variables:
   ```
   {{to_email}}      - Email destino
   {{user_name}}     - Nombre del usuario
   {{user_email}}    - Email del usuario
   {{user_phone}}    - Teléfono del usuario
   {{user_profession}} - Profesión del usuario
   {{from_name}}     - Nombre del remitente
   ```
5. Template de ejemplo:
   ```
   De: {{from_name}}
   Email del usuario: {{user_email}}
   Teléfono: {{user_phone}}
   Profesión: {{user_profession}}
   
   Nombre: {{user_name}}
   ```
6. Guarda el **TEMPLATE_ID** (ej: template_abc123xyz)

### 4. Obtener tu Public Key

1. Ve a "Account" → "API Keys"
2. Copia tu **PUBLIC KEY** (ej: abc123xyz_public_key)

### 5. Configurar Variables de Entorno

1. En la raíz del proyecto, crea un archivo `.env.local`:
   ```bash
   VITE_EMAILJS_SERVICE_ID=service_abc123xyz
   VITE_EMAILJS_TEMPLATE_ID=template_abc123xyz
   VITE_EMAILJS_PUBLIC_KEY=abc123xyz_public_key
   ```

2. O copia el archivo `.env.example` y renómbralo a `.env.local`, luego rellena los valores:
   ```bash
   cp .env.example .env.local
   ```

### 6. Reinicia el Servidor de Desarrollo

```bash
pnpm run dev
```

## Prueba el Formulario

1. Ve a: http://localhost:5173/
2. Scroll hasta el formulario
3. Rellena los campos
4. Click en "Asegurar mi GoldSync de Lanzamiento"
5. Deberías ver un mensaje de éxito

## Verificar que Funciona

- **Verifica tu correo**: Deberías recibir el email en info@goldsync.gt
- **Consola del navegador**: Abre F12 → Console, deberías ver "Email enviado: ..." con la respuesta de EmailJS

## Solucionar Problemas

### Error: "Invalid Service ID"
- Verifica que `VITE_EMAILJS_SERVICE_ID` es correcto
- Asegúrate de haber guardado los cambios en `.env.local`
- Reinicia el servidor de desarrollo

### Error: "Invalid Template ID"
- Verifica que `VITE_EMAILJS_TEMPLATE_ID` es correcto
- Comprueba que el template existe en tu cuenta de EmailJS

### Error: "Invalid Public Key"
- Verifica que `VITE_EMAILJS_PUBLIC_KEY` es correcto
- Asegúrate de que es la PUBLIC KEY, no la private key

### No recibo los emails
- Verifica que el email service está configurado correctamente
- Comprueba que el template tiene la variable `{{to_email}}`
- Revisa la sección "Logs" en EmailJS Dashboard

## Variables de Entorno (Referencia)

```bash
# .env.local
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Importante

⚠️ **NUNCA** commits el archivo `.env.local` a Git. Ya está en `.gitignore`.

⚠️ Las variables públicas de Vite deben tener el prefijo `VITE_` para ser accesibles en el navegador.

## Support

- Documentación EmailJS: https://www.emailjs.com/docs/
- Email service setup: https://www.emailjs.com/docs/service/
- Email templates: https://www.emailjs.com/docs/tutorial/creating-email-template/

---
**Última actualización**: 22 de mayo de 2026
