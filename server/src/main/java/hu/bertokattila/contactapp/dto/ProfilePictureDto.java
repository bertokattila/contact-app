package hu.bertokattila.contactapp.dto;

import java.io.UnsupportedEncodingException;
import java.util.Base64;
import lombok.Data;

@Data
public class ProfilePictureDto {
  private Integer id;

  private String picture;

  private String type;

  public ProfilePictureDto(Integer id, byte[] picture, String type) throws UnsupportedEncodingException {
    this.id = id;
    if(picture == null){
      this.picture = null;
    }else {
      this.type = type;
      this.picture = Base64.getEncoder().encodeToString(picture);
    }
  }
}
