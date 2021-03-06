require("download-git-repo")("bancorprotocol/contracts", "node_modules/bancor-contracts", function (error) {
    if (error)
        throw error;

    const fs        = require("fs");
    const spawnSync = require("child_process").spawnSync;

    const args = [
        "node_modules/solidity-docgen/dist/cli.js",
        "--input=node_modules/bancor-contracts/solidity/contracts",
        "--output=ethereum-contracts/ethereum-api-reference",
        "--templates=config/ethereum-smart-contracts",
        "--solc-module=node_modules/truffle/node_modules/solc",
        "--solc-settings=" + JSON.stringify({optimizer: {enabled: true, runs: 200}}),
        "--contract-pages"
    ];

    const result = spawnSync("node", args, {stdio: ["inherit", "inherit", "pipe"]});
    if (result.stderr.length > 0)
        throw new Error(result.stderr);

    function fix(pathName) {
        if (fs.lstatSync(pathName).isDirectory()) {
            for (const fileName of fs.readdirSync(pathName))
                fix(pathName + "/" + fileName);
        }
        else if (pathName.endsWith(".md")) {
            const lines = fs.readFileSync(pathName, {encoding: "utf8"}).split("\r").join("").split("\n");
            fs.writeFileSync(pathName, lines.filter(line => line.trim().length > 0).join("\n\n") + "\n");
        }
    }

    fix("ethereum-contracts/ethereum-api-reference");

    fs.copyFileSync("node_modules/bancor-contracts/README.md", "ethereum-contracts/ethereum-api-reference/README.md");
    //fs.copyFileSync("node_modules/bancor-contracts/solidity/utils/README.md", "ethereum-contracts/ethereum-api-reference/utils/README.md");
    //fs.copyFileSync("node_modules/bancor-contracts/solidity/python/README.md", "ethereum-contracts/ethereum-api-reference/python/README.md");
});
