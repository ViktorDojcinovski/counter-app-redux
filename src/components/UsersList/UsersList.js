import React from "react";
import { connect } from "react-redux";

class UsersList extends React.Component {
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

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
