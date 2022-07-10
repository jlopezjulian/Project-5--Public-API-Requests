/*
Project 5 - Public API Requests
*/

/** 
FETCH FUNCTIONS-------------
*/


/**
* fetch pulls information from the API, catch statement is used to console log an error if there is any
* function references : https://teamtreehouse.com/library/create-a-reusable-fetch-function
* const urlAPI is inserted in function to show an API pathway
*/

const urlAPI = "https://randomuser.me/api/?results=12&nat=US&inc=picture,name,email,cell,dob,location&noinfo";
//console.log(urlAPI);

fetch(urlAPI)
    .then(checkStatus)
    .then(response => response.json())
    .then((data) => { employees = data.results;
     displayEmployees(employees);})
    .catch(error => console.log("Issue fetching data", error))

/**
* checkStatus function is checking to make sure the check status is OK and no errors are produced
* Referencing: https://teamtreehouse.com/library/handling-errors-2 (time 4:51)
*/

    function checkStatus(response){
      if(response.ok){
          return Promise.resolve(response);
      }else{
          return Promise.reject(new Error(response(statusText)));
      }
      }

/*
HELPER FUNCTIONS-----
*/


/**
* displayEmployees function creates a template literal for which the html string will be added to the div element and display the employee information template is referencing lines 51-58 from Index.HTML
* A for loop is created to iterate the template literal through the array of employee data
*/


let employees = [];
const gallery = document.getElementById("gallery");

function displayEmployees(employees) {
  gallery.innerHTML = ""; 
  for (let i = 0; i < employees.length; i++) {
    let employeeHTML = 
    ` 
      <div class="card" data-index="${[i]}">
          <div class="card-img-container">
              <img class="card-img" src="${employees[i].picture.medium}" alt="profile picture">
          </div>
          <div class="card-info-container">
              <h3 id="employee-name" class="card-name cap">${employees[i].name.first} ${employees[i].name.last}</h3>
              <p class="card-text">${employees[i].email}</p>
              <p class="card-text cap">${employees[i].location.city}, ${employees[i].location.state}</p>
          </div>
      </div>
      `;
    gallery.insertAdjacentHTML("beforeend", employeeHTML); // this technique will allow HTML strings to be added without disrupting the DOM
  }
}





