import { useEffect, useState } from 'react';
import Tag from '../types/tag';

export default function getTags(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tags, setTags] = useState<Tag[]>([]);

    useEffect(() => {
    fetch("http://localhost:9000/api/tag/all")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setTags(result);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }, [])
    
    return tags;
}

