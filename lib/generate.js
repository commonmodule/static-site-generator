import FileUtil from "./util/FileUtil.js";
export default async function generate(path, domNode) {
    await FileUtil.write(path, domNode.build());
}
//# sourceMappingURL=generate.js.map