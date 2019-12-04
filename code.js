
var svg = d3.select("#chordData")
            .append("svg")
            .attr("width", 750)
            .attr("height", 800)
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

var values10 = [ 34575, 22830, 20953, 15824, 8357, 15991, 9523, 15824, 6359, 12135, -1 ];

var valuesUS = [ 5532, 9903, 20046, 5031, 7776, 16732, 4047, 3665, 7895, 924, -1 ];

var balance = [ 29043, 12927, 907, 10793, 581, -741, 5476, 12159, -1536, 11211 ]

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
    .html(function(){
      
        if(d.source.index == 10) {
        return  "Source: " + names[d.source.index] + " " + values10[d.target.index] +
          //" " + d.source.index  + 
          "<br>Target: " + names[d.target.index] + " " + valuesUS[d.target.index]+ 
          //" " + d.target.index + 
            "<br>U.S. Deficit" + " " + balance[d.target.index]
        } 
      
        else {
        return  "Source: " + names[d.source.index] + " " + values10[d.source.index] +
          //" " + d.source.index  + 
          "<br>Target: " + names[d.target.index] + " " + valuesUS[d.source.index]+ 
          //" " + d.target.index +
            "<br>U.S. Surplus" + " " + balance[d.source.index]
        }
            
  } )
    
}


    //.style("left", (d3.event.pageX + ) + "px")
    //.style("top", (d3.event.pageY - ) + "px")



var hideTooltip = function(d) {
  tooltip
    //.transition()
    //.duration(1000)
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



/*
var innerRadius = 355

svg.append("svg:text")
    .each(function(d) {return d.angle = (d.startAngle + d.endAngle) / 2; })
    .attr("dy", " .35em")
    .attr("class", "titles")
    .attr("text-anchor", function(d){return d.angle > Math.PI ? "end" : null; }) 
    .attr("transform", function(d)
        {
		  return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
		  + "translate(" + (innerRadius + 55) + ")"
		  + (d.angle > Math.PI ? "rotate(180)" : "")
        })
    .text(function(d,i) {return names[i]; });
*/




//M2.2349804084439196e-14,-365A365,365,0,0,1,265.03252384807706,-250.96366530380138L257.7713588111435,-244.08794844616298A355,355,0,0,0,2.173748068486552e-14,-355Z




var svgPath = d3.select("#pathChina")
                .append("svg")
                .attr("width", 1200)
                .attr("height", 1200)
                .attr("id", "Pathsvg")
                //.attr("transform", "translate(375,375)");
/*
svgPath.append("path")
        .attr("id", "chinaPath")
        .attr("d", "M2.2349804084439196e-14,-365A365,365,0,0,1,265.03252384807706,-250.96366530380138L257.7713588111435,-244.08794844616298A355,355,0,0,0,2.173748068486552e-14,-355Z" )
        .style("fill", "none")
        .style("stroke", "#AAAAAA");

svgPath.append("text")
        .append("textPath")
        .attr("xlink:href", "#chinaPath")
        .style("text-anchor", "middle")
        .attr("startOffset", "50%")
        .text("China")
        
*/




var pieGenerator = d3.pie()
  .value(function(d) {return d.quantity;})
  .sort(function(a, b) {
   // return a.name.localeCompare(b.name);
  });
//var data = [ 34575, 22830, 20953, 15824, 8357, 15991, 9523, 15824, 6359, 12135, 162371 ];





var Countries = [
    {name: 'China', quantity: 34575},
    {name: 'Canada', quantity: 22830},
    {name: 'Mexico', quantity: 20953},
    {name: 'Japan', quantity: 15824},
    {name: 'Germany', quantity: 8357},
    {name: 'United Kingdom', quantity: 16732},
    {name: 'South Korea', quantity: 9523},
    {name: 'India', quantity: 15824},
    {name: 'France', quantity: 7895},
    {name: 'Brazil', quantity: 12135},
    {name: 'United States', quantity: 79274},   
];

var arcData = pieGenerator(Countries);


var arcGenerator = d3.arc()
  .innerRadius(390)
  .outerRadius(420);

d3.select('#Pathsvg')
  .selectAll('path')
  .data(arcData)
  .enter()
  .append('path')
  .style("stroke", "white")
  .style("fill", "white")
  .attr("transform", "translate(750,400)")
  .attr('d', arcGenerator);

d3.select("#Pathsvg")
    .selectAll("text")
    .data(arcData)
    .enter()
    .append("text")
    .each(function(d)
        {
        var centroid = arcGenerator.centroid(d);
		d3.select(this)
			.attr('x', centroid[0])
			.attr('y', centroid[1])
			.attr('dy', '0.33em')
            //.attr("dx", "21em")
			.text(d.data.name)
            .style("fill", "black")
            .style("text-anchor", "middle")
            .attr("transform", "translate(750,400)")
            
        });
    /*
    .attr("transform", function(d) 
        {
            return "translate(" + arc.centroid(d) + ")"
        })
    .attr("text-anchor","middle")
    .text( function(d){ return d.Countries.name})
    */
















