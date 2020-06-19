export abstract class Display {

    private static dateDAO = new Date()

    static time(): string {
        return this.dateDAO.toLocaleTimeString()
    }

    static date(): string {
        return this.dateDAO.toLocaleDateString()
    }
    
}