import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

//Check to make sure this address is rights
const editionDrop = sdk.getEditionDrop("0xe23141A34C51800428594886C0cD60B793166907");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "theGuildDAO Founding Member NFT",
        description: "This NFT will give you access to the theGuildDAO!",
        image: readFileSync("scripts/assets/guild-founding-nft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();