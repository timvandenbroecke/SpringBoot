package com.tim.raspberry.controllers;

import com.pi4j.io.gpio.exception.GpioPinExistsException;
import com.pi4j.io.serial.*;
import com.tim.raspberry.components.Firmata;
import org.firmata4j.IODevice;
import org.firmata4j.Pin;
import org.firmata4j.firmata.FirmataDevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.pi4j.io.gpio.GpioController;
import com.pi4j.io.gpio.GpioFactory;
import com.pi4j.io.gpio.GpioPinDigitalOutput;
import com.pi4j.io.gpio.PinState;
import com.pi4j.io.gpio.RaspiPin;
import com.pi4j.io.serial.*;
import com.pi4j.util.CommandArgumentParser;
import com.pi4j.util.Console;

import java.io.IOException;


@RestController
public class HomeController {

    @Autowired
    private Firmata firmata;


    /*
     * To call this GET you can easily do it through your browser.
     * By looking up your Raspberry pi IP address through ifconfig command in the terminal.
     *
     * The URL you have to put in the browser should look like this XXX.XXX.X.XX:8080/led
     */
    @GetMapping("/led")
    public ResponseEntity<?> serial(){

        firmata.led();

        return ResponseEntity.ok().build();
    }

}
