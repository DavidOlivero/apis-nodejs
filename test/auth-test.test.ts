import { describe, it, expect } from "vitest";
import request, { Response } from "supertest";
import { app } from "../src/app.js";
import { DefaultUser } from "@/domain/const/default-user.const.js";
import { UserController } from "@/useCases/user.js";

describe('Suite de test para la authenticacion', () => {
  it('It should return 401 because the user has not been authenticated.', async () => {
    // El servido sabe qué tiene que hacer pero el usuario no está autenticado correctamente
    const response: Response = await request(app).get('/team');
    expect(response.status).equal(401)
  })

  it('It should return 200 because the JWT is valid.', async () => {
    // Primero debemos logear al usuario para obtener el token
    await new UserController(DefaultUser).registerUser()
    const loginResponse: Response = await request(app).post('/auth/login').send(DefaultUser);

    // Luego comprobamos si el JWT del usuario es válido
    const response: Response = await request(app).get('/team').set('Authorization', `JWT ${loginResponse.body.token}`);
    expect(response.status).equal(200)
  })
})
