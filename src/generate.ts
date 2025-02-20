import fs from "fs/promises";

export default async function generate(pages: { [path: string]: string }) {
  for (const [path, content] of Object.entries(pages)) {
    await fs.writeFile(path, content);
  }
}
