const ImageTitleTextarea = ({blok}) => {
    const Wrapper = ({ className, children }) => (
        className ? <div className={className} >{children}</div> : <>{children}</>
      );
    return (
        <Wrapper className={blok.wrapperTailwind}>
            <img
                className={blok.imageTailwind}
                src={blok.image.filename}
            />
            <Wrapper className={blok.titleTailwind}>
                {blok.title}
            </Wrapper>
            <Wrapper className={blok.textareaTailwind}>
                {blok.textarea}
            </Wrapper>
            
        </Wrapper>
    )
}

export default ImageTitleTextarea;