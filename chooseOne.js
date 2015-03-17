var courses = [['Austgen','Grube','Heinzman','Herre','Hofer','Samano','Zekovic'],['Davis', 'Gainey', 'Klump', 'Postma']];

var courses = { "6 Sided Die": ['1','2','3','4','5','6'],
	"12 Sided Die": ['1','2','3','4','5','6','7','8','9','10','11','12']
}
 

function chooseOne(course) {
  var thisClass = courses[course];

  var n = thisClass.length;
  var which = Math.floor(Math.random() * n);

  print('Chosen: ' + thisClass[which]);
}
