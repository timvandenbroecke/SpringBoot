package com.tim.scala.controllers

import com.tim.scala.models.{Pet, User}
import com.tim.scala.payload.PetSavePayload
import com.tim.scala.services.{IPetService, IUserService}
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.{DeleteMapping, GetMapping, PathVariable, PostMapping, RequestBody, RestController}

@RestController
class PetController {

  @Autowired
  private val petService: IPetService = null

  @Autowired
  private val userService: IUserService = null

  // Get all pets
  @GetMapping(Array("/get_all_pets"))
  def getAllPets: java.util.List[Pet] = petService.getAllPets

  // Get pet by id
  @GetMapping(Array("/get_pet/{id}"))
  def getPetById(@PathVariable(value = "id") id: Long ): Pet = petService.getPetById(id)

  // Save pet
  @PostMapping(Array("/save_pet"))
  def savePet(@RequestBody pet: PetSavePayload) = {

    // Find user by id in PetSavePayload (var user: Long =_), cause JPA needs an object of User to identify the user
    val user: User = userService.getUserById(pet.getUser)
    val petSave: Pet = new Pet(pet.getName, pet.getBreed, pet.getSpecies, user)

    // Save pet
    petService.savePet(petSave)
  }

  // Delete pet
  @DeleteMapping(Array("/delete_pet"))
  def deletePet(@RequestBody pet: Pet) = petService.deletePet(pet)

  // Delete pet by id
  @DeleteMapping(Array("/delete_pet/{id}"))
  def deletePetById(@PathVariable(value = "id") id: Long ) = petService.deletePetById(id)

}
