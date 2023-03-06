import Book from '../Class/Book';
import Tag from '../Class/Tag';


export async function getBooks(){

    const res = await fetch("http://192.168.0.28:9000/api/book/all");

    if(res.ok) {
        const data: Book[] = await res.json();
        return data;
    }

    return [];
}

export async function getBooksByTag(tag: Tag){

    const res = await fetch("http://192.168.0.28:9000/api/book/tag/"+tag.idTag+"");

    if(res.ok) {
        const data: Book[] = await res.json();
        return data;
    }
    
    return [];
}