const ImageTitle = ({blok}) => {
    console.log(blok);
    const Wrapper = ({ className, children }) => (
        className ? <div className={className} >{children}</div> : <>{children}</>
      );
    return (
        <Wrapper className={blok.wrapperTailwind}>
            <Wrapper className={blok.textTailwind}>
                {blok.title}
            </Wrapper>
            <img
                className={blok.imageTailwind}
                src={blok.image.filename}
            />
        </Wrapper>
    )
}

export default ImageTitle;