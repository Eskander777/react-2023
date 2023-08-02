import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let errorMsg = "Unknown error";

  if (isRouteErrorResponse(error)) {
    errorMsg = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMsg = error.message;
  } else if (typeof error === "string") {
    errorMsg = error;
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMsg}</i>
      </p>
    </div>
  );
}

