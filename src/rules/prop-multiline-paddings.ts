import {
  ObjectExpression,
  ObjectLiteralElement,
  Property,
  Node,
} from "@typescript-eslint/types/dist/generated/ast-spec";
import { ESLintUtils } from "@typescript-eslint/utils";

const isObjectExpression = (node: Node): node is ObjectExpression =>
  node.type === "ObjectExpression";

const rule = ESLintUtils.RuleCreator.withoutDocs({
  create(ctx) {
    return {
      Property: (node) => {
        if (node.loc.start.line === node.loc.end.line) return;

        if (!isObjectExpression(node.parent)) return;

        const prevProp = node.parent.properties[
          node.parent.properties.indexOf(node) - 1
        ] as ObjectLiteralElement | undefined;

        const nextProp = node.parent.properties[
          node.parent.properties.indexOf(node) + 1
        ] as ObjectLiteralElement | undefined;

        if (prevProp && node.loc.start.line - prevProp.loc.end.line < 2) {
          ctx.report({
            messageId: "paddingsBefore",
            node: node,
            fix: (fixer) => fixer.insertTextBefore(node, "\n"),
          });
        }

        if (nextProp && nextProp.loc.start.line - node.loc.end.line < 2) {
          ctx.report({
            messageId: "paddingsAfter",
            node: node,
            fix: (fixer) => fixer.insertTextAfter(node, "\n\n"),
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
