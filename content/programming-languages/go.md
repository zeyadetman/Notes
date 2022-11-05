---
title: "GO Lang"
---


## Syntax

- Variables
```go
package main
import {
  "fmt"
}

func main() {
	var var1 string = "Hello"
	var var2 int32 = 43
	var3 := 44; // int
	var4 := "hello" // string
	const var5 = 5;
	var5 = 6 // [error] cannot assign to var5 (untyped int constant 5)


	type obj struct {
		name string
		age  int
	}

	obj1 := obj{name: "zeyad", age: 27}
}
```
- If and Switch
```go
...
x := 4
if x >= 4 {
	fmt.Println("Greater")
} else if x == 4 {
	fmt.Println("Equal")
} else {
	fmt.Println("Less")
}



p := myString{value: "Zeyad", key: "name"}

  

switch p.key {
	case "name":
		fmt.Println("Name is", p.value)
	case "age":
		fmt.Println("Age is", p.value)
	default:
		fmt.Println("No value")
}
...
```