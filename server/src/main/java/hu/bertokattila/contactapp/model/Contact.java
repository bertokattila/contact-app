package hu.bertokattila.contactapp.model;

import hu.bertokattila.contactapp.dto.ContactDto;
import java.util.Base64;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity(name = "contact")
@Table(name = "contacts")
public class Contact {

  @Id
  @Column(name = "id")
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Basic
  private Integer id;

  @Column(name = "name")
  private String name;

  @Column(name = "phone")
  private String phone;

  @Column(name = "email")
  private String email;

  @Column(name = "picture")
  private byte[] picture;

  @Column(name = "pictureType")
  private String pictureType;

  public Contact(ContactDto dto){
    this.name = dto.getName();
    this.email = dto.getEmail();
    this.phone = dto.getPhone();
  }


  public Contact() {

  }
}
