---
title: "Tic Tac Toe using golang"
tags: - golang
---

#golang

```go
package main

import "fmt"

func main() {

	xoBoard := [3][3]string{}

	type player struct {	
		name string
		mark string
	}

	player1 := player{mark: "X"}
	player2 := player{mark: "O"}
	fmt.Println("Welcome to Tic Tac Toe!")
	fmt.Println("Player 1, please enter your name:")
	fmt.Scanln(&player1.name)
	fmt.Println("Player 2, please enter your name:")
	fmt.Scanln(&player2.name)
	
	fmt.Println("Now we have two players, " + player1.name + " and " + player2.name + ", let's start the game!")
	
	currentPlayer := player1
	x, y := 0, 0

  

	for {
		fmt.Println("Player " + currentPlayer.mark + ", please enter the row and column number of the cell you want to mark:")
		fmt.Scanln(&x, &y)
		
		if xoBoard[x][y] == "" {
			if x >= 0 && x < 3 && y >= 0 && y < 3 {
				xoBoard[x][y] = currentPlayer.mark
			} else {
				fmt.Println("Please enter a valid cell number!")
				continue
			}
		} else {
			fmt.Println("This cell is already marked, please choose another one!")
			continue
		}
	
		// validation
		
		for i := 0; i < 3; i++ {
			if xoBoard[i][0] == xoBoard[i][1] && xoBoard[i][1] == xoBoard[i][2] && xoBoard[i][0] == currentPlayer.mark {
				fmt.Println("Player " + currentPlayer.mark + " wins!")
				return
			} else if xoBoard[0][i] == xoBoard[1][i] && xoBoard[1][i] == xoBoard[2][i] && xoBoard[0][i] == currentPlayer.mark {
				fmt.Println("Player " + currentPlayer.mark + " wins!")
				return
			} else if xoBoard[0][0] == xoBoard[1][1] && xoBoard[1][1] == xoBoard[2][2] && xoBoard[0][0] == currentPlayer.mark {
				fmt.Println("Player " + currentPlayer.mark + " wins!")
				return
			} else if xoBoard[0][2] == xoBoard[1][1] && xoBoard[1][1] == xoBoard[2][0] && xoBoard[0][2] == currentPlayer.mark {
				fmt.Println("Player " + currentPlayer.mark + " wins!")
				return
			} else if xoBoard[0][0] != "" && xoBoard[0][1] != "" && xoBoard[0][2] != "" && xoBoard[1][0] != "" && xoBoard[1][1] != "" && xoBoard[1][2] != "" && xoBoard[2][0] != "" && xoBoard[2][1] != "" && xoBoard[2][2] != "" {
				fmt.Println("It's a tie!")
				return
			}
		}
		
		fmt.Println(xoBoard[0])
		fmt.Println(xoBoard[1])
		fmt.Println(xoBoard[2])
		
		if currentPlayer.mark == "X" {
			currentPlayer = player2
		} else {
			currentPlayer = player1
		}
	}
}
```