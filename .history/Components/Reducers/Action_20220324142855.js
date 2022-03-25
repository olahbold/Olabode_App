const getMoviesFromApiAsync = () => {
    try {
        return
      const response = await fetch(
        'https://reactnative.dev/movies.json'
      );
      const json = await response.json();
      return json.movies;
    } catch (error) {
      console.error(error);
    }
  };







