const getArticlesFromApi = async () => {
    let response = await fetch(
      'https://examples.com/data.json'
    );
    let json = await response.json();
    return json.movies;
  }
};

