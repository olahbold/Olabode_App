import { GET_REPO } from "./Actiontypes";

 const getMoviesFromApiAsync = (text) => {
  try {
    return async (dispatch) => {
      const response = await fetch(`https://api.github.com/repos/${text}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body:js
      });
      const json = await response.json();
      if (json) {
        dispatch({
          type: GET_REPO,
          payload: json,
        });
      } else {
        console.log("Unable to get Info");
      }
    };
  } catch (error) {
    console.error(error);
  }
};
 export default getMoviesFromApiAsync