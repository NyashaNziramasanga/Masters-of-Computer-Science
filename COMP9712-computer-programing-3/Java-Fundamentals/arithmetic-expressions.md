# Arithmetic Expressions

- _Multiplication_ and _Division_ is applied first in a multi operator situation e.g. `10 + 3 * 2 = 16`
- Use parenthesis to prioritize operation e.g. `(10 + 3) * 2 = 26`

| Operator | Name           |
| -------- | -------------- |
| %        | modulus        |
| /        | division       |
| \*       | multiplication |
| +        | addition       |
| -        | subtraction    |

## Division

```java
// Return a floating point number by casting double, otherwise without casting a whole number is returned
double result = (double)10 / (double)3;

```

## Increment

- Postfix - `X++` Increments after x
- Prefix - `++X` Increments first

```java
int x = 1;
int y = ++x; // 2
int y = x++; // 1
```

---

## Casting

- `Implicit casting` - Value is automatically allocated to variable
- byte > short > int > long >float > double can be converted

```java
short x = 1;
int y = x + 2;
```

- `Explicit casting` - we want variable to have the exact data type, only done with compatible types

```java
short x = 1;
int y = (int)x + 2;
```
