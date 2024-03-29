import React from "react";
import { Center, HStack, VStack, Heading, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Center marginTop={16} marginBottom={32}>
      <VStack>
        <Heading>Get in touch</Heading>
        <HStack>
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
      </VStack>
    </Center>
  );
}
