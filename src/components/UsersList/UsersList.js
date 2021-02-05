import React from "react";
import { connect } from "react-redux";

import { asyncFetchUsers } from "../../redux/users/actions";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <>
          <ul>
            {this.props.usersList.map((user) => {
              return <li key={user.id}>{user.name}</li>;
            })}
          </ul>
        </>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  usersList: state.users.usersList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(asyncFetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
