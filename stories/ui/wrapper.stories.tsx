import {Story, Meta} from "@storybook/react"
import {Wrapper, WrapperProps} from "../../components/layout/wrapper"

export default {
	title: "Layout/Wrapper",
	component: Wrapper
} as Meta

const Template: Story<WrapperProps> = args => <Wrapper {...args} />

export const Standard = Template.bind({})
Standard.args = {
	flexDirection: "column"
}

export const Sidebar = Template.bind({})
Sidebar.args = {
	flexDirection: "row"
}
