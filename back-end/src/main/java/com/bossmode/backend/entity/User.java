package com.bossmode.backend.entity;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "user")

public class User implements Serializable{
    private static final long serialVersionUID = 2652327633296064143L;

    @Id
    private String email;
    private String name;
    private String password;
    private boolean enabled;
    private String address;
    private String zipCode;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(unique = true)//自动生成cart ID
    private Cart cart;
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getZipCode() {
        return zipCode;
    }
    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }
}