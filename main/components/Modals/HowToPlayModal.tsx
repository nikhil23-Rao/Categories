import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import {
  getAltTextColor,
  getTextColor,
  getBGColor,
  getColor,
} from "../../utils/customizationsFunctions";
import { dailyCategories } from "../../data/dailyCategories";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const HowToPlayModal = ({ isOpen, onClose, onOpen }: IProps) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={"4xl"}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent padding={30} style={{ background: getBGColor() }}>
          <ModalHeader
            style={{ alignSelf: "center", fontSize: 25, color: getTextColor() }}
          >
            How To Play
          </ModalHeader>
          <ModalCloseButton
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              color: getTextColor(),
            }}
          />
          <ModalBody
            alignSelf={"center"}
            style={{ overflowX: "hidden", maxWidth: "80%" }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: 17,
                color: getTextColor(),
                bottom: 20,
                position: "relative",
              }}
            >
              Welcome to the Daily Category! Learn how to play the game below.
            </p>
            <p style={{ textAlign: "center", color: getTextColor() }}>
              Enter your answer to the category starting with the given letter.
              <br />
              Each guess must be a valid item in the corresponding category.
              Click the Submit button to submit.
              <br />
              <br />
              <b>
                If the item is not accepted or you google the answer, that is
                considered cheating
              </b>
              <br />
              <br />
              <b>
                If you are stuck, try using your skip. You only get one per
                game, so use wisely.
              </b>
              <br />
              <br />
              <b>
                If the item is real, yet not accepted, click the mark as correct
                button to help us add it to our data.
              </b>
              <br />
              <br />
              <b>Our data only contains the most common answers.</b>
              <br />
              <br />
              Your goal is to fill out the category as fast as you can to gain
              the most stars for that day.
              <br />
              the most stars you can recieve is 5 and the least is 1. The
              requirements are down below
              <br />
              <ul style={{ textAlign: "left" }}>
                <li>5 stars: 0:00 - 0:30</li>
                <li>4 stars: 0:30 - 1:00</li>
                <li>3 stars: 1:00 - 1:30</li>
                <li>2 stars: 1:30 - 2:00</li>
                <li>1 star: 2:00+</li>
              </ul>
              <br />
              Examples:
              <br />
              <br />
              Category: <b>Animals</b>
              <br />
              Letter Of The Day: <b>C</b>
              <br />
              Possible Answer: <b>Cat</b>
              <br />
              <br />
              Category: <b>Things You Eat</b>
              <br />
              Letter Of The Day: <b>C</b>
              <br />
              Possible Answer: <b>Chocolate Brownies</b>
              <br />
              <br />
              <br />
              <b>There will be a new Category every day.</b>
              <br />
              <br />
              <b>Can you balance thinking with pressure?</b>
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
