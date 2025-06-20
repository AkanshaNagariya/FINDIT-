package lostandfound.laf_backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;


public class Enums {
    public enum Role {
        STUDENT, STAFF, ADMIN
    }

    public enum ItemStatus {
        LOST, FOUND, CLAIMED
    }

    public enum ClaimStatus {
        PENDING, APPROVED, REJECTED
    }
}
