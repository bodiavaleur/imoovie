import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserData } from "../../../firebase/firebaseApi";
import { ContentPoster, MovieList, TopicTitle } from "../../molecules";
import { DefaultTemplate } from "../../templates";

export function FavoritesPage() {
  const [favorites, setFavorites] = useState(null);
  const { user } = useSelector((state) => ({ user: state.user }));

  useEffect(() => {
    getUserData(user.uid, "favorites").then((data) => setFavorites(data));
  }, [user]);

  return (
    <DefaultTemplate>
      <TopicTitle title='Your favorites' />
      <MovieList>
        {favorites
          ? favorites.map((content) => (
              <ContentPoster
                key={content.id}
                poster={content.poster_path}
                title={content.title}
                link={`/content/${content.media_type}/${content.id}`}
              />
            ))
          : null}
      </MovieList>
    </DefaultTemplate>
  );
}
