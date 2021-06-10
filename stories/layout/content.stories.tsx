import {Story, Meta} from "@storybook/react"
import {Content, ContentProps} from "../../components/layout/content"

export default {
	title: "Layout/Content",
	component: Content
} as Meta

const Template: Story<ContentProps> = args => <Content {...args} />

export const Standard = Template.bind({})
Standard.args = {
	maxWidth: "960px"
}