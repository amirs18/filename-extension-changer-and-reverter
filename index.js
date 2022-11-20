var fs = require('fs-extra');
var files = fs.readdirSync('./');
const renameExtension = require('rename-extension')


fs.writeJSONSync('./og.json', files, err => {
if (err) return console.error(err)
})
Promise.all(      
files.map( f => {
        fs.rename('./'+f ,renameExtension(f, '.txt'))
}));

var files = fs.readdirSync('./');
files.forEach(f => {   
                console.log(f);  
});
