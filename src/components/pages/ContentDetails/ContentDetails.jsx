import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { findById } from "../../../api";
import { getUserData } from "../../../firebase/firebaseApi";
import { Poster } from "../../atoms";
import { ActionButtons, Details } from "../../molecules";
import { DefaultTemplate } from "../../templates/";
import { ContentDetailsHeadUI, ContentDetailsUI } from "./ContentDetailsUI";

export function ContentDetails(props) {
  const [details, setDetails] = useState(null);
  const [userData, setUserData] = useState(null);
  const contentType = props.match.params.type;
  const contentId = props.match.params.id;
  const backdropBaseUrl = "http://image.tmdb.org/t/p/w500/";
  const { user } = useSelector((state) => ({ user: state.user }));

  useEffect(() => {
    findById(contentType, contentId).then((data) => setDetails(data));
    // if user is logged in - get his favorites and watchlist
    user && getUserData(user.uid).then((data) => setUserData(data));
  }, [contentType, contentId, user]);

  return (
    <DefaultTemplate>
      <ContentDetailsUI>
        {details && (
          <>
            <ContentDetailsHeadUI
              backdrop={backdropBaseUrl + details.backdrop_path}
            >
              <Poster img={details.poster_path} size='big' />
            </ContentDetailsHeadUI>
            {user && userData && (
              <ActionButtons
                content={details}
                type={contentType}
                userData={userData}
              />
            )}

            <Details details={details} />
          </>
        )}
      </ContentDetailsUI>
    </DefaultTemplate>
  );
}
