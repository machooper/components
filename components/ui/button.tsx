// Import required files and dependencies
import theme from "@styles/theme"
import styled from "styled-components"

// Declare ButtonProps interface
export interface ButtonProps {
	// * Is this the  main call to action on the page
	primary?: boolean
	// * What text color to use
	color?: string
	// * What background color to use
	backgroundColor?: string
	// * Declare weight of button text
	weight?: number
	// * The size of the button
	size?: "small" | "medium" | "large"
	// * Decide on the thickness and color of the border
	border?: string
	// * Curve of the buttons corners
	borderRadius: string
	// * Button contents
	label: string
	// * Optional click handler
	onClick?: () => void
}

// Declare styled button
const BaseButton = styled.button<ButtonProps>`
	font-family: inherit;
	display: inline-block;
	padding: ${p => {
		switch (p.size) {
			case "small":
				return `
				font-size: .75rem;
				padding: .625rem 1rem;
			`
			case "medium":
				return `
				font-size: .875rem;
				padding: .68rem 1.25rem;
			`
			case "large":
				return `
				
				font-size: 1rem;
				padding: .75rem 1.5rem;
			`
		}
	}}
	text-align: center;
	text-decoration: none;
	white-space: nowrap;
	background: ${p =>
		p.primary ? theme.colors.primary[0] : theme.colors.white[0]};
	background: ${p => p.backgroundColor};
	color: ${p => p.color}
	border: ${p => p.border};
	border-radius: ${p => p.borderRadius};
	line-height: 1;
	font-weight: ${p => p.weight}
`

// Declare Button export
export const Button: React.FC<ButtonProps> = ({
	primary = false,
	color,
	backgroundColor,
	weight,
	border,
	size = "medium",
	borderRadius,
	label,
	onClick,
	...props
}) => {
	return (
		<BaseButton
			primary={primary}
			backgroundColor={backgroundColor}
			size={size}
			onClick={onClick}
			type='button'
			{...props}>
			{label}
		</BaseButton>
	)
}
