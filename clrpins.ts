/**
 * Use this file to define custom functions and blocks. 
 * Read more at https://makecode.adafruit.com/blocks/custom
 */

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""

namespace clr-pins {
    /**
     * Read one byte from I2C.
     */
    //% help=pins/i2c-read-byte weight=5 group="i2c" inlineInputMode="external"
    //% blockId=pins_i2c_readbyte block="i2c read byte with acknowledgement %ack"
    export function i2cReadByte(ack: number): number {
		return clr-pins.i2cRead(ack);
    }
	
	    /**
     * Write one byte to I2C.
     */
    //% help=pins/i2c-write-byte weight=5 group="i2c" inlineInputMode="external"
    //% blockId=pins_i2c_writebyte block="i2c write byte %data"
    export function i2cWriteByte(data: number): number {
		return clr-pins.i2cWrite(data);
    }

    /**
     * Write one number to an I2C address.
     */
    //% help=pins/i2c-write-number weight=4 group="i2c"
    //% blockId=i2c_writenumber block="i2c write number|at address %address|with value %value|of format %format=i2c_sizeof|repeated %repeat"
    export function i2cWriteNumber(address: number, value: number, format: NumberFormat, repeated?: boolean): void {
        let buf = createBuffer(pins.sizeOf(format))
        buf.setNumber(format, 0, value)
        pins.i2cWriteBuffer(address, buf, repeated)
    }
}