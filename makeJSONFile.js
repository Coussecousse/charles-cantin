const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

// Création des routes vers les fichiers
const dirPathGallery  = path.join(__dirname, "./data/gallery");
const dirPathServices = path.join(__dirname, "./data/services");
const dirPathHome     = path.join(__dirname, "./data/home")
const dirPathContact  = path.join(__dirname, "./data/contact");

let galleryList       = [];
let servicesList      = [];
let homeList          = [];
let contactList       = [];

let allFiles          = [
    {
        path : dirPathGallery,
        list : galleryList,
        fileName : 'gallery'
    },
    {
        path : dirPathServices,
        list : servicesList, 
        fileName : 'services'
    },
    {
        path : dirPathHome,
        list : homeList,
        fileName : 'home'
    },
    {
        path : dirPathContact,
        list : contactList,
        fileName : 'contact'
    }
]

// Fonction pour récupérer les données de chaque image et en faire des données json : 
const getGalleryImages = (path, list, fileName) => {
    fs.readdir(path, (err, files) => {
        if (err) {
            return console.log("Failed to lst contents of directory : " + err)
        };
        let ilist = [];
        files.forEach((file, i) => {
            let obj;
            fs.readFile(`${path}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, element, i) => {
                    if (fileName === "gallery" || fileName === "services") {
                        if (/^\s*-\s*/.test(element) && !(/^\s\s\s\s*-\s*/.test(element))){
                            acc.push(i-1)
                        }
                    } else {
                        if (/^---/.test(element)) {
                            acc.push(i);
                        }
                    }
                    return acc;
                }
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        if (fileName === "gallery" || fileName === "services") {
                            obj = []
                            let metadatas = [];
                            let container = {};

                            for (let i = 1; i < metadataIndices.length - 1; i++){
                                metadatas.push(lines.slice(metadataIndices[i] + 1, metadataIndices[i + 1] + 1));
                            }
                            metadatas.forEach(metadata => {
                                let categoriesTab = [];
                                metadata.map((line, index) => {
                                    line = line.slice(4);
                                    if (line !== 'catégories:\r'){
                                        if (line.includes('  - ')) {
                                            categoriesTab.push(line.slice(4));
                                            container.categories = categoriesTab;
                                        } else if (line[0] === ' ') {
                                            // If there is a an extra line 
                                            let lastKey = Object.keys(container)[index-1];
                                            line = line.split('  ');
                                            container[lastKey] = container[lastKey].split('\r');
                                            container[lastKey] = [container[lastKey][0], line[1]].join(' ');
                                        } else {
                                            container[line.split(': ')[0]] = line.split(': ')[1];
                                        }
                                    }
                                })
                                obj.push({...container})
                            })
                            obj[lines[2].split(': ')[0]] = lines[2].split(': ')[1];
                        } else {
                            obj = {};
                            let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);

                            metadata.map((line, index) => {
                                if (line[0] === ' ') {
                                    // If there is a an extra line 
                                   let lastKey = Object.keys(obj)[index-1];
                                   line = line.split('  ');
                                   obj[lastKey] = obj[lastKey].split('\r');
                                   obj[lastKey] = [obj[lastKey][0], line[1]].join(' ');
                                } else {
                                    obj[line.split(': ')[0]] = line.split(': ')[1];
                                }
                            })
                        }
                        return obj;
                    }
                }                
                const lines = contents.split('\n');
                const metadataIndices = lines.reduce(getMetadataIndices, []);
                metadata = parseMetadata({lines, metadataIndices});
                switch(fileName) {
                    case 'gallery': 
                    list.push({description : metadata.description})
                    for (let data of metadata) {
                        let object = {
                            id  : uuidv4(),
                            pic : data.pic,
                            alt : data.alt,
                            categories : data.categories,
                            size : data.size,
                            mobileSize : data.mobileSize,
                            posX : data.posX,
                            posY : data.posY,
                        }
                        list.push(object);
                    }
                        break;
                    case 'services' :
                        list.push({description : metadata.description})
                        for (let data of metadata) {
                            let object = {
                                id     : uuidv4(),
                                pic    : data.pic,
                                size   : data.size,
                                posX   : data.posX,
                                posY   : data.posY,
                                title  : data.title,
                                price  : data.price,
                                color  : data.colorTitle,
                                content: data.content
                            }
                            list.push(object);
                        } 
                        
                        break;
                    case 'home' : 
                        object = {
                            siteTitle : metadata.headingTitle,
                            homeTitle : metadata.title,
                            subTitle : metadata.subtitle,
                            description: metadata.description,
                            fb : metadata.facebook, 
                            insta : metadata.instagram,
                            pic : metadata.pic,
                            posX : metadata.posX,
                            posY : metadata.posY
                        }
                        list.push(object);
                        break;
                    case 'contact':
                        object = {
                            description: metadata.description,
                            pic : metadata.pic,
                            posX : metadata.posX,
                            posY : metadata.posY
                        }
                        list.push(object);
                        break;
                    default : 
                        console.log('Error in json files');
                }
                ilist.push(i);
                if (ilist.length == files.length) {
                    let data = JSON.stringify(list);
                    fs.writeFileSync(`src/${fileName}.json`, data)
                }
            })
        })
    })
    return;
}

for (let i = 0; i < allFiles.length; i++){
    getGalleryImages(allFiles[i].path, allFiles[i].list, allFiles[i].fileName);
}