---
layout: post
title: B-tree and B+-tree
tags: 
- notes
- data structures
---

B-tree is suitable for find, insert and delete operations, but terrible for next operation or sequential processing.

B+-tree, however, is a variant of B-tree, performs well not only on find, insert and delete operations, but also 
on sequential processing (next operation). This is due to the fact that B-tree stores all the keys in the leaves and 
the entire upper levels are used for indexing (organized as B-tree) the keys in the leaves.
