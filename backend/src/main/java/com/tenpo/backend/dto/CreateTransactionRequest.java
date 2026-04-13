package com.tenpo.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.PositiveOrZero;

import java.time.LocalDateTime;

public record CreateTransactionRequest(
        @NotNull
        Integer transactionId,

        @NotNull
        @PositiveOrZero
        Integer amount,

        @NotBlank
        String commerce,

        @NotBlank
        String tenpistaName,

        @NotNull
        @PastOrPresent
        @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
        LocalDateTime transactionDate
) {
}