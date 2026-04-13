package com.tenpo.backend.service;

import com.tenpo.backend.dto.CreateTransactionRequest;
import com.tenpo.backend.dto.TransactionResponse;
import com.tenpo.backend.entity.Transaction;
import com.tenpo.backend.repository.TransactionRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public TransactionResponse createTransaction(CreateTransactionRequest request) {
        boolean exists = transactionRepository.findAll().stream()
                .anyMatch(t -> t.getTransactionId().equals(request.transactionId()));

        if (exists) {
            throw new IllegalArgumentException("Transaction ID already exists: " + request.transactionId());
        }

        Transaction transaction = new Transaction(
                request.transactionId(),
                request.amount(),
                request.commerce(),
                request.tenpistaName(),
                request.transactionDate()
        );

        Transaction saved = transactionRepository.save(transaction);

        return mapToResponse(saved);
    }

    public List<TransactionResponse> getAllTransactions() {
        return transactionRepository.findAll(Sort.by(Sort.Direction.DESC, "transactionDate"))
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    private TransactionResponse mapToResponse(Transaction transaction) {
        return new TransactionResponse(
                transaction.getId(),
                transaction.getTransactionId(),
                transaction.getAmount(),
                transaction.getCommerce(),
                transaction.getTenpistaName(),
                transaction.getTransactionDate()
        );
    }
}