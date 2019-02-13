const hash=require('hash.js');

const hash_persona=async(data)=>{
    return hash.sha256().update(data).digest('hex')
};

module.exports={
    hash_persona
}
