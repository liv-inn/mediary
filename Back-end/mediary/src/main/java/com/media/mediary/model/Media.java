package com.media.mediary.model;


public class Media {
    private int id;
    private String title;
    private String genre;
    private String owner;
    private String status;
    private String type;
    private String coverColor;
    private int userId;

    public Media() {
    }

    public Media(String title, String genre, String owner, String status, 
                 String type, String coverColor, int userId) {
        this.title = title;
        this.genre = genre;
        this.owner = owner;
        this.status = status;
        this.type = type;
        this.coverColor = coverColor;
        this.userId = userId;
    }

    public Media(int id, String title, String genre, String owner, String status, 
                 String type, String coverColor, int userId) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.owner = owner;
        this.status = status;
        this.type = type;
        this.coverColor = coverColor;
        this.userId = userId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCoverColor() {
        return coverColor;
    }

    public void setCoverColor(String coverColor) {
        this.coverColor = coverColor;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    
}
