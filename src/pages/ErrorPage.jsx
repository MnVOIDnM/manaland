import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>あれ？</h1>
      <p>なにかエラーがおきたみたいです。</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}