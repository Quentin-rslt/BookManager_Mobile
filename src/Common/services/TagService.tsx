import Tag from '../Class/Tag';

export async function getTags(){
    const res = await fetch("http://192.168.0.34:9000/api/tag/all");

    if(res.ok) {
        const data: Tag[] = await res.json();
        return data;
    }

    return [];
}

