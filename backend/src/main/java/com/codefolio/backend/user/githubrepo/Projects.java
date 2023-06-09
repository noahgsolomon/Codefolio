package com.codefolio.backend.user.githubrepo;

import com.codefolio.backend.user.Users;
import jakarta.persistence.*;
import lombok.*;

@Table
@Entity
@Getter
@Setter
@EqualsAndHashCode
@ToString
@NoArgsConstructor
public class Projects {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users users;

    private String name;
    private String language;
    private String description;
    private String updatedAt;
    private String owner;

    public Projects(Users users, String name, String language, String description, String updatedAt, String owner) {
        this.users = users;
        this.name = name;
        this.language = language;
        this.description = description;
        this.updatedAt = updatedAt;
        this.owner = owner;
    }
}
