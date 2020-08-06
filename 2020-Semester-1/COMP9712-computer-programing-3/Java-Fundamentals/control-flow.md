# Control Flow

- [Comparison Operators](##Comparison%20Operators)
- [Logical Operator](##Logical%20Operator)
- [If Statements](##If%20Statements)
- [Ternary Operator](##Ternary%20Operator)
- [Switch Statements](##Switch%20Statements)

## Comparison Operators

Return boolean values

| Operator                  | Symbol | meaning      |
| ------------------------- | ------ | ------------ |
| Equality                  | `==`   | Equal to     |
| Inequality                | `!=`   | Not equal to |
| Greater than and equal to | `>=`   |              |
| Less than and equal to    | `<=`   |              |
| Greater than              | `>`    |              |
| Less than                 | `<`    |              |

```java
// Returns true if income is higher than 100K
int income = 120_000;
boolean hasHighIncome = (income>100_000);
```

## Logical Operators

Reads from left to right

| Operator | Symbol                      |
| -------- | --------------------------- |
| And      | `&&`                        |
| OR       | `||`                        |
| NOT      | `!`variable (reverse value) |

Example:

```java
boolean hasHighIncome = true;
boolean hasGoodCredit = true;
boolean hasCriminalRecord = false;

boolean isEligible = (hasHighIncome || hasGoodCredit) && !hasCriminalRecord //!hasCriminalRecord is reversed to true
```

## If Statements

```java
int temp = 32;

if(temp>30){

}
else if (){

}
```

## Ternary Operator

Using `?:` which is `?` - if true execute `:` else do this instead

```java
// If income is greater than 100_000 then return "First" else return "Economy"
int income = 120_000;
String className = income > 100_000 ? "First" : "Economy";
```

## Switch Statements

Execute different parts of the code based on different expressions

```java
String role = "admin";

switch (role) {
  case "admin":
    System.out.println("You are an admin")
    break;

  case "moderator":
    System.out.println("You are an moderator")
    break;

  default:
    System.out.println("You are an guest")
}
```
