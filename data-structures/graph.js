/*
Graphs

-Vertex or Nodes connected (Edge or Connection). Vertex can be connected
 in multiple directions.
 -They can be use to find the most efficient route between two places/servers/etc
 -If there are no arrows (graphically), it means that its a bidirectional edge/connection
  between two vertex. Not just one way (ex. Being friend with someone on facebook)

For example:
 -Binary trees is a type of Graph
 -Linked lists is a type of Graph

Disclaimer:
 -In this course all edges will be bidirectional and won't be weigthed

Representations:
 -We can represent a graph as "Adjacency Matrix". If all connections are bidirections, then the matrix
  will be a simetric one (mirror image).
 -We can also use a "Adjacency List" to represent it. We store in an Object.
  For example:
    {
        A: ['B', 'E'],
        B: ['A', 'C'],
        C: ['B', 'F'],
    }

Depending what actions need to be done, we could should choose one or the other. Also because they
have different Big(O).
    -For adding a Vertex, the list has O(1), while the matrix has O(V^2) as it will depend ong the amount
     of already existed vertex.
    -Making a connection is O(1) in both.
    -Removing an edge in lists has O(n -> being the num of edges we need to iterate through), while in a matrix is O(1)
    -Removing a Vertex in a list is easy, the problem is having to check each vertex to check if it was connected or not, and remove it from there too.
     With a matrix is also going to be ineficient

The problem with the matrix is that we are storing a lot of 0's.
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    //We can't have duplicate vertex
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      //Removing vertex 2 value from vertex 1
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
      );
      //Removing vertex 1 value from vertex 2
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
      );

      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    //In this case we are concidering all edges bidirectional, so its easier to remove the edges when
    //deleting a vertex
    if (!this.adjacencyList[vertex]) return undefined;

    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];

    return this;
  }
}
