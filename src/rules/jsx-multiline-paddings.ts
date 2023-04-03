import {
  JSXChild,
  JSXElement,
  JSXText,
  Node,
} from "@typescript-eslint/types/dist/generated/ast-spec";
import { ESLintUtils } from "@typescript-eslint/utils";

const isMultiline = (node: Node) => node.loc.start.line <= node.loc.end.line;

const isJsxElement = (node: Node): node is JSXElement =>
  node.type === "JSXElement";

const isSingleJsxChild = (node: JSXElement) =>
  node.children.filter((child) => child.type === "JSXElement").length === 1;

const isJSXText = (node: Node): node is JSXText => node.type === "JSXText";

const isPaddingElement = (node: JSXText) => /\n{2,}/.test(node.value);

const isFirstJSXElement = (nodes: Array<JSXChild>, node: JSXElement) => {
  const jsxChild = nodes.filter((child) => child.type !== "JSXText");
  return jsxChild.indexOf(node) === 0;
};

const isLastJSXElement = (nodes: Array<JSXChild>, node: JSXElement) => {
  const jsxChild = nodes.filter((child) => child.type !== "JSXText");
  return jsxChild.indexOf(node) === jsxChild.length - 1;
};

const rule = ESLintUtils.RuleCreator.withoutDocs({
  create(ctx) {
    return {
      JSXElement(node) {
        if (
          !isMultiline(node) ||
          !isJsxElement(node.parent) ||
          isSingleJsxChild(node.parent)
        ) {
          return;
        }
        const prevElement =
          node.parent.children[node.parent.children.indexOf(node) - 1];

        const nextElement =
          node.parent.children[node.parent.children.indexOf(node) + 1];

        if (
          !isFirstJSXElement(node.parent.children, node) &&
          isJSXText(prevElement) &&
          !isPaddingElement(prevElement)
        ) {
          ctx.report({
            messageId: "paddingsBefore",
            node: node,
            fix: (fixer) => fixer.insertTextBefore(node, "\n"),
          });
        }
        if (
          !isLastJSXElement(node.parent.children, node) &&
          isJSXText(nextElement) &&
          !isPaddingElement(nextElement)
        ) {
          ctx.report({
            messageId: "paddingsAfter",
            node: node,
            fix: (fixer) => fixer.insertTextAfter(node, "\n"),
          });
        }
      },
    };
  },
  meta: {
    fixable: "code",
    messages: {
      paddingsBefore: "Add paddings before tag.",
      paddingsAfter: "Add paddings after tag.",
    },
    type: "suggestion",
    schema: [],
  },
  defaultOptions: [],
});

export default rule;
