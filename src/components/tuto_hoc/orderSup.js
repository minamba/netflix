import React, { Component } from 'react';


// HOC  element qui prend en parametre un composant enrobé (WrappedComponent par convention) et qui va retourner en render le composant passé en parametre
const orderSup = WrappedComponent =>
{
    class OrderSup extends Component 
    {
        state = {
            value: ""
          }
          handleChange = e => {
            this.setState({
              value: e.target.value
            })
          }

        render() {
            return (
            <WrappedComponent 
                {...this.props}
                state={this.state}
                handleChange={this.handleChange}
             />)
        }
    }
    return OrderSup
}

export default orderSup;