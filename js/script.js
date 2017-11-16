var allClasses = [];

var allElements = document.querySelectorAll('*');

for (var i = 0; i < allElements.length; i++) {
  var classes = allElements[i].className.split(/\s+/);
  for (var j = 0; j < classes.length; j++) {
    var cls = classes[j];
    if (cls && allClasses.indexOf(cls) === -1)
      allClasses.push(cls);
  }
}

function writeToFile(d1, d2){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var fh = fso.OpenTextFile("css/props-2.css", 8, false, 0);
    fh.WriteLine(d1 + ',' + d2);
    fh.Close();
}

/// write to file
var txtFile = "css/props-2.css";
var file = new File([""], "filename");

var str = "My string of text";

file.open("w"); // open file with write access
file.writeln("First line of text");
file.writeln("Second line of text " + str);
file.write(str);
file.close();

// /// read from file

// var txtFile = "c:/test.txt"
// var file = new File(txtFile, "filename");

// file.open("r"); // open file with read access
// var str = "";
// while (!file.eof) {
// 	// read each line of text
// 	str += file.readln() + "\n";
// }
// file.close();
// alert(str);

////////////////////////////////////////////////////
/**
 * writeTextFile write data to file on hard drive
 * @param  string  filepath   Path to file on hard drive
 * @param  sring   output     Data to be written
 */
function writeTextFile(filepath, output) {
	var txtFile = new File(filepath);
	txtFile.open("w"); //
	txtFile.writeln(output);
	txtFile.close();
}

console.log(allClasses);

