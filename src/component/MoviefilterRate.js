import React,{useState,setState} from 'react'
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Rater extends React.Component {
  state = {
    value: 0,
  };

  handleChange = value => {
    this.setState({ value });
    this.props.handle(value);
  };

  render() {
    const { value } = this.state;
    return (
      <span style={{margin:'2% 0'}}>
        <Rate onChange={this.handleChange} value={value} />
      </span>
    );
  }
}

export default Rater;
