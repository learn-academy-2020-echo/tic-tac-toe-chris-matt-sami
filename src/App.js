import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      count: 0,
      player1: [],
      player2: [],
      winArray: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    }
  }

  // componentDidMount() {
  //   let treasure = Math.floor(Math.random() * this.state.squares.length)
  //   this.setState({treasureLocation: treasure})
  // }



    //PLAYER 1 + PLAYER 2
    //define player 1 and player 2 - set index = emoji
    //make count = 0 in state, set count to new num when we go through
    //if count is %2 = 0 => emoji 1 (if even = p1)
    //else emoji 2 (if odd = p2)
    //players cant click a filled space

  handleGamePlay = (index) => {
    const { squares, player1, player2, count } = this.state
      if(count >= 8){
        console.log("tie game")
        alert("tie game")
      }else if (count % 2 === 0){
      squares[index] = "🦠"
      player1.push(index)
      console.log("player1:", player1)
      console.log("index", index)
      console.log("count:", count)

      this.setState({ squares: squares, count: count + 1, player1: player1 })

    }else {
      squares[ index ] = "🧼"
      player2.push(index)
      console.log("player2:", player2)
      console.log("index", index)
      console.log("count:", count)

      this.setState({ squares: squares, count: count + 1, player2: player2 })
    }
  }



    //WIN CONDITIONS
    //define 8 win conditions 
    //store players click index into an empty array
    //compare players click array with win conditions
    //create winArray containing 8 winning arrays
    //loop through winning arrays, compare to player click array, compare player click array to winArray

    //if players click = win array, alert WIN 
    //else if count === 9, alert TIE
    //else keep playing

    //RESTART GAME FUNCTION
    //if game WIN OR TIE => reset game

    //CANNOT CLICK FILLED BOX
    //Player 1 array cannot contain values in Player2 array
    //Vice versa
    



  render(){
    console.log("treasure:", this.state.treasureLocation)
    return(
      <React.Fragment>
        <h1>TIC-TAC-TOE</h1>
        
        <div id="gameboard">
        { this.state.squares.map((value, index) => {
          return (
            <Square 
              value = { value }
              key = { index }
              index = { index }
              handleGamePlay = { this.handleGamePlay }
            />
          )
        })
        }
        </div>

      </React.Fragment>
    )
  }
}
export default App
