export class Display {

    private dateDAO = new Date()

    time(){
        console.log(this.dateDAO.toLocaleTimeString())
    }

    date(){
        console.log(this.dateDAO.toLocaleDateString())
    }
    
}