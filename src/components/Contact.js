const Contact = ()=>{
    return (
        <div>
            <h1>Contact Us</h1>

            <form className="m-4 p-4">
                <input type="text" className="border border-black m-2 p-2" placeholder="name"/>
                <input type="text" className="border border-black m-2 p-2" placeholder="message"/>
                <button className="px-5 py-1 bg-gray-200 m-4 rounded-md">Submit</button>
            </form>
        </div>
    )
}
export default Contact;