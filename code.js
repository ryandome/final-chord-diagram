
var svg = d3.select("#chordData")
            .append("svg")
            .attr("width", 750)
            .attr("height", 750)
            .append("g")
            .attr("transform", "translate(375,375)")


var matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34575],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22830],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20953],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15824],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8357],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15991],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9523],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15824],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6359],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12135],
    //[22223, 9353, 2421, 31948, 48397, 45162, 12952, 24213, 61999, 5251, 0, 93774],
    [5532, 9903, 20046, 5031, 7776, 16732, 4047, 3665, 7895, 924, 0]    
];


var names = [ "China", "Canada", "Mexico", "Japan", "Germany", "United Kingdom", "South Korea", "India", "France", "Brazil", "United States" ];




var colors = ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]

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
    .style("fill", function(d,i) {return colors[i]} )
    .style("stroke", "black")
    //.text(function(d,i) {return name[i]} )
    .attr("d", d3.arc()
        .innerRadius(355)
        .outerRadius(365)
    )



var tooltip = d3.select("#chordData")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "white")
  .style("border", "solid")
  .style("border-width", "1px")
  .style("border-radius", "5px")
  .style("padding", "10px")

var showTooltip = function(d) 
{
  tooltip
    .style("opacity", 1)
    .html("Source: " + names[d.source.index] + "<br>Target: " + names[d.target.index])
    //.style("left", (d3.event.pageX + 15) + "px")
    //.style("top", (d3.event.pageY - 28) + "px")

}

var hideTooltip = function(d) {
  tooltip
    .transition()
    .duration(1000)
    .style("opacity", 0)
}


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
    .style("fill", function(d) {return (colors[d.source.index]) })
    .style("stroke","black")
    .on("mouseover", showTooltip)
    .on("mouseout", hideTooltip)







