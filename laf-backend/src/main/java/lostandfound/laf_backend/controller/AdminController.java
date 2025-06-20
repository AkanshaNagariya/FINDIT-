package lostandfound.laf_backend.controller;

import lostandfound.laf_backend.Model.Claim;
import lostandfound.laf_backend.dto.UpdateClaimStatusRequest;
import lostandfound.laf_backend.Model.Enums.ClaimStatus;
import lostandfound.laf_backend.repository.ClaimRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    @Autowired
    private ClaimRepository claimRepository;

    @GetMapping("/claims")
    public List<Claim> getPendingClaims() {
        return claimRepository.findByStatus(ClaimStatus.PENDING);
    }

    @PutMapping("/claims/{id}")
    public Claim updateClaimStatus(@PathVariable Long id, @RequestBody UpdateClaimStatusRequest request) {
        Claim claim = claimRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Claim not found"));
        claim.setStatus(request.getStatus());
        return claimRepository.save(claim);
    }

   /* @PostMapping("/claims")
    public Claim createClaim(@RequestBody Claim claim) {
        claim.setClaimDate(LocalDateTime.now());
        claim.setStatus(ClaimStatus.PENDING);
        return claimRepository.save(claim);
    }*/
}
