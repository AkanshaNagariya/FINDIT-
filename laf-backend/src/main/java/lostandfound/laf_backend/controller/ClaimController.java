package lostandfound.laf_backend.controller;

import lostandfound.laf_backend.Model.Claim;
import lostandfound.laf_backend.Model.Enums.ClaimStatus;
import lostandfound.laf_backend.repository.ClaimRepository;
import lostandfound.laf_backend.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import lostandfound.laf_backend.Model.User;
import lostandfound.laf_backend.Model.Item;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/items")
public class ClaimController {

    @Autowired
    private ClaimRepository claimRepository;

    @Autowired
    private ItemRepository itemRepository;

    @PostMapping("/{itemId}/claims")
    @PreAuthorize("hasAnyRole('STUDENT', 'STAFF')")
    public Claim submitClaim(
            @PathVariable Long itemId,
            @RequestBody Claim claimRequest,
            @AuthenticationPrincipal User user) {

        Item item = itemRepository.findById(itemId)
                .orElseThrow(() -> new RuntimeException("Item not found"));

        Claim claim = new Claim();
        claim.setItem(item);
        claim.setClaimant(user);
        claim.setClaimDate(LocalDateTime.now());
        claim.setProofDescription(claimRequest.getProofDescription());
        claim.setStatus(ClaimStatus.PENDING);

        return claimRepository.save(claim);
    }
}