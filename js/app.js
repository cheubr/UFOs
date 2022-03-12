// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Clear existing data
    tbody.html("");
    // loop through objects in data
    data.forEach((dataRow) => {
        // append a row to table body
        let row = tbody.append("tr");

        // loop through each field and add values to table
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}