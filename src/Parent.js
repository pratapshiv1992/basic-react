import React from 'react';
import Child from './Child';

class Parent extends React.Component {
  state={
    count:0
  }

  handleAction = ({target:{name}})=>{
  this.setState(({count})=>({
    count:name === 'increase' ? ++count : --count
  }));
}

  render(){
    const increaseProps = {
      label:"Increase Count",
      name:"increase",
      onClick:this.handleAction
    };
    const decreaseProps = {
      label:"Decrease Count",
      name:"decrease",
      onClick:this.handleAction
    };
    

    return <div>
    <h1>current count is  {this.state.count}</h1>
      <Child {...increaseProps}  />
      <Child {...decreaseProps}  />
    </div>
  }

}

export default Parent;
