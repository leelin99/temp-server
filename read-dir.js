const fs = require('fs')
const { resolve } = require('path')
const nameArr = fs.readdirSync(resolve("./static/image"),{encode: "utf-8", writeFileTypes: true})
const collectObj ={}
const noExtNameArr = nameArr.map(el => el.split('.')[0])
for(let name of noExtNameArr) {
  const originName = name.split(' ')[0]
  if(!collectObj[originName]) {
    collectObj[originName] = 1
  }
}
typeArr = {}
Object.keys(collectObj).forEach(key => {
  for(let name of nameArr) {
    if(name.includes(key) ){
      if(!typeArr[key]) {
        typeArr[key] = [name];
        continue
      }   
      typeArr[key].push(name)
    }
  }
});
const data = Object.values(typeArr).map((el, index) => ({id: index, value: el}))
console.log(data)
fs.writeFile('./image-list.json', JSON.stringify(data), (err, data) => {
  console.log(err, "err")
})
// const imageList = require("./image-list.json")
// console.log(imageList)
