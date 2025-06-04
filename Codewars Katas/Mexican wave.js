function wave(str) {
  var result = [];
  var txt = str.split('');
  for (var i = 0; i < txt.length; i++) {
      if (txt[i].trim() != '') {
          var temp = txt.map(function (x) { return x.toLocaleLowerCase(); });
          temp[i] = temp[i].toUpperCase();
          result.push(temp.join(''));
      }
      else {
          continue;
      }
  }
  return result;
}