/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    let entities = [['&amp;', '&'], ["&apos;", "'"], ['&quot;', '"'], ['&gt;', '>'], ['&lt;', '<'], ['&frasl;', '/']]
    
    // Iterate through each entity and replace it in the text as needed
    for (let i of entities) {
        while (text.includes(i[0])) {
            text = text.replace(i[0], i[1]);
        }
    }
    
    return text;
};