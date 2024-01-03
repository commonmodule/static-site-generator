import TreeNode from "./TreeNode.js";
export class TextNode extends TreeNode {
    text;
    constructor(text) {
        super();
        this.text = text;
    }
    build() {
        return this.text;
    }
}
export default class DomNode extends TreeNode {
    tag;
    children = [];
    attributes = {};
    _classes = "";
    constructor(tag) {
        super();
        this.tag = tag;
    }
    appendText(text) {
        if (this.tag.indexOf("textarea") !== -1) {
            this.append(new TextNode(text));
        }
        else {
            const strs = text.split("\n");
            for (const [index, str] of strs.entries()) {
                if (index > 0) {
                    this.append(new TextNode("<br>"));
                }
                this.append(new TextNode(str));
            }
        }
        return this;
    }
    set text(text) {
        this.empty().appendText(text);
    }
    append(...nodes) {
        for (const node of nodes) {
            if (typeof node === "string") {
                this.appendText(node);
            }
            else if (node !== undefined) {
                node.appendTo(this);
            }
        }
        return this;
    }
    addClass(className) {
        if (!this.hasClass(className)) {
            this._classes += ` ${className}`;
        }
    }
    deleteClass(className) {
        let classesArray = this._classes.split(" ");
        classesArray = classesArray.filter((classItem) => classItem !== className);
        this._classes = classesArray.join(" ");
    }
    hasClass(className) {
        const classesArray = this._classes.split(" ");
        return classesArray.includes(className);
    }
    setAttribute(name, value) {
        this.attributes[name] = value;
    }
    removeAttribute(name) {
        delete this.attributes[name];
    }
    clone() {
        const dom = new DomNode(this.tag);
        dom.attributes = structuredClone(this.attributes);
        dom._classes = this._classes;
        for (const child of this.children) {
            dom.append(child.clone());
        }
        return dom;
    }
    build() {
        let tag = this.tag;
        let id;
        const idIndex = tag.indexOf("#");
        if (idIndex !== -1) {
            id = tag.substring(idIndex + 1);
            tag = tag.substring(0, idIndex);
            const cindex = id.indexOf(".");
            if (cindex !== -1) {
                tag += id.substring(cindex);
                id = id.substring(0, cindex);
            }
        }
        let className = this._classes === ""
            ? undefined
            : this._classes;
        const classNameIndex = tag.indexOf(".");
        if (classNameIndex !== -1) {
            className = tag.substring(classNameIndex + 1).replace(/\./g, " ");
            tag = tag.substring(0, classNameIndex);
        }
        if (tag === "") {
            tag = "div";
        }
        let html = `<${tag}`;
        if (id !== undefined)
            html += ` id="${id}"`;
        if (className !== undefined)
            html += ` class="${className}"`;
        for (const [name, value] of Object.entries(this.attributes)) {
            html += ` ${name}="${value}"`;
        }
        html += ">";
        for (const child of this.children) {
            html += child.build();
        }
        html += `</${tag}>`;
        return html;
    }
}
//# sourceMappingURL=DomNode.js.map