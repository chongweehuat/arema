const Image = ({blok}) => {
    
    return (
        <img
            className={blok.imageTailwind}
            src={blok.image.filename}
        />
    )
}

export default Image;