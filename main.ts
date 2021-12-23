namespace myTest {
    /**
     * My bla bla
     */
    //% blockId=mytestplotat
    //% block=" plot at index"
    //% index.min=5 index.max=25
    export function plotAt (index: number) : void {
        index |= 0 
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot(x,y);
    }
}