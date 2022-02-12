// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract MyAnimeNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("AnimeNFT", "ANFT") {
        console.log("This is my NFT Contract. DAMN ! ");
    }

    event NewAnimeNFTMinted(address sender, uint256 tokenId);

    function mintAnimeNFT() public {
        uint256 newItemId = _tokenIds.current();

        _safeMint(msg.sender, newItemId);

        _setTokenURI(newItemId, "https://jsonkeeper.com/b/TXW3");

        _tokenIds.increment();

        console.log(
            "An NFT w/ ID %s has been minted to  %s",
            newItemId,
            msg.sender
        );
        emit NewAnimeNFTMinted(msg.sender, newItemId);
    }
}
