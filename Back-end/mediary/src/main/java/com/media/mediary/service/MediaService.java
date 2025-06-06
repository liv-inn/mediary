package com.media.mediary.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.media.mediary.DAOs.MediaDAO;
import com.media.mediary.DAOs.UserDAO;
import com.media.mediary.enums.Type;
import com.media.mediary.model.Media;

@Service
public class MediaService {
    private final MediaDAO mediaDAO;
    private final UserDAO userDAO;
    
    public MediaService(MediaDAO mediaDAO, UserDAO userDAO) {
        this.mediaDAO = mediaDAO;
        this.userDAO = userDAO;
    }

    public void inserirMedia(Media media) {
        mediaDAO.inserirMedia(media);
    }
    
    public List<Media> buscarPorUserId(int userId) {
        return mediaDAO.buscarPorUserId(userId);
    }
    
    public List<Media> buscarPorType(Type type) {
        return mediaDAO.buscarPorType(type);
    }
    
    public long contarPorType(Type type) {
        return mediaDAO.contarPorType(type);
    }
    
    public int getUserIdByNickname(String nickname) {
        return userDAO.buscarPorNickName(nickname).getId();
    }
}