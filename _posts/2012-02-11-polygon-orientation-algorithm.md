---
layout: post
title: Determine orientation of a polygon
category: algorithms
---

In [this](http://keenhenry.me/polygon-area-algorithm/) article, I explained the by-product of calculating area is
an indication of polygon orientation. However, if you only want to calculate orientation, calculating area to obtain
polygon orientation is overkill and not efficient, since it computes the area of every triangle formed by each edge 
of the polygon. That is at least `O( |E| * |time to calculate triangular area| )`.

How can we do better?

The concept is fairly simple. You only need two edges (they are vectors in __vector__ __graphics__) of a polygon to 
determine its orientation. However, you can't just pick any two edges; they have to be neighbors and the vertex that
connects them has to be either the highest, lowest, rightmost, or leftmost point on the polygon. This is because, a
local orientation pattern cannot represent the orientation of the polygon as a whole. Make an example to convince
yourself this is true.

Therefore, the algorithm is to find the highest point first, which is `O( |V-1| )`. Then, test the orientation of the
entering and leaving edges at this highest point. If the end vertex of the leaving edge is to the left of the entering
edge, then this polygon is counterclockwise. In addition, the test can be easily performed by some simple matrix arithmetics
(this is where linear algebra comes handy). 

The time complexity then reduces to `O( |V-1| ) + |time to calculate orientation|`. If the implementation of calculating 
orientation of two vectors is careful, it could be a lot faster.
