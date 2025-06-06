package com.media.mediary.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.media.mediary.model.User;
import com.media.mediary.service.UserService;

@Controller
public class UserController {

    private final UserService userService;
    
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/signup")
    public String showSignupForm(Model model) {
        model.addAttribute("user", new User());
        return "signup";
    }

    @PostMapping("/signup")
    public String processSignup(@ModelAttribute User user) {
        try {
            userService.inserirUser(user);
            return "redirect:/mycollection?nickname=" + user.getNickName();
        } catch (Exception e) {
            return "redirect:/signup?error";
        }
    }

    @GetMapping("/api/users")
    @ResponseBody
    public User getUserByNickname(@RequestParam String nickname) {
        return userService.buscarPorNickName(nickname);
    }
}