import { app } from "@/app";
import { UserController } from "@/controlers/user";
import { DefaultUser } from "@/domain/const/default-user.const";
import { describe, expect, it } from "vitest";
import request, { Response } from "supertest";

describe('Suite de test para las acciones de los equipos', () => {
  it('Should return the team of the given user', async () => {
    // Primero debemos logear al usuario para obtener el token
    await new UserController(DefaultUser).registerUser()
    const loginResponse: Response = await request(app).post('/auth/login').send(DefaultUser);

    // Luego comprobamos si el JWT del usuario es válido
    const response: Response = await request(app).get('/team').set('Authorization', `JWT ${loginResponse.body.token}`);
    // { trainer: 'David Olivero', team: [Pokemon] }
    expect(response.status).equal(200)
    expect(response.body.trainer).equal('David Olivero')
    expect(response.body.team).equal(['Pokemon', 'Charizar', 'Blastoise'])
  })
})
