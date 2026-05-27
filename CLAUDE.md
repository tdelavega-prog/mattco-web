# CLAUDE.md — Contexto del proyecto MATTCO

## Qué es MATTCO
Empresa de terminaciones y materiales para construcción. Modelo liviano: sin stock propio, sin showroom, sin estructura pesada. Coordina entre cliente y proveedores de confianza. Web: mattco.com.ar | IG: @grupomattco | WhatsApp Business activo.

## Equipo
- Phil (Tomás de la Vega): socio comercial, 30%
- Cubo (Tomás Cubelli): socio comercial, 30% — tcubelli@mattco.com.ar
- Foca: socio financiero/inversor, 30% — contabilidad y caja
- Pipe (Felipe, hermano de Phil): operación, 10% — felipe@mattco.com.ar
- Marcos y Dami: marmoleros asociados (miden, fabrican e instalan)
- De Stefano 1913: proveedor de placas y cortes a medida

## Productos principales
Marmolería y mesadas (producto estrella, punta de lanza comercial), griferías, sanitarios, pisos, revestimientos, baldosas, climatización (calderas), cocinas y anafes, campanas extractoras, aberturas PVC, puertas.

## Zona de influencia
Zona Norte GBA (San Isidro, Martínez, Acassuso, La Horqueta, Pilar barrios privados), CABA corredor norte, proyectos puntuales en Canning, Pilar, etc.

## Proveedores clave
De Stefano 1913, Purastone, Purastone Prima, Neolith, VITE, Atlas Concorde, Navarti, Quadri, Piu Cerámicas, Clever, BeGo Studio, Pitt Cooking, Johnson Acero, Duravit, Piazza, Tauro, TOTO, Hydros, Ferroli, Asua, Immergas, Rheem, Gree, Fedders, Grupo Vonderk, Idea Luz, Lucciola, LedsC4, Oblak, Gromanti, Mesquita Hermanos, Augen, Pacific.

---

## IDENTIDAD VISUAL — APLICAR SIEMPRE

### Paleta de colores
- Verde Cromo: #434D42
- Verde Pistacho: #C0C8B2
- Lima: #E4E881
- Visón: #A5A4A0
- Off-white: #F5F4F0

### Tipografías
- Web: Cormorant Garamond (títulos) + DM Sans (cuerpo)
- Flyers: Poppins Light/Medium
- Brand book incluye también: Playfair Display y SF Pro como secundarias

### Logos
- Usar siempre el logo de Mattco en encabezado o pie de página
- Los PNGs de logos de marca tienen fondo negro sólido, NO transparencia real — siempre procesar con masking antes de usar
- Archivos disponibles: Logo_Mattco_Negro_Lima_1.png, Logo_Mattco_Blanco_Lima_1.png, Logo_Mattco_Verde_Cromo.png

---

## REGLAS DE DISEÑO

### Estilo general
- Minimalista, limpio, tipo estudio de arquitectura premium
- Espacios en blanco generosos, composición editorial
- Líneas rectas, estilo sutil, "high end"
- Nunca cargado ni saturado de elementos
- Referentes: Cosentino, Caesarstone (internacional), LAK, ZIM arquitectura (Argentina)

### Tono de voz
- Profesional pero cercano
- Elegante sin ser frío
- Inspirador sin ser pretencioso
- Aspiracional, no técnico ni de catálogo de ferretería
- Buenos ejemplos: "El material importa", "Piedra natural. Para siempre."

### Público objetivo
- Usuario final (IG, web): propietarios nivel medio-alto en Zona Norte construyendo, remodelando o decorando
- Arquitectos (WhatsApp, newsletters): canal de referencia, tono más técnico, tendencias y aplicaciones

### Fotografía
- Priorizar fotos reales de obras propias
- Crop en líneas arquitectónicas naturales (bordes de mesada, líneas de mueble), nunca arbitrario
- Si no hay fotos propias, usar estética coherente: mármol, piedra natural, espacios luminosos

---

## REGLAS TÉCNICAS WEB

### Estructura del sitio
- Hosted en Netlify, deploys automáticos desde GitHub (repo: tdelavega-prog/mattco-web)
- Dominio: mattco.com.ar

### Convenciones de archivos
- Nombres de imagen: minúscula, guiones, sin espacios, extensión .jpg (no .jpeg)
- Ejemplo correcto: canton-cocina-1.jpg
- Ejemplo incorrecto: Cantón Cocina (1).JPEG

### Bugs conocidos de iOS Safari
- Usar height fijo (ej: height:240px) con position:absolute en imágenes dentro de cards — aspect-ratio en containers con overflow:hidden se rompe en iOS
- En mobile (≤600px): remover aspect-ratio forzado, usar height:auto + object-fit:contain + max-height:70vh

### Contacto en el sitio
- WhatsApp Business como CTA principal
- Verificar rutas con: grep -n "whatsapp\|wa.me\|5491\|phone\|tel:" index.html

---

## INSTRUCCIONES PARA CLAUDE CODE

1. No agregar elementos que no se pidieron explícitamente (ni placeholders, ni cards extra, ni decoraciones)
2. Iterar rápido, no hacer preguntas innecesarias — actuar con la mejor interpretación
3. Aplicar siempre la identidad visual sin preguntar
4. Consolidar cambios en un solo commit cuando sea posible
5. Al crear subpáginas de materiales (ej: /materiales/purastone.html), mantener la misma estética y navegación del sitio principal
6. Posicionamiento: accesible en todos los rangos de precio, no exclusivamente premium. "Superficies de ingeniería" como término paraguas. Neolith = piedra sinterizada, Purastone = cuarzo de ingeniería
