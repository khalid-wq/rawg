"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
function GameId() {
  const [game, setGame] = useState([]);
  const params = useParams();
  const slug = params.slug;
  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${slug}?key=3dbb8f23fc0d4dd1861ef2a948c40f78`
        );
        const gameData = await response.json();
        console.log(gameData);
        setGame(gameData);
      } catch (e) {
        console.log(e);
      }
    };
    fetchGame();
  }, [slug]);
  return (
    <div className="">
      <Head>
        <title>{game.name}</title>
      </Head>
      <div>
        <h1> {game.name}</h1>
        helloo
      </div>
    </div>
  );
}

export default GameId;
