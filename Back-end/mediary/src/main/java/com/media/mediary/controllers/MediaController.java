package com.media.mediary.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.media.mediary.enums.Type;
import com.media.mediary.model.Media;
import com.media.mediary.service.MediaService;

@RestController
@RequestMapping("/api/media")
public class MediaController {
    private final MediaService mediaService;

    public MediaController(MediaService mediaService) {
        this.mediaService = mediaService;
    }

    @PostMapping
    public void addMedia(@RequestBody Media media, @RequestParam String nickname) {
        mediaService.inserirMedia(media);
    }

    @GetMapping("/user/{nickname}")
    public List<Media> getUserMedia(@PathVariable String nickname) {
        return mediaService.buscarPorUserId(
            mediaService.getUserIdByNickname(nickname)
        );
    }

    @GetMapping("/type/{type}")
    public List<Media> getMediaByType(@PathVariable Type type) {
        return mediaService.buscarPorType(type);
    }

    @GetMapping("/stats")
    public Map<String, Long> getStats() {
        return Map.of(
            "books", mediaService.contarPorType(Type.EBOOK),
            "movies", mediaService.contarPorType(Type.EMOVIE),
            "songs", mediaService.contarPorType(Type.ESONG)
        );
    }
}