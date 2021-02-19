window.onload = function() {
    var initial = 0;
    const table = document.querySelector('table');
    const rows = document.querySelectorAll('td');
    const rowsArray = Array.from(rows);
    const finArray = [
      [0, rowsArray[0].innerHTML],
      [1, rowsArray[1].innerHTML],
      [2, rowsArray[2].innerHTML],
      [0, rowsArray[3].innerHTML],
      [1, rowsArray[4].innerHTML],
      [2, rowsArray[5].innerHTML],
      [0, rowsArray[6].innerHTML],
      [1, rowsArray[7].innerHTML],
      [2, rowsArray[8].innerHTML]
    ];
    console.log(finArray[3]);
    const solved = "Congratulations, you solved the puzzle!";

    table.addEventListener('click', (event) => {
      const rowIndex = finArray.findIndex(row => row.contains(event.target));
      const columns = Array.from(finArray[rowIndex].querySelectorAll('td'));
      const columnIndex = columns.findIndex(column => column == event.target);
      console.log(rowIndex, columnIndex)
      switch_elems(rowIndex, columnIndex);
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
      const val2 = table.rows[i].cells[k].innerHTML;

      table.rows[i].cells[j].innerHTML = val2.toString();
      table.rows[i].cells[k].innerHTML = val1.toString();

      if (Boolean(initial) == false) {
        alert(solved);
      }
    }

}
