window.onload = function() {
    const table = document.querySelector('table');
    const rows = document.querySelectorAll('tr');
    const rowsArray = Array.from(rows);
    const solved = "Congratulations, you solved the puzzle!";

    table.addEventListener('click', (event) => {
      const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
      const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
      const columnIndex = columns.findIndex(column => column == event.target);
      if (event.target.innerHTML != "") {
        switch_elems(rowIndex, columnIndex);
      }
    })


    function switch_elems(i, j) {
      const table = document.querySelector('table');
      const val1 = table.rows[i].cells[j].innerHTML;

      let k = j + 1;
      let numRows = table.rows.length; // not used, but this gets num rows
      if (k > table.rows[i].cells.length - 1) {
          k = 0;
      }
      // Check if blank element is above
      if (i > 0) {
        if (table.rows[i - 1].cells[j].innerHTML == "") {
          table.rows[i].cells[j].innerHTML = "";
          table.rows[i - 1].cells[j].innerHTML = val1.toString();
        }
      }
      // Check if blank element is below
      if (i < 2) {
        if (table.rows[i + 1].cells[j].innerHTML == "") {
          table.rows[i].cells[j].innerHTML = "";
          table.rows[i + 1].cells[j].innerHTML = val1.toString();
        }
      }
      // Check if blank element is to the right
      if (j < 2) {
        if (table.rows[i].cells[j + 1].innerHTML == "") {
          table.rows[i].cells[j].innerHTML = "";
          table.rows[i].cells[j + 1].innerHTML = val1.toString();
        }
      }
      // Check if blank element is to the left
      if (j > 0) {
        if (table.rows[i].cells[j - 1].innerHTML == "") {
          table.rows[i].cells[j].innerHTML = "";
          table.rows[i].cells[j - 1].innerHTML = val1.toString();
        }
      }

      // Check if function is solved

      // Select all TD elements
      var cols = document.querySelectorAll('td');
      var finArray = Array.from(cols);

      // Set what the correct array looks like
      var answer = ["1", "2", "3", "8", "", "4", "7", "6", "5"]

      // Get there inner HTML for a more readable format
      for (var i = 0; i < finArray.length; ++i) {
        finArray[i] = finArray[i].innerHTML;
      }

      // Set solved by default, then check if each element of the array matches
      var solved = 1;
      for (var i = 0; i < finArray.length; ++i) {
        if (finArray[i] !== answer[i]) {
          solved = 0; // Set solved to 0 if array does not match
        }
      }
      if (solved == 1) {
        alert("Congratulations, you solved the puzzle!");
      }
    }

}
