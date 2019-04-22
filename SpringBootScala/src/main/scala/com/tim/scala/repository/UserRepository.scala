package com.tim.scala.repository

import com.tim.scala.models.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
trait UserRepository extends JpaRepository[User, Long]{

}
