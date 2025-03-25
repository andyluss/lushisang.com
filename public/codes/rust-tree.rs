
#[derive(Debug)]
struct TreeNode<T> {
    value: T,
    left: Option<Box<TreeNode<T>>>,
    right: Option<Box<TreeNode<T>>>,
}

impl<T> TreeNode<T> {
    fn new(value: T) -> Self {
        TreeNode {
            value,
            left: None,
            right: None,
        }
    }
}

fn pre_order_traversal<T>(root: &Option<Box<TreeNode<T>>>) {
    if let Some(node) = root {
        println!("{}", node.value); // 访问根节点
        pre_order_traversal(&node.left); // 递归遍历左子树
        pre_order_traversal(&node.right); // 递归遍历右子树
    }
}

fn in_order_traversal<T>(root: &Option<Box<TreeNode<T>>>) {
    if let Some(node) = root {
        in_order_traversal(&node.left); // 递归遍历左子树
        println!("{}", node.value); // 访问根节点
        in_order_traversal(&node.right); // 递归遍历右子树
    }
}

fn post_order_traversal<T>(root: &Option<Box<TreeNode<T>>>) {
    if let Some(node) = root {
        post_order_traversal(&node.left); // 递归遍历左子树
        post_order_traversal(&node.right); // 递归遍历右子树
        println!("{}", node.value); // 访问根节点
    }
}

use std::collections::VecDeque;

fn level_order_traversal<T>(root: &Option<Box<TreeNode<T>>>) {
    if let Some(root_node) = root {
        let mut queue = VecDeque::new();
        queue.push_back(root_node);

        while !queue.is_empty() {
            let node = queue.pop_front().unwrap();
            println!("{}", node.value); // 访问当前节点

            if let Some(left) = &node.left {
                queue.push_back(left);
            }
            if let Some(right) = &node.right {
                queue.push_back(right);
            }
        }
    }
}

fn main() {
    // 构建一个简单的二叉树
    let mut root = TreeNode::new(1);
    root.left = Some(Box::new(TreeNode::new(2)));
    root.right = Some(Box::new(TreeNode::new(3)));
    root.left.as_mut().unwrap().left = Some(Box::new(TreeNode::new(4)));
    root.left.as_mut().unwrap().right = Some(Box::new(TreeNode::new(5)));

    println!("Pre-order traversal:");
    pre_order_traversal(&Some(Box::new(root)));

    println!("In-order traversal:");
    in_order_traversal(&Some(Box::new(root)));

    println!("Post-order traversal:");
    post_order_traversal(&Some(Box::new(root)));

    println!("Level-order traversal:");
    level_order_traversal(&Some(Box::new(root)));
}
