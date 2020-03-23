# String Algorithms Brute-Force

`String` - Sequence of discrete symbols, array of characters

## Exact string matching

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

## Text compression

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

### 1. Simple String equality

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

### 3. Boyer-Moore Algorithm

### 4. Knuth-Morris-Pratt Algorithm

### 5. Rabin-Karp
