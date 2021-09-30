const getTheTitles = function(books) {
    // let titles = [];

    // books.forEach(book => {
    //     titles.push(book['title']);
    // });

    // for (let book of books) {
    //     titles.push(book.title);
    // }

    return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
