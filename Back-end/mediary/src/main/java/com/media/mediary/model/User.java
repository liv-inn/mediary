package com.media.mediary.model;

public class User {
    private int id;
    private String nickName;
    private String createdAt;

    public User() {
    }

    public User(String nickName) {
        this.nickName = nickName;
    }

    public User(int id, String nickName, String createdAt) {
        this.id = id;
        this.nickName = nickName;
        this.createdAt = createdAt;
    }

    public int getId() {
        return id;
    }

    public String getNickName() {
        return nickName;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }
}