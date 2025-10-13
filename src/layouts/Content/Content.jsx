const Content = (props) => {
    
    const {
        children,
        className,
    } = props

    return (
        <main className={className}>
            {children}
        </main>
    )
}

export default Content