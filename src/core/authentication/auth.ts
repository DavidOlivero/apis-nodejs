import JWT, { StrategyOptions } from "passport-jwt";
import { PassportStatic } from "passport";

const JwtStrategy = JWT.Strategy // Estrategia de JWT
const ExtractJwt = JWT.ExtractJwt // Objeto para extraer el token de los headers

export const authenticaton = (passport: PassportStatic) => {
  // Este objeto equivale a la configuración de la estrategia
  const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: 'DavidDev2025*'
  }

  // Entra acá si el token coincido con el password en la configuración
  passport.use(new JwtStrategy(opts, (decoded, done) => {
    return done(null, decoded)
  }))
}

