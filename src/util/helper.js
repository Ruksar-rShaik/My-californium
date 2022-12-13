const printDate=()=>{
    const date= new Date()
    let year=date.getFullYear()
    let month=date.getMonth()
    let day=date.getDay()
    console.log(day+"-"+month+"-"+year)
}
function batchInformation(){
    console.log("Californium, W3D4, the topic for today is Nodejs module system")
}

module.exports.printDate=printDate
module.exports.batchInfo=batchInformation