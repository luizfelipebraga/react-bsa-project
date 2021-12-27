import { Banner } from "../../components/Banner";
import { NavBar } from "../../components/Nav";
import { SelfPromotedComponent } from "../../components/SelfPromot";
import { Container, Box, Content } from "./styles";

export function Home() {
  return (
    <Container>
      <Banner />

      <Box>
        <NavBar />

        <SelfPromotedComponent/>
      </Box>

    </Container>
  )
}
