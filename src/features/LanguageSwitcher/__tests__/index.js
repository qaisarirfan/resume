import createShallow from "@material-ui/core/test-utils/createShallow";
import { mount } from "enzyme";
import React from "react";
import LanguageSwitcher from "../LanguageSwitcher";

const createProps = () => ({
	handleListItemClick: jest.fn(),
});

describe("<LanguageSwitcher />", () => {
	it("Does not explode", () => {
		const props = createProps();
		const component = createShallow()(<LanguageSwitcher {...props} />);
		expect(component).toMatchSnapshot();
	});

	it("Should render properly", () => {
		const props = createProps();
		const component = mount(<LanguageSwitcher {...props} />);
		expect(component.childAt(0).props().handleListItemClick).toBeDefined();
		component.find("li").simulate("click");
		expect(props.handleListItemClick).toHaveBeenCalled();
	});
});
