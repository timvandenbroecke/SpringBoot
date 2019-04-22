package com.tim.scala.models

import com.fasterxml.jackson.annotation.{JsonBackReference, JsonIdentityInfo, JsonManagedReference, ObjectIdGenerators}
import javax.persistence.{Column, Entity, FetchType, GeneratedValue, GenerationType, Id, JoinColumn, ManyToOne, Table}

import scala.beans.BeanProperty

@Entity
@Table(name = "Pet")
class Pet {

  def this(name: String, breed: String, species: String, user: User) {
    this()
    this.id = id
    this.name = name
    this.breed = breed
    this.species = species
    this.user = user
  }

  def this(id: Long, name: String, breed: String, species: String, user: User) {
    this()
    this.id = id
    this.name = name
    this.breed = breed
    this.species = species
    this.user = user
  }

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @BeanProperty
  var id: Long =_

  @Column(name = "name")
  @BeanProperty
  var name: String =_

  @Column(name = "breed")
  @BeanProperty
  var breed: String =_

  @Column(name = "species")
  @BeanProperty
  var species: String =_

  @JsonBackReference("user-pet")
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "userId", nullable = false, referencedColumnName = "id")
  @BeanProperty
  var user: User =_
}
