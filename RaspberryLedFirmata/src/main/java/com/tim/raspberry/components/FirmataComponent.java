package com.tim.raspberry.components;
import org.firmata4j.IODevice;
import org.firmata4j.Pin;
import org.firmata4j.firmata.FirmataDevice;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.io.IOException;

/**
 *     I initialize the Firmata IODevice this way,
 *     with ApplicationListener<ContextRefreshedEvent> it automatically runs the code on startup.
 *
 *     Cause the Arduino USB connected on the Raspberry pi "/dev/ttyACM0" (On linux) needs to be set on startup,
 *     and be left alone during its runtime of Spring boot.
 *
 *     Otherwise it will keep trying to reconnect every time you try to call the RestController API's, if you were to initialize it there.
 */
@Component
public class FirmataComponent implements ApplicationListener<ContextRefreshedEvent>, Firmata {


    private IODevice device;

    // State of the Arduino LED
    private Boolean ledStateArduino = false;


    /**
     * This method is called during Spring's startup.
     *
     * @param event Event raised when an ApplicationContext gets initialized or
     * refreshed.
     */
    @Override
    public void onApplicationEvent(final ContextRefreshedEvent event) {

        try {
            // Set USB port address, this could be different depending if you use another OS like COM for Windows
            // You can check your USB port name on the Arduino IDE, on the OS you are using
            device = new FirmataDevice("/dev/ttyACM0");

            // Initialize Firmata serial connection with Arduino
            device.start();
            device.ensureInitializationIsDone();

        }catch(InterruptedException e){

            e.fillInStackTrace();
        }catch(IOException e){

            e.fillInStackTrace();
        }
        return;
    }


    public void led(){

        try{

            // Inverts boolean to switch the LED on and off, every time the REST API is called.
            ledStateArduino = !ledStateArduino;

            // Use pin 13 of the Arduino
            Pin pin = device.getPin(13);

            // Set it as output
            pin.setMode(Pin.Mode.OUTPUT);

            if(ledStateArduino == true){

                // Power up pin 13 if true
                pin.setValue(1);
            }else{

                // Power down pin 13 if false
                pin.setValue(0);
            }

        }catch(IOException e){

            e.fillInStackTrace();
        }
    }
}
