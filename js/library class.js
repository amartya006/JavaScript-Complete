console.log("Implementing Library Class");

class Library{
    constructor(books){
        this.bookList = books;
        this.issuedBooks = {};
    }

    getBookList(){
        (this.bookList).forEach(book => {
            console.log(book);
            
        });
    }

    issueBook(book, user){
        if(this.bookList.includes(book)){
            if(this.issuedBooks[book] == undefined){
                this.issuedBooks[book] = user;
            } else{
                console.log("This Book is Already Issued");
            }
        } else{
            console.log("Book Not Available in Library");
        }
        
        
    }

    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }
}


