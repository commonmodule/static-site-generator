import FileUtil from "./util/FileUtil.js";

export default async function generate(
  path: string,
  domNode: { build: () => string },
) {
  await FileUtil.write(path, domNode.build());
}
