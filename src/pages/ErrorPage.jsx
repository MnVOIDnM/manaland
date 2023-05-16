import { Button, Flex } from "@chakra-ui/react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Flex flexDirection="column" alignItems="center" gap="2" h="100vh">
      <h1>あれ？</h1>
      <p>なにかエラーがおきたみたいです。</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button onClick={() => navigate("/home")}>ホームにもどる</Button>
    </Flex>
  );
}
