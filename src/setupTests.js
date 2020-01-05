import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  translate: () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: (k) => k }
    return Component
  }
}))
