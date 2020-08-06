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

---

## Math

```java
// Round up
Math.round(1.1F) //1

// Highest whole integer, might need to cast
(int)Math.ceil(1.1F) //2

// Lowest whole integer, might need to cast
Math.floor(1.1F) //1

// Returns the greater of two values
Math.max(1,2) //2

// Generating a random value between 0 and 1
Math.random()
(int) (Math.random() * 100) //number between 0 and 100
```

## Formatting Numbers

```java
// Use getCurrencyInstance() and store in a NumberFormat currency variable
NumberFormat currency = NumberFormat.getCurrencyInstance()
String result = currency.format(123456.89)
```
