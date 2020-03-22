# Loops

- [For loop](##For%20loop)
- [While loop](##While%20loop)
- [Do While loop](##Do%20While20%loop)
- [For-Each loop](##For-Each%20loop)

## For loop

Used when we **know** how many iterations

```java
for (int i = 0; i < 5; i++){
  ...
}
```

- `int i = 0` - Initialize `i` to 0
- `i < 5` - Evaluates condition
- `i++` - Iterates by 1

## While loop

Used when we **don't know** how many iterations

```java
// While i is less than 0 do something

int i = 0;

while ( i > 0){
  ...
  i--
}
```

## Do While loop

Executed once when true

```java
// While i is less than 0 do something

do {
  System.out.print("Input: ");
  input = scanner.next().toLowerCase();
  System.out.println(input);

} while (!input.equals("quit"));
```

Tips:

- If using `while(true)` loop always include a `break` statement
- `continue` goes back to start of loop and starts again
- `break`

## For-Each loop

Iterate over arrays or collections

```java
String[] fruits  = { "Apple", "Mango", "Orange"};

// Declare a String variable of fruit and include fruits array
for (String fruit : fruits){
  System.out.println(fruit);
}
```
