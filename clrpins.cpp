#include "pxt.h"
#include "ErrorNo.h"

namespace clr_pins {
      /**
     * Read 1 byte.  If need acknowledgement, send 1 for ack.
     */
    //%
    int i2cRead(int ack = 0)
    {
      pins.initI2C();
      return pins.i2c->read(ack);
    }

      /**
     * Write 1 byte.  If want acknowledgement, send 1 for ack.
     */
    //%
    int i2cWrite(int data)
    {
      pins.initI2C();
      return pins.i2c->write(data);
    }

	/**
     * Send start condition.
     */
    //%
    int i2cStart()
    {
      pins.initI2C();
      pins.i2c->start();
    }

      /**
     * Send stop condition.
     */
    //%
    int i2cStop()
    {
      pins.initI2C();
      pins.i2c->stop();
    }
	
      /**
     * Unlock exclusive access to the bus.
     */
    //%
    int i2cUnlock()
    {
      pins.initI2C();
      pins.i2c->unlock();
    }
}
