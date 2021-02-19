window.onload = function() {
    var initial = 0;
    const table = document.querySelector('table');
    const rows = document.querySelectorAll('tr');
    const rowsArray = Array.from(rows);
    const solved = "Congratulations, you solved the puzzle!";

    table.addEventListener('click', (event) => {
      const rowIndex = rowsArray.findIndex(row => row.contains(event.target));
      const columns = Array.from(rowsArray[rowIndex].querySelectorAll('td'));
      const columnIndex = columns.findIndex(column => column == event.target);
      console.log(rowIndex, columnIndex);
      console.log(columns[2]);
      if (event.target.innerHTML != "") {
        switch_elems(rowIndex, columnIndex);
      }
        console.log(event.target.id);
      initial = 1;
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
      if (Boolean(initial) == false) {
        alert(solved);
      }
    }

}
