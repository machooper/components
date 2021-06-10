import {Story, Meta} from "@storybook/react"
import {Head, HeadProps} from "../../components/layout/head"

export default {
	title: "Layout/Head",
	component: Head
} as Meta

const Template: Story<HeadProps> = args => <Head {...args} />

export const Main = Template.bind({})
Main.args = {
	pageTitle: "Website Title",
	pageDescription: "Site description goes here",
	socialImage:
		"https://uploads-ssl.webflow.com/5c3a510a91db03828e568da1/5c3a6a8e6bc471b88202e53e_Logo 5 Copy 8.svg",
	socialImageText: "Image text goes here",
	siteIcon:
		"https://uploads-ssl.webflow.com/5c3a510a91db03828e568da1/5c3a6a8e6bc471b88202e53e_Logo 5 Copy 8.svg",
	touchIcon:
		"https://uploads-ssl.webflow.com/5c3a510a91db03828e568da1/5c3a6a7d652ba03f7864087b_Logo 5 Copy 2.svg",
	siteLocale: "en_GB",
	siteType: "website",
	siteUrl: "https://machooper.tech",
	themeColor: "#0099ff"
}
