import React, { Component } from "react";
import orderSup from "./orderSup";


class Text1 extends Component {
  render() {
    const {state, handleChange, placeholder} = this.props;
    return (
      <>
        <input
          value={state.value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </>
    );
  }
}

export default orderSup(Text1);
