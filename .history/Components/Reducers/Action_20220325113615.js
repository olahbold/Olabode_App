import { GET_REPO } from "./Actiontypes";

 const getMoviesFromApiAsync = ({route}) => {
  try {
    return async (dispatch) => {
      const response = await fetch(`https://api.github.com/repos/${route.params.text}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        
      });
      const json = await response.json();
      if (json) {
        dispatch({
          type: GET_REPO,
          payload: console.log(json,
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