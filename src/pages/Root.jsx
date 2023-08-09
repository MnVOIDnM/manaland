import { Navigate, Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Root() {
  return (
    <Flex h="100%" direction="column" flex="1">
      <Header />
      <Outlet />
      <Footer />
      <Navigate to="home" />
    </Flex>
  );
}

export default Root;
