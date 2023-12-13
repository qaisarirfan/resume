import createShallow from "@material-ui/core/test-utils/createShallow";
import React from "react";
import renderer from "react-test-renderer";
import FlagIconCss from "../FlagIcon";

const createProps = () => ({
	code: "en",
});

describe("<FlagIconCss />", () => {
	it("Does not explode", () => {
		const props = createProps();
		const component = createShallow()(<FlagIconCss {...props} />);
		expect(component).toMatchSnapshot();
	});

	it("Should render properly", () => {
		const props = createProps();
		const component = renderer.create(<FlagIconCss {...props} />);
		expect(component).toMatchSnapshot();
	});
});
