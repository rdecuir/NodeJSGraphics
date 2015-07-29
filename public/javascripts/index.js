//var data = [4, 8, 15, 61, 23];
var data = JSON.parse(d3.select('#my-created-div').attr("data"));

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 500]);

d3.select('#my-created-div')
    .selectAll('div')
    .data(data)
    .enter().append('div')
    .style('width', function(d) {return x(d) + 'px';})
    .text(function(d) {return d;})