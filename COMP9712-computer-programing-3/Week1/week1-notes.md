# Week 1 - Analysis of Algorithms

## Table of Contents

- [Algorithms](#Algorithms)
- [Big O notation](#Big%20O%20notation)
- [Space time complexity tables](#Space%20time%20complexity%20tables)
- [References](#References)

## Algorithms

An algorithm is an explicit sequence of steps to be
performed in order to solve a problem

### Examples of algorithms

- Search engines
- Database transactions (Sales and inventory)
- Compression algorithms (GIFs, MPEG)

### Choosing an algorithm

When making the decision on which algorithm to choose which are designed to solve the same problem

1. 🎯**Accuracy** - The expected result to reach a high enough accuracy to be acceptable, in speech recognition
2. ⌛**Time Complexity** - How long the algorithm takes to run
3. 💾**Space Complexity** - Amount of disk space or memory an algorithm requires to run

This all depends on the priorities of your algorithm e.g. Speech recognition (IOS siri) prioritizes quick response time over accuracy

### Time Space Complexity

Running empirical tests on the algorithms of different sizes of inputs, and measure the results to figure out the time space complexity

## Big O notation

Used to describe the performance of an algorithm, to determine if the algorithm is going to scale as the input grows larger

## Types of Complexities

| Complexity               | Big O       |
| ------------------------ | ----------- |
| Linear Complexity        | `O (n)`     |
| Logarithmic Complexity   | `O (log N)` |
| Constant Time Complexity | `O (1)`     |
| Quadratic Complexity     | `O (N^2)`   |
| Exponential Complexity   | `O (2^N)`   |

![big-o-time-complexities](images/big-o-time-complexities.png)

### 1.Linear Complexity `O (n)`

As `n` (number of items) grows so does the time grows linearly. Takes one unit of time to loop over each element in an array, used in sequential search's

![linear-complexity-chart](images/linear-complexity.png)

```javascript
const array = ['a', 'b', 'c'];

array.forEach((element) => {
  return element;
});
```

### 2.Logarithmic Complexity `O (log N)`

In a `sorted` array we can use a `binary search` which search's a sorted array by repeatedly dividing the search interval in half.

`Binary Search` - Algorithm halves the size of the problem every time

![logarithmic-complexity-chart](images/logarithmic-complexity.png)

### Example 1: Binary vs Sequential Search

![binary-search-vs-linear-search](images/binary-search-vs-linear-search.gif)

### Example 2 Binary vs Sequential Search

> We have an array of 1 million items
>
> Using binary search : **19 Comparisons**
>
> Using Sequential Search : **1 million Comparisons**

### 3.Constant Time Complexity `O (1)`

Most efficient no matter how big the array is it will always take the same amount of time
e.g. Looking up a element in an array by its index

![constant](images/constant.png)

```java
public void log(int[] numbers){
  // 0(1)
  // Print out the first value in the array
  System.out.println(numbers[0])
}
```

### 4. Quadratic Complexity `O (N^2)`

Where the number of inputs is raised to the power of 2 e.g. Loop within a loop

![quadratic-complexity](images/quadratic-complexity.png)

```javascript
// Double loop
for a in arr:
  for b in arr:
```

### 5. Exponential Complexity `O (2^N)`

Finding every possibility

![exponential-complexity](images/exponential-complexity.png)

## Space time complexity table

![order-of-growth-table](images/order-of-growth.png)

![order-of-growth-chart](images/order-of-growth-chart.png)

## Calculating complexity

1. Examine the code statement-by-statement
2. Apply rules to calculate complexity
3. Then simplify the formula

## Data Structures

- Graphs
- Array List
- Linked Lists
- Dictionary
- Tree

## References

- [Big-O Notation in 100 Seconds (Video)](https://www.youtube.com/watch?v=g2o22C3CRfU)
- [What is O(log n)? Learn Big O Logarithmic Time Complexity (Article)](https://dev.to/nielsenjared/big-o-logarithmic-time-complexity-gng)
