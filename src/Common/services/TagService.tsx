import Tag from '../types/tag';

export async function getTags(){
    const res = await fetch("http://localhost:9000/api/tag/all");

    if(res.ok) {
        const data: Tag[] = await res.json();
        return data;
    }

    return [];
}

