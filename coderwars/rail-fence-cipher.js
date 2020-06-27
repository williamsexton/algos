function encodeRailFenceCipher(string, numberRails) {
  var rails = {}
  var result = ''
  var numberSlots = 2 * (numberRails - 1)
  for (var i = 0; i < string.length; i++) {
    if (i % (numberSlots) < numberRails) {
      if (rails[`${i % numberSlots}`] === undefined) {
        rails[`${i % (numberSlots)}`] = [string[i]]
      } else rails[`${i % numberSlots}`].push(string[i])
    }
    else {
      rails[`${numberSlots - i % numberSlots}`].push(string[i])
    }
  }
  for (var i = 0; i < numberRails; i++) {
    if (rails[String(i)] !== undefined) result += rails[String(i)].join("")
  }
  return result;
}

function decodeRailFenceCipher(string, numberRails) {
  //  var rails = {}
  //  var stringArray = string.split("")
  //  var numberSlots = 2*(numberRails-1)
  //  var railCount = 0;
  //  for(i=0; i< stringArray.length; i += numberSlots){

  //    if(i+numberSlots >= stringArray.length  && rails[String(railCount)] !== undefined){
  //    rails[String(railCount)] = (stringArray.slice(i,stringArray.length).join(""))
  //    }
  //    else if (rails[String(railCount)] !== undefined){
  //    rails[String(railCount)].push(stringArray.slice(i,i+numberSlots))\
  //    railCount ++ 
  //    }else{
  //    rails[String(railCount)] = (stringArray.slice(i,i+numberSlots))
  //    railCount ++
  //    }
  //  }
  //  return rails;
  var numberSlots = 2 * (numberRails - 1)
  var rails = []
  var counter = 0;
  var result = ""
  for (var i = 0; i < string.length; i++) {
    if (rails[specialMod(i, numberRails - 1)] === undefined) rails[specialMod(i, numberRails - 1)] = [null]
    else rails[specialMod(i, numberRails - 1)].push(null)
  } /// creates empty array of rows
  for (var i = 0; i < rails.length; i++) {
    for (var j = 0; j < rails[i].length; j++) {
      rails[i][j] = string[counter]
      counter++
    }
    console.log(rails[i])
  } /// populates list properly
  counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (i % (numberSlots / 2) === 0) {
      result += rails[specialMod(i, numberRails - 1)][Math.floor(i / numberSlots)]
    } else {
      result += rails[specialMod(i, numberRails - 1)][counter]
    }
    if (i % (numberRails - 1) === 0 && i !== 0) counter++
  }

  return result;
}

function specialMod(a, b) {
  if (a % (2 * b) >= b) return b - a % b;
  else return a % b;
}