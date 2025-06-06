package com.media.mediary.service;

import org.springframework.stereotype.Service;

import com.media.mediary.DAOs.UserDAO;
import com.media.mediary.model.User;

@Service
public class UserService {
    private final UserDAO userDAO;
    
    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public void inserirUser(User user) {
        userDAO.inserirUser(user);
    }
    
    public User buscarPorNickName(String nickName) {
        return userDAO.buscarPorNickName(nickName);
    }
    
    public int getUserIdByNickname(String nickname) {
        return buscarPorNickName(nickname).getId();
    }
}