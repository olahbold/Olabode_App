const getMoviesFromApiAsync = () => {
  try {
    return async (dispatch) => {
      const response = await fetch("https://reactnative.dev/movies.json", {
        method: "GET",
        headers: {
          "Content-Type": "application.json",
        },
      });
      const json = await response.json();
      if(json){} else{}
    };
  } catch (error) {
    console.error(error);
  }
};
