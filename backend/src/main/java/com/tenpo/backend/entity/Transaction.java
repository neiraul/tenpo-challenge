package com.tenpo.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

import java.time.LocalDateTime;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "transaction_id", nullable = false, unique = true)
    private Integer transactionId;

    @NotNull
    @PositiveOrZero
    @Column(nullable = false)
    private Integer amount;

    @NotBlank
    @Column(nullable = false)
    private String commerce;

    @NotBlank
    @Column(name = "tenpista_name", nullable = false)
    private String tenpistaName;

    @NotNull
    @Column(name = "transaction_date", nullable = false)
    private LocalDateTime transactionDate;

    public Transaction() {
    }

    public Transaction(Integer transactionId, Integer amount, String commerce, String tenpistaName, LocalDateTime transactionDate) {
        this.transactionId = transactionId;
        this.amount = amount;
        this.commerce = commerce;
        this.tenpistaName = tenpistaName;
        this.transactionDate = transactionDate;
    }

    public Long getId() {
        return id;
    }

    public Integer getTransactionId() {
        return transactionId;
    }

    public Integer getAmount() {
        return amount;
    }

    public String getCommerce() {
        return commerce;
    }

    public String getTenpistaName() {
        return tenpistaName;
    }

    public LocalDateTime getTransactionDate() {
        return transactionDate;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTransactionId(Integer transactionId) {
        this.transactionId = transactionId;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public void setCommerce(String commerce) {
        this.commerce = commerce;
    }

    public void setTenpistaName(String tenpistaName) {
        this.tenpistaName = tenpistaName;
    }

    public void setTransactionDate(LocalDateTime transactionDate) {
        this.transactionDate = transactionDate;
    }
}