import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import LanguageSwitcher from "../LanguageSwitcher"
import { mount } from 'enzyme';

const createProps = () => ({
  handleListItemClick: jest.fn()
})

describe("<LanguageSwitcher />", () => {

  it("Does not explode", () => {
    const props = createProps()
    const component = createShallow()(<LanguageSwitcher {...props} />)
    expect(component).toMatchSnapshot()
  })

  it("Should render properly", () => {
    const props = createProps()
    const component = mount(<LanguageSwitcher {...props} />)
    expect(component.childAt(0).props().handleListItemClick).toBeDefined();
    component.find("li").simulate("click");
    expect(props.handleListItemClick).toHaveBeenCalled();
  })

})