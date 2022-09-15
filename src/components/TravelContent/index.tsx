import { Flex } from "@chakra-ui/react";
import { ContinentSwiper } from "./ContinentSwiper";
import { TextContent } from "./TextContent";
import { TravelTypes } from "./TravelTypes";

export function TravelContent() {
    return (
        <Flex
            maxW={1240}
            w='100%'
            paddingTop={20}
            direction='column'
        >
            <TravelTypes />
            <TextContent />
            <ContinentSwiper />
        </Flex>
    );
}