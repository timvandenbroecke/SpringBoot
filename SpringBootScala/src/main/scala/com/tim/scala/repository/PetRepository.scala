package com.tim.scala.repository

import com.tim.scala.models.Pet
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
trait PetRepository extends JpaRepository[Pet, Long] {


}
