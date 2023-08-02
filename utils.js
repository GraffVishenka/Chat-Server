const trimStr = (str) =>{
    JSON.stringify(str);
    str.trim().toLowerCase();
} 

exports.trimStr = trimStr;
