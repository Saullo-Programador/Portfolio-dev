import NavBarComponent from "./components/navBar/NavBarComponent"
import AboutScreen from "./screens/about/AboutScreen"
import ContactScreen from "./screens/contact/ContactScreen"
import HomeScreen from "./screens/home/HomeScreen"
import ProjectScreen from "./screens/project/ProjectScreen"

function App() {
  return (
    <main style={{background:"#000000"}}>
      <NavBarComponent/>
      <HomeScreen/>
      <AboutScreen/>
      <ProjectScreen/>
      <ContactScreen/>
    </main>
  )
}

export default App
