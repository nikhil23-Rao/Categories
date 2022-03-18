import { createAvatar } from "@dicebear/avatars";
import React, { useEffect, useState } from "react";
import * as style from "@dicebear/avatars-identicon-sprites";
import { Avatar } from "../components/Avatar";

const profile = () => {
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("pfpid");
    if (!id) {
      localStorage.setItem("pfpid", Math.floor(Math.random() * 200).toString());
    }

    let svg = createAvatar(style, {
      seed: localStorage.getItem("pfpid")!!,
      dataUri: true,
    });
    setProfileImg(svg);
  }, []);
  return (
    <>
      <nav id="navbar" className="flexbox"></nav>
      <main id="main">
        <div className="profile-top">
          <div className="profile-info flexbox">
            <div className="profile-info-inner view-width flexbox-space-bet-start">
              <div className="profile-left flexbox-start">
                <div className="profile-picture-wrapper profile-picture-large flexbox">
                  <Avatar
                    profileImg={profileImg}
                    onClick={() => null}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="profile-username-wrapper flexbox-col-start">
                  <h3 className="profile-username flexbox">
                    <span className="name">Yaniv Rao</span>
                  </h3>
                  <div className="profile-followers profile-followers-desk flexbox">
                    <p>
                      <span className="posts-amount"></span>Posts
                    </p>
                    <p>
                      <span className="followers-amount"></span>Followers
                    </p>
                    <p>
                      <span className="following-amount"></span>Following
                    </p>
                  </div>
                  <div className="profile-bio">
                    <p className="profile-bio-inner">
                      <span className="line">All the images used are</span>
                      <span className="line">
                        from{" "}
                        <a
                          className="profile-bio-link-inner"
                          href="https://www.unsplash.com"
                          target="_blank"
                        >
                          unsplash.com
                        </a>
                      </span>
                      <span className="line">
                        <a
                          className="profile-bio-link"
                          href="https://www.arealalien.com"
                          target="_blank"
                        >
                          www.arealalien.com
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="profile-right flexbox-start">
                <button>Edit Profile</button>
              </div>
            </div>
          </div>
          <div className="profile-stories flexbox">
            <div className="profile-stories-inner view-width flexbox-left">
              <div className="profile-stories-overlay"></div>
              <div className="profile-stories-scroll flexbox-left"></div>
            </div>
          </div>
        </div>

        <div className="profile-grid flexbox-col">
          <div className="profile-grid-inner view-width"></div>

          <div className="profile-grid-images flexbox"></div>
        </div>
      </main>
    </>
  );
};

export default profile;
