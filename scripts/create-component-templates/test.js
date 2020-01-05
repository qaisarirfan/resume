import React from "react"
import createShallow from "@material-ui/core/test-utils/createShallow"
import COMPONENT from "../COMPONENT"

const createProps = () => ({
  classes: {}
})

describe("<COMPONENT />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = createShallow()(<COMPONENT {...props} />)
    expect(component).toMatchSnapshot()
  })
})
