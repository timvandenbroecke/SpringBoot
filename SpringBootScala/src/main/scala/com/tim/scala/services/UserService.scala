package com.tim.scala.services

import com.tim.scala.models.User
import com.tim.scala.repository.UserRepository
import javax.transaction.Transactional
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.Modifying
import org.springframework.stereotype.Service

@Service
class UserService extends IUserService {

  @Autowired
  private val userRepository: UserRepository = null

  @Transactional
  def getAllUsers: java.util.List[User] = userRepository.findAll()

  @Transactional
  def getUserById(id: Long): User =  userRepository.getOne(id)

  @Modifying(flushAutomatically = true)
  def saveUser(user: User) = userRepository.save(user)

  @Modifying(flushAutomatically = true)
  def deleteUser(user: User) = userRepository.delete(user)

  @Modifying(flushAutomatically = true)
  def deleteUserById(id: Long) = userRepository.deleteById(id)

}
