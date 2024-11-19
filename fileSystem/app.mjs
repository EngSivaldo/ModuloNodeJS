import { readFile } from 'node:fs/promises';


async function readTextFile(filePath) {
  try {
    const recipe = await readFile(filePath, {encoding: 'utf-8'});
    console.log(recipe);
    
  } catch (error) {
    console.error('Erro na leitura do arquivo!');
    
  }
  
}

readTextFile('./receita.txt');