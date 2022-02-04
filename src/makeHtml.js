import { writeFile } from "fs/promises";
import { FileToNumber } from "./intake";
import path from "path";

const INDEX = "./dist/indexhtml";
const PATH = "./dist";

export async function makeHtml() {
  const title = `Verkefni 1`;

  const filename = `index.html`;
  const data = `<!DOCTYPE html>
    <html lang="is">
    <head>
        <meta charset="UTF-8">
        <title>${title}</title>
    </head>
    <body>
        <div>Halló balló heimur</div>
        <div class="timi">Uppfært:${new Date().toISOString()}</div>
    </body>
    </html>
    `;
  try {
    const result = await writeFile(`./dist/${filename}`, data, { flag: `w+` });
  } catch (e) {
    console.error(`Failed to create ${filename}`, e);
  }
}
makeHtml().catch((e) => {
  console.log(`Error occured`, e);
});
