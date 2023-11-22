const Article = ({ title, text, tags, image, alt }) => {
    return (
        <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col items-center">
            <h3 className="text-xl text-azul-200 dark:text-gray-200 font-bold">{title}</h3>
            <div className="grid gap-1">
                {text.map((content, index) => (
                    <p className="text-azul-200 dark:text-gray-400" key={index}>{content}</p>
                ))}
            </div>
        </div>
    )
}

export default Article