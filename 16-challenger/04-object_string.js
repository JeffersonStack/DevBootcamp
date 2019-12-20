(function() {
  // length
  let name = "Jefferson";
  console.log(name.length); // 9

  // Metodos

  // CharAt(index)
  console.log(name.charAt(1)); // e
  console.log(name.charAt(6)); // s

  // concat()
  console.log(name.concat(" Teles")); // Jefferson Teles
  console.log(name.concat(" Teles", " De", " Souza")); // Jefferson Teles De Souza

  // indexOf()
  console.log(name.indexOf("s")); // 6
  console.log(name.indexOf("z")); // -1

  // replace(string, newstring)
  console.log(name.replace("s", "z")); // Jefferzon
  console.log(name.replace("J", "G")); // Gefferson

  // slice(start, end)
  console.log(name.slice(3)); // ferson
  console.log(name.slice(5, 9)); // rson

  // splite(separador, limit)
  console.log(name.split("f")); // ["Je", "", "erson"]
  console.log(name.split("o")); // ["Jeffers", "n"]
  console.log(name.split("f").join("t")); // Jetterson

  // substring(start, end)
  console.log(name.substring(3)); // ferson

  // toLowerCase
  console.log(name.toLowerCase()); // jefferson

  // toUpperCase
  console.log(name.toUpperCase()); // JEFFERSON
})();
