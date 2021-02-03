import React from "react";
import { connect } from "react-redux";

class UsersList extends React.Component {
  constructor() {
    super();

    this.state = {
      usersList: [],
    };
  }

  componentDidMount() {
    // fetch or axios --> use either of these methods
    fetch("https://jsonplaceholder.typicode.com/users", {
      /* headers... */
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ usersList: data });
      });
  }

  render() {
    return (
      <div>
        <>
          <ul>
            {this.state.usersList.map((user) => {
              return <li key={user.id}>{user.name}</li>;
            })}
          </ul>
        </>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   usersList: state.users.usersList,
// });

// const mapDispatchToProps = (dispatch) => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersList;
