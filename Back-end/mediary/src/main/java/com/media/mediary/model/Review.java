package com.media.mediary.model;


public class Review {
    private int id;
    private int mediaId;
    private int userId;
    private int rating;
    private String comment;
    private String createdAt;

    public Review() {
    }

    public Review(int mediaId, int userId, int rating, String comment) {
        this.mediaId = mediaId;
        this.userId = userId;
        this.rating = rating;
        this.comment = comment;
    }

    public Review(int id, int mediaId, int userId, int rating, String comment, String createdAt) {
        this.id = id;
        this.mediaId = mediaId;
        this.userId = userId;
        this.rating = rating;
        this.comment = comment;
        this.createdAt = createdAt;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMediaId() {
        return mediaId;
    }

    public void setMediaId(int mediaId) {
        this.mediaId = mediaId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    
}