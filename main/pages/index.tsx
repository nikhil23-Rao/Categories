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
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [profileImg, setProfileImg] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
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
          <Avatar
            profileImg={profileImg}
            onClick={() => router.push("/profile")}
          />
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
            <p>cheese</p>
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
