import { useState } from "react";
import { Button, Form, Image, Stack } from "react-bootstrap";
import facebook from "../assets/facebook.svg";
import formImg from "../assets/formImg.svg";
import google from "../assets/google.svg";

export default function UserForm({ signin }) {
  const [signIn, setSignIn] = useState(signin);
  return (
    <Stack
      gap={3}
      style={{
        width: "100%",
        borderRadius: "20px",
      }}
    >
      <span
        style={{
          fontWeight: "500",
          color: "#008A45",
          backgroundColor: "#EFFFF4",
          height: "50px",
          textAlign: "center",
          paddingTop: "10px",
        }}
      >
        Let's learn, share & inspire each other with our passion for computer
        engineering. Sign up now 🤘🏼
      </span>
      <Stack
        gap={3}
        direction="horizontal"
        style={{
          justifyContent: "space-between",
          paddingInline: "30px",
        }}
      >
        <h2>{signIn ? "Sign In" : "Create Account"}</h2>
        <span>
          {signIn ? "Don’t have an account yet?" : "Already have an account?"}{" "}
          <Button
            variant="ghost"
            onClick={() => setSignIn(!signIn)}
            style={{
              color: "#2F6CE5",
              fontWeight: "600",
              paddingInline: "0px",
              marginBottom: "5px",
            }}
          >
            {signIn ? "Create new for free" : "Sign In"}
          </Button>
        </span>
      </Stack>
      <Stack
        gap={3}
        direction="horizontal"
        style={{
          paddingInline: "30px",
          marginBottom: "30px",
        }}
      >
        <Stack gap={3}>
          <Form
            style={{
              borderRadius: "0px",
            }}
          >
            <Stack
              direction="horizontal"
              style={{
                scale: signIn ? 0 : 1,
              }}
            >
              <Form.Control
                type="text"
                placeholder="First name"
                style={{
                  backgroundColor: "#F2F2F2",
                  borderRadius: "0px",
                  height: "42px",
                }}
              />
              <Form.Control
                type="text"
                placeholder="Last name"
                style={{
                  backgroundColor: "#F2F2F2",
                  borderRadius: "0px",
                  height: "42px",
                }}
              />
            </Stack>
            <Form.Control
              type="email"
              placeholder="Email"
              style={{
                backgroundColor: "#F2F2F2",
                borderRadius: "0px",
                height: "42px",
              }}
            />
            <Form.Control
              type="password"
              placeholder="Password"
              style={{
                backgroundColor: "#F2F2F2",
                borderRadius: "0px",
                height: "42px",
              }}
            />
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              style={{
                backgroundColor: "#F2F2F2",
                borderRadius: "0px",
                height: "42px",
                scale: signIn ? 0 : 1,
              }}
            />
          </Form>
          <Button
            variant="primary"
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          >
            {signIn ? "Sign In" : "Create Account"}
          </Button>
          <Stack gap={2}>
            <Button
              variant="ghost"
              style={{
                border: "1px solid #D9D9DB",
                borderRadius: "0px",
              }}
            >
              <Image src={facebook} alt="React Logo" width={"18px"} />
              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                {signIn ? "Sign in with Facebook" : "Sign up with Facebook"}
              </span>
            </Button>
            <Button
              variant="outline-ghost"
              style={{
                border: "1px solid #D9D9DB",
                borderRadius: "0px",
              }}
            >
              <Image src={google} alt="React Logo" width={"18px"} />
              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                {signIn ? "Sign in with Google" : "Sign up with Google"}
              </span>
            </Button>
          </Stack>
        </Stack>
        <Stack gap={3}>
          <Image
            src={formImg}
            alt="React Logo"
            width={signIn ? "100%" : "70%"}
          />
          <span
            style={{
              fontSize: "11px",
              fontWeight: "350",
              paddingTop: "30px",
              scale: signIn ? 0 : 1,
            }}
          >
            By signing up, you agree to our Terms & conditions, Privacy policy
          </span>
        </Stack>
      </Stack>
    </Stack>
  );
}
