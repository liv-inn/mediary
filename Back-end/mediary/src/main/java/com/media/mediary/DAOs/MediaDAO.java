package com.media.mediary.DAOs;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.media.mediary.enums.Type;
import com.media.mediary.model.Media;

import jakarta.annotation.PostConstruct;

@Repository
public class MediaDAO {

    @Autowired
    DataSource dataSource;

    JdbcTemplate jdbc;

    @PostConstruct
    private void initialize() {
        jdbc = new JdbcTemplate(dataSource);
    }

    public void inserirMedia(Media media) {
        String sql = "INSERT INTO media(title, genre, owner, status, type, cover_color, user_id) "
                + "VALUES(?,?,?,?,?,?,?)";
        Object[] parametros = new Object[7];
        parametros[0] = media.getTitle();
        parametros[1] = media.getGenre();
        parametros[2] = media.getOwner();
        parametros[3] = media.getStatus();
        parametros[4] = media.getType();
        parametros[5] = media.getCoverColor();
        parametros[6] = media.getUserId();
        jdbc.update(sql, parametros);
    }

    public List<Media> buscarPorUserId(int userId) {
        String sql = "SELECT * FROM media WHERE user_id = ?";
        return jdbc.query(sql, (rs, rowNum)
                -> new Media(
                        rs.getInt("id"),
                        rs.getString("title"),
                        rs.getString("genre"),
                        rs.getString("owner"),
                        rs.getString("status"),
                        rs.getString("type"),
                        rs.getString("cover_color"),
                        rs.getInt("user_id")
                ),
                userId
        );
    }

    public List<Media> buscarPorType(Type type) {
        String sql = "SELECT * FROM media WHERE type = ?";
        return jdbc.query(sql, (rs, rowNum)
                -> new Media(
                        rs.getInt("id"),
                        rs.getString("title"),
                        rs.getString("genre"),
                        rs.getString("owner"),
                        rs.getString("status"),
                        rs.getString("type"),
                        rs.getString("cover_color"),
                        rs.getInt("user_id")
                ),
                type.toString()
        );
    }

    public long contarPorType(Type type) {
        String sql = "SELECT COUNT(*) FROM media WHERE type = ?";
        return jdbc.queryForObject(sql, Long.class, type.toString());
    }
}
