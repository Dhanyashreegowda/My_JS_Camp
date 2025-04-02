const myObject1 = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift: "swift by apple"
}

for (const key in myObject1) {
//  console.log(`${key} shortcut is for ${myObject1[key]}`);
}

const progamming = ["js" ,"rb" ,"py" ,"java" ,"cpp"]

for (const key in progamming) {
    // console.log(progamming[key]);
}


const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('Fr',"France")
map.set('IN',"India")  // map only returns unique values
// console.log(map);

for (const key in map) {
  console.log(key);
}

  