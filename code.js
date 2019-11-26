
var svg = d3.select("#chordData")
            .append("svg")
            .attr("width", 750)
            .attr("height", 750)
            .append("g")
            .attr("transform", "translate(375,375)")


var matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34575],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22830],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20953],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15824],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8357],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15991],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9523],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15824],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6359],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12135],
    [22223, 9353, 2421, 31948, 48397, 45162, 12952, 24213, 61999, 5251, 0, 93774],
    [5532, 9903, 20046, 5031, 7776, 16732, 4047, 3665, 7895, 924, 104955, 0]    
];


var exp = d3.chord()
    .padAngle(0.05)
    .sortSubgroups(d3.descending)
    (matrix)


svg.datum(exp)
    .append("g")
    .selectAll("g")
    .data(function(d)
        {
            return d.groups;
        })
    .enter()
    .append("g")
    .append("path")
    .style("fill", "blue")
    .style("stroke", "black")
    .attr("d", d3.arc()
        .innerRadius(355)
        .outerRadius(365)
    )

svg.datum(exp)
    .append("g")
    .selectAll("path")
    .data(function(d)
        {
            return d;
        })
    .enter()
    .append("path")
    .attr("d", d3.ribbon()
        .radius(355)
    )
    .style("fill","red")
    .style("stroke","black");










