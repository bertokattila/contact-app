package hu.bertokattila.contactapp.dto;

import lombok.Data;

@Data
public class ProfilePicture {
  private Integer id;

  private byte[] picture;

  public ProfilePicture(Integer id, byte[] picture) {
    this.id = id;
    this.picture = picture;
  }
}
