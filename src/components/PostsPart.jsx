import { Button, Card, Dropdown, Image, Stack } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { default as Post1, default as Post2 } from "../assets/Posts1.svg";
import Post3 from "../assets/Posts3.svg";
import data1 from "../assets/groupData1.svg";
import data2 from "../assets/groupData2.svg";
import hamburger from "../assets/hamburger.svg";
import share from "../assets/share.svg";
import user1 from "../assets/user1.svg";
import user2 from "../assets/user2.svg";
import user3 from "../assets/user3.svg";
import user4 from "../assets/user4.svg";
import views from "../assets/views.svg";

export default function PostsPart() {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <Stack
      style={{
        maxWidth: isMobile ? "100%" : "66%",
      }}
    >
      <Stack
        gap={3}
        style={{
          marginBottom: "80px",
          marginTop: "20px",
        }}
      >
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={Post1} />
          <Card.Body>
            <Card.Text style={{ fontWeight: "500" }}>✍️ Article</Card.Text>
            <Card.Title
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  maxWidth: "80%",
                  fontWeight: "600",
                }}
              >
                What if famous brands had regular fonts? Meet RegulaBrands!
              </span>
              <div>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" variant="ghost">
                    <Image src={hamburger} alt="React Logo" width={"20px"} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Title>
            <Card.Text
              style={{
                opacity: "0.7",
              }}
            >
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </Card.Text>
          </Card.Body>
          <Card.Footer
            style={{
              borderTop: "none",
              backgroundColor: "white",
            }}
          >
            <Stack
              direction="horizontal"
              gap={3}
              style={{
                justifyContent: "space-between",
              }}
            >
              <Stack direction="horizontal" gap={3}>
                <Image src={user2} alt="React Logo" width={"40px"} />
                <Stack>
                  <span
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Sarthak Kamra
                  </span>
                  {isMobile && (
                    <Image src={views} alt="React Logo" width={"80px"} />
                  )}
                </Stack>
              </Stack>

              <Stack direction="horizontal" gap={3}>
                {!isMobile && (
                  <Image src={views} alt="React Logo" width={"80px"} />
                )}
                <Button
                  variant="ghost"
                  style={{
                    backgroundColor: "#F1F3F5",
                  }}
                >
                  <Image
                    src={share}
                    alt="React Logo"
                    width={"18px"}
                    style={{
                      marginBottom: "5px",
                      marginRight: "5px",
                    }}
                  />
                  {isMobile && "Share"}
                </Button>
              </Stack>
            </Stack>
          </Card.Footer>
        </Card>

        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={Post2} />
          <Card.Body>
            <Card.Text style={{ fontWeight: "500" }}>🔬️ Education</Card.Text>
            <Card.Title
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  maxWidth: "80%",
                  fontWeight: "600",
                }}
              >
                Tax Benefits for Investment under National Pension Scheme
                launched by Government
              </span>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" variant="ghost">
                  <Image src={hamburger} alt="React Logo" width={"20px"} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Title>
            <Card.Text
              style={{
                opacity: "0.7",
              }}
            >
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </Card.Text>
          </Card.Body>
          <Card.Footer
            style={{
              borderTop: "none",
              backgroundColor: "white",
            }}
          >
            <Stack
              direction="horizontal"
              gap={3}
              style={{
                justifyContent: "space-between",
              }}
            >
              <Stack direction="horizontal" gap={3}>
                <Image src={user1} alt="React Logo" width={"40px"} />
                <Stack>
                  <span
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Sarah West
                  </span>
                  {isMobile && (
                    <Image src={views} alt="React Logo" width={"80px"} />
                  )}
                </Stack>
              </Stack>
              <Stack direction="horizontal" gap={3}>
                {!isMobile && (
                  <Image src={views} alt="React Logo" width={"80px"} />
                )}
                <Button
                  variant="ghost"
                  style={{
                    backgroundColor: "#F1F3F5",
                  }}
                >
                  <Image
                    src={share}
                    alt="React Logo"
                    width={"18px"}
                    style={{
                      marginBottom: "5px",
                      marginRight: "5px",
                    }}
                  />
                  {isMobile && "Share"}
                </Button>
              </Stack>
            </Stack>
          </Card.Footer>
        </Card>

        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={Post3} />
          <Card.Body>
            <Card.Text style={{ fontWeight: "500" }}>🗓️ Meetup</Card.Text>
            <Card.Title
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "-8px",
              }}
            >
              <span
                style={{
                  maxWidth: "80%",
                  fontWeight: "600",
                }}
              >
                Finance & Investment Elite Social Mixer @Lujiazui
              </span>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" variant="ghost">
                  <Image src={hamburger} alt="React Logo" width={"20px"} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Title>
            <Card.Text
              style={{
                opacity: "0.7",
              }}
            >
              <Image src={data1} alt="React Logo" width={"300px"} />
            </Card.Text>
            <Button
              variant="outline-secondary"
              style={{
                width: "100%",
                color: "#E56135",
                fontWeight: "600",
              }}
            >
              Visit Website
            </Button>
          </Card.Body>
          <Card.Footer
            style={{
              borderTop: "none",
              backgroundColor: "white",
            }}
          >
            <Stack
              direction="horizontal"
              gap={3}
              style={{
                justifyContent: "space-between",
              }}
            >
              <Stack direction="horizontal" gap={3}>
                <Image src={user3} alt="React Logo" width={"40px"} />
                <Stack>
                  <span
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Ronal Jones
                  </span>
                  {isMobile && (
                    <Image src={views} alt="React Logo" width={"80px"} />
                  )}
                </Stack>
              </Stack>
              <Stack direction="horizontal" gap={3}>
                {!isMobile && (
                  <Image src={views} alt="React Logo" width={"80px"} />
                )}
                <Button
                  variant="ghost"
                  style={{
                    backgroundColor: "#F1F3F5",
                  }}
                >
                  <Image
                    src={share}
                    alt="React Logo"
                    width={"18px"}
                    style={{
                      marginBottom: "5px",
                      marginRight: "5px",
                    }}
                  />
                  {isMobile && "Share"}
                </Button>
              </Stack>
            </Stack>
          </Card.Footer>
        </Card>

        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Text style={{ fontWeight: "500" }}>💼️ Job</Card.Text>
            <Card.Title
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "-8px",
              }}
            >
              <span
                style={{
                  maxWidth: "80%",
                  fontWeight: "600",
                }}
              >
                Software Developer
              </span>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" variant="ghost">
                  <Image src={hamburger} alt="React Logo" width={"20px"} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Title>
            <Card.Text
              style={{
                opacity: "0.7",
              }}
            >
              <Image src={data2} alt="React Logo" width={"350px"} />
            </Card.Text>
            <Button
              variant="outline-secondary"
              style={{
                width: "100%",
                color: "#02B875",
                fontWeight: "600",
              }}
            >
              Apply on Timesjobs
            </Button>
          </Card.Body>
          <Card.Footer
            style={{
              borderTop: "none",
              backgroundColor: "white",
            }}
          >
            <Stack
              direction="horizontal"
              gap={3}
              style={{
                justifyContent: "space-between",
              }}
            >
              <Stack direction="horizontal" gap={3}>
                <Image src={user4} alt="React Logo" width={"40px"} />
                <Stack>
                  <span
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Joseph Gray
                  </span>
                  {isMobile && (
                    <Image src={views} alt="React Logo" width={"80px"} />
                  )}
                </Stack>
              </Stack>
              <Stack direction="horizontal" gap={3}>
                {!isMobile && (
                  <Image src={views} alt="React Logo" width={"80px"} />
                )}
                <Button
                  variant="ghost"
                  style={{
                    backgroundColor: "#F1F3F5",
                  }}
                >
                  <Image
                    src={share}
                    alt="React Logo"
                    width={"18px"}
                    style={{
                      marginBottom: "5px",
                      marginRight: "5px",
                    }}
                  />
                  {isMobile && "Share"}
                </Button>
              </Stack>
            </Stack>
          </Card.Footer>
        </Card>
      </Stack>
    </Stack>
  );
}
