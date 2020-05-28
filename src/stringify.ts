import { Node } from "https://raw.githubusercontent.com/DenoBRComunitty/domhandler/master/mod.ts";
import { isTag, isCDATA, isText, hasChildren } from "./tagtypes.ts";
import { DomSerializerOptions } from "https://raw.githubusercontent.com/DenoBRComunitty/dom-serializer/master/mod.ts";
import render from "https://raw.githubusercontent.com/DenoBRComunitty/dom-serializer/master/mod.ts";

export function getOuterHTML(
    node: Node | Node[],
    options?: DomSerializerOptions
): string {
    return render(node, options);
}

export function getInnerHTML(
    node: Node,
    options?: DomSerializerOptions
): string {
    return hasChildren(node)
        ? node.children.map((node: any) => getOuterHTML(node, options)).join("")
        : "";
}

export function getText(node: Node | Node[]): string {
    if (Array.isArray(node)) return node.map(getText).join("");
    if (isTag(node)) return node.name === "br" ? "\n" : getText(node.children);
    if (isCDATA(node)) return getText(node.children);
    if (isText(node)) return node.data;
    return "";
}
