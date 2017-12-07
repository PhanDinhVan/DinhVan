
function getName(name){
  alert(name);
}

// Khoi tao component
class ThuPhan extends React.Component{
  // Khai bao function xu ly su kien cua tung component
  constructor(props) {
    // su dung props
    super(props);
    this.getInfo = this.getInfo.bind(this);

    // su dung state don gian khong qua function
    // this.state = {tongHocVien: 10};
    // su dung state khi thong qua function
    this.addStudent = this.addStudent.bind(this);
    // su dung state de thay doi gia tri cua props - comment dong 15
    this.state = {tongHocVien: this.props.totalStudent,
                  data:
                  [
                     {
                        "id":1,
                        "name":"Foo",
                        "age":"20"
                     },
                     {
                        "id":2,
                        "name":"Bar",
                        "age":"30"
                     },
                     {
                        "id":3,
                        "name":"Baz",
                        "age":"40"
                     }
                  ]
    };
  }

  addStudent(){
    // dung cho state co 1 trang thai
    // this.setState({tongHocVien: parseInt(this.state.tongHocVien) + 1});
    // dung cho state co nhieu trang thai, vd: tongHocVien1, tongHocVien2...
    this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
    this.setState(this.state);
  }

  // Xu ly su kien voi tung component
  getInfo(){
    alert(this.props.children);
  }

  // <div>So hoc vien: {this.state.tongHocVien}</div> trong return cua render
  // <div>So hoc vien: {this.props.totalStudent}</div>
  render(){
    return(
      <div>
        <h1 className="yellow"> {this.props.name} - {this.props.position} </h1>
        <div>So hoc vien: {this.state.tongHocVien}</div>
        <KhoaHoc />
        <p>{this.props.children}</p>
        <button onClick={this.getInfo}> getInfo </button> <br /> <br />
        <button onClick={()=>{ var str = this.props.name + " - " + this.props.position; getName(str)}}> getName </button>
        <br /> <br />
        <button onClick={this.addStudent}> Add Studen </button> <br /> <br />
        <table>
           <tbody>
              {this.state.data.map((person, i) => <TableRow key = {i}
                 data = {person} />)}
           </tbody>
        </table>

      </div>
    );
  }
};

class KhoaHoc extends React.Component{
  render(){
    return(
      <h3> Lap trinh React JS </h3>
    );
  }
};

class TableRow extends React.Component{
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

class InputTag extends React.Component{

  constructor(props){
    super(props);
    this.showInput = this.showInput.bind(this);
  }

  showInput(){
    // var text = this.refs.txt.value;
    // alert(text);
    var sl = this.refs.sl.value;
    alert(sl);
  }

  render(){
    return(
      <div>
        <select ref="sl">
          <option value="17 million">Iphone 7</option>
          <option value="21 million">Iphone 8</option>
          <option value="35 million">Iphone X</option>
        </select>
        <input type="text" ref="txt" />
        <button onClick={this.showInput}>Show value</button>
      </div>
    );
  }
}

// Mac dich cac file js dung trong folder public
ReactDOM.render(
  // the div, h1 hoac cac the khac chinh la JSX
  <div>
    <InputTag />
    <ThuPhan name="NodeJS" position="Mr. Thu" totalStudent="10"> Mon hoc NodeJS </ThuPhan>
    <ThuPhan name="ReactJS" position="Mr. Van" totalStudent="20"> Mon hoc ReactJS </ThuPhan>
  </div>
, document.getElementById("root"));
