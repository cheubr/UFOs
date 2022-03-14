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

function handleClick() { 
    // get datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // chcek to see if date was entered and filter data using date.
    if (date) {
        // apply filter to table data rows where datetime and filter datetime match
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    buildTable(filteredData);
}

// create button
d3.selectAll("#filter-btn").on("click", handleClick);

// build table when page loads
buildTable(tableData);