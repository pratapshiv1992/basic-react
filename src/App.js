import React from 'react';
import './App.css';

class App extends React.Component {
  state={
    count:0
  }
handleClick(eventType){
  let count = this.state.count;
  count = eventType === 'add' ? ++count : --count;
  this.setState({count});
}

  render(){
    return <div>
    <h1>current count is  {this.state.count}</h1>
    <button onClick={()=>this.handleClick('add')}>
      Increase count
      </button>
      <button onClick={()=>this.handleClick('minus')}>
        Reduce count
      </button>
    </div>
  }

}

export default App;
