import { Flex } from "@chakra-ui/react";
import { TextContent } from "./TextContent";
import { TravelTypes } from "./TravelTypes";

export function TravelContent() {
    return (
        <Flex
            w={1240}
            paddingTop={20}
            direction='column'
        >
            <TravelTypes />
            <TextContent />
        </Flex>
    );
}