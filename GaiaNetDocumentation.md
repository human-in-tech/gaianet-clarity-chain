# ClarityChain Documentation

## Introduction
ClarityChain is a platform designed to simplify the understanding of decentralized autonomous organizations (DAOs) and blockchain governance data. This documentation provides an overview of the project, the development process, and guidance for future contributors.

## Project Overview

- **Goal**: Transform complex governance data into easy-to-read insights for users unfamiliar with blockchain concepts.
- **Target Audience**: DAO participants, blockchain enthusiasts, and newcomers seeking clarity in governance data.

---

## Development Phase

1. **Setting the Gaianet Node in the Environment**:
   - Install and configure the Gaianet node within the development environment.

2. **Initialize the Node**:
   - Run the following command to initialize the node:
     ```bash
     gaianet init
     ```

3. **Selecting a Suitable GaiaNet Model**:
   - We utilized the `Llama-3-8B` model for optimal performance and results.

4. **Adding Your Own Knowledge Base**:
   - Access the tools and resources via [GaiaNet Tools](https://tools.gaianet.xyz/) to incorporate your own knowledge base.

5. **Modifying Node Configuration**:
   - Adjust the configuration parameters of your node, such as:
     - `system_prompt`
     - `rag_prompt`
     - `chat_size`

   Example configuration:
   ![JSON Configuration](https://github.com/human-in-tech/gaianet-clarity-chain/blob/main/extras/config.jpg?raw=true)

---

This documentation is intended to assist developers in setting up and contributing to ClarityChain. For further assistance, please refer to the project’s GitHub repository or reach out to the maintainers.
