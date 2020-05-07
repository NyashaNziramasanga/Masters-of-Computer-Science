/**
 * Graph Algorithm
 **/

// List of airports
const airports = 'MEL SYD HBA ADL PER DRW'.split(' ');

// List of routes
const routes = [
  ['MEL', 'ADL'],
  ['SYD', 'HBA'],
  ['HBA', 'ADL'],
  ['PER', 'DRW'],
  ['MEL', 'SYD'],
  ['HBA', 'MEL'],
  ['SYD', 'HBA'],
  ['PER', 'HBA'],
  ['SYD', 'ADL'],
  ['DRW', 'SYD'],
];

// The graph
const adjacencyList = new Map();

// Add node to the graph with an empty array
const addNode = (airport) => {
  adjacencyList.set(airport, []);
};

// Add edge, undirected
const addEdge = (originAirport, destinationAirport) => {
  // Grab the origin airport and push it onto the adjacency list
  adjacencyList.get(originAirport).push(destinationAirport);
  adjacencyList.get(destinationAirport).push(originAirport);
};

// Create the Graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

// Show Adjacency list in console
// console.log('Graph', adjacencyList);

/**
 * @desc  Breath First Search Algorithm
 * @param startAirport airport which is starting of at i.e. SYD
 * @param searchAirport airport being searched for i.e. MEL
 **/
const bfs = (startAirport, searchAirport) => {
  // Check if airport is visited
  const visited = new Set();

  const queue = [startAirport];

  let steps = 0;

  while (queue.length > 0) {
    steps++;
    //Mutates queue
    const airport = queue.shift();

    // Grab all the edges in the graph/ destinations
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === searchAirport) {
        console.log(
          `✅Found a flight from ${startAirport} airport ====> ${searchAirport} airport`
        );
        console.log(`Found in ${steps} steps`);
      }

      // Check if airport exists in the visited set
      if (!visited.has(destination)) {
        visited.add(destination);
        // Add to queue
        queue.push(destination);
      }
    }
  }
};
// Run breath first search
bfs('SYD', 'MEL');

/**
 * @desc  Depth First Search Algorithm
 * @param startAirport airport which is starting of at i.e. SYD
 * @param searchAirport airport being searched for i.e. MEL
 * @param visited
 **/
const dfs = (startAirport, searchAirport, visited = new Set()) => {
  // console.log(startAirport);

  let steps = 0;

  visited.add(startAirport);

  const destinations = adjacencyList.get(startAirport);

  for (const destination of destinations) {
    steps++;
    if (destination === searchAirport) {
      console.log(
        `✅Found a flight from ${startAirport} airport ====> ${searchAirport} airport`
      );
      console.log(`Found in ${steps} steps`);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, searchAirport, visited);
    }
  }
};

// Run breath first search
// dfs('SYD', 'MEL');
