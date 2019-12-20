// TRUTHY
/*
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
*/

let teste = "foo" ? true : false;
console.log(teste);

// FALSY
/*
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if (document.all) [1]
*/

let teste2 = 0 ? true : false;
console.log(teste2);
