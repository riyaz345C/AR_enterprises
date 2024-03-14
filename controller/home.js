const path = require('path')

const getHome = async(req,res) =>{
    try {
        res.sendFile(path.join(path.dirname(__dirname),'build','index.html'))
    } catch (error) {
        console.log(error);
    }
}
const sendEmail = async(req,res) =>{
    try {
        console.log(req.body);
        res.json({body:req.body})
    } catch (error) {
        console.log(error);
    }
}
module.exports = { getHome ,sendEmail }