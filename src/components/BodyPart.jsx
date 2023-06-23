import { Button, Image, Nav, Navbar, Stack } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import arrowDrop from "../assets/arrowDrop.svg";
import editWhite from "../assets/editWhite.svg";
import join from "../assets/join.svg";
import LocationPart from "./LocationPart";
import PostsPart from "./PostsPart";

export default function BodyPart() {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMobile1 = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <Stack
      style={{
        maxWidth: isMobile ? "100%" : "76%",
        margin: "auto",
      }}
    >
      <Navbar
        expand="lg"
        className="relative"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {!isMobile ? (
          <>
            {/* a small round button at bottom roght */}

            <Nav activeKey={"#"} variant="underline">
              <Nav.Link
                href="#"
                style={{
                  fontWeight: "450",
                }}
              >
                All Posts(32)
              </Nav.Link>

              <Nav.Link disabled>Article</Nav.Link>
              <Nav.Link disabled>Event</Nav.Link>
              <Nav.Link disabled>Education</Nav.Link>
              <Nav.Link disabled>Job</Nav.Link>
            </Nav>
            <Stack gap={3} direction="horizontal">
              <Button
                style={{
                  backgroundColor: "#EDEEF0",
                  color: "#000000",
                  fontWeight: "500",
                  border: "none",
                }}
              >
                Write a Post
                <Image src={arrowDrop} alt="React Logo" width={"20px"} />
              </Button>
              <Button variant="primary">
                <Image
                  src={join}
                  alt="React Logo"
                  width={"20px"}
                  style={{
                    marginBottom: "5px",
                  }}
                />
                <span
                  style={{
                    marginLeft: "10px",
                    fontWeight: "500",
                  }}
                >
                  Join Group
                </span>
              </Button>
            </Stack>
            <hr
              style={{
                position: "absolute",
                width: "100%",
                top: "57%",
                color: "#000000",
              }}
            />
          </>
        ) : (
          <>
            <Button
              style={{
                position: "fixed",
                width: "50px",
                height: "50px",
                bottom: "3%",
                right: "3%",
                borderRadius: "50%",
                backgroundColor: "#FF5C5C",
                border: "none",
                paddingBottom: "10px",
                zIndex: "100",
              }}
            >
              <Image src={editWhite} alt="React Logo" width={"20px"} />
            </Button>
            <Stack
              gap={3}
              direction="horizontal"
              style={{
                justifyContent: "space-between",
                width: "100%",
                paddingInline: "20px",
              }}
            >
              <span
                style={{
                  fontWeight: "750",
                }}
              >
                Posts(368)
              </span>
              <Button
                variant="ghost"
                style={{
                  backgroundColor: "#EDEEF0",
                }}
              >
                <span
                  style={{
                    fontWeight: "550",
                    marginRight: "10px",
                  }}
                >
                  Filter: All
                </span>
                <Image src={arrowDrop} alt="React Logo" width={"20px"} />
              </Button>
            </Stack>
          </>
        )}
      </Navbar>
      <Stack
        direction="horizontal"
        style={{
          justifyContent: "space-between",
        }}
      >
        <PostsPart />
        {!isMobile1 && <LocationPart />}
      </Stack>
    </Stack>
  );
}
