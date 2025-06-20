package lostandfound.laf_backend.dto;

import lostandfound.laf_backend.Model.Enums.ClaimStatus;

public class UpdateClaimStatusRequest {
    private ClaimStatus status;

    public ClaimStatus getStatus() {
        return status;
    }

    public void setStatus(ClaimStatus status) {
        this.status = status;
    }
}
