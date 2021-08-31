/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
//declares a function with two parameters
 function showPage(list, page) {
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   //in index.html there is a unordered list set up with a class of student-list
   const studentList = document.querySelector('ul.student-list');
   //erasing what's there
   studentList.innerHTML = '';
   for ( let i = 0; i < list.length; ++i ) {
      if ( i >= startIndex && i < endIndex) {
        const studentItem = `
        <li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${list[i].registered.date}</span>
         </div>
      </li>
        `;
        studentList.insertAdjacentHTML('beforeend', studentItem);
      }
   }

}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

 function addPagination(list) {
   let numOfPages = Math.ceil(list.length/9);
   const linkList = document.querySelector('ul.link-list');
   linkList.innerHTML = '';
   //numOfPages.length IS INCORRECT!!!
   for (let i = 1; i <= numOfPages; ++i) {
      const button = `
         <li>
         <button type="button">${i}</button>
         </li> 
      `;
      //Insert the elements you have created to the link-list variable you created earlier. The insertAdjacentHTML method and beforeend option works well for this
      linkList.insertAdjacentHTML('beforeend', button);
   //Select the first pagination button and give it a class name of active
   let activeButton = document.querySelector('button');
   activeButton.className = 'active';
   //Create an event listener to listen for clicks on the link-list variable that you created earlier.
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         let deactivateButton = document.querySelector('.active');
         deactivateButton.className = '';
         e.target.className = 'active';
         const pageNum = e.target.textContent;
         showPage(list, pageNum);
      };
   });
 };
};





// Call functions

showPage(data, 1);
addPagination(data);