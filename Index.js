FileSync = require('fs');

Folder = FileSync.readdirSync('./Commands/');
Folder.filter(File => File.endsWith('.js'));

for (File of Folder) {
  Command = require(`./Commands/${File}`);  
  console.log(`Name: ${Command.name}`);
}
