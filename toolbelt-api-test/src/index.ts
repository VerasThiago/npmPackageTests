export default abstract class Display {

    private static dateDAO = new Date()

    static time(){
        console.log(this.dateDAO.toLocaleTimeString())
    }

    static date(){
        console.log(this.dateDAO.toLocaleDateString())
    }
    
}