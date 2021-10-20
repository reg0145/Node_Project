import fetch from 'node-fetch';

const url = null
? `http://localhost:8080/tweets?username=${username}`
: `http://localhost:8080/tweets`;

console.log(a());

async function  a(){  
    const response = await fetch(url)
    .then((res) => res.json());
    const json = response;
    console.log(json);
    return json;
}