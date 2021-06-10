import {Story, Meta} from "@storybook/react"
import {Logo, LogoProps} from "../../components/ui/logo"

export default {
	title: "UI/Logo",
	component: Logo,
	argTypes: {
		textSize: {control: {type: "range", min: 0.1, max: 5, step: 0.1}},
		textColor: {control: "color"},
		textHoverColor: {control: "color"},
		textWeight: {control: {type: "range", min: 100, max: 900, step: 100}}
	}
} as Meta

const Template: Story<LogoProps> = args => <Logo {...args} />

export const Text = Template.bind({})
Text.args = {
	logoType: "text",
	textSize: 2,
	textColor: "#1c1c1c",
	textHoverColor: "#0099ff",
	textWeight: 400,
	textContents: "A Cool Logo"
}

export const Image = Template.bind({})
Image.args = {
	imageSource:
		"https://uploads-ssl.webflow.com/5c3a510a91db03828e568da1/5c3a6a8e6bc471b88202e53e_Logo%205%20Copy%208.svg"
}

export const TextAndImage = Template.bind({})
TextAndImage.args = {
	logoType: "both",
	textSize: 2,
	textColor: "#1c1c1c",
	textHoverColor: "#0099ff",
	textWeight: 400,
	textContents: "A Cool Logo",
	imageSource:
		"https://uploads-ssl.webflow.com/5c3a510a91db03828e568da1/5c3a6a8e6bc471b88202e53e_Logo%205%20Copy%208.svg",
	imageWidth: 21.5,
	imageHeight: 7.3
}
