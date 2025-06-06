package com.media.mediary.DAOs;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.media.mediary.model.User;

import jakarta.annotation.PostConstruct;

@Repository
public class UserDAO {
    
    @Autowired
    DataSource dataSource;
    
    JdbcTemplate jdbc;
    
    @PostConstruct
    private void initialize() {
        jdbc = new JdbcTemplate(dataSource);
    }

    public void inserirUser(User user) {
        String sql = "INSERT INTO users(nick_name) VALUES(?)";
        Object[] parametros = new Object[1];
        parametros[0] = user.getNickName();
        jdbc.update(sql, parametros);
    }
    
    public User buscarPorNickName(String nickName) {
        String sql = "SELECT * FROM users WHERE nick_name = ?";
        return jdbc.queryForObject(sql, (rs, rowNum) -> 
            new User(
                rs.getInt("id"),
                rs.getString("nick_name"),
                rs.getString("created_at")
            ), 
            nickName
        );
    }
}