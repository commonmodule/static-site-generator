import StaticDomNode, { Attributes, TextNode } from "./StaticDomNode.js";
export type Child = Attributes | StaticDomNode | TextNode | string | undefined;
declare const sel: (tag: string, ...children: Child[]) => StaticDomNode;
export default sel;
//# sourceMappingURL=sel.d.ts.map