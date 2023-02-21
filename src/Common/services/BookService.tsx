import Book from '../types/book';
import Tag from '../types/tag';


export async function getBooks(){

    const res = await fetch("http://localhost:9000/api/book/all");

    if(res.ok) {
        const data: Book[] = await res.json();
        return data;
    }

    return [];
}

export async function getBooksByTag(tag: Tag){

    const res = await fetch("http://localhost:9000/api/tag/"+tag.idTag+"/book/all");

    if(res.ok) {
        const data: Book[] = await res.json();
        return data;
    }
    
    return [];
}