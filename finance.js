var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['02-23-21', '02-24-21', '02-25-21', '02-26-21', '03-01-21', '03-02-21', '03-03-21', '03-04-21', '03-05-21', '03-08-21', '03-09-21', '03-10-21', '03-11-21', '03-12-21', '03-15-21', '03-16-21', '03-17-21', '03-18-21', '03-19-21', '03-22-21'],
    datasets: [{
      label: 'Close Prices',
      data: [3127.03, 3166.75, 3136.74, 3095.20, 3127.89, 3143.47, 3081.18, 3012.00, 3005.00, 3015.00, 3017.99, 3098.45, 3104.01, 3075.00, 3074.57, 3104.97, 3073.22, 3101.00, 3029.23, 3067.85],
      backgroundColor: "rgba(226, 151, 38, 0.7)"

    }]
  }
});
