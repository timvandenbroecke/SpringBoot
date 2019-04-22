package com.tim.spring_security.controller;

import javax.mail.internet.MimeMessage;

import com.tim.spring_security.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


// Mail RestController
@RestController
public class MailController {

    @Autowired
    private JavaMailSender sender;

    @Autowired
    private MailService mailService;

    @RequestMapping("/simpleemail")
    String home() {
        try {
            mailService.sendSimpleEmail();
            return "Email Sent!";
        }catch(Exception ex) {
            return "Error in sending email: "+ex;
        }
    }

    private void sendEmail() throws Exception{
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setTo("set-your-recipient-email-here@gmail.com");
        helper.setText("How are you?");
        helper.setSubject("Hi");

        sender.send(message);
    }
}
