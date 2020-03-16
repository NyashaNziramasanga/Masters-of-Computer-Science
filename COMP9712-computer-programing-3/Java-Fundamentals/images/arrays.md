# Arrays

Used to store a list of something, arrays are `reference types` so use new

```java
import java.util.Arrays;

...

int[] numbers = new int[5];
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
- `Arrays.toString(numbers)` - By Default java returns the address of the string in the memory allocation, use `Arrays` class and access methode `toString()` and will return the string representation of the array
