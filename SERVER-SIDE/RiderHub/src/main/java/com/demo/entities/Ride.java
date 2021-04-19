package com.demo.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Ride {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String title;

	private String description;

	private String source;

	private String destination;

	// @JsonProperty("startdate")
	private String startdate;

	// @JsonProperty("enddate")
	private String enddate;

	@ManyToMany(mappedBy = "rides",fetch = FetchType.LAZY)
	@JsonIgnoreProperties("rides")
	private Set<Rider> riders = new HashSet<>();

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getStartdate() {
		return startdate;
	}

	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}

	public String getEnddate() {
		return enddate;
	}

	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}

	

	

	public Set<Rider> getRiders() {
		return riders;
	}

	public void setRiders(Set<Rider> riders) {
		this.riders = riders;
	}

	@Override
	public String toString() {
		return "Ride [id=" + id + ", title=" + title + ", description=" + description + ", source=" + source
				+ ", destination=" + destination + ", startdate=" + startdate + ", enddate=" + enddate + "]";
	}


}
