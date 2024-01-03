import TreeNode from "../tree/TreeNode.js";
export interface Attributes {
    [name: string]: string | number | boolean | undefined;
}
export declare class TextNode extends TreeNode {
    text: string;
    constructor(text: string);
    build(): string;
}
export default class StaticDomNode extends TreeNode {
    private tag;
    parent: StaticDomNode | undefined;
    children: StaticDomNode[];
    private attributes;
    private _classes;
    constructor(tag: string);
    appendText(text: string): this;
    set text(text: string);
    append(...nodes: (TreeNode | string | undefined)[]): this;
    addClass(className: string): void;
    deleteClass(className: string): void;
    hasClass(className: string): boolean;
    setAttribute(name: string, value: string | number | boolean | undefined): void;
    removeAttribute(name: string): void;
    clone(): StaticDomNode;
    build(): string;
}
//# sourceMappingURL=StaticDomNode.d.ts.map