import jwt from 'jsonwebtoken';

function jwtTokens({ user_id, user_name, user_email, user_birthdate, user_country, user_isagreed }) {
  const user = { user_id, user_name, user_email, user_birthdate, user_country, user_isagreed};
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '15m' });
  return ({ accessToken, refreshToken });
}

export {jwtTokens};
