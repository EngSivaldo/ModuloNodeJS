import { totalmem, freemem} from "node:os"

console.log(totalmem() / 1024 / 1024 / 1024);//memoria do pc
console.log(freemem() / 1024 / 1024 / 1024);//memoria do pc

