import StaticDomNode, { Attributes, TextNode } from "./StaticDomNode.js";
export type Child = Attributes | StaticDomNode | TextNode | string | undefined;
declare const el: (tag: string, ...children: Child[]) => StaticDomNode;
export default el;
//# sourceMappingURL=el.d.ts.map