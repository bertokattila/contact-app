package hu.bertokattila.contactapp.dto;

import lombok.Data;

@Data
public class ResourceDto {
  private String uri;

  public ResourceDto(String uri) {
    this.uri = uri;
  }
}
