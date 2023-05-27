import { Navigate, Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Root() {
  return (
    <Flex direction="column" flex="1">
      <Header />
      <Outlet />
      <Footer />
      <Navigate to="home" />
    </Flex>
  );
}

export default Root;
