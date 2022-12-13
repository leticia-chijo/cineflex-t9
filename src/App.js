import NavBar from "./components/NavBar/NavBar"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"

export default function App() {
  return (
    <>
      <NavBar />

      {/* Páginas */}
      <HomePage />
      {/* <SessionsPage /> */}
      {/* <SeatsPage /> */}
      {/* <SuccessPage /> */}
    </>
  )
}