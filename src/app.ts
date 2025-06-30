import express from "express";
import passport from "passport";
import { authenticaton } from "./core/authentication/auth.ts";
import { UserController } from "./controlers/user.ts";
import { DefaultUser } from "./domain/const/default-user.const.ts";
import router from "./entities/router.ts";

authenticaton(passport) // Establecer la estrategia de logeo
export const app = express() // Instancia el objeto de express
app.use(express.json()) // Middleware para parsear objetos
const PORT = 3000

// Router
app.use('/pokeapi', router)

// Registar usuario por defecto
new UserController(DefaultUser).registerUser()

app.get('/', (_req, res) => {
  // req hace alución a la petición del cliente. Acá bendran los headers, los query params, los body, etc.
  // res hace referencia a la respuesta que dará el servidor
  res.send('Hello, World!')
})

// Añadir un nuevo pokémon
app.post('/team/pokemons', (_req, res) => {
  res.send('Hello, World!')
})

// Consultar equipo
app.get('/team', passport.authenticate('jwt', { session: false }), (_req, res) => {
  res.send('Hello, World!')
})

// Eliminar un pokemos de mi equipo
app.delete('/team/pokemons/:pokeid', (_req, res) => {
  res.send('Hello, World!')
})

// Cambiar el orden de los pokemon
app.put('/team', (_req, res) => {
  res.send('Hello, World!')
})

// El método listen mantiene el servido abierto para recibir y enviar peticiones
app.listen(PORT, () => console.log('Server stated at http://localhost/3000'))

