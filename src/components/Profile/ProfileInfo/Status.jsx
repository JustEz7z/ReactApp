import React from "react";

class Status extends React.Component {

  state = {
    isEditMode: false,
    status: this.props.status
  }

  changeEditMode = () => {
      this.setState({
          isEditMode: !this.state.isEditMode
      })
  }
  onChange = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  sendAuthUsersStatus = () => {
    this.changeEditMode()
    this.props.putAuthUsersStatus(this.state.status)
  }  

  componentDidUpdate(prevProps, prevState){
    if(prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
  }
  render() {
    return (
      <div>
        {!this.state.isEditMode ?<div onDoubleClick={this.changeEditMode}>{this.state.status || "No status"}</div>
         : <input type="text" value={this.state.status} onChange={this.onChange} onBlur={this.sendAuthUsersStatus}/>}
      </div>
    );
  }
}

export default Status;
