package com.tim.spring_security.service;

import javax.mail.internet.MimeMessage;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class MailServiceImpl implements MailService {

    @Autowired
    private JavaMailSender sender;

    public void sendEmailWithPicture() throws Exception{
        MimeMessage message = sender.createMimeMessage();

        // Enable the multipart flag!
        MimeMessageHelper helper = new MimeMessageHelper(message,true);

        helper.setTo("set-your-recipient-email-here@gmail.com");
        helper.setText("How are you?");
        helper.setSubject("Hi");

        ClassPathResource file = new ClassPathResource("cat.jpg");
        helper.addAttachment("cat.jpg", file);

        sender.send(message);
    }

    public void sendSimpleEmail() throws Exception{
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setTo("set-your-recipient-email-here@gmail.com");
        helper.setText("How are you?");
        helper.setSubject("Hi");

        sender.send(message);
    }

}
