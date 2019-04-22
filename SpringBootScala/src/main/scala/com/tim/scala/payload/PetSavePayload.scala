package com.tim.scala.payload

import scala.beans.BeanProperty

class PetSavePayload {

  def this(id: Long, name: String, breed: String, species: String, user: Long) {
    this()
    this.id = id
    this.name = name
    this.breed = breed
    this.species = species
    this.user = user
  }

  @BeanProperty
  var id: Long =_

  @BeanProperty
  var name: String =_

  @BeanProperty
  var breed: String =_

  @BeanProperty
  var species: String =_

  @BeanProperty
  var user: Long =_
}
