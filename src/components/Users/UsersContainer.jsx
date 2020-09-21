import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  totalUsersCountActionCreator,
  setNumberPageActionCreator,
  setFetchingActionCreator,
  setActionFollow,
  getUsersThunk,
  onPageChanged,
  deleteUserFollow,
  postUserFollow
} from "../../redux/usersReducer";
import Users from "./Users";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.page, this.props.pageSize)
  }
  render() {
    return (
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        page={this.props.page}
        onPageChanged={this.props.onPageChanged}
        isFetching={this.props.isFetching}
        isActionFollowing={this.props.isActionFollowing}
        setActionFollow={this.props.setActionFollow}
        deleteUserFollow={this.props.deleteUserFollow}
        postUserFollow={this.props.postUserFollow}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  page: state.usersPage.page,
  isFetching: state.usersPage.isFetching,
  isActionFollowing: state.usersPage.isActionFollowing
});

export default connect(mapStateToProps, {
  followActionCreator,
  totalUsersCountActionCreator,
  setNumberPageActionCreator,
  setFetchingActionCreator,
  setActionFollow,
  getUsersThunk,
  onPageChanged,
  deleteUserFollow,
  postUserFollow
})(UsersAPI);
