// FOR SELECTING THE CATEGORIES
document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const selectedCategoryTable = document.querySelector("#selectedCategoryTable");
  
    categoryButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const selectedCategory = button.textContent;
  
        selectedCategoryTable.innerHTML = `
          <tr>
            <td>${selectedCategory}</td>
          </tr>
        `;
      });
    });
  });
  
//FOR THE SEARCH BUTTON
  document.querySelector('form[role="search"]').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    const query = document.querySelector('input[type="search"]').value.toLowerCase();
    const movieLinks = document.querySelectorAll('a[href]');
  
    let found = false;
    movieLinks.forEach(link => {
      const text = link.textContent.toLowerCase();
      if (text.includes(query)) {
        found = true;
        alert(`Found: ${link.textContent}`);
        window.location.href = link.getAttribute('href'); // Redirect to the link
      }
    });
  
    if (!found) {
      alert('No movies found!');
    }
  });
  