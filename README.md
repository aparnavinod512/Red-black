# Red-Black Tree Visualizer

A React-based interactive web app that visualizes how a red-black tree works and how it keeps itself balanced after every insertion. This project is designed to make complex data structure concepts easier to understand through an interactive UI.

## Project Overview

A red-black tree is a self-balancing binary search tree used in many computer science applications where fast search, insertion, and deletion are important. This project demonstrates the core idea of balancing rules using a simple and visual interface.

The app allows users to insert values, search for values, and reset the tree while observing the structure change in real time. Each node is color-coded to show whether it is red or black, helping learners understand the balancing mechanism.

## Why This Project Is Important

This project is useful for:

- Learning data structures in a visual and interactive way
- Understanding how self-balancing trees maintain performance
- Showing practical implementation of tree rotation and recoloring logic
- Building a strong foundation for computer science and interview preparation

## Key Features

- Insert numbers into the tree
- Search for existing values
- Automatically balance the tree after insertion
- Visualize red and black nodes clearly
- Reset the tree anytime
- Simple and beginner-friendly UI

## Project Files

The main files in this project are:

- [src/App.jsx](src/App.jsx) - Main app component with input controls and tree actions
- [src/RedBlackTree.js](src/RedBlackTree.js) - Core red-black tree logic, including insertion, rotations, and search
- [src/RedBlackTreeView.jsx](src/RedBlackTreeView.jsx) - Recursive component for rendering the tree visually
- [src/App.css](src/App.css) - Styling for the user interface
- [package.json](package.json) - Project dependencies and scripts

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## How to Run the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal in your browser.

## How It Works

When a value is inserted:

- The value is placed into the binary search tree structure
- The tree checks for red-black rule violations
- Rotations and recoloring are applied to restore balance
- The updated structure is displayed visually

This helps users understand how red-black trees maintain efficient performance compared to ordinary binary search trees.

## Future Improvements

Possible enhancements include:

- Delete operation support
- Step-by-step animation of balancing rules
- Highlighting the exact rotation being applied
- Support for larger and more complex tree operations

## Conclusion

This project combines algorithmic thinking, data structures, and UI development in one place. It is a strong example of how educational projects can make complex computer science concepts easier to understand and more engaging.
