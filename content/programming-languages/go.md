---
title: "GO Lang"
---

#golang 

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

- Arrays
```go

arr0 := [10]string
arr1 := [5]int{1, 2, 3, 4, 5}
arr[2] = 10

var arr2 = [10]string{}
fmt.Println(arr)
fmt.Println(len(arr)) //length

matrix := [2][3]int{}
matrix[0][0] = 1
fmt.Println(matrix)
```

- Loops
```go
var seq [4][4]int
for i := 0; i < len(seq); i++ {
	for j := 0; j < len(seq[i]); j++ {
		seq[i][j] = i + j
	}
}

counter := 6
for counter != 0 {
	fmt.Println(counter)
	counter--
}

for {
	fmt.Println("infinite loop")
}
```

- Hands on [[tic-tac-toe]]