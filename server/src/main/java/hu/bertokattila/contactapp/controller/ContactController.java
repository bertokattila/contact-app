package hu.bertokattila.contactapp.controller;

import hu.bertokattila.contactapp.data.ContactRepository;
import hu.bertokattila.contactapp.dto.ContactDto;
import hu.bertokattila.contactapp.dto.ProfilePictureDto;
import hu.bertokattila.contactapp.dto.ResourceDto;
import hu.bertokattila.contactapp.model.Contact;
import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
@CrossOrigin(origins = "*")
public class ContactController {

  /// since there is no sophisticated server side business logic
  /// instead of service, repository is injected directly

  @Autowired
  ContactRepository repository;

  @PostMapping("/contact")
  public ResponseEntity<Contact> addContact(@RequestBody ContactDto contact){
    Contact ret = repository.save(new Contact(contact));
    return new ResponseEntity<Contact>(ret, HttpStatus.OK);
  }

  @GetMapping("/contact/{id}")
  public ResponseEntity<Contact> getContact(@PathVariable Integer id){
    Contact contact = repository.getById(id).orElse(null);
    if(contact == null){
      return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity<>(contact, HttpStatus.OK);
  }

  @GetMapping("/contacts")
  public ResponseEntity<List<ContactRepository.ContactData>> getContacts(){
    return new ResponseEntity<>(repository.findAllWithoutPicture(), HttpStatus.OK);
  }

  @PutMapping("/contact/{id}")
  public ResponseEntity<ResourceDto> editContact(@PathVariable Integer id, @RequestBody ContactDto contact){
    Contact ret = repository.getById(id).orElse(null);
    if(contact == null){
      return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
    ret.setName(contact.getName());
    ret.setPhone(contact.getPhone());
    ret.setEmail(contact.getEmail());
    repository.save(ret);
    return new ResponseEntity<>(new ResourceDto("/contact/" + ret.getId()), HttpStatus.OK);
  }

  @DeleteMapping("/contact/{id}")
  public ResponseEntity deleteContact(@PathVariable Integer id){
    Contact contact=  repository.findById(id).orElse(null);
    if (contact == null){
      return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
    repository.deleteById(contact.getId());
    return new ResponseEntity<>(contact, HttpStatus.OK);
  }

  @PostMapping("/profilePicture")
  public ResponseEntity addProfilePicture(
          @RequestParam @Nullable MultipartFile image, @RequestParam String id, @RequestParam String type) {
    Contact contact = repository.findById(Integer.valueOf(id)).orElse(null);
    if(contact == null){
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    try {
      if(image != null) {
        contact.setPicture(image.getBytes());
      }else {
        contact.setPicture(null);
      }
      contact.setPictureType(type);
      repository.save(contact);
    } catch (IOException e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return new ResponseEntity<>(HttpStatus.OK);
  }

  @GetMapping("/profilePicture/{id}")
  public ResponseEntity getProfilePicture(@PathVariable Integer id) {
    Contact contact = repository.findById(Integer.valueOf(id)).orElse(null);
    if(contact == null){
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    try{
      ProfilePictureDto profilePictureDto = new ProfilePictureDto(contact.getId(), contact.getPicture(), contact.getPictureType());
      return new ResponseEntity<>(profilePictureDto, HttpStatus.OK);
    }catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
