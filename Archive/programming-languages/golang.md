---
title: "GO Lang"
tags:
- golang
---

#golang 

## Articles
- [How to become a Golang developer: 10 steps career path](https://www.softkraft.co/how-to-become-golang-developer)

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
- Slices.
```go
var slice1 = []string{}
var slice2 = []string{"aaa"}
slice3 := make([]string, 0) // 0 length
slice1 = append(slice2, "a")

slice3 = append(slice3, "a")
slice3 = append(slice3, "b")

slice1[0] = "b"
fmt.Println(slice2, slice1, slice3) // [aaa] [b a] [a b]

copy(slice2, slice1)                // copy(dest, src) copying is depending on the length of the dest
fmt.Println(slice2, slice1, slice3) // [b] [b a] [a b]

slice1 = append(slice1, "c")

s := slice1[0:2] // by reference from 0 to 2 (not including 2), but it'll not expand
slice1[0] = "d"
fmt.Println(s, slice1) // [d a] [d a c]
```

- Maps
```go
maptest := map[string]string{
	"key1": "value1",
	"key2": "value2",
}

fmt.Println(maptest)

map2 := make(map[string]string)
map2["key1"] = "value1"
map2["key2"] = "value2"

delete(map2, "key1")

// we use ok to check if the key exists and differentiate between default value and the actual value
v, ok := map2["key1"] // ok is false if key is not present, true otherwise

fmt.Println(v, ok) // prints " " false

map3 := map[string][]string{
	"key1": []string{"value1", "value2"}, // redundant type
	"key2": {"value1", "value2"},         // redundant type (solved)
}

fmt.Println(map3)
```

- Range
```go
// Range

arr1 := []string{"zeyad", "vvv", "drrr", "llooo"}
map1 := map[string]string{
	"ass":  "asda",
	"key1": "value1",
}

for k, v := range arr1 {
	fmt.Println(k, v)
}

for k, v := range map1 {
	fmt.Println(k, v)
}
```

- Functions
```go
package main

import "fmt"

func pl(s string) {
	fmt.Println(s)
}

func plAll(params ...interface{}) { // interface is a generic datatype, similar to ...rest in javascript
	fmt.Println(len(params))
}

func f1(x, y int) int { // similar to f1(x int, y int)
	return x + y
}

func f2(x string) (string, int) { // return multiple values
	return x, len(x) // hello 5
}

func f3(x string) (r string, count int) { // return vars declared here no need to return them
	r = x
	count = len(x)
	return
}

func main() {
	fmt.Println(f3("hello"))
	var x func(x, y int) int // function as datatype
	x = f1
	fmt.Println(x(3, 4)) // 7
}
```

- Pointers
```go
package main

import "fmt"

func set(s *string) {
	*s = "zzz" // changing the x var as well
}

func main() {
	var x string = "zeyad"
	set(&x) // sending the reference

	fmt.Println(x, &x)
}
```

- Structs
```go
package main

import "fmt"

type player struct {
	firstName string
	lastName  string
	id        int
}

type game struct {
	players map[string]*player // map of reference of structs
}

type gameBase struct {
	game // game struct as an "embedded field"
	next *gameBase
}

// create a function on a struct
func (g *game) iteratePlayers() []string {
	fmt.Println("GGG: ", g.players)
	result := []string{}
	for _, val := range g.players {
		result = append(result, val.firstName)
	}

	return result
}

func main() {

	g := &game{
		players: make(map[string]*player),
	}

	p1 := player{}
	p2 := player{firstName: "John", lastName: "Doe", id: 2}
	g.players["p1"] = &p1
	g.players["p2"] = &p2
	p1.firstName = "zeyad"
	fmt.Println(g, p1) // &{map[p1:0xc00010e1b0]} {zeyad  0}
	playerNames := g.iteratePlayers()
	fmt.Println(playerNames) // [zeyad John]

	// chaining
	gb := &gameBase{}
	gb.iteratePlayers() // This Works
}

```

- Interfaces


## Notes
- [You cannot use methods on structs if you declared your struct inside function.](https://stackoverflow.com/questions/42010112/implications-of-defining-a-struct-inside-a-function-vs-outside)
- [Go Variable Scope](https://www.programiz.com/golang/variable-scope)

## Resources
- [Learn Go with Tests](https://quii.gitbook.io/learn-go-with-tests/)