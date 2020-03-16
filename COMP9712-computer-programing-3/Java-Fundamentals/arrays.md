# Arrays

- Used to store a list of something
- Arrays are `reference types` so use `new`
- Arrays are also fixed when they are declared

```java
import java.util.Arrays;

...

int[] numbers = new int[5];
// int[] numbers = {1,2,3,4,5};
numbers[0] = 1;
numbers[1] = 2;

Arrays.toString(numbers);

...
```

## Explanation

- `int[]` - Integer Array
- `numbers` - variable name
- `new int[5]` - new instance because arrays are `reference types`, and `int[5]` declares an integer type and length of array is 5
- `numbers[0] = 1` - First index of array is allocated the value 1
- `Arrays.toString(numbers)` - By Default java returns the address of the string in the memory allocation, use `Arrays` class and access method `toString()` and will return the string representation of the array

## Multi-Dimensional Arrays

```java
// 2 dimensional array with 2 rows and 3 columns
// int[][] numbers = {{1,2,3},{4,5,6}};
int[][] numbers = new int[2][3];

// Access first row and first column and allocate 1
numbers[0][0] = 1;

// Show arrays as strings and not memory location
Arrays.deepToString(numbers)
```
