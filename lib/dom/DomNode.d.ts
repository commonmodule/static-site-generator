import TreeNode from "./TreeNode.js";
export interface Attributes {
    [name: string]: string | number | boolean | undefined;
}
export declare class TextNode extends TreeNode {
    text: string;
    constructor(text: string);
    build(): string;
}
export default class DomNode extends TreeNode {
    private tag;
    parent: DomNode | undefined;
    children: DomNode[];
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
    clone(): DomNode;
    build(): string;
}
//# sourceMappingURL=DomNode.d.ts.map