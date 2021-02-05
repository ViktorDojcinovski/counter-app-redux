import { data } from "./types";

const asyncFetchUsers = () => {
  // fetch or axios --> use either of these methods
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/users", {
      /* headers... */
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        dispatch(syncFetchUsers(data));
      });
  };

  // how to connect async action creator to sync action creator
};

const syncFetchUsers = (usersList) => {
  return {
    type: data.users.FETCH_USERS,
    payload: usersList,
  };
};

export { asyncFetchUsers };
