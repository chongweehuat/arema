const TitleText = ({blok}) => {
    const Wrapper = ({ className, children }) => (
        className ? <div className={className} >{children}</div> : <>{children}</>
      );
    return (
        <>
        <Wrapper className={blok.titleTailwind}>
            {blok.title}
        </Wrapper>
        <Wrapper className={blok.textTailwind}>
            {blok.text}
        </Wrapper>
        </>
    )
}

export default TitleText;