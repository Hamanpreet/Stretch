const wrapLog = function (callback, name) {
  
  return (x ,y) => {
    return callback(x,y);
  }
};

const area = function (x, y) {
  return x * y;
};
const logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

const volume = function (x, y, z) {
  return x * y * z;
};
const logVolume = wrapLog(volume, "volume");

console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30