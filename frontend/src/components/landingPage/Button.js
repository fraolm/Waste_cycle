import './css/Button.css'

const STYLES = ['btn--primary', 'btn--outline', 'btn--outline-white']
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn-wide']
const COLOR = ['primary', 'blue', 'red', 'green']


const Button = ({children, type, onclick, buttonStyle, buttonSize, buttonColor, visual}) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0]
    




    return (
    <button className = {`btn  ${visual} ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} 
    onClick = {onclick} type = {type}>
        {children}
    </button>
    )
}

export default Button
