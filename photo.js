
const fs = require('fs');
const path = require('path');

if (process.argv.length == 3){
    dir = path.join(__dirname, process.argv[2]);
    arrangeFile(dir);
}

function arrangeFile(dir){
    console.log('Processing in', dir + '...');
    fs.promises
      .readdir(dir)
      .then((files) => {  
        files.forEach(file => {
            if (file.match(/.(png|aae)/)){    
                moveFile(path.join(dir, file),'captured');
            }
            else if (file.match(/.(mp4|mov|avi|wmv)/)){
                moveFile(path.join(dir, file),'video');
            }
            else if (file.match(/^IMG_E.*(jpg|jpeg)/)){
                originalPath = path.join(dir, 'IMG_' + file.split('IMG_E')[1]);
                try{
                    if (fs.statSync(originalPath).isFile())
                        moveFile(originalPath, 'duplicated');
                } catch (error){}       
            }
        });
      })
      .catch((error) => { console.error('Can\'t find path :', dir) });
}

// 파일을 해당하는 폴더로 옮깁니다.
// file   : 파일의 전체경로 
// movedir: 옮길 폴더명
function moveFile(file, movedir){
    filedir = path.dirname(file);
    filename = path.basename(file);
    fs.mkdir(path.join(filedir, movedir), { recursive:true } , (error) =>{
        if (error) console.error(error);
    });
    fs.rename(file, path.join(filedir, movedir, filename), (error) =>{
        if (error) console.error(error);
    });
    console.log('move', filename, 'to', movedir);
}
