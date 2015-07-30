(function() {    
    //var data = [4, 8, 15, 61, 23];
    var data = JSON.parse(d3.select('#my-created-div').attr("data"));
    var piedata = JSON.parse(d3.select('#chart').attr("data"));

    var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, 500]);

    d3.select('#my-created-div')
        .selectAll('div')
        .data(data)
        .enter().append('div')
        .style('width', function(d) {return x(d) + 'px';})
        .text(function(d) {return d;})

    var width = 360;
    var height = 360;
    var radius = Math.min(width, height) / 2;

    var color = d3.scale.category20b();

    var svg = d3.select('#chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + (width / 2) + 
        ',' + (height / 2) + ')');

    var arc = d3.svg.arc()
      .outerRadius(radius);

    var pie = d3.layout.pie()
      .value(function(d) { return d.value; })
      .sort(null);

    var path = svg.selectAll('path')
      .data(pie(piedata))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function(d, i) { 
        return color(d.data.label);
      });  
    
})();