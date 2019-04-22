package com.tim.scala.controllers

import java.util

import com.tim.scala.models.User
import com.tim.scala.services.IUserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.{DeleteMapping, GetMapping, PathVariable, PostMapping, RequestBody, RequestParam, ResponseBody, RestController}

@RestController
class UserController {

  @Autowired
  private val userService: IUserService = null


  // Get all users
  @GetMapping(value = Array("/get_all_users"), produces = Array("application/json"))
  def  getAllUsers: java.util.List[User] = userService.getAllUsers

  // Get user by id
  @GetMapping(value = Array("/get_user/{id}"), produces = Array("application/json"))
  def getUserById(@PathVariable(value = "id") id: Long ): User = userService.getUserById(id)

  // Save user
  @PostMapping(Array("/save_user"))
  def saveUser(@RequestBody user: User) = userService.saveUser(user)

  // Delete user
  @DeleteMapping(Array("/delete_user"))
  def deleteUser(@RequestBody user: User) = userService.deleteUser(user)

  // Delete user by id
  @DeleteMapping(Array("/delete_user/{id}"))
  def deleteUserById(@PathVariable(value = "id") id: Long ) = userService.deleteUserById(id)
}
