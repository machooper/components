import {Story, Meta} from "@storybook/react"
import {Button, ButtonProps} from "../../components/ui/button"

export default {
	title: "UI/Button",
	component: Button,
	argTypes: {
		textColor: {control: "color"},
		backgroundColor: {control: "color"},
		hoverTextColor: {control: "color"},
		hoverBackgroundColor: {control: "color"}
	}
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	primary: true,
	label: "Button"
}

export const Secondary = Template.bind({})
Secondary.args = {
	label: "Button"
}

export const Large = Template.bind({})
Large.args = {
	size: "large",
	label: "Button"
}

export const Small = Template.bind({})
Small.args = {
	size: "small",
	label: "Button"
}

export const Ghost = Template.bind({})
Ghost.args = {
	border: "2px solid #1c1c1c",
	textColor: "#1c1c1c",
	hoverBackgroundColor: "#1c1c1c"
}
