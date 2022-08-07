/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/
 function showPage(list, page) {
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   //in index.html there is a unordered list set up with a class of student-list that we are accessing here.
   const studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = '';
   // this loops through the students in the data and creates list items for them
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
This function creates and inserts/appends the elements needed for the pagination buttons
*/
 function addPagination(list) {
    //this takes the smallest whole number of pages needed to fit all the students with 9 per page
   let numOfPages = Math.ceil(list.length/9);
   const linkList = document.querySelector('ul.link-list');
   linkList.innerHTML = '';
   // this produces a button for each page that we have data in
   for (let i = 1; i <= numOfPages; ++i) {
      const button = `
         <li>
         <button type="button">${i}</button>
         </li> 
      `;
      //Inserting the elements that have been created to the link-list variable created earlier.
      //can be refactored to be OUT side of the for loop..
      linkList.insertAdjacentHTML('beforeend', button);
      //Setting the default first page button to active
      let activeButton = document.querySelector('button');
      activeButton.className = 'active';
      //An event listener to listen for clicks on the link-list variable created earlier.
      linkList.addEventListener('click', (e) => {
         // this makes it so the buttons change color
         if (e.target.tagName === 'BUTTON') {
            let deactivateButton = document.querySelector('.active');
            deactivateButton.className = '';
            e.target.className = 'active';
            const pageNum = e.target.textContent;
            //this sets up the 9 students depending on which page number is clicked
            showPage(list, pageNum);
         };
      });
   };
};
// Call functions
showPage(data, 1);
addPagination(data);

// alert(variable);
