"use client";

import { GridContainer } from "@/components/container/GridContainer";
import { Container, Typography, SvgIcon } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "../../../public/images/me2.jpeg";
import { Link } from "react-scroll";
import SpotifyCurrentSong from "@/components/spotify/SpotifyCurrentSong";
import { SpotifyLogo } from "@/components/spotify/spotifyLogo";
import "@/styles/project.css";

export const AboutDetails = () => {
  const text = (
    <>
      <Typography variant="h5" component="h5" fontWeight={700} align="left">
        Education
      </Typography>
      <Typography variant="h6" component="h6" align="left" sx={{ mt: -2 }}>
        <ul>
          <li>CS @ McMaster University (3.95 GPA)</li>
          <Link to="notes" spy={true} smooth={true} offset={0} duration={500}>
            <li className="clickable">
              Checkout my CS notes, written in LaTeX!
            </li>
          </Link>
        </ul>
      </Typography>
      <Typography variant="h5" component="h5" fontWeight={700} align="left">
        Work Experience
      </Typography>
      <Typography variant="h6" component="h6" align="left" sx={{ mt: -2 }}>
        <ul>
          <li>Full Stack Developer @ Scotiabank</li>
          <li>Software Developer @ Canada’s Wonderland</li>
        </ul>
      </Typography>
      <Typography variant="h5" component="h5" fontWeight={700} align="left">
        Langauges/Technologies
      </Typography>
      <Typography variant="h6" component="h6" align="left" sx={{ mt: -2 }}>
        <ul>
          <li>
            Python, Javascript/Typescript (React JS), C# (.NET), SQL, AWS, C
            Tensorflow, Firebase, AutoCAD, LaTeX, & more!
          </li>
        </ul>
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        fontWeight={700}
        align="left"
        sx={{ pb: 2 }}
      >
        <SvgIcon sx={{ mb: -0.5, mr: 1 }}>
          <SpotifyLogo />
        </SvgIcon>
        Listening To
      </Typography>
      <SpotifyCurrentSong />
    </>
  );

  const image = (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 1 }}
    >
      <Container maxWidth="sm" sx={{ mb: 5 }}>
        <div style={{ borderRadius: "100px", overflow: "hidden" }}>
          <Image
            className="centerImg"
            style={{
              width: "100%",
              height: "auto",
            }}
            objectFit="cover"
            src={img}
            alt="Image"
          />
        </div>
      </Container>
    </motion.div>
  );

  return <GridContainer leftComponent={image} rightComponent={text} />;
};
