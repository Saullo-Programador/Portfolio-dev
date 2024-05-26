import { render, screen } from "@testing-library/react"
import NavBarComponent from "../components/navBar/NavBarComponent"
describe("NavBar", () => {
    it("should render the navigation bar", () => {
        render(<NavBarComponent/>)

        expect(screen.getByText("HOME"))
        expect(screen.getByText("ABOUT"))
        expect(screen.getByText("PROJETOS"))
        expect(screen.getByText("CONTACT"))
    })
})