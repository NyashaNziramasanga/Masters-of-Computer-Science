# Methods

Set of code refereed to by name and invoked/called at any point in time

## Method access identifiers:

- **public** - can be accessed from anywhere within the program
- **static** - static method that belongs to a class instead of an object
- **void** - there is no return type

## Example

```java
public class Main {
  public static void main(String[] args){

    // greet
  }

// Public method with no return (void) called greetUser which accepts a param of String name
  public static void greetUser(String name) {
    System.out.println("Hello " + name);
  }
}
```

If returning a value

```java
// Method returns a value
 public static String greetUser(String name) {
   return "Hello " + name;
  }

  String message = greetUser("Nash")
```