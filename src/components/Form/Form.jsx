const Form = ({ onsubmit }) => {
const safeSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const name = event.target[0].value
    const email = event.target[1].value
    onsubmit({ name, email })
}

    return (
        <form onSubmit={safeSubmit} className=" h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5">
            <input type="text" className="newsletter-input" required placeholder="Insira seu nome..." />
            <input type="email" className="newsletter-input" required placeholder="Insira seu e-mail..." />
            <button type="submit" className="newsletter-button">Seguir</button>
        </form>
    )
}

export default Form