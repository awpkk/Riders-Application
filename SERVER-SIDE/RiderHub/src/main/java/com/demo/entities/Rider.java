package com.demo.entities;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Rider {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String name;
	private String phoneNumber;
	private String gender;

	@NotBlank(message = "Email cannot be blank")
	private String email;

	@NotBlank(message = "Password cannot be blank")
	private String password;

	private String address;
	private String vehicleType;

	@NotEmpty
	private String vehicleNumber;

	private String vehicleModel;

	@ManyToMany(cascade = { CascadeType.ALL },fetch = FetchType.LAZY)
	@JsonIgnoreProperties("riders")
	Set<Ride> rides = new HashSet<>();

	@ManyToMany(cascade = { CascadeType.ALL },fetch = FetchType.LAZY)
	@JsonIgnoreProperties("riders")
	Set<Item> items = new HashSet<>();
	public Set<Item> getItems() {
		return items;
	}

	public void setItems(Set<Item> items) {
		this.items = items;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}

	public String getVehicleNumber() {
		return vehicleNumber;
	}

	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}

	public String getVehicleModel() {
		return vehicleModel;
	}

	public void setVehicleModel(String vehicleModel) {
		this.vehicleModel = vehicleModel;
	}

	

	public Set<Ride> getRides() {
		return rides;
	}

	public void setRides(Set<Ride> rides) {
		this.rides = rides;
	}

	@Override
	public String toString() {
		return "Rider [id=" + id + ", name=" + name + ", phoneNumber=" + phoneNumber + ", gender=" + gender + ", email="
				+ email + ", password=" + password + ", address=" + address + ", vehicleType=" + vehicleType
				+ ", vehicleNumber=" + vehicleNumber + ", vehicleModel=" + vehicleModel + ", rides=" + rides
				+ ", items=" + items + "]";
	}



	

}