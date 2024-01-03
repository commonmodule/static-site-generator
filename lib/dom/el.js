import StaticDomNode, { TextNode } from "./StaticDomNode.js";
const el = (tag, ...children) => {
    const domNode = new StaticDomNode(tag);
    for (const child of children) {
        if (typeof child === "string") {
            domNode.appendText(child);
        }
        else if (child instanceof StaticDomNode || child instanceof TextNode) {
            domNode.append(child);
        }
        else if (typeof child === "object") {
            for (const [name, value] of Object.entries(child)) {
                if (value) {
                    domNode.setAttribute(name, value);
                }
            }
        }
    }
    return domNode;
};
export default el;
//# sourceMappingURL=el.js.map