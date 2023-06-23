import { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Image,
  InputGroup,
  Modal,
  NavDropdown,
  Navbar,
  Stack,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import arrowDrop from "../assets/arrowDrop.svg";
import mobNav from "../assets/mobNav.svg";
import navLogo from "../assets/navLogo.svg";
import UserForm from "./UserForm";

export default function NavbarComp() {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        varient="white"
        style={{ paddingInline: "20px", paddingTop: "14px" }}
        fixed="top"
      >
        {!isMobile ? (
          <Container fluid>
            <Navbar.Brand>
              <Image
                src={navLogo}
                alt="React Logo"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <InputGroup
              style={{
                backgroundColor: "#F2F2F2",
                borderRadius: "30px",
                width: "360px",
                height: "42px",
              }}
            >
              <Button variant="ghost" style={{ marginBottom: "3px" }}>
                <FaSearch />
              </Button>

              <FormControl
                placeholder="Search for your favourite group in ATG"
                style={{
                  backgroundColor: "#F2F2F2",
                  border: "none",
                  borderRadius: "30px",
                }}
              />
            </InputGroup>
            <Stack direction="horizontal" gap={1}>
              <span style={{ fontWeight: "500" }}>Create account.</span>
              <Button
                variant="ghost"
                style={{
                  color: "#2F6CE5",
                  fontWeight: "bold",
                  paddingInline: "0px",
                }}
                onClick={handleShow}
              >
                It's free!
                <Image
                  src={arrowDrop}
                  alt="arrowDrop"
                  style={{
                    marginTop: "-1px",
                  }}
                />
              </Button>
              <Modal show={show} onHide={handleClose} centered size="lg">
                <UserForm signIn={false} />
              </Modal>
              <NavDropdown id="basic-nav-dropdown"></NavDropdown>
            </Stack>
          </Container>
        ) : (
          <Stack
            direction="horizontal"
            style={{
              justifyContent: "end",
              width: "100%",
              height: "100%",
              paddingTop: "8px",
            }}
          >
            <Image src={mobNav} alt="mobNav" width="70px" />
          </Stack>
        )}
      </Navbar>
    </>
  );
}
