package com.tim.scala.services

import com.tim.scala.models.Pet
import com.tim.scala.repository.PetRepository
import javax.transaction.Transactional
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.Modifying
import org.springframework.stereotype.Service

@Service
class PetService extends IPetService {

  @Autowired
  private val petRepository: PetRepository = null

  // Get all pets
  @Transactional
  def getAllPets: java.util.List[Pet] = petRepository.findAll()

  // Get pet by id
  @Transactional
  def getPetById(id: Long): Pet =  petRepository.getOne(id)

  // Save pet
  @Modifying(flushAutomatically = true)
  def savePet(pet: Pet) = petRepository.save(pet)

  // Delete pet
  @Modifying(flushAutomatically = true)
  def deletePet(pet: Pet) = petRepository.delete(pet)

  // Delete pet by id
  @Modifying(flushAutomatically = true)
  def deletePetById(id: Long) = petRepository.deleteById(id)
}
