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
     * Send start to I2C.
     */
    //% help=pins/i2c-start weight=5 group="i2c" inlineInputMode="external"
    //% blockId=pins_i2c_start block="i2c start"
    export function i2cSendStart(): number {
		clr-pins.i2cStart();
    }
	
		    /**
     * Send stop to I2C.
     */
    //% help=pins/i2c-stop weight=5 group="i2c" inlineInputMode="external"
    //% blockId=pins_i2c_stop block="i2c stop"
    export function i2cSendStop(): number {
		clr-pins.i2cStop();
    }
	
			    /**
     * Send unlock to I2C.
     */
    //% help=pins/i2c-unlock weight=5 group="i2c" inlineInputMode="external"
    //% blockId=pins_i2c_unlock block="i2c unlock"
    export function i2cSendUnlock(): number {
		clr-pins.i2cUnlock();
    }
}