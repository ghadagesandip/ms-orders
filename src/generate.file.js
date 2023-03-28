import fs from 'fs';

const createJsonFile = function (data){
    const jsonData = JSON.stringify(data);
    fs.writeFileSync('./vault.json', jsonData);
}

const loadData = async function(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve({
                "MONGO_URL": "mongodb+srv://sandip:Darsheel2021@cluster0.1hxvh.mongodb.net/?retryWrites=true&w=majority"
            })
        }, 5000)
       
    })
}

const generateFile = async () => {
    const da = await loadData();
    createJsonFile(da);
}

export default generateFile;