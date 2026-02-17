const result = [];

//to create a regex can be in two ways

/*
the creation use a specific syntax, using two "/" to recognize
inside the slashes it have the pattern 
in right of the slashes, can be putted the flags
in the pattern can be used a combination of caracters to get a specifically result
*/

/*
flags:
g - global - search all occourrences
i - ignore case - ignore the diference between upper and lower case
m - multiples - make the "^" and "$" work per line
s - dotAll - allow the "." can take the break line
u - unicode - allow the support of unicodes
*/

/*
special characters:
. - any character
^ - start
$ - end
^<string>$ - all string
[] - set
[^] - negation
+ - one or more
* - zero or more
? - optional
{} - exact quantity
() - group
| - or
\d - number
\D - not number
\W - not letter or number
\s - space
\S - not space
*/

const regex1 = /^\d+$/;

const regex2 = /\d+/;

const regex3 = /\D+/;

//or

const regexExample1 = new RegExp('^D$', g);

//some commands of the regex:

//<string>.match(<regex>); : find matching patterns

result.push('123'.match(regex1));

//<string>.search(<regex>); : search for a single match

result.push('abc123'.search(regex2));

//<string>.replace(<regex>, <substitute string>); : search and replace the matching patterns to a new string part

result.push('123'.replace(regex1, '456'));

//<regex>.test(<string>); : return if the regex exist inside the string

result.push(regex1.test('456'));

//<string>.split(<regex>); : return a string aplited according the regex

result.push('1a2b3c4'.split(regex3));

for(let v of result){console.log(v);}