import React, { useState } from "react";
import { Button, Image, Stack } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import headImgMov from "../assets/headImgMov.svg";
import leftArrow from "../assets/leftArrow.svg";

export default function HeadPart() {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const [group, setGroup] = useState(false);
  return (
    <div style={{ position: "relative", maxHeight: "300px" }}>
      <Image
        src={headImgMov}
        alt="React Logo"
        fluid
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          // objectPosition: "center",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)",
          zIndex: 2,
        }}
      ></div>
      {isMobile && (
        <Stack
          direction="horizontal"
          gap={3}
          style={{
            position: "absolute",
            top: "5%",
            left: "5%",
            right: "5%",
            justifyContent: "space-between",
            zIndex: 3,
          }}
        >
          <Image src={leftArrow} alt="React Logo" width={"20px"} />
          <Button
            variant="outline-ghost"
            style={{
              color: "white",
              border: "1.5px solid white",
            }}
            onClick={() => setGroup(!group)}
          >
            {group ? "Leave Group" : "Join Group"}
          </Button>
        </Stack>
      )}

      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "10%" : "20%",
          left: isMobile ? "4%" : "14%",
          color: "white",
          zIndex: 3,
          width: "fit-content",
          transition: "bottom 0.5s, left 0.5s",
        }}
      >
        <h2 style={{ fontWeight: "bold" }}>Computer Engineering</h2>
        <span style={{ fontWeight: 300 }}>
          142,765 computer engineers follow this
        </span>
      </div>
    </div>
  );
}
