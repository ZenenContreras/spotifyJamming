const token='BQAu1u-p5qvvZlNlzfxak5f1_bxGecOfnMNauJu--zursd1svkUS-lAYyiXqPQoyv_cqWVBjGHd81_SwXxSdbhVqIbNuydKCkC_r2eNZe4dSp55zy7PeqwBd86PGbgbIGaKMwGbK3Rk'

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