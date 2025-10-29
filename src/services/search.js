const token='BQDmN9wwYYNSiVSGmbupvTYYU7rCZjfHjfWozbrcs0cS2WnaSKN9J-wiv6teWdGNTvTfg6dI_-5txlv5D_SDwG8aC9OW8JpA55kutx7dvWJpJMua3H3MFpWCE53mZKdvCkhoU__l77w'

async function fetchWebApi (endpoint, method, body) {

    try{
        const res = await fetch(`https://api.spotify.com/${endpoint}`, {
            headers:{
                Authorization: `Bearer ${token}`,
            },
            method,
            body:JSON.stringify(body)
        });
        return await res.json()

    }catch(error){
        console.error('Error: ', error)
    }
}

async function getTracks(query) {
    if (!query || !query.trim()) {
        return []; // no buscamos nada vacío
    }

    const encodedQuery = encodeURIComponent(query.trim());

    const data = await fetchWebApi(
        `v1/search?q=${encodedQuery}&type=track&limit=5`,
        'GET'
    );

    if (!data || !data.tracks || !data.tracks.items) {
        return [];
    }

    const simplified = data.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists.map(a => a.name).join(', '),
        album: track.album?.name,
        image:
        track.album?.images?.[1]?.url ||
        track.album?.images?.[0]?.url ||
        '',
        preview_url: track.preview_url,
        external_url: track.external_urls?.spotify,
        uri: track.uri
    }));

    return simplified;
}

export default getTracks