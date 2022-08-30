package hu.bertokattila.contactapp.data;

import hu.bertokattila.contactapp.model.Contact;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<Contact, Integer> {
  Optional<Contact> getById(Integer id);

  void deleteById(Integer id);

  @Query(value= "SELECT id, name, email, phone FROM contacts", nativeQuery = true)
  List<ContactData> findAllWithoutPicture();

  public static interface ContactData {
    Integer getId();
    String getName();
    String getPhone();
    String getEmail();
  }
}
