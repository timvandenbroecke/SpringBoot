package com.tim.scala.services

import com.tim.scala.models.Pet

trait IPetService {

  def getAllPets: java.util.List[Pet]

  def getPetById(id: Long): Pet

  def savePet(pet: Pet)

  def deletePet(pet: Pet)

  def deletePetById(id: Long)
}
