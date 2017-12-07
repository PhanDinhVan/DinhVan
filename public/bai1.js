class Bai01 extends React.Component{

  constructor(props){
    super(props);
    this.addValue = this.addValue.bind(this);
    this.state = {last_add: this.props.first_value};
  }

  addValue(){
    this.state.last_add = parseInt(this.state.last_add) + 1;
    this.setState(this.state);
  }

  render(){
    return(
      <button onClick={this.addValue}>Hello {this.state.last_add}</button>
    );
  }
}

ReactDOM.render(
  <div>
      <Bai01 first_value="0"> </Bai01>
  </div>
  , document.getElementById("root")
);
