function dataTable(data) {
  var keys = Object.keys(data[0]);
  var headers = keys.map(function(name) {
    return new UnderlinedCell(new TextCell(name));
  });
  var body = data.map(function(row) {
    return keys.map(function(name) {
      return new TextCell(String(row[name]));
    });
  });
  return [headers].concat(body);
}
//exporting for use in <pre>
//module.exports.drawTable = drawTable;
//module.exports.dataTable = dataTable;
//module.exports.PPVS = PPVS;

//print(drawTable(dataTable(PPVS)));
var result = drawTable(dataTable(PPVS));
