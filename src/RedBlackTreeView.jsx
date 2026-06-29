function TreeNode({ node, highlightedValue }) {
  if (!node) {
    return null;
  }

  const hasChildren = node.left || node.right;
  const colorClass =
    node.color === "RED" ? "red-node" : "black-node";

  const highlightedClass =
    node.value === highlightedValue
      ? "highlighted-node"
      : "";

  return (
    <div className="tree-node-wrapper">
      <div
        className={`rb-node ${colorClass} ${highlightedClass}`}
      >
        {node.value}
      </div>

      {hasChildren && (
        <div className="children">
          <div className="child left-child">
            <TreeNode
              node={node.left}
              highlightedValue={highlightedValue}
            />
          </div>

          <div className="child right-child">
            <TreeNode
              node={node.right}
              highlightedValue={highlightedValue}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function RedBlackTreeView({
  root,
  highlightedValue,
}) {
  if (!root) {
    return <p>Insert a number to create the tree.</p>;
  }

  return (
    <div className="tree-container">
      <TreeNode
        node={root}
        highlightedValue={highlightedValue}
      />
    </div>
  );
}