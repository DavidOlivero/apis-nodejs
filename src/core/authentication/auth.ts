import JWT, { StrategyOptions } from "passport-jwt";
import { PassportStatic } from "passport";

const JwtStrategy = JWT.Strategy
const ExtractJwt = JWT.ExtractJwt;

export const authenticaton = (passport: PassportStatic) => {
  // Este objeto equivale a la configuración de la estrategia
  const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: 'davidDev2025*'
  }

  // Entra acá si el token coincido con el password en la configuración
  passport.use(new JwtStrategy(opts, (decoded, done) => {
    console.log('Decoded JWT', decoded)
    return done(null, decoded)
  }))
}

