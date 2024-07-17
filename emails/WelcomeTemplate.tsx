import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}!!!</Text>
          <Link href="https://dou.ua/">Dou</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
