package com.example.personalitypredictor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/pp")
public class PPcontroller {

    // @Autowired
    // Autowire the service class
    

    @PostMapping("/post")
    public String postComment(@RequestBody String comment){
     
        return "Data posted to the model";
    }
    
}
