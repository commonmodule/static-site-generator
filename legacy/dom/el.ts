import StaticDomNode, { Attributes, TextNode } from "./StaticDomNode.js";

export type Child = Attributes | StaticDomNode | TextNode | string | undefined;

const el: (tag: string, ...children: Child[]) => StaticDomNode = (
  tag: string,
  ...children: Child[]
) => {
  const domNode = new StaticDomNode(tag);
  for (const child of children) {
    if (typeof child === "string") {
      domNode.appendText(child);
    } else if (child instanceof StaticDomNode || child instanceof TextNode) {
      domNode.append(child);
    } else if (typeof child === "object") {
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
