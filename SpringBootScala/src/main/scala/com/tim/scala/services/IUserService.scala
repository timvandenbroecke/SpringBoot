package com.tim.scala.services

import com.tim.scala.models.User

trait IUserService {

  def getAllUsers: java.util.List[User]

  def getUserById(id: Long): User

  def saveUser(user: User)

  def deleteUser(user: User)

  def deleteUserById(id: Long)

}
