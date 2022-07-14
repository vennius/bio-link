import '../styles/globals.css'
import Gradient from "../components/Gradient";

function MyApp( {
  Component, pageProps
}) {
  return (
    <>
    <Gradient/>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp