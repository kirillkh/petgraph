(function() {var implementors = {};
implementors['fixedbitset'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='fixedbitset/struct.FixedBitSet.html' title='fixedbitset::FixedBitSet'>FixedBitSet</a>",];implementors['petgraph'] = ["impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graphmap/struct.GraphMap.html' title='petgraph::graphmap::GraphMap'>GraphMap</a>&lt;N, E&gt;","impl&lt;'a, N: 'a + <a class='trait' href='petgraph/graphmap/trait.NodeTrait.html' title='petgraph::graphmap::NodeTrait'>NodeTrait</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graphmap/struct.Neighbors.html' title='petgraph::graphmap::Neighbors'>Neighbors</a>&lt;'a, N&gt;","impl&lt;'b, T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graphmap/struct.Ptr.html' title='petgraph::graphmap::Ptr'>Ptr</a>&lt;'b, T&gt;","impl&lt;N, E, Ty, Ix: <a class='trait' href='petgraph/graph/trait.IndexType.html' title='petgraph::graph::IndexType'>IndexType</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graph/stable/struct.StableGraph.html' title='petgraph::graph::stable::StableGraph'>StableGraph</a>&lt;N, E, Ty, Ix&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;Ix: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graph/struct.NodeIndex.html' title='petgraph::graph::NodeIndex'>NodeIndex</a>&lt;Ix&gt;","impl&lt;Ix: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graph/struct.EdgeIndex.html' title='petgraph::graph::EdgeIndex'>EdgeIndex</a>&lt;Ix&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, Ix: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='petgraph/graph/trait.IndexType.html' title='petgraph::graph::IndexType'>IndexType</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graph/struct.Node.html' title='petgraph::graph::Node'>Node</a>&lt;N, Ix&gt;","impl&lt;E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, Ix: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='petgraph/graph/trait.IndexType.html' title='petgraph::graph::IndexType'>IndexType</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graph/struct.Edge.html' title='petgraph::graph::Edge'>Edge</a>&lt;E, Ix&gt;","impl&lt;N, E, Ty, Ix: <a class='trait' href='petgraph/graph/trait.IndexType.html' title='petgraph::graph::IndexType'>IndexType</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graph/struct.Graph.html' title='petgraph::graph::Graph'>Graph</a>&lt;N, E, Ty, Ix&gt; <span class='where'>where N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;'a, E, Ix&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graph/struct.Neighbors.html' title='petgraph::graph::Neighbors'>Neighbors</a>&lt;'a, E, Ix&gt; <span class='where'>where Ix: <a class='trait' href='petgraph/graph/trait.IndexType.html' title='petgraph::graph::IndexType'>IndexType</a></span>","impl&lt;'a, E, Ix&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graph/struct.Edges.html' title='petgraph::graph::Edges'>Edges</a>&lt;'a, E, Ix&gt; <span class='where'>where Ix: <a class='trait' href='petgraph/graph/trait.IndexType.html' title='petgraph::graph::IndexType'>IndexType</a></span>","impl&lt;Ix&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graph/struct.WalkNeighbors.html' title='petgraph::graph::WalkNeighbors'>WalkNeighbors</a>&lt;Ix&gt; <span class='where'>where Ix: <a class='trait' href='petgraph/graph/trait.IndexType.html' title='petgraph::graph::IndexType'>IndexType</a></span>","impl&lt;Ix: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='petgraph/graph/trait.IndexType.html' title='petgraph::graph::IndexType'>IndexType</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graph/struct.WalkEdges.html' title='petgraph::graph::WalkEdges'>WalkEdges</a>&lt;Ix&gt;","impl&lt;Ix: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graph/struct.NodeIndices.html' title='petgraph::graph::NodeIndices'>NodeIndices</a>&lt;Ix&gt;","impl&lt;Ix: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/graph/struct.EdgeIndices.html' title='petgraph::graph::EdgeIndices'>EdgeIndices</a>&lt;Ix&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, VM: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/visit/struct.Dfs.html' title='petgraph::visit::Dfs'>Dfs</a>&lt;N, VM&gt;","impl&lt;'a, G: <a class='trait' href='petgraph/visit/trait.Visitable.html' title='petgraph::visit::Visitable'>Visitable</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/visit/struct.DfsIter.html' title='petgraph::visit::DfsIter'>DfsIter</a>&lt;'a, G&gt; <span class='where'>where <a class='struct' href='petgraph/visit/struct.Dfs.html' title='petgraph::visit::Dfs'>Dfs</a>&lt;G::NodeId, G::Map&gt;: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, VM: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/visit/struct.Bfs.html' title='petgraph::visit::Bfs'>Bfs</a>&lt;N, VM&gt;","impl&lt;'a, G: <a class='trait' href='petgraph/visit/trait.Visitable.html' title='petgraph::visit::Visitable'>Visitable</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/visit/struct.BfsIter.html' title='petgraph::visit::BfsIter'>BfsIter</a>&lt;'a, G&gt; <span class='where'>where <a class='struct' href='petgraph/visit/struct.Bfs.html' title='petgraph::visit::Bfs'>Bfs</a>&lt;G::NodeId, G::Map&gt;: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, VM: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/visit/struct.Topo.html' title='petgraph::visit::Topo'>Topo</a>&lt;N, VM&gt;","impl&lt;N: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>, VM: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/visit/struct.SubTopo.html' title='petgraph::visit::SubTopo'>SubTopo</a>&lt;N, VM&gt;","impl&lt;K: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='petgraph/unionfind/struct.UnionFind.html' title='petgraph::unionfind::UnionFind'>UnionFind</a>&lt;K&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='petgraph/enum.EdgeDirection.html' title='petgraph::EdgeDirection'>EdgeDirection</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='petgraph/enum.Directed.html' title='petgraph::Directed'>Directed</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='petgraph/enum.Undirected.html' title='petgraph::Undirected'>Undirected</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()