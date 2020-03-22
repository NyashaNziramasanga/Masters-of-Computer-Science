# Loops

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

## While loops

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
