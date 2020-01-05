import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import Loading from "../Loading"
import { mount } from "enzyme";
import CircularProgress from "@material-ui/core/CircularProgress"
import renderer from "react-test-renderer";

const createProps = () => ({
  loading: false
})

describe("<Loading />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = createShallow()(<Loading {...props} />)
    expect(component).toMatchSnapshot()
  })

  it("has loader if loader prop is true", () => {
    const props = {
      ...createProps(),
      loading: true
    }
    const component = mount(<Loading {...props} />)
    expect(component.childAt(0).props().loading).toEqual(true);
    const loader = component.find(CircularProgress)
    expect(loader.length).toEqual(1);
    expect(renderer.create(<Loading {...props} />)).toMatchSnapshot()
  })

  it("has no loader if loader prop is false", () => {
    const props = {
      ...createProps(),
    }
    const component = mount(<Loading {...props} />)
    expect(component.childAt(0).props().loading).toEqual(false);
    const loader = component.find(CircularProgress)
    expect(loader.length).toEqual(0);
    expect(renderer.create(<Loading {...props} />)).toMatchSnapshot()
  })
})
