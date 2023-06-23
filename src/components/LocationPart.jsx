import { useState } from "react";
import { Button, Image, Stack } from "react-bootstrap";
import clear from "../assets/clear.svg";
import edit from "../assets/edit.svg";
import explain from "../assets/explain.svg";
import g1 from "../assets/g1.svg";
import g2 from "../assets/g2.svg";
import g3 from "../assets/g3.svg";
import g4 from "../assets/g4.svg";
import location from "../assets/location.svg";
import thumbs from "../assets/thumbs.svg";

export default function LocationPart() {
  const [locationData, setLocationData] = useState("Noida , India");
  const [editing, setEditing] = useState(false);
  const [follow, setFollow] = useState(false);
  const [follow2, setFollow2] = useState(false);
  const [follow3, setFollow3] = useState(false);
  const [follow4, setFollow4] = useState(false);
  return (
    <Stack
      style={{
        maxWidth: "27%",
        marginTop: "40px",
        justifyContent: "start",
      }}
    >
      <Stack
        style={{
          maxHeight: "10%",
        }}
      >
        <Stack
          direction="horizontal"
          gap={3}
          style={{
            justifyContent: "space-between",
            marginBottom: "-12px",
          }}
        >
          <Stack direction="horizontal" gap={1}>
            <Image src={location} alt="React Logo" width={"18px"} />
            {editing ? (
              <input
                type="text"
                style={{
                  fontWeight: "500",
                  fontSize: "15px",
                  border: "none",
                  outline: "none",
                }}
                onChange={(e) => setLocationData(e.target.value)}
              />
            ) : (
              <span style={{ fontWeight: "500", fontSize: "15px" }}>
                {locationData}
              </span>
            )}
          </Stack>
          <Button
            variant="ghost"
            style={{ color: "#2F6CE5" }}
            onClick={() => setEditing((prev) => !prev)}
          >
            <Image
              src={editing ? clear : edit}
              alt="React Logo"
              width={"20px"}
            />
          </Button>
        </Stack>
        <hr />
        <Stack
          direction="horizontal"
          gap={2}
          style={{
            alignItems: "start",
          }}
        >
          <Image
            src={explain}
            alt="React Logo"
            width={"20px"}
            style={{
              marginTop: "1px",
            }}
          />
          <span
            style={{
              fontWeight: "380",
              fontSize: "13px",
              opacity: "0.8",
            }}
          >
            Your location will help us serve better and extend a personalised
            experience.
          </span>
        </Stack>
      </Stack>
      <Stack gap={4}>
        <Stack direction="horizontal" gap={2}>
          <Image src={thumbs} alt="React Logo" width={"20px"} />
          <span style={{ fontWeight: "450", fontSize: "15px" }}>
            RECOMMENDED GROUPS
          </span>
        </Stack>
        <Stack
          direction="horizontal"
          gap={3}
          style={{
            justifyContent: "space-between",
          }}
        >
          <Stack direction="horizontal" gap={3}>
            <Image src={g1} alt="React Logo" width={"40px"} />
            <span
              style={{
                fontWeight: "500",
              }}
            >
              Leisure
            </span>
          </Stack>
          <Button
            variant="secondary"
            style={{
              backgroundColor: !follow ? "#EDEEF0" : "#000000",
              borderRadius: "20px",
              border: "none",
              color: !follow ? "#000000" : "#FFFFFF",
            }}
            onClick={() => setFollow((prev) => !prev)}
          >
            {follow ? "Followed" : "Follow"}
          </Button>
        </Stack>

        <Stack
          direction="horizontal"
          gap={3}
          style={{
            justifyContent: "space-between",
          }}
        >
          <Stack direction="horizontal" gap={3}>
            <Image src={g2} alt="React Logo" width={"40px"} />
            <span
              style={{
                fontWeight: "500",
              }}
            >
              Activism
            </span>
          </Stack>
          <Button
            variant="secondary"
            style={{
              backgroundColor: !follow4 ? "#EDEEF0" : "#000000",
              borderRadius: "20px",
              border: "none",
              color: !follow4 ? "#000000" : "#FFFFFF",
            }}
            onClick={() => setFollow4((prev) => !prev)}
          >
            {follow4 ? "Followed" : "Follow"}
          </Button>
        </Stack>

        <Stack
          direction="horizontal"
          gap={3}
          style={{
            justifyContent: "space-between",
          }}
        >
          <Stack direction="horizontal" gap={3}>
            <Image src={g3} alt="React Logo" width={"40px"} />
            <span
              style={{
                fontWeight: "500",
              }}
            >
              MBA
            </span>
          </Stack>
          <Button
            variant="secondary"
            style={{
              backgroundColor: !follow2 ? "#EDEEF0" : "#000000",
              borderRadius: "20px",
              border: "none",
              color: !follow2 ? "#000000" : "#FFFFFF",
            }}
            onClick={() => setFollow2((prev) => !prev)}
          >
            {follow2 ? "Followed" : "Follow"}
          </Button>
        </Stack>

        <Stack
          direction="horizontal"
          gap={3}
          style={{
            justifyContent: "space-between",
          }}
        >
          <Stack direction="horizontal" gap={3}>
            <Image src={g4} alt="React Logo" width={"40px"} />
            <span
              style={{
                fontWeight: "500",
              }}
            >
              Philosophy
            </span>
          </Stack>
          <Button
            variant="secondary"
            style={{
              backgroundColor: !follow3 ? "#EDEEF0" : "#000000",
              borderRadius: "20px",
              border: "none",
              color: !follow3 ? "#000000" : "#FFFFFF",
            }}
            onClick={() => setFollow3((prev) => !prev)}
          >
            {follow3 ? "Followed" : "Follow"}
          </Button>
        </Stack>
        <span
          style={{
            color: "#2F6CE5",
            marginTop: "30px",
            marginLeft: "auto",
          }}
        >
          {" "}
          See more...
        </span>
      </Stack>
    </Stack>
  );
}
