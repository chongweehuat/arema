const Button = ({blok}) => {
    
    return (
        <button className={blok.buttonTailwind}>
            <span className={blok.labelTailwind}>{blok.label}</span>
          </button>
    )
}

export default Button;