let a = "eyouia";
let b = "qwrtpsdfghjklzxcvbnm";
let c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!.:#"
let d = "?!.:#"
let n = "01234567890"

let f = function(event) {
  let bt = document.querySelector('button');
  bt.innerHTML = "Copied";
  let e = document.querySelector('.p');
  e.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  setTimeout(function() { bt.innerHTML = "Generate"; }, 1000);
}

let g = function() {
  let e = document.querySelector('.p');
  let text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let spl = Math.floor(Math.random()*6) + 2;
  text += z(spl, false);
  text += b.charAt(Math.floor(Math.random() * b.length)).toUpperCase();
  text += z(8-spl, true);
  for (var i = 0; i < 2; i++)
    text += c.charAt(Math.floor(Math.random() * c.length));
  for (var i = 0; i < 2; i++)
    text += n.charAt(Math.floor(Math.random() * n.length));
  text += d.charAt(Math.floor(Math.random() * d.length));
  e.value = text;
}

let z = function(len, ia) {
  let text = ""
  for(let i = 0; i < len; i++){
    if (ia) {
      text += a.charAt(Math.floor(Math.random() * a.length));
      ia = false;
    } else {
      text += b.charAt(Math.floor(Math.random() * b.length));
      ia = true;
    }
  }
  return text;
}
