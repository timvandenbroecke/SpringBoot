package com.tim.scala.models

import com.fasterxml.jackson.annotation.{JsonBackReference, JsonManagedReference, JsonProperty}
import javax.persistence.{CascadeType, Column, Entity, FetchType, GeneratedValue, GenerationType, Id, JoinColumn, OneToMany, Table}

import scala.beans.BeanProperty

@Entity
@Table(name = "User")
class User {

  def this(id: Long, name: String, username: String, pets: java.util.List[Pet]) {
    this()
    this.id = id
    this.name = name
    this.username = username
    this.pets = pets
  }

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @BeanProperty
  var id: Long =_

  @JsonProperty("name")
  @Column(name = "name")
  @BeanProperty
  var name: String =_

  @JsonProperty("username")
  @Column(name = "username")
  @BeanProperty
  var username: String =_

  @JsonManagedReference("user-pet")
  @OneToMany(fetch = FetchType.EAGER, mappedBy = "user")
  @BeanProperty
  var pets: java.util.List[Pet] =_

}
