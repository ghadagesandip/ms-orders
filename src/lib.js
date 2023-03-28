import fs from 'fs';

export const encode = (str) =>{
    return Buffer.from(str).toString('base64')
}

export const decode = (encodedStr) => {
    return Buffer.from(encodedStr, 'base64').toString('ascii')
}

export const getConfig = async () =>{
    const config = fs.readFileSync('./vault.json', 'utf8');
    const data = JSON.parse(config);
    return data;
}