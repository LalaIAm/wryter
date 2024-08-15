
const Button = ({ className, children, ...rest }) => (
    <button className={`btn ${className}`}>
        {children}
    </button>
)

export default Button;