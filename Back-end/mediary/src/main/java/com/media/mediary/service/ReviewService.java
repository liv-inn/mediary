package com.media.mediary.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.media.mediary.DAOs.ReviewDAO;
import com.media.mediary.model.Review;

@Service
public class ReviewService {
    private final ReviewDAO reviewDAO;
    
    public ReviewService(ReviewDAO reviewDAO) {
        this.reviewDAO = reviewDAO;
    }

    public void inserirReview(Review review) {
        reviewDAO.inserirReview(review);
    }
    
    public List<Review> buscarPorMediaId(int mediaId) {
        return reviewDAO.buscarPorMediaId(mediaId);
    }
}