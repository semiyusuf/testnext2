'use client';

import {useState} from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return <button onClick={handleClick}>Like ({likes})</button>;
}

/*
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
<Header title="Develop. Preview. Ship." />
*/