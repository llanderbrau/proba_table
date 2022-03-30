const gridOptions = {
  columnDefs: [
    { field: 'PMID-PMC', minWidth: 200, filter: 'agTextColumnFilter' },
    { field: 'Заголовок' },
    { field: 'Авторы', minWidth: 200 },
    { field: 'Институты' },
  ],
  defaultColDef: {
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
  },
  sideBar: 'filters',
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector('#myGrid');
  new agGrid.Grid(gridDiv, gridOptions);

  fetch('olympic-winners.json')
    .then((response) => response.json())
    .then((data) => gridOptions.api.setRowData(data));
});