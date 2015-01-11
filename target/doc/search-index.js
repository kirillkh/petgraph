var searchIndex = {};
searchIndex['petgraph'] = {"items":[[0,"","petgraph","**petgraph** is a graph data structure library."],[1,"MinScored","","**MinScored\\<K, T\\>** holds a score **K** and a scored object **T** in\na pair for use with a **BinaryHeap**."],[1,"Directed","","Marker type for a directed graph."],[1,"Undirected","","Marker type for an undirected graph."],[1,"Ptr","","A reference that is hashed and compared by its pointer value."],[2,"EdgeDirection","","Edge direction"],[12,"Outgoing","","A **Outgoing** edge is an outward edge *from* the current node.",0],[12,"Incoming","","An **Incoming** edge is an inbound edge *to* the current node.",0],[10,"fmt","","",1],[10,"clone","","",1],[10,"eq","","",1],[10,"partial_cmp","","",1],[10,"cmp","","",1],[0,"graphmap","","**GraphMap\\<N, E\\>** is an undirected graph where node values are mapping keys."],[1,"GraphMap","petgraph::graphmap","**GraphMap\\<N, E\\>** is an undirected graph, with generic node values **N** and edge weights **E**."],[1,"Nodes","",""],[1,"Neighbors","",""],[1,"Edges","",""],[11,"from","","",2],[11,"edges","","",2],[11,"iter","","",2],[6,"NodeTrait","","A trait group for **GraphMap**'s node identifier."],[10,"clone","","",3],[10,"fmt","","",3],[10,"new","","Create a new **GraphMap**.",3],[10,"with_capacity","","Create a new **GraphMap** with estimated capacity.",3],[10,"node_count","","Return the number of nodes in the graph.",3],[10,"edge_count","","Return the number of edges in the graph.",3],[10,"add_node","","Add node **n** to the graph.",3],[10,"remove_node","","Return **true** if node **n** was removed.",3],[10,"contains_node","","Return **true** if the node is contained in the graph.",3],[10,"add_edge","","Add an edge connecting **a** and **b** to the graph.",3],[10,"remove_edge","","Remove edge from **a** to **b** from the graph and return the edge weight.",3],[10,"contains_edge","","Return **true** if the edge connecting **a** with **b** is contained in the graph.",3],[10,"nodes","","Return an iterator over the nodes of the graph.",3],[10,"neighbors","","Return an iterator over the nodes that are connected with **from** by edges.",3],[10,"edges","","Return an iterator over the nodes that are connected with **from** by edges,\npaired with the edge weight.",3],[10,"edge_weight","","Return a reference to the edge weight connecting **a** with **b**, or\n**None** if the edge does not exist in the graph.",3],[10,"edge_weight_mut","","Return a mutable reference to the edge weight connecting **a** with **b**, or\n**None** if the edge does not exist in the graph.",3],[4,"Item","",""],[10,"next","","",4],[10,"size_hint","","",4],[4,"Item","",""],[10,"next","","",5],[10,"size_hint","","",5],[4,"Item","",""],[10,"next","","",2],[4,"Output","",""],[10,"index","","Index **GraphMap** by node pairs to access edge weights.",3],[4,"Output","",""],[10,"index_mut","","Index **GraphMap** by node pairs to access edge weights.",3],[0,"graph","petgraph","**Graph\\<N, E, Ty\\>** is a graph datastructure using an adjacency list representation."],[1,"NodeIndex","petgraph::graph","Node identifier."],[1,"EdgeIndex","","Edge identifier."],[1,"Node","","The graph's node type."],[11,"weight","","Associated node data.",6],[1,"Edge","","The graph's edge type."],[11,"weight","","Associated edge data.",7],[1,"Graph","","**Graph\\<N, E, Ty\\>** is a graph datastructure using an adjacency list representation."],[1,"WithoutEdges","","An iterator over either the nodes without edges to them or from them."],[1,"Neighbors","","Iterator over the neighbors of a node."],[1,"Edges","","Iterator over the edges of a node."],[3,"toposort","","Perform a topological sort of a directed graph."],[3,"is_cyclic","","Return **true** if the input graph contains a cycle."],[3,"min_spanning_tree","","Return a *Minimum Spanning Tree* of a graph."],[18,"EDGE_END","","An invalid **EdgeIndex** used to denote absence of an edge, for example\nto end an adjacency list."],[10,"hash","","",8],[10,"cmp","","",8],[10,"partial_cmp","","",8],[10,"lt","","",8],[10,"le","","",8],[10,"gt","","",8],[10,"ge","","",8],[10,"eq","","",8],[10,"ne","","",8],[10,"fmt","","",8],[10,"clone","","",8],[10,"hash","","",9],[10,"cmp","","",9],[10,"partial_cmp","","",9],[10,"lt","","",9],[10,"le","","",9],[10,"gt","","",9],[10,"ge","","",9],[10,"eq","","",9],[10,"ne","","",9],[10,"clone","","",9],[10,"fmt","","",9],[10,"clone","","",6],[10,"fmt","","",6],[10,"next_edge","","Accessor for data structure internals: the first edge in the given direction.",6],[10,"clone","","",7],[10,"fmt","","",7],[10,"next_edge","","Accessor for data structure internals: the next edge for the given direction.",7],[10,"source","","Return the source node index.",7],[10,"target","","Return the target node index.",7],[10,"clone","","",10],[10,"fmt","","",10],[10,"new","","Create a new **Graph** with directed edges.",10],[10,"new_undirected","","Create a new **Graph** with undirected edges.",10],[10,"with_capacity","","Create a new **Graph** with estimated capacity.",10],[10,"node_count","","Return the number of nodes (vertices) in the graph.",10],[10,"edge_count","","Return the number of edges in the graph.",10],[10,"is_directed","","Return whether the graph has directed edges or not.",10],[10,"into_edge_type","","Cast the graph as either undirected or directed. No edge adjustments\nare done.",10],[10,"add_node","","Add a node (also called vertex) with weight **w** to the graph.",10],[10,"node_weight","","Access node weight for node **a**.",10],[10,"node_weight_mut","","Access node weight for node **a**.",10],[10,"neighbors","","Return an iterator of all nodes with an edge starting from **a**.",10],[10,"neighbors_directed","","Return an iterator of all neighbors that have an edge between them and **a**,\nin the specified direction.\nIf the graph is undirected, this is equivalent to *.neighbors(a)*.",10],[10,"neighbors_undirected","","Return an iterator of all neighbors that have an edge between them and **a**,\nin either direction.\nIf the graph is undirected, this is equivalent to *.neighbors(a)*.",10],[10,"edges","","Return an iterator over the neighbors of node **a**, paired with their respective edge\nweights.",10],[10,"edges_both","","Return an iterator over the edgs from **a** to its neighbors, then *to* **a** from its\nneighbors.",10],[10,"add_edge","","Add an edge from **a** to **b** to the graph, with its edge weight.",10],[10,"update_edge","","Add or update an edge from **a** to **b**.",10],[10,"edge_weight","","Access the edge weight for **e**.",10],[10,"edge_weight_mut","","Access the edge weight for **e** mutably.",10],[10,"remove_node","","Remove **a** from the graph if it exists, and return its weight.\nIf it doesn't exist in the graph, return **None**.",10],[10,"remove_edge","","Remove an edge and return its edge weight, or **None** if it didn't exist.",10],[10,"find_edge","","Lookup an edge from **a** to **b**.",10],[10,"find_edge_undirected","","Lookup an edge between **a** and **b**, in either direction.",10],[10,"reverse","","Reverse the direction of all edges",10],[10,"raw_nodes","","Access the internal node array",10],[10,"raw_edges","","Access the internal edge array",10],[10,"first_edge","","Accessor for data structure internals: the first edge in the given direction.",10],[10,"next_edge","","Accessor for data structure internals: the next edge for the given direction.",10],[10,"without_edges","","Return an iterator over either the nodes without edges to them or from them.",10],[4,"Item","",""],[10,"next","","",11],[4,"Item","",""],[10,"next","","",12],[4,"Item","",""],[10,"next","","",13],[4,"Output","",""],[10,"index","","Index the **Graph** by **NodeIndex** to access node weights.",10],[4,"Output","",""],[10,"index_mut","","Index the **Graph** by **NodeIndex** to access node weights.",10],[4,"Output","",""],[10,"index","","Index the **Graph** by **EdgeIndex** to access edge weights.",10],[4,"Output","",""],[10,"index_mut","","Index the **Graph** by **EdgeIndex** to access edge weights.",10],[0,"visit","petgraph","Graph visitor algorithms.\n"],[1,"AsUndirected","petgraph::visit","Wrapper type for walking the graph as if it is undirected"],[1,"Reversed","","Wrapper type for walking edges the other way"],[1,"Dfs","","A depth first search (DFS) of a graph."],[11,"stack","","",14],[11,"discovered","","",14],[1,"DfsIter","","An iterator for a depth first traversal of a graph."],[1,"Bfs","","A breadth first search (BFS) of a graph."],[11,"stack","","",15],[11,"discovered","","",15],[1,"BfsIter","","An iterator for a breadth first traversal of a graph."],[2,"Color","","“Color” of nodes used in a regular depth-first search"],[12,"White","","Unvisited",16],[12,"Gray","","Discovered",16],[12,"Black","","Visited",16],[3,"dijkstra","","Dijkstra's shortest path algorithm."],[6,"Graphlike","",""],[17,"NodeId","petgraph::visit::Graphlike",""],[6,"IntoNeighbors","petgraph::visit","A graph trait for accessing the neighbors iterator **I**."],[17,"Iter","petgraph::visit::IntoNeighbors",""],[9,"neighbors","petgraph::visit","",17],[6,"VisitMap","",""],[9,"visit","","Return **true** if the value is not already present.",18],[9,"contains","","",18],[6,"Visitable","","Trait for GraphMap that knows which datastructure is the best for its visitor map"],[17,"Map","petgraph::visit::Visitable",""],[9,"visit_map","petgraph::visit","",19],[6,"ColorVisitable","","Trait for GraphMap that knows which datastructure is the best for its visitor map"],[17,"Map","petgraph::visit::ColorVisitable",""],[9,"color_visit_map","petgraph::visit","",20],[6,"ColorMap","",""],[9,"color","","",21],[9,"visit","","",21],[10,"is_white","","",21],[4,"Iter","",""],[4,"Iter","",""],[4,"Iter","",""],[4,"Iter","",""],[10,"visit","collections::bit","",22],[10,"contains","","",22],[10,"visit","std::collections::hash::set","",23],[10,"contains","","",23],[4,"NodeId","petgraph::visit",""],[4,"Map","",""],[10,"visit_map","petgraph::graph","",10],[4,"NodeId","petgraph::visit",""],[4,"Map","",""],[10,"visit_map","petgraph::graphmap","",3],[4,"NodeId","petgraph::visit",""],[4,"NodeId","",""],[4,"Map","",""],[10,"visit_map","","",24],[4,"Map","",""],[10,"visit_map","","",25],[10,"eq","","",16],[10,"ne","","",16],[10,"clone","","",16],[4,"Map","",""],[10,"color_visit_map","petgraph::graphmap","",3],[4,"Map","petgraph::visit",""],[10,"color_visit_map","petgraph::graph","",10],[10,"is_white","collections::bit","",26],[10,"color","","",26],[10,"visit","","",26],[10,"color","std::collections::hash::map","",27],[10,"visit","","",27],[10,"clone","petgraph::visit","",14],[10,"new","","Create a new **Dfs**, using the graph's visitor map.",14],[10,"next","","Return the next node in the dfs, or **None** if the traversal is done.",14],[10,"clone","","",28],[10,"new","","",28],[4,"Item","",""],[10,"next","","",28],[10,"clone","","",15],[10,"new","","Create a new **Bfs**, using the graph's visitor map.",15],[10,"next","","Return the next node in the dfs, or **None** if the traversal is done.",15],[10,"clone","","",29],[10,"new","","",29],[4,"Item","",""],[10,"next","","",29],[0,"unionfind","petgraph","**UnionFind\\<K\\>** is a disjoint-set data structure."],[1,"UnionFind","petgraph::unionfind","**UnionFind\\<K\\>** is a disjoint-set data structure. It tracks set membership of *n* elements\nindexed from *0* to *n - 1*. The scalar type is **K** which must be an unsigned integer type."],[10,"clone","","",30],[10,"fmt","","",30],[10,"new","","Create a new **UnionFind** of **n** disjoint sets.",30],[10,"find","","Return the representative for **x**.",30],[10,"find_mut","","Return the representative for **x**.",30],[10,"union","","Unify the two sets containing **x** and **y**.",30],[6,"EdgeType","petgraph","A graph's edge type determines whether is has directed edges or not."],[9,"is_directed","","",31],[10,"eq","","",0],[10,"ne","","",0],[10,"fmt","","",0],[10,"clone","","",0],[10,"fmt","","",32],[10,"clone","","",32],[10,"fmt","","",33],[10,"clone","","",33],[10,"is_directed","","",32],[10,"is_directed","","",33],[10,"clone","","",34],[10,"eq","","Ptr compares by pointer equality, i.e if they point to the same value",34],[10,"partial_cmp","","",34],[10,"cmp","","Ptr is ordered by pointer value, i.e. an arbitrary but stable and total order.",34],[4,"Target","",""],[10,"deref","","",34],[10,"hash","","",34],[10,"fmt","","",34]],"paths":[[2,"EdgeDirection"],[1,"MinScored"],[1,"Edges"],[1,"GraphMap"],[1,"Nodes"],[1,"Neighbors"],[1,"Node"],[1,"Edge"],[1,"NodeIndex"],[1,"EdgeIndex"],[1,"Graph"],[1,"WithoutEdges"],[1,"Neighbors"],[1,"Edges"],[1,"Dfs"],[1,"Bfs"],[2,"Color"],[6,"IntoNeighbors"],[6,"VisitMap"],[6,"Visitable"],[6,"ColorVisitable"],[6,"ColorMap"],[1,"BitvSet"],[1,"HashSet"],[1,"AsUndirected"],[1,"Reversed"],[1,"Bitv"],[1,"HashMap"],[1,"DfsIter"],[1,"BfsIter"],[1,"UnionFind"],[6,"EdgeType"],[1,"Directed"],[1,"Undirected"],[1,"Ptr"]]};
initSearch(searchIndex);
