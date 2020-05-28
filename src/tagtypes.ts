import { Node, Element, NodeWithChildren, DataNode } from "https://raw.githubusercontent.com/DenoBRComunitty/domhandler/master/mod.ts";
import { ElementType, isTag as isTagRaw } from "https://raw.githubusercontent.com/DenoBRComunitty/domelementtype/master/mod.ts";

export function isTag(node: Node): node is Element {
    return isTagRaw(node);
}

export function isCDATA(node: Node): node is NodeWithChildren {
    return node.type === ElementType.CDATA;
}

export function isText(node: Node): node is DataNode {
    return node.type === ElementType.Text;
}

export function isComment(node: Node): node is DataNode {
    return node.type === ElementType.Comment;
}

export function hasChildren(node: Node): node is NodeWithChildren {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
