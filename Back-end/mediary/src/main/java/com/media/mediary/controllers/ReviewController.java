package com.media.mediary.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.media.mediary.model.Review;
import com.media.mediary.service.ReviewService;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping
    public void addReview(@RequestBody Review review) {
        reviewService.inserirReview(review);
    }

    @GetMapping("/media/{mediaId}")
    public List<Review> getMediaReviews(@PathVariable int mediaId) {
        return reviewService.buscarPorMediaId(mediaId);
    }
}