var d1 = "https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/australia/aut_case_data_rev.csv"
  Plotly.d3.csv(d1, function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
    }



    var t1 = {
      type: "scatter",
      mode: "lines",
      name: 'Total Cases',
      x: unpack(rows, 'Dates'),
      y: unpack(rows, 'Case'),
      line: {color: '#CC33FF'}
    }


    line2(t1)
  })
function plot(data, layout) {
  Plotly.newPlot('myplot', data, layout);
}

function line2(t1){
      var d2 = "https://raw.githubusercontent.com/freemanbach/Python/master/python3/covid/worlddata/australia/aut_death_data_rev.csv"

        Plotly.d3.csv(d2, function(err, rows){
          function unpack(rows, key) {
            return rows.map(function(row) { return row[key]; });
          }

          var t2 = {
            type: "scatter",
            mode: "lines",
            name: 'Total Deaths',
            x: unpack(rows, 'Dates'),
            y: unpack(rows, 'Death'),
            line: {color: 'FF0000'}
          }

          var data = [t1, t2];
          var layout = {
            title: {
              text : 'Total Covid Cases vs Total Covid Deaths'
            },
            xaxis: {
              title : {
               text : 'Date'
              }
            } ,
            yaxis : {
              title : {
                text : 'People'
              }
            }
          };
          plot(data, layout)
    })
  }
