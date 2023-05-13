import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Flex } from "@chakra-ui/react";

function Root() {
  return (
    <Flex direction="column" flex="1">
      <Header />
      <Outlet />
      <Navigate to="home" />
      <Footer />
    </Flex>
  );
}

export default Root;
