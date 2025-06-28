## 🗳️ Voto Vivo

Aplicación de votación electrónica desarrollada por el **Grupo 3** para la práctica intensiva de **Bases de Datos – Unidad IV**. Utiliza tecnologías web modernas (HTML, CSS, JavaScript) y almacenamiento no relacional (`localStorage`) para registrar y mostrar votos en tiempo real.

---

## 👥 Grupo 3 – Presentador y Datos Vivos
- 👤 **Juan Gabriel Pared**
- 👤 **Leonel Fernández**
- 👤 **Enzo Ríos**
- 👤 **Juan Francisco Bartlett**

---

## 🚀 Funcionalidad

- Registro de votos de forma local desde el navegador.
- Visualización dinámica y en vivo de los resultados.
- Gráfica interactiva de resultados actualizándose automáticamente.
- Interfaz moderna y responsiva.
- Aplicación completamente offline.

---

## 📡 ¿Cómo se leen y muestran los datos en vivo?
En esta aplicación de votación electrónica, los datos se almacenan y procesan en tiempo real usando localStorage, que es una forma de guardar información directamente en el navegador del usuario.

## 🔹 Lectura de datos
Cada vez que un usuario hace clic en un botón para votar, el sistema:
- Lee los votos actuales desde localStorage con JSON.parse().
- Suma uno al jugador seleccionado.
- Guarda nuevamente los datos actualizados en localStorage con JSON.stringify().

## 🔹 Visualización en vivo
Después de registrar el voto:
- Se actualiza un gráfico de barras usando la librería Chart.js.
- Se genera una tabla de ranking ordenada por cantidad de votos.
- Ambas visualizaciones se actualizan automáticamente sin necesidad de recargar la página, lo que permite mostrar los resultados en vivo de forma clara e interactiva.

---

## 🧠 Tecnología utilizada

- **HTML5** + **CSS3**  
- **JavaScript (Vanilla)**  
- **localStorage** (como sistema de persistencia NoSQL)  
- **Chart.js** (para visualización gráfica)  
- **ChatGPT** (IA generativa para asistencia en diseño y desarrollo)

---

## ⚙️ Cómo usar la app

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/voto-vivo.git
   cd voto-vivo
2. Abrir el archivo index.html en tu navegador.
¡Listo! Ya podés comenzar a votar y ver los resultados en tiempo real.

---

## 📄 Documentación IA
La aplicación fue diseñada con el apoyo de ChatGPT, usando prompts específicos para:
- Diseño de UI moderna.
- Lógica de lectura/escritura en localStorage.
- Generación de gráficas en tiempo real.
- Explicación teórica sobre bases de datos NoSQL vs SQL.
- Todos los prompts utilizados y sus resultados se documentan en la carpeta ./documentacion.

---

## 📊 Justificación académica
El sistema simula una base de datos No Relacional, utilizando localStorage para registrar estructuras de datos tipo JSON. Se hace énfasis en cómo los datos no estructurados pueden leerse y presentarse en vivo, sin necesidad de backend, conectando así teoría con práctica.

---

## 📸 Capturas
📍 (Acá se pueden insertar imágenes del sistema en funcionamiento)

---

## 📢 Licencia
Proyecto académico sin fines de lucro. Todos los derechos reservados al grupo de trabajo.
