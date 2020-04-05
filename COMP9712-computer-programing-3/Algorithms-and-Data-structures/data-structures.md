# Data Structures

- [Arrays](##Arrays)

## Arrays

Used to store a list of items sequentially in memory

| Array function | Big O            |
| -------------- | ---------------- |
| Lookup         | `O (1)` Constant |
| Insert         | `O (n)` Linear   |
| Delete\*       | `O (n)` Linear   |

```java
public static void main(String[] args){
  // Declared an integer array 3 times long
  int[] numbers = new int[3]
  //int[] numbers = {10, 20, 30} Another way to declare array with values

  // Reference first item in array and allocate it to 10
  numbers[0] = 10;

  // Converts memory location to string
  Arrays.toString(numbers)
}
```
