FileSync = require('fs');

Folder = FileSync.readdirSync('./Commands/');
Folder.filter(File => File.endsWith('.js'));

for (File of Folder) {
  Command = require(`./Commands/${File}`);  
  console.log(`Name: ${Command.name}`);
}

==================================================================================

FileSync = require('fs');

FileSync.readdir('./Commands/', (err, files) => {
  if (err) {console.error(err)}
  
  files.forEach(file => {
    if (!file.endsWith('.js')) {return}    
    let Command = require(`./Commands/${file}`);
    let Name = file.split('.')[0];
    console.log(`File: ${Name}.js`);
  });
});
