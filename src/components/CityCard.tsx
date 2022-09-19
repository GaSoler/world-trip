import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CytyCardProps {
    hrefCity: string;
    hrefCityFlag: string;
    city: string;
    state: string;

}

export function CityCard({ city, state, hrefCity, hrefCityFlag}: CytyCardProps) {
    return (
        <Box
            border='1px solid'
            borderColor='yellow.500'
            maxW={256}
            borderRadius='4px'
        >
            <Image src={hrefCity} />
            <Flex align='center' justify='space-around' pt={2} pb={2}>
                <Box
                    display='flex' flexDirection='column'
                    justifyContent='center'
                >
                    <Text fontSize={20} fontWeight='600' color='gray.700' >{city}</Text>
                    <Text fontSize={16} fontWeight='500' color='gray.500' >{state}</Text>
                </Box>
                <Image src={hrefCityFlag} />
            </Flex>
        </Box>
    );
}