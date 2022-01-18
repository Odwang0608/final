function tran() {
  let count;
  count = parseInt(document.getElementById("inp").count.value);
  switch (count) {
    case 1: //總分
      var a = parseFloat(document.getElementById("inp").num1.value);
      var b = parseFloat(document.getElementById("inp").num2.value);
      var c = parseFloat(document.getElementById("inp").num3.value);
      var d = parseFloat(document.getElementById("inp").num4.value);
      var e = parseFloat(document.getElementById("inp").num5.value);
      var area;
      area = a + b + c + d + e;
      document.getElementById("inp").ans.value = area;
      break;
    case 2: //平均
      var a = parseFloat(document.getElementById("inp").num1.value);
      var b = parseFloat(document.getElementById("inp").num2.value);
      var c = parseFloat(document.getElementById("inp").num3.value);
      var d = parseFloat(document.getElementById("inp").num4.value);
      var e = parseFloat(document.getElementById("inp").num5.value);
      var area;
      area = (a + b + c + d + e) / 5;
      document.getElementById("inp").ans.value = area;
      break;
    case 3: //等級
      var a = parseFloat(document.getElementById("inp").num1.value);
      var b = parseFloat(document.getElementById("inp").num2.value);
      var c = parseFloat(document.getElementById("inp").num3.value);
      var d = parseFloat(document.getElementById("inp").num4.value);
      var e = parseFloat(document.getElementById("inp").num5.value);
      var area;
      area = (a + b + c + d + e) / 5;
      if (area >= 90) {
        area = "A";
        document.getElementById("inp").ans.value = "A";
      } else if (area >= 80) {
        area = "B";
        document.getElementById("inp").ans.value = "B";
      } else if (area >= 70) {
        area = "C";
        document.getElementById("inp").ans.value = "C";
      } else if (area >= 60) {
        area = "D";
        document.getElementById("inp").ans.value = "D";
      } else {
        area = "F";
        document.getElementById("inp").ans.value = "F";
      }
      break;
    default:
      document.getElementById("inp").ans.value = "只有1-3啦!不認識字嗎?";
  }
}