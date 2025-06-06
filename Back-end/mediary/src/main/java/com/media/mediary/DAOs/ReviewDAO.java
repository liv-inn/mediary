
package com.media.mediary.DAOs;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.media.mediary.model.Review;

import jakarta.annotation.PostConstruct;

@Repository
public class ReviewDAO {
    
    @Autowired
    DataSource dataSource;
    
    JdbcTemplate jdbc;
    
    @PostConstruct
    private void initialize() {
        jdbc = new JdbcTemplate(dataSource);
    }

    public void inserirReview(Review review) {
        String sql = "INSERT INTO reviews(media_id, user_id, rating, comment) VALUES(?,?,?,?)";
        Object[] parametros = new Object[4];
        parametros[0] = review.getMediaId();
        parametros[1] = review.getUserId();
        parametros[2] = review.getRating();
        parametros[3] = review.getComment();
        jdbc.update(sql, parametros);
    }
    
    public List<Review> buscarPorMediaId(int mediaId) {
        String sql = "SELECT * FROM reviews WHERE media_id = ?";
        return jdbc.query(sql, (rs, rowNum) -> 
            new Review(
                rs.getInt("id"),
                rs.getInt("media_id"),
                rs.getInt("user_id"),
                rs.getInt("rating"),
                rs.getString("comment"),
                rs.getString("created_at")
            ),
            mediaId
        );
    }
}