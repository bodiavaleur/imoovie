import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserData } from "../../../firebase/firebaseApi";
import { ContentPoster, MovieList, TopicTitle } from "../../molecules";
import { DefaultTemplate } from "../../templates";

export function WatchlistPage() {
  const [watchlist, setWatchlist] = useState(null);
  const { user } = useSelector((state) => ({ user: state.user }));

  useEffect(() => {
    getUserData(user.uid, "watchlist").then((data) => setWatchlist(data));
  }, [user]);

  return (
    <DefaultTemplate>
      <TopicTitle title='Your watchlist' />
      <MovieList>
        {watchlist
          ? watchlist.map((content) => (
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
