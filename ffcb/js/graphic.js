//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "1JnUIAPcA16An42Vy4mT16PfeSKo8RnrfGwpVfGm_rmc";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [{
  "data": "organisme",
  "title": "Organisme"
}, {
  "data": "programme",
  "title": "Programme"
},{
  "data": "secteur",
  "title": "Secteur d'intervention"
}, {
  "data": "echeance",
  "title": "Échéance"
}];

$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: true
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive" id="mySelection"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": true,
      "data": data,
      "columns": columns,
      "order": [
        [1, "asc"]
      ], //order on second column
      "pagingType": "simple", //no page numbers
        //uncomment these options to simplify your table
        "paging": false,
        "searching": true,
        "info": false
    });
  }
});
//end of writeTable
