$('#body').css('min-width', screen.width);

google.charts.load('upcoming', {
  packages: ['corechart', 'bar'],
  mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});

google.charts.setOnLoadCallback(drawEmploymentStatusChart);
google.charts.setOnLoadCallback(drawEmploymentLevelOfDegreeChart);
google.charts.setOnLoadCallback(drawEmploymentStatusByGender);
// google.charts.setOnLoadCallback(drawSalaryChart);
// google.charts.setOnLoadCallback(drawSalaryDistributionChart);
// google.charts.setOnLoadCallback(drawGraduateGotJobsChart);
// google.charts.setOnLoadCallback(drawGraduatesWelfareChart);
// google.charts.setOnLoadCallback(drawNairaForeignCurrencyChart);
// google.charts.setOnLoadCallback(drawMediumOfCommuteChart);
// google.charts.setOnLoadCallback(drawEmployingIndustriesChart);
// google.charts.setOnLoadCallback(drawEducationSatisfactionChart);
// google.charts.setOnLoadCallback(drawEmployabilitySkillsChart);

//Employment Status chart
function drawEmploymentStatusChart() {
  var data = google.visualization.arrayToDataTable([
    ['Employment Status', 'Hours per Day'],
    ['Working Full time', 1371],
    ['Voluntary or unpaid internship', 417],
    ['Self Employed or Freelance', 700],
    ['NYSC', 842],
    ['Unemployed', 1509],
    ['Engaged/ Preparing for Further Studies', 380]
  ]);

  var options = {
    pieHole: 0.8,
    pieSliceTextStyle: {
      color: 'black',
      size: '2px'
    },
    pieSliceText: 'none',
    legend: {
      position: 'labeled'
    },
    colors: ['#2d6e64', '#53c0b6', '#f7ba44', '#f3963e', '#f06e38', '#123530']
  };

  var chart = new google.visualization.PieChart(
    document.getElementById('employment-chart')
  );
  chart.draw(data, options);
}

//Level of Employment by degree
function drawEmploymentLevelOfDegreeChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Degree');
  data.addColumn('number', 'Working full Time');
  data.addColumn('number', 'Voluntary/Internship');
  data.addColumn('number', 'Self Employed');
  data.addColumn('number', 'NYSC');
  data.addColumn('number', 'Preparing for Further studies');
  data.addColumn('number', 'Unemployed');

  data.addRows([
    [{ v: 'OND', f: 'OND' }, 12, 16, 18, 0, 23, 47],
    [{ v: 'HND', f: 'HND' }, 71, 13, 73, 58, 8, 145],
    [
      { v: 'BACHELOR DEGREE', f: 'BACHELOR DEGREE' },
      1158,
      366,
      548,
      778,
      294,
      1258
    ],
    [{ v: 'MASTERS', f: 'MASTERS DEGREE' }, 118, 21, 54, 5, 53, 55],
    [{ v: 'MBA', f: 'MBA' }, 10, 0, 5, 1, 1, 3],
    [{ v: 'PHD', f: 'PHD' }, 2, 1, 2, 0, 1, 1]
  ]);

  var options = {
    pieSliceText: 'none',
    isStacked: 'percent',
    hAxis: {
      title: 'Degree',
      textPosition: 'out'
    },
    colors: ['#123530', '#2d6e64', '#53c0b6', '#f7ba44', '#f3963e', '#f06e38'],
    vAxis: {
      gridlines: { color: '#fff', count: 4 },
      scaleType: null,
      width: 1000
    },
    legend: { position: 'top', alignment: 'center', maxLines: 10 },

    bar: { groupWidth: '30%' }
  };

  // var chart = new google.visualization.ColumnChart(
  //   document.getElementById('emp-by-degree-chart')
  // );
  // chart.draw(data, options);
}

//Level of Employment by Gender
function drawEmploymentStatusByGender() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Gender');
  data.addColumn('number', 'MALE');
  data.addColumn('number', 'FEMALE');

  data.addRows([
    [{ v: 'Working Full Time', f: 'Working Full Time' }, 3257, 1962],
    [{ v: 'Working Full Time', f: 'Unemployed' }, 3100, 2199],
    [
      { v: 'Working Full Time', f: 'Preparing for Further Studies' },
      3580,
      1639
    ],
    [{ v: 'Working Full Time', f: 'Engaged in Further Studies' }, 3176, 2041]
  ]);

  var options = {
    isStacked: 'percent',
    hAxis: {
      textPosition: 'out'
    },
    colors: ['#54c3b6', '#f3993e'],

    vAxis: {
      gridlines: { color: '#fff', count: 4 },
      scaleType: null,
      width: 1000
    },
    legend: {
      position: 'bottom'
    },
    bar: { groupWidth: '50%' }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('emp-by-gender-chart')
  );

  chart.draw(data, options);
}


//resize charts
$(window).resize(function() {
  drawEmploymentStatusChart(),
    drawEmploymentLevelOfDegreeChart(),
    drawEmploymentStatusByGender();
    // drawSalaryChart();
});

//sliders for icon
$('.customer-logos').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});


