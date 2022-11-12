import React, { Component } from 'react'
import Button from '@mui/material/Button';
class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  
  
  // setInterval
  // clearInterval
  render () {
    const {count} = this.state ;
    // function storeCount (){
    //   localStorage.setItem('averagetime', count);
    // }
    return (
      <div>
        <h2>Total time taken: {count}</h2>
        <Button
                onClick={localStorage.setItem('totaltime', count)}
                type="submit"
                variant="contained"
                sx={{ mt: 0.5, mb: 2 ,ml:2, borderRadius: '25px'}}
                href="/Reportpage"
              >
                Generate report
              </Button>
      </div>
    )
  }
  componentDidMount () {
    const {startCount} = this.props
    this.setState({
      count: startCount
    })
    this.doIntervalChange()
  }

  doIntervalChange = () => {
      this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: Number(prevState.count + 1)
      }))
    }, 2000)
  }

  clearInterval = ()=> {
    clearInterval(this.myInterval);
  };
  
}

export default Timer