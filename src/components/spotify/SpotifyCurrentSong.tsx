import { Typography, Stack, Link } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PlayingAnimation from "@/components/spotify/PlayingAnimation";
import "@/styles/project.css";

export default function SpotifyCurrentSong() {
  const [album, setAlbum] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [songURL, setSongURL] = useState("");

  useEffect(() => {
    const handleError = () => {
      // default song if API fails
      // TODO: implement database so each successful is the most recent
      // TODO: update this handleerror so its the most recent song from database
      setAlbum(
        "https://i.scdn.co/image/ab67616d00004851c6e0948bbb0681ff29cdbae8"
      );
      setArtist("J. Cole");
      setIsPlaying(false);
      setSongURL("https://open.spotify.com/album/0UMMIkurRUmkruZ3KGBLtG");
      setTitle("January 28th");
    };

    const fetchSpotifySong = () => {
      const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
      const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/`;
      const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
      const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
      const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

      const authOptions = {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(client_id + ":" + client_secret).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=refresh_token&refresh_token=" + refresh_token,
      };

      try {
        fetch(TOKEN_ENDPOINT, authOptions)
          .then((response) => response.json())
          .then((data) => {
            const token = data.access_token;

            const nowPlayingOptions = {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };

            fetch(NOW_PLAYING_ENDPOINT, nowPlayingOptions)
              .then((response) => response.json())
              .then((song) => {
                console.log(song);
                const albumImageUrl = song.item.album.images[2].url;
                const artist = song.item.artists
                  .map((_artist: any) => _artist.name)
                  .join(", ");
                const isPlaying = song.is_playing;
                const songUrl = song.item.external_urls.spotify;
                const title = song.item.name;

                setAlbum(albumImageUrl);
                setArtist(artist);
                setIsPlaying(isPlaying);
                setSongURL(songUrl);
                setTitle(title);
              })
              .catch((e) => {
                handleError();
              });
          });
      } catch (e) {
        handleError();
      }
    };
    fetchSpotifySong();
  }, []);

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 30,
          delay: 0.6,
        }}
      >
        <>
          <Stack direction="row" spacing={2}>
            <img src={album} width={48} height={48} alt="album cover" />
            <Stack direction="column">
              <Typography variant="h6" component="h6" align="left">
                <Link
                  href={songURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  className="clickable"
                >
                  {title}
                </Link>
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                align="left"
                color="textSecondary"
                sx={{ mt: -0.5 }}
              >
                {artist}
              </Typography>
            </Stack>
            <PlayingAnimation />
          </Stack>
        </>
      </motion.div>
    </>
  );
}
