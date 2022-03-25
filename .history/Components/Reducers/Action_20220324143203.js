const getMoviesFromApiAsync = () => {
    try {
        return async dispatch => {
            const response = await fetch(
                'https://reactnative.dev/movies.json',{method : 'GET',
                headers : {
                    'Content-'
                }
            });
              const json = await response.json();
              return json.movies;
        }
     
     
     
     
     
    } catch (error) {
      console.error(error);
    }
  };







