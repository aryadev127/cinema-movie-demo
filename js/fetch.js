// mengambil data dari OMDb api
async function getData(title, callback) {
  await fetch(`https://www.omdbapi.com/?s="${title}"&apikey=9916612f`)
    .then((response) => response.json())
    .then((data) => callback(data));
}

async function detailMovie(id, callback) {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${id}&plot=full&apikey=9916612f`
  )
    .then((response) => response.json())
    .then((data) => callback(data));
}
