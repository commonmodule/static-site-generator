import fs from "fs/promises";
export default async function generate(pages) {
    for (const [path, content] of Object.entries(pages)) {
        await fs.writeFile(path, content);
    }
}
//# sourceMappingURL=generate.js.map