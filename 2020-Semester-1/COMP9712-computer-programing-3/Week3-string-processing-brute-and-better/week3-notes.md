# String Algorithms Brute-Force

Table of Contents

- [Exact String Matching (ESM)](<##Exact%20String%20Matching%20(ESM)>)
- [Approximate String matching](##Approximate%20String%20matching)
- [Text Compression](##Text%20Compression)
- [Exact String Matching Algorithms](##Exact%20String%20Matching%20Algorithms)
  - [1. Simple String Equality](###1.%20Simple%20String%20Equality)
  - [2. “Naive” Exact String Matching](###2.%20“Naive%20Exact%20String%20Matching)
- [Better String Matching](##Better%20String%20Matching)
- [Preprocessing the Pattern](##Preprocessing%20the%20Pattern)
  - [3. Boyer-Moore Algorithm](###3.%20Boyer-Moore%20Algorithm)
  - [4. Knuth-Morris-Pratt (KMP) Algorithm](<###4.%20Knuth-Morris-Pratt%20(KMP)%20Algorithm>)
  - [5. Karp-Rabin](###5.%20Karp-Rabin)

---

`String` - Sequence of discrete symbols, array of characters

## Exact String Matching (ESM)

Does string contain the exact value from pattern e.g. Database lookup, text editor search, web search engines

```java
// String
GCTACTTCGCATATTACAGATCGCTACATTACG

// Contain substring exactly like?
TACAG
```

## Approximate String matching

Does substring contain an approximate string match

```java
// String
GCTACTTCGCATATTACAGATCGCTACATTACG

// Contain substring almost like?
TACAGATGC
```

```java
// In Java use, String equals for typed string
String.equals('String')
```

## Text Compression

Efficiently encode a file for transmission

### Applications for String Algorithms

- Search Engines
- Database Search
- Data retrieval
- Predictive Text

## Exact String Matching Algorithms

- Simple String equality
- “Naive” Exact String Matching
- Boyer-Moore Algorithm
- Knuth-Morris-Pratt Algorithm
- Rabin-Karp

### 1. Simple String Equality

Loop through every item/index of the pattern and target till you return false

Example:

Does pattern `approach` equal to target `approval`

```java
for (int i = 0; i < n; i++) {
  if (a[i] != b[i]) {
    return false;
    }
  }
return true;
```

### 2. “Naive” Exact String Matching

- Match first string using `indexOf` then check the proceeding string values, if fail try again from the next index
- **Brute force algorithm**

**Criteria for using Brute-Force**:

- There are only a finite number of possible solutions to a problem
- There is a way to generate each possible solution one after another
- You have an effective way to test whether a particular candidate
  solution does in fact solve your particular problem

`“fragrance”.indexOf(“ran”)`

Example:

Find pattern `ran` inside target `fragrance`

```java
m = [ran]
n = [fragrance]
for ( int i = 0; i <= n - 1; i++ ) {
  int j = 0 ;
  while ( ( j < m ) && ( T[ i + j ] == P[ j ] ) ) {
    j++;
  }
  if ( j == m ) {
      return i;
    }
  }
return -1;
```

---

## Better String Matching

- **Off-line** preprocess the target beforehand (sorting) to make it easier to search for patterns
- **On-line** We cant preprocess the target because the target changes all the time

Examples of On-line algorithms:

- Boyer-Moore Algorithm
- Knuth-Morris-Pratt (KMP)
- Karp-Rabin

## Preprocessing the Pattern

- Store information about where particular characters occur
- Patterns may have repeated sub-patterns

### 3. Boyer-Moore Algorithm

**Looking-glass heuristic**: Compare P with a subsequence of T moving backwards (Start at the end and move backwards)

**Character-jump heuristic** - When a mismatch occurs at T[i] = c

- If P contains c, shift P to align the last occurrence of c in P with T[i]
- Else, shift P to align P[0] with T[i + 1]

![boyer-moore-strings-search](images/boyer-moore-strings-search.gif)

last occurrence table, fir each char of the alphabet, store its last occurrence from left to right in the pattern, thus tells us where to shit to

![last-occurrence-table](images/last-occurrence-table.png)
stored as hashmap

![boyer-moore-algorithm](images/boyer-moore-algorithm.png)

![boyer-moore-algorithm2](images/boyer-moore-algorithm2.png)

### 4. Knuth-Morris-Pratt (KMP) Algorithm

Pattern matching algorithm use case searching a word in a word doc

Improved on brute force, time complexity worst case `O(n * m)`

Failure table/Prefix table indicates the number of skips we can make if there are similar patterns has a space complexity of `O (m)`

![kmp-string-search-algorithm](images/kmp-string-search-algorithm.gif)

### 5. Karp-Rabin

makes use of hash functions and the rolling hash technique. A hash function is essentially a function that maps one thing to a value. In particular, hashing can map data of arbitrary size to a value of fixed size

Calculate hash values of string and if hashes match compare string values

### Algorithm Comparison

![algorithm-comparison](images/algorithm-comparison.png)

## Resources

- [Algorithm Visualisations](https://people.ok.ubc.ca/ylucet/DS/KnuthMorrisPratt.html)
