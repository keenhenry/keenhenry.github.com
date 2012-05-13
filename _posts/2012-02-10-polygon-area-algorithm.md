---
layout: post
title: Compute the area of a Simple Polygon
category: [notes, algorithms]
---

Polygon geometry is used heavily in my job. And just last week, I had to solve a problem which needed to calculate the
orientation (clockwise or counter-clockwise) of vertices in a polygon efficiently. 

I delved into the problem a bit and found that calculating the area of a polygon can also solve the problem. Although 
this is not the most efficient algorithm for determining vertices orientation, it is exactly what [SpatiaLite](https://www.gaia-gis.it/fossil/libspatialite/index) 
implemented to determine the orientation of a polygon.

So let's talk about the ideas behind this algorithm.

Here I am talking about 2D Polygons. A 2D polygon can be decomposed into triangles. And the area of the polygon is the sum 
of areas of all the decomposed triangles. However, since we are in a vector space, the areas of triangles can be positive or
negative or zero (if co-linear). If the sum of areas is positive, then the polygon is counter-clockwise, otherwise, it is clockwise.

It sounds weird when you first hear it. But if you know some linear algebra, you would probably know that the area of a
triangle is the cross product of any two edges, which results in a vector with the magnitude of the cross product and
the direction perpendicular to the surface spanned by the two edges of the triangle. If these two edges are
in counter-clockwise orientation, then the resulting 'area' vector is positive, and, negative if the other way around. This is 
why you can use the 'area vector' to determine orientation of a geometry.

[Here](http://softsurfer.com/Archive/algorithm_0101/algorithm_0101.htm) is some more detailed explanations, which might 
refresh your high school geometry memory.
