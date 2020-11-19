import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  // componentDidMount() {
  //   let treasure = Math.floor(Math.random() * this.state.squares.length)
  //   this.setState({treasureLocation: treasure})
  // }

  handleGamePlay = (index) => {
    const { squares, treasureLocation } = this.state
    if (index === treasureLocation){
      squares[index] = "💰"
      this.setState({ squares: squares })
    } else {
    squares[ index ] = "🌳"
    this.setState({ squares: squares })
    }
  }

    handleGamePlay = (index) => {
      const { squares } = this.state
      squares[ index ] = "🌳"
      this.setState({ squares: squares })
    }

    //PLAYER 1 + PLAYER 2
    //define player 1 and player 2 - set index = emoji
    //make count = 0 in state, set count to new num when we go through
    //if count is %2 = 0 => emoji 1 (if even = p1)
    //else emoji 2 (if odd = p2)
    //players cant click a filled space


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
    



  render(){
    console.log("treasure:", this.state.treasureLocation)
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        
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
