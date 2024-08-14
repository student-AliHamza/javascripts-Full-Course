class React{
    constructor(){
        this.library = "React";
        this.server = "https://localhost:300"

        document.querySelector(button).addEventListener('click',this.handleclick.bind(this))

    }
    handleclick(){
        console.log("Button was clicked")
        console.log(this.server)
       
    }
}