export const getCurrentSong = () => {

  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
  const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
  const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
  const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN

  console.log("client id:" + client_id)
  console.log("client secret:" + client_secret)
  
  const authOptions = {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: 'grant_type=refresh_token&refresh_token=' + refresh_token
  };
  
  try {
  
    fetch(TOKEN_ENDPOINT, authOptions)
    .then(response => response.json())
    .then(data => {
      const token = data.access_token;
      console.log(data)
  
      const nowPlayingOptions = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      
      fetch(NOW_PLAYING_ENDPOINT, nowPlayingOptions)
        .then(response => response.json())
        .then(song => {
          const albumImageUrl = song.item.album.images[2].url;
          const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
          const isPlaying = song.is_playing;
          const songUrl = song.item.external_urls.spotify;
          const title = song.item.name;

          console.log(title + " - " + artist)

          return {
            albumImageUrl : albumImageUrl,
            artist : artist,
            isPlaying : isPlaying,
            songURL : songUrl,
            title : title,
          };
        })
    })
  
  } catch(e) {
    console.log(e)
    return {
      albumImageUrl : 'null',
      artist : 'null',
      isPlaying : 'null',
      songURL : 'null',
      title : 'null'
    };
    
  }
  
}
