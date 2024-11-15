import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <section>
      <h1>404: Page Not Found</h1>
      <h1> ¯\_(ツ)_/¯</h1>
    </section>
  );
};

export default ErrorPage;
