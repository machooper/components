// Import required files and dependencies
import theme from "@styles/theme"
import styled from "styled-components"

// Declare ButtonProps interface
export interface ButtonProps {
	// * Is this the  main call to action on the page
	primary?: boolean
	// * What background color to use
	backgroundColor?: string
	// * The size of the button
	size?: "small" | "medium" | "large"
	// * Button contents
	label: string
	// * Optional click handler
	onClick?: () => void
}

// Declare styled button
const BaseButton = styled.button<ButtonProps>`
	background: ${p =>
		p.primary ? theme.colors.primary[0] : theme.colors.white[0]};

	background: ${p => p.backgroundColor};
`

// Declare Button export
export const Button: React.FC<ButtonProps> = ({
	primary = false,
	backgroundColor,
	size = "medium",
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
