# Qué son los verbos HTTP
- Los verbos HTTP son diferentes acciones que podemos realizar

## Tipos de llamadas
- **Seguras:** No modifica el estado del servidor.
- **Idempotentes:** Se puede realizar la misma acción varias veces seguidas sin que el estado del servidor cambie.
- **Cacheables:** Permiten que el cliente pueda guardar el resultado.

### Verbos HTTP
**GET**
- Se utiliza para solicitar datos de un recurso específico. No debe modificar el estado del servidor (Segura, idempotente, cacheable).

**POST**
- Se utiliza para enviar datos a un servidor para crear un nuevo recurso. Puede modificar el estado del servidor (No segura, no idempotente, no cacheable).

**PUT**
- Se utiliza para actualizar un recurso existente con los datos proporcionados. Es idempotente, lo que significa que realizar la misma operación varias veces tendrá el mismo efecto que hacerlo una sola vez (No segura, idempotente, no cacheable).

**DELETE**
- Se utiliza para eliminar un recurso específico del servidor. Puede modificar el estado del servidor (No segura, idempotente).

**PATCH**
- Se utiliza para aplicar modificaciones parciales a un recurso. A diferencia de PUT, que reemplaza el recurso completo, PATCH solo cambia los datos especificados (No segura, no idempotente).

**HEAD**
- Similar a GET, pero solo solicita los encabezados de la respuesta, sin el cuerpo. Útil para verificar qué datos se recibirían sin transferirlos (Segura, idempotente, cacheable).

**OPTIONS**
- Se utiliza para describir las opciones de comunicación para el recurso de destino. Permite al cliente determinar las capacidades del servidor (Segura, idempotente).

**CONNECT**
- Se utiliza para establecer un túnel hacia el servidor identificado por el recurso de destino. A menudo se utiliza con proxies para establecer conexiones SSL (No segura, no idempotente).

**TRACE**
- Se utiliza para realizar una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino. Permite al cliente ver qué cambios o adiciones se realizan por servidores intermedios (Segura, idempotente).

#### Formas de enviar datso por una petición
- **Query params:** Son datos que se pueden resivir por medio de la URL de la petición.
- **Body:** Permite enviar grandes cantidades de datos por medio del cuerpo de la petición, puede ser en diferentes formatos, el más conocido es el json.
- **Headers:** Permite enviar configuraciones o intrucciones al servido, se suele usar bastante para autorizaciones.

##### Rango de respuestas del servidor
- **Respuestas informativas (100 - 199)**
- **Respuestas satisfactorias (200 - 299)**
- **Redirecciones (300 - 399)**
- **Errores de los clientes (400 - 499)**
- **Errores del servido (500 - 5999)**

**Objetivo de esta API:** Gestionar nuestro equipo Pokémon

# Acciones:
- Identificarnos
- Añadir pokémos a nuestro equipo
- Eliminar pokémos de nuestro equipo
- Consultar información de nuestro pokémon
- Intercambiar el orden de nustro equipo

# REST Design:
- Añadir un Pokémos: POST /team/pokemons
- Consultar Equipo: GET /team
- Eliminar Pokémos: DELETE /team/pokemons/:id
- Intercambiar el orden de nuestros pokémon: PUT /team
- Sistemas de credenciales
