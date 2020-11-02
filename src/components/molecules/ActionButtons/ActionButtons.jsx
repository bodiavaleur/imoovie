import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaClock, FaStar } from "react-icons/fa";
import { Button } from "../../atoms";
import { ActionButtonsUI } from "./ActionButtonsUI";
import { addUserContent } from "../../../firebase/firebaseApi";
import { AiOutlineClockCircle, AiOutlineStar } from "react-icons/ai";

export function ActionButtons({ content, type }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const { user } = useSelector((state) => ({ user: state.user }));

  const clickFavorite = () => {
    addUserContent("favorites", user.uid, content, type, isFavorite);
    setIsFavorite(!isFavorite);
  };

  const clickWatchlist = () => {
    addUserContent("watchlist", user.uid, content, type, isInWatchlist);
    setIsInWatchlist(!isInWatchlist);
  };

  return (
    <ActionButtonsUI>
      <Button onClick={clickFavorite}>
        {isFavorite ? (
          <>
            <AiOutlineStar /> Unfavorite
          </>
        ) : (
          <>
            <FaStar /> Favorite
          </>
        )}
      </Button>
      <Button onClick={clickWatchlist}>
        {isInWatchlist ? (
          <>
            <AiOutlineClockCircle /> Watched
          </>
        ) : (
          <>
            <FaClock /> Watchlist
          </>
        )}
      </Button>
    </ActionButtonsUI>
  );
}
