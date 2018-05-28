
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.adafruit.com/blocks/custom
 */



/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace clr_pins {
  let temp_key_row = 0
  let found_key = ""
  let found_col = ""
  let found_row = ""
  let default_keys_4x4: string[] = ["1", "2", "3", "A", "4", "5", "6", "B", "7", "8", "9", "C", "*", "0", "#", "D"]
  let default_keypress: string[] = ["", "0", "0"];

  /**
   * Read the pressed key, column, and row from a keypad via the PCF8574 IC with a resulting array of ["key","col" ,"row"].  Testing with number format UInt8LE was successful.
   */
  //% help=clr_pins/keypad-i2c-read weight=5 group="i2c" inlineInputMode="external"
  //% blockId=clr_pins_keypad_i2c_read block="keypad i2c read at address %address|of format %format=i2c_sizeof|columns %cols|rows %rows|keys %keys"
  export function keypad_i2c_read(address: number, format: NumberFormat, cols: number, rows: number, keys: string[]): string[] {
      temp_key_row = 0
      found_key = ""
      found_col = ""
      found_row = ""
      
      for (let col = cols - 1; col >= 0; col--) {
          // set the current column value to high
          pins.i2cWriteNumber(32, 255 - 2 ** col, format, false)
          // actually reading the keys
          temp_key_row = pins.i2cReadNumber(32, format, false)
          // process the key reading results
          // The bits are from left to right row1-row4...col1-col4.  IE.  11110000 would be rows high, cols low
          for (let row = cols + rows - 1; row >= cols; row--) {
              if ((temp_key_row & (2 ** row)) == 0) {
                  found_key = keys[(((rows + cols - 1) - row) * cols) + col]
                  found_col = ((cols - 1) - col) + ""
                  found_row = ((rows + cols - 1) - row) + ""
                  
                  // set all columns back to high
                  pins.i2cWriteNumber(32, 255, format, false)

                  return [found_key, found_col, found_row]
              }
          }
          // set all columns back to high
          pins.i2cWriteNumber(32, 255, format, false)
      }        
      
      return default_keypress
  }

  /**
   * Read the pressed key from a keypad via the PCF8574 IC with a resulting value of just the key pressed.  Testing with number format UInt8LE was successful.
   */
  //% help=clr_pins/keypad-i2c-read-key weight=5 group="i2c" inlineInputMode="external"
  //% blockId=clr_pins_keypad_i2c_read_key block="keypad i2c read key at address %address|of format %format=i2c_sizeof|columns %cols|rows %rows|keys %keys"
  export function keypad_i2c_read_key(address: number, format: NumberFormat, cols: number, rows: number, keys: string[]): string {
      return keypad_i2c_read(address, format, cols, rows, keys)[0]
  }

 /**
   * A ready to go 4x4 keypad of 123A456B789C*0#D.  Reading left to right and top to bottom.
   */
  //% help=clr_pins/keypad-keys-4x4 weight=5 group="i2c" inlineInputMode="external"
  //% blockId=clr_pins_keypad_keys_4x4 block="4x4 keypad keys"
  export function keypad_keys_4x4(): string[] {
      return default_keys_4x4
  }

 /**
  * A ready to go initialized variable for reading a keypress
  */
  //% help=clr_pins/keypad-keypress-init weight=5 group="i2c" inlineInputMode="external"
  //% blockId=clr_pins_keypad_keypress_init block="keypad keypress init"
  export function keypad_keypress_init(): string[] {
      return default_keypress // No key, col 0, row 0
  }
}
