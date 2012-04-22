function GrassToJavaScript(I) {
  var O =
    "var E = function(x) { while(!x.length) x = x(); return x };\n"+
    "var S = function(x,y) { for(var i = 0; i < x.length; ++i) if (x[i] == y) return i; return -1 };\n"+
    "var T = function(x) { return function(y) { return x } };\n"+
    "var F = function(x) { return function(y) { return y } };\n"+
    "var W = function(x) { return function(y) { return arguments.callee == E(y) ? T : F } };\n"+
    "for (var C = [], i = 0; i < 256; C.push(W(i++)));\n"+
    "var w = C[119];\n"+
    "var Out = function(x) { x = E(x); O(S(C,x)); return x };\n"+
    "var In = function(x) { var i = I(); return i < 0 ? E(x) : C[i] };\n"+
    "var Succ = function(x) { return C[(S(C,E(x)) + 1) % 256] };\n"+
    "var G = [];\n";
  var S = ["Out", "Succ", "w", "In"];
  var F = 0;
  var G = 0;
  var T = I.replace(/[^Wwv]/g,'').match(/[w]+|[W]+[w]+|[v]/g) || [];
  while (T.length) {
    var E = T.shift();
    if (E.match(/^[w]+/)) {
      var s = Array.apply(null, S); 
      O += "var F" + F + " = function(V0) {";
      s.unshift("V0");
      for (var i = 1, M = RegExp.lastMatch.length; i < M; ++i) { O += " return function(V" + i + ") {"; s.unshift("V" + i); }
      O += "\n"+
           "  var L=[];\n";
      for (var L = 0; T.length && T[0].match(/([W]+)([w]+)/); ++L) {
        T.shift();
        O += "  function $" + L + "() { L[" + L + "] = E(" + s[RegExp.$1.length - 1] + "(" + s[RegExp.$2.length - 1] + ")); return $" + (L + 1) + " }\n";
        s.unshift("L[" + L + "]");
      }
      O += "  function $" + L + "() { return " + s[0] + " }\n"+
           "  return $0\n";
      for (var i = 0; i < M; ++i) O+= "}";
      O += ";\n";
      S.unshift("F" + F++);
    } else if (E.match(/^([W]+)([w]+)/)) {
      for (;;) {
        O += "function _" + G + "() { G[" + G + "] = E(" + S[RegExp.$1.length - 1] + "," + S[RegExp.$2.length - 1] + ")); return _" + (G + 1) + " }\n";
        S.unshift("G[" + G++ + "]");
        if (!T.length || !T[0].match(/([WＷ]+)([wｗ]+)/)) break;
        T.shift();
      }
    }
  }
  O += "function _" + G + "() { return " + S[0] + "(" + S[0] + ") }\n" +
       "for(var f = _0(); !f.length; f = f());\n";
  return O;
}

function W_nya_ToJavaScript(I) {
  var I = (I.match(/\(」・ω・\)」うー！\(\/・ω・\)\/にゃー！|\(」・ω・\)」うー！！\(\/・ω・\)\/にゃー！！?/g) || []).join("").replace(/\(」・ω・\)」うー！\(\/・ω・\)\/にゃー！/g,"W").replace(/\(」・ω・\)」うー！！\(\/・ω・\)\/にゃー！！/g,"v").replace(/\(」・ω・\)」うー！！\(\/・ω・\)\/にゃー！/g,"w");
  return GrassToJavaScript(I);
}

