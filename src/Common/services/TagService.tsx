import Tag from '../Class/Tag';

export async function getTags(){
    const res = await fetch("http://10.121.128.60:9000/api/tag/all");

    if(res.ok) {
        const data: Tag[] = await res.json();
        return data;
    }

    return [];
}

