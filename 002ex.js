const string = 'Tecky Academy is the best coding school in Hong Kong';

console.log (string.substring (0, 5));
console.log (string.substring (6, 13));
console.log (
  string.substring (0, 13).toLowerCase () +
    string.substring (13, string.length - 9) +
    string.substring (string.length - 9).toUpperCase ()
);
