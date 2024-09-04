---
layout: post
title: Note about Graphein
publishedAt: 2024-08-08 13:30 +0800
# last_modified_at: 2020-10-01 01:08:25 +0800
tags: [pymol, jupyter notebook, chemistry]
toc: true
---

# Modifying parameters on Graphein

So, I had to build a visualisation of the graph representation of a protein and a nanocluster and I stumbed upon the [Graphein package](https://graphein.ai/).

I have to say it is a great package for this purpose. You can build and visualize protein, molecules, RNA graphs, PPI and Gene Regulatory Networks. The visualisation os the graphs are made with plotly so, they are interactive. This is a really nice feature to working with so complex information, such as graph representations.

Well, I needed to change some parameters to make the representation that I wanted but I could not find a way to do it without changing the source code. So, I am going to show in this blog post what I wanted to do and how I solved this situation.

## How to select which types of edges my representation is going to show?

So, I wanted my representation to be less cluttered with information, so I wanted to delete some of the edges shown on the representation. For that I went to the file [config.py](https://github.com/a-r-j/graphein/blob/master/graphein/molecule/config.py) line 75:

```python
    edge_construction_functions: List[Union[Callable, str]] = [
        add_fully_connected_edges,
        add_k_nn_edges,
        add_distance_threshold,
        add_atom_bonds,
    ]
```

and by commeting one of the construction functions, my graph looked much better for the illustration I wanted to create.

```python
    edge_construction_functions: List[Union[Callable, str]] = [
        #add_fully_connected_edges,
        add_k_nn_edges,
        add_distance_threshold,
        add_atom_bonds,
    ]
```

## How to decrease the distance threshold of the interactions?

I also wanted to reduce the distance that some of the interactions would be accounted. So I went to the file [distance.py](https://github.com/a-r-j/graphein/blob/master/graphein/molecule/edges/distance.py) line 50:

```python
def add_distance_threshold(G: nx.Graph, threshold: float = 5.0):
```

and changed the threshold argument:

```python
def add_distance_threshold(G: nx.Graph, threshold: float = 3.0):
```

I could open an issue to ask the developers to add this functionality, and I will think about it. But, as many of us know, it is sometimes hard to keep up with all the requests, so I will show how I did it, in case anyone out there is interested.

I hope this could be useful to you!
