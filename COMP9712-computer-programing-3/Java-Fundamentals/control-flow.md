# Control Flow

- Comparison operators
- Logical Operator
- If Statements

## Comparison Operators

Return boolean values

| Operator                  | Symbol | meaning      |
| ------------------------- | ------ | ------------ |
| Equality                  | `==`   | Equal to     |
| Inequality                | `!=`   | Not equal to |
| Greater than and equal to | `>=`   |              |
| Less than and equal to    | `<=`   |              |

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
