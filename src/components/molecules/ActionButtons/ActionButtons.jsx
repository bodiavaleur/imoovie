import React from "react";
import { FaClock, FaStar } from "react-icons/fa";
import { Button } from "../../atoms";
import { ActionButtonsUI } from "./ActionButtonsUI";

export function ActionButtons() {
  return (
    <ActionButtonsUI>
      <Button>
        <FaStar /> Favorite
      </Button>
      <Button>
        <FaClock /> Watchlist
      </Button>
    </ActionButtonsUI>
  );
}
