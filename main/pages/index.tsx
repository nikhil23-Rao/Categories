import type { NextPage } from "next";
import Head from "next/head";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { Button } from "../components/Button";
import { Credits } from "../components/Credits";
import styles from "../styles/Home.module.css";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-identicon-sprites";
import { useEffect, useState } from "react";
import { Avatar } from "../components/Avatar";
import Settings from "@mui/icons-material/Settings";
import { LIGHT_THEME } from "../constants/themes";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import HowToPlay from "../components/HowToPlay";

const Home: NextPage = () => {
  const [profileImg, setProfileImg] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: playIsOpen,
    onOpen: playOnOpen,
    onClose: playOnClose,
  } = useDisclosure();

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
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.headerItems}>
          <Settings
            style={{ color: "#4cc9f0", cursor: "pointer", fontSize: 30 }}
            onClick={onOpen}
          />
          <HowToPlay onClick={playOnOpen} />
          <Avatar profileImg={profileImg} />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"3xl"}>
        <ModalOverlay />
        <ModalContent padding={30}>
          <ModalHeader style={{ alignSelf: "center", fontSize: 25 }}>
            Customize Your View
          </ModalHeader>
          <ModalCloseButton
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          />
          <ModalBody alignSelf={"center"}>
            <p style={{ textAlign: "center", fontSize: 17, color: "gray" }}>
              {/* Manage your font size, color, and background. These settings will
              save for your next visit. */}
              Manage your font size, color, and background. These settings
              affect all your game accounts on this browser.
            </p>
            <p className="divider" style={{ alignSelf: "center" }}>
              Font Size
            </p>
            <div id="form-wrapper" style={{ alignSelf: "flex-start" }}>
              <form action="/p/quote.php" method="GET">
                <div id="debt-amount-slider">
                  <input
                    type="radio"
                    name="debt-amount"
                    id="1"
                    value="1"
                    required
                  />{" "}
                  <label htmlFor="1" data-debt-amount="XS"></label>
                  <input
                    type="radio"
                    name="debt-amount"
                    id="2"
                    value="2"
                    required
                  />{" "}
                  <label htmlFor="2" data-debt-amount="S"></label>
                  <input
                    type="radio"
                    name="debt-amount"
                    id="3"
                    value="3"
                    required
                    defaultChecked
                  />{" "}
                  <label htmlFor="3" data-debt-amount="Default"></label>
                  <input
                    type="radio"
                    name="debt-amount"
                    id="4"
                    value="4"
                    required
                  />{" "}
                  <label htmlFor="4" data-debt-amount="L"></label>
                  <input
                    type="radio"
                    name="debt-amount"
                    id="5"
                    value="5"
                    required
                  />{" "}
                  <label htmlFor="5" data-debt-amount="XL"></label>
                  <div id="debt-amount-pos"></div>
                </div>
              </form>
            </div>
            <p className="divider">Color</p>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 33,
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: "#1D9AF1",
                  marginRight: 40,
                }}
              />
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: "#FED500",
                  marginRight: 40,
                }}
              />
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: "#F91880",
                  marginRight: 40,
                }}
              />
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: "#7957FF",
                  marginRight: 40,
                }}
              />
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: "#FE7A01",
                  marginRight: 40,
                }}
              />
            </div>

            <p className="divider">Background Theme</p>
            <div
              className="grid"
              style={{ paddingLeft: 20, position: "relative", top: -20 }}
            >
              <div className="inputGroup" style={{ marginTop: 30 }}>
                <input id="option1" name="option1" type="checkbox" />
                <label
                  htmlFor="option1"
                  style={{
                    color: "#000",
                    border: "0.1px solid gray",
                    backgroundColor: "#fff",
                  }}
                >
                  Light
                </label>
              </div>
              <div className="inputGroup" style={{ marginTop: 30 }}>
                <input id="option1" name="option1" type="checkbox" />
                <label
                  htmlFor="option1"
                  style={{
                    backgroundColor: "#010001",
                    color: "#fff",
                    border: "0.1px solid #fff",
                  }}
                >
                  Dark
                </label>
              </div>
              <div className="inputGroup" style={{ marginTop: 30 }}>
                <input id="option1" name="option1" type="checkbox" />
                <label
                  htmlFor="option1"
                  style={{
                    backgroundColor: "#14212A",
                    color: "#fff",
                    border: "0.1px solid #1D9AF1",
                  }}
                >
                  Night
                </label>
              </div>
              <div className="inputGroup" style={{ marginTop: 30 }}>
                <input id="option1" name="option1" type="checkbox" />
                <label
                  htmlFor="option1"
                  style={{
                    background: "linear-gradient(to right, #c33764, #1d2671)",
                    color: "#fff",
                    border: "0.1px solid #fff",
                  }}
                >
                  Space
                </label>
              </div>
              <div className="inputGroup" style={{ marginTop: 30 }}>
                <input id="option1" name="option1" type="checkbox" />
                <label
                  htmlFor="option1"
                  style={{
                    background: "linear-gradient(to right, #ee0979, #ff6a00)",
                    color: "#fff",
                    border: "0.1px solid #fff",
                  }}
                >
                  Sunset
                </label>
              </div>
              <div className="inputGroup" style={{ marginTop: 30 }}>
                <input id="option1" name="option1" type="checkbox" />
                <label
                  htmlFor="option1"
                  style={{
                    background:
                      "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
                    color: "#fff",
                    border: "0.1px solid #fff",
                  }}
                >
                  Magic
                </label>
              </div>
            </div>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={playIsOpen} onClose={playOnClose} isCentered>
        <ModalOverlay />
        <ModalContent padding={30}>
          <ModalHeader style={{ alignSelf: "center", fontSize: 25 }}>
            How To Play
          </ModalHeader>
          <ModalCloseButton
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          />
          <ModalBody alignSelf={"center"}>
            <p>Basically some cheese but better.</p>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>

      <Head>
        <title>Categories</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <AnimatedTitle />
        </h1>

        <p className={styles.description}>An Absolute Entertainment.</p>

        <div>
          <Button title="Daily Category" height={30} width={50} />
        </div>
        <div style={{ position: "relative", top: 30, right: 15 }}>
          <Button title="Practice Match" height={30} width={50} disabled />
        </div>
        <div style={{ position: "relative", top: 60, right: 20 }}>
          <Button title="Multiplayer (PVP)" height={30} width={50} disabled />
        </div>
      </main>

      <footer className="mb-5">
        <Credits />
      </footer>
    </div>
  );
};

export default Home;
