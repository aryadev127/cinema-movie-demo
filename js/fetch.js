// mengambil data dari OMDb api
function getData(title, callback) {
  fetch(`http://www.omdbapi.com/?s="${title}"&apikey=9916612f`)
    .then((response) => response.json())
    .then((data) => callback(data));
}

async function detailMovie(id, callback) {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${id}&plot=full&apikey=9916612f`
  )
    .then((response) => response.json())
    .then((data) => callback(data));
}
