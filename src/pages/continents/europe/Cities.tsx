import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { CityCard } from "../../../components/CityCard";

export function Cities() {
    return (
        <Box
            mt={40}
            ml='140'
        >
            <Text>
                Cidades +100
            </Text>
            <SimpleGrid
                pt={10}
                pb={10}
                columns={4}
                spacing={10}
            >
                <CityCard city="Londres" state="Reino Unido" hrefCity="/cities/london.svg" hrefCityFlag="/cities/flagLondon.svg" />
                <CityCard city="Paris" state="França" hrefCity="/cities/paris.svg" hrefCityFlag="/cities/flagParis.svg" />
                <CityCard city="Roma" state="Itália" hrefCity="/cities/rome.svg" hrefCityFlag="/cities/flagRome.svg" />
                <CityCard city="Praga" state="República Tcheca" hrefCity="/cities/praga.svg" hrefCityFlag="/cities/flagPraga.svg" />
                <CityCard city="Amsterdã" state="Holanda" hrefCity="/cities/amsterda.svg" hrefCityFlag="/cities/flagAmsterda.svg" />
            </SimpleGrid>
        </Box>
    );
}"/cities/flagLondon.svg"