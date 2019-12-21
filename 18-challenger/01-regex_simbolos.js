// Caracteres especias regex

// \w - caracteres alfanumericos /[A-Z a-z 0-9]/
// \d - digitos [0-9]
// \s - espaços em branco
// \n - quebra de linha
// \t - tab - tabulação
// . - todos os caracteres (exeto quebra de linha)


// [] - lista
// () - grupo

// [^123] - negação
// \W - qualquer caracter, menos alfanumerico
// \D - qualquer caracter, menos digitos
// \S - qualquer caracter, menos espaço em branco
// {n,m} - repetidores

// ? opcional - zero ou uma ocorrencia do item anterior
// + - uma ou mais ocorrencias do item anterior
// * - zero ou mais ocorrencias do item anterior
// ^ - inicio de string
// $ - fim da string
// ?: - somente agrupamento, sem capturar
// \1 \2 - referencia dentro do regex
// m - flag m - multiline

// Syntaxe

// Math(regex)
let name = 'jefferson'.match(/rson/);
console.log(name);

// replace(regex, string)
let text = 'Olá Mundo!'.replace(/Mundo/, 'Jefferson');
console.log(text);

// split(regex)
let cpf = '111.222.333-44';
console.log(cpf.split(/\D/));

// search(regex)
console.log(cpf.search(/\./))