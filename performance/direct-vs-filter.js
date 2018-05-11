const MapList = require('../maplist');

let mapList = null;

let arrSource = Array(1e6).fill({seed:"test"});


let arrData = arrSource.map((item,index)=>{
    let newItem = {};
    newItem.name = item.seed + index;
    newItem.value = index;
    return newItem;
});
arrSource = null;

mapList = new MapList("name");
arrData.forEach((item,index)=>{
    mapList.add(item);
});

