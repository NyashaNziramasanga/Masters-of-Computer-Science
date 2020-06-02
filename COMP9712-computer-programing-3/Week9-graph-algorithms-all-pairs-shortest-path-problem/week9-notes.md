# Week9 Graph Algorithms: All pairs shortest path problem

- [Week9 Graph Algorithms: All pairs shortest path problem](#week9-graph-algorithms-all-pairs-shortest-path-problem)
  - [Algorithm Idea](#algorithm-idea)
  - [Track the paths](#track-the-paths)
  - [Route Planning](#route-planning)
    - [Improvements to Dijkstra:](#improvements-to-dijkstra)
      - [Bidirectional Search](#bidirectional-search)
      - [Data Structures (Priority Queues)](#data-structures-priority-queues)
      - [Goal-Directed Search](#goal-directed-search)
      - [Precomputed Cluster Distances](#precomputed-cluster-distances)
      - [Highway Hierarchies](#highway-hierarchies)

---

Work out all the shortest paths in the graph, from any
point to any other point

## Algorithm Idea

- Order all the vertices in a particular (arbitrary) order

![algorithm](images/algorithm.png)

## Track the paths

![track-paths](images/track-paths.png)

---

## Route Planning

- Planning the best route from A to B
- GPS, Google, Bing and others need to:
  - Exact shortest path in a large road network
  - Fast Queries
  - Fast Processing
  - Low space consumption

### Improvements to Dijkstra:

- Bidirectional Search
- Data Structures (Priority Queues)
- Goal-Directed Search
- Precomputed Cluster Distances
- Highway Hierarchies

#### Bidirectional Search

- Dijkstra gives paths from one source to all destinations
- If source and destination is know, Start Dijkstra’s algorithm at both ends (at source and at
  destination), and run them simultaneously
- When the two paths link up, this is the shortest path

![bi-directional search](images/bi-directional-search.png)

- Generally speeds up searching by a factor of more than 2

#### Data Structures (Priority Queues)

- Using a priority queue data structure leads to a complexity of `O (log n)`

#### Goal-Directed Search

#### Precomputed Cluster Distances

#### Highway Hierarchies
