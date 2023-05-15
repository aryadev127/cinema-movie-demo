window.addEventListener("DOMContentLoaded", () => {
  //_____MAIN_____//
  //navbar on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    let result = window.scrollY;
    return result > 0
      ? navbar.classList.add("active")
      : navbar.classList.remove("active");
  });

  //navbar toggle button
  const navbarButton = document.querySelector(".icon-menu");
  navbarButton.addEventListener("click", function () {
    let navbarList = document.querySelector(".navbar-list");
    navbarList.classList.toggle("active");
  });

  //buttion to search bar
  const iconSearch = document.querySelector(".icon-search");
  const buttonToSearch = document.querySelector(".button-to-search");
  const toSearch = function () {
    let searchBar = document.querySelector("#search-bar");
    searchBar.scrollIntoView();
  };
  buttonToSearch.addEventListener("click", toSearch);
  iconSearch.addEventListener("click", toSearch);

  //search engine
  let list = "";
  const buttonSerach = document.querySelector(".button-search");
  buttonSerach.addEventListener("click", function () {
    let titleMovie = document.querySelector(".search-bar");
    let dataMovie = getData(titleMovie.value, (data) => {
      let dataDetail = data.Search ? data.Search : data.Error;

      // log error with sweet alert js
      if (typeof dataDetail !== "object") {
        swal({
          title: "Error log",
          text: dataDetail,
          icon: "warning",
        });
        return;
      }

      //filter if dataDetail poster = N/A delete it
      dataDetail = dataDetail.filter((data) => data.Poster != "N/A");

      // display data to html page
      dataDetail.forEach((data) => detailMovie(data.imdbID, data => {
        display(data)
      }));
      titleMovie.value = "";
      list = "";
    });
  });

  // display data function
  const displayPage = document.querySelector(".display");
  function display(data) {
    console.log(data)
    list += `
      <div class="card">
        <img src="${data.Poster} alt="${data.Title} poster" />
        <div class="card-body">
          <h3>${data.Title} (${data.Year})</h3>
          <p>Genre: ${data.Genre}</p>
          <p>Released: ${data.Released}</p>
          <p>Runtime: ${data.Runtime}, Rating: ${data.imdbRating}/10 (imdb)</p>
          <br>
          <center>
            <a href="https://lk21official.co/?s=${data.Title} (${data.Year})" class="button link">tonton sekarang</a>
          </center>
          <br>
        </div>
      </div>
    `;
    displayPage.innerHTML = list;
  }
  
  //_____End MAIN_____//
});
