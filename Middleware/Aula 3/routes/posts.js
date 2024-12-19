import express from 'express';
import { posts } from '../data.js';


const router = express.Router();

//essa estrutura equivale ao codigo abaixo
router.route('/').get((req, res) => {
  //todo um processamento antes de entregar a resposta
  res.status(200).send(posts);
}).post((req, res) => {
  res.status(200).send('novo post criado');
}).put( (req, res) => {
  res.status(200).send('Post editado');
}).delete((req, res) => {
  res.status(200).send('Post apagado');
});






// router.get('/posts', (req, res) => {
//   //todo um processamento antes de entregar a resposta
//   res.status(200).send(posts);
// });

// router.post('/posts', (req, res) => {
//   res.status(200).send('novo post criado');
// });

// router.put('/posts', (req, res) => {
//   res.status(200).send('Post editado');
// });

// router.delete('/posts', (req, res) => {
//   res.status(200).send('Post apagado');
// });


export default router;