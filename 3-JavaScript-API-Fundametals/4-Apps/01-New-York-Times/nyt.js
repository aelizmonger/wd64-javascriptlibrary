const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'vBMKzWnlYlb8ns4DcMXcPVpsHc21PKAp'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none'; 
let pageNumber = 0;
let displayNav = false;

 //1                     //2   
 searchForm.addEventListener('submit', fetchResults); 
 nextBtn.addEventListener('click', nextPage); //3
 previousBtn.addEventListener('click', previousPage); //3


                    //1
                    function fetchResults(event) {
                        console.log(event); //2
                        // Assemble the full URL
                        url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
                        console.log(url); //4
                      }
                      
                      function nextPage(){
                        console.log("Next button clicked");
                      } //5
                      
                      function previousPage(){
                        console.log("Next button clicked");
                      } //5
  
function fetchResults(event) {
    fetch(url).then(function(result) {
        return result.json();
      }).then(function(json) {
        displayResults(json); //1 & //3
      });
    }
    //2
    function displayResults(json) {
      console.log("DisplayResults", json); 
    };
    event.preventDefault();
  
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; 
  if(startDate.value !== '') {
    console.log(startDate.value)
  url += '&begin_date=' + startDate.value;
};

if(endDate.value !== '') {
  url += '&end_date=' + endDate.value;
};
    //1
    fetch(url)
      .then(function(result) {
      console.log(result)
      return result.json(); //2
    }).then(function(json) {
        console.log(json); //3
    });
