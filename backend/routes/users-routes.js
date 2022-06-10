import express from 'express';
import pool from '../db.js';
import bcrypt from 'bcrypt';
import {authenticateToken} from '../middleware/authorization.js';
import { jwtTokens } from '../utils/jwt-helpers.js';


const router = express.Router();

router.get('/', authenticateToken,  async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM users');
    res.json({users : users.rows});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

router.post('/', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.user_password, 10);
    const {user_email} = req.body
    const newUser = await pool.query(
      'INSERT INTO users (user_name,user_email,user_password, user_birthdate, user_country, user_isagreed) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *'
      , [req.body.user_name, req.body.user_email, hashedPassword, req.body.user_birthdate, req.body.user_country, req.body.user_isagreed]);
    const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [user_email]);
    res.json({...user.rows[0], ...(jwtTokens(newUser.rows[0]))});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

router.delete('/', async (req,res)=>{
  try {
    const users = await pool.query('DELETE FROM users');
    res.status(204).json(users.rows);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
})


export default router;
