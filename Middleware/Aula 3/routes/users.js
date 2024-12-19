import express from 'express';
import { users } from '../data.js';

const router = express.Router();

//router === rota unica
router.route('/').get( (req, res) => {
  //todo um processamento antes de entregar a resposta
  res.status(200).send(users);
}).post((req, res) => {
  res.status(200).send('novo post criado');
}).put( (req, res) => {
  res.status(200).send('Post editado');
}).delete((req, res) => {
  res.status(200).send('Post apagado');
});




// router.get('/users', (req, res) => {
//   //todo um processamento antes de entregar a resposta
//   res.status(200).send(users);
// });

// router.post('/users', (req, res) => {
//   res.status(200).send('novo post criado');
// });

// router.put('/users', (req, res) => {
//   res.status(200).send('Post editado');
// });

// router.delete('/users', (req, res) => {
//   res.status(200).send('Post apagado');
// });

export default router;