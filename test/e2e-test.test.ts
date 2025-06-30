// Las pruebas end 2 end son aquellas que simulan el comportamiento de un usuario del sistema
import { describe, it, expect } from "vitest";
import { app } from "../src/app.js";
import request from "supertest";
import { Response } from "supertest";

describe('Suite de tests e2e para el curso', () => {
  it('should return Hello, World!', async () => {
    const res: Response = await request(app).get('/')
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello, World!')
  });
});

