import React from "react";
import MailingList from "./MailingList";
import { Center, HStack, VStack, Heading, Link } from "@chakra-ui/react";

export default function ContactTab() {
  return (
    <Center background="white">
      <VStack spacing={72}>
        <Heading marginTop={24}>
          If you want to reach out to me, here are my socials 👇
        </Heading>
        <HStack paddingBottom={60}>
          <Link href="http://irtizahafiz.medium.com" isExternal>
            Medium Blog
          </Link>
          <Link href="https://github.com/irtiza07" isExternal>
            GitHub
          </Link>
          <Link href="https://www.instagram.com/irtiza.hafiz/" isExternal>
            Instagram
          </Link>
          <Link href="https://www.linkedin.com/in/irtiza-hafiz/" isExternal>
            LinkedIn
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCDankIVMXJEkhtjv5yLSN4g"
            isExternal
          >
            YouTube
          </Link>
        </HStack>
        <MailingList />
      </VStack>
    </Center>
  );
}
