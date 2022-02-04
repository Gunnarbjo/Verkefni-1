import { readFile } from "fs/promises";
import { join } from "path";

const FILE_LOCATION = "./data";

export async function FileToNumber(file) {
  const locat = join(FILE_LOCATION, file);
  const data = await readFile(locat);
  const dataString = data.toString("utf-8");

  return dataString;
}
for (let index = 1; index < data.length; index++) {
    const texti = data[index];
    
}
/* 
const arrayFile = array.filter((value) => !Number.isNaN(value));
const numberObject = (name: file, data: arrayFile)
return numberObject;*/
