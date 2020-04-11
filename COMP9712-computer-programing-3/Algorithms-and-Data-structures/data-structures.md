# Data Structures

- [Arrays](##Arrays)
- [ArrayList](##ArrayList)

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

---

## ArrayList

```java
import java.util.ArrayList;
...
// Array list with a generic parameter, type is String
ArrayList<Integer> list = new ArrayList<>();

// Adds 10 to index 0
list.add(10)

// Removes value at index 0
list.remove(0);

// Return the index of value
list.indexOf(10);

// Returns True/False if value is in array
list.contains(20);

// Number of items in the array
list.size();

// Converts list to a regular array
list.toArray();
```
