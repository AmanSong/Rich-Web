fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {

    // map all titles to new array
    const titles = posts.map(posts => posts.title);

    // use filter to find titles with more than 6 words
    const result = titles.filter(title => title.split(/\s/).length > 6);

    // print out result
    console.log(result);
});

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {

    const words = posts.flatMap((posts) => posts.body.split(/\s/))

    const frequency = words.reduce((map, word) => {
        map[word] = (map[word] || 0) + 1;
        return map;
      }, {});

    console.log(frequency)
});