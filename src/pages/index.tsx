import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelContent } from "../components/TravelContent";

export default function Home() {
  return (
    <Flex
      direction='column'
      align='center'
    >
      <Header />
      <Banner />
      <TravelContent />
    </Flex>
  )
}
