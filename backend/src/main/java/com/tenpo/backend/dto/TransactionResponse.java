package com.tenpo.backend.dto;

import java.time.LocalDateTime;

public record TransactionResponse(
        Long id,
        Integer transactionId,
        Integer amount,
        String commerce,
        String tenpistaName,
        LocalDateTime transactionDate
) {
}