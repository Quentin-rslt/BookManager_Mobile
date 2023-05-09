import Book from '../Class/Book';
import Tag from '../Class/Tag';


export async function getBooks(){

    const res = await fetch("http://192.168.0.34:9000/api/book/all");

    if(res.ok) {
        const data: Book[] = await res.json();
        return data;
    }

    return [];
}

export async function getBooksByTag(tag: Tag){

    const res = await fetch("http://192.168.0.34:9000/api/book/tag/"+tag.idTag+"");

    if(res.ok) {
        const data: Book[] = await res.json();
        return data;
    }
    
    return [];
}

export async function createBook(data: string) {
    fetch('http://192.168.0.34:9000/api/addBook', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: data,
    });
}