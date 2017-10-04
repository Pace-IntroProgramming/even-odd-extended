# evenOddExtended()

In this assignment, you will be creating a function **evenOddExtended**.  The input to **evenOddExtended** will be a number.  Your goal is to examine this input and determine whether it is even or odd.  However, before you do that, you first need to check that the input is a positive number.  You will then print the input to the console and whether the input is even or odd.

### Examples:

Input:

```
4
```

Output:
```
You entered 4.
Your number is even!
```
---

Input:

```
3
```

Output:
```
You entered 3.
Your number is odd!
```
---

Input:

```
3.1
```

Output:
```
You entered 3.1.
Your input is not an integer.
```
---

Input:

```
-3
```

Output:
```
You entered 3.
Your number is not a positive number.
```

---

Input:

```
Hi
```

Output:
```
You entered Hi.
Your input is not an integer.
```

### Helpful Tips:

To check whether your input is an integer, you will use the built-in parseInt() function.  parseInt turns any number into its nearest integer, and it returns `NaN` if the input is not a number.  

```
parseInt(3) \\ 3
parseInt(-3) \\ -3
parseInt(3.1) \\ 3.1
parseInt("Hi") \\ NaN
```


A simple way to check for this all in one step is to use `parseInt(n) == n`.  

```
parseInt(3) == 3 \\ true
parseInt(-3) == -3 \\ true
parseInt(3.1) == 3.1 \\ false
parseInt("Hi") == "Hi" \\ false
```
