# 🔐 Solana Wallet App

A modern, secure, and intuitive Solana wallet application built with Next.js 15, featuring HD wallet derivation, BIP39 mnemonic support, and a beautiful dark interface.

**[Live Demo](https://zyro.harshthkkr.dev)**

![Next.js](https://img.shields.io/badge/Next.js-15.1.8-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Solana](https://img.shields.io/badge/Solana-Web3.js-9945FF?style=for-the-badge&logo=solana)

## Features

### Core Functionality

- **HD Wallet Management**: Create unlimited wallets from a single seed phrase using BIP44 derivation
- **BIP39 Mnemonic Support**: Generate or import 12/24-word seed phrases with industry-standard security
- **Private Key Security**: Private keys hidden by default with toggle visibility and one-click copy
- **Multi-Wallet Dashboard**: Manage multiple Solana wallets from a single interface
- **Seed Phrase Backup**: Secure backup confirmation system with clipboard integration

### User Experience

- **Streamlined Onboarding**: Intuitive wallet creation and import flows
- **Dark Theme Interface**: Professional dark design with custom typography (Excon & Author fonts)
- **Smart Clipboard Support**: One-click paste for seed phrase import and key copying
- **Toast Notifications**: Real-time feedback with Sonner notification system
- **Responsive Design**: Optimized for all device sizes with Tailwind CSS

## Tech Stack

### Frontend

- **Framework**: Next.js 15.1.8 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.522.0
- **Notifications**: Sonner 2.0.3

### Blockchain & Cryptography

- **Solana**: @solana/web3.js 1.98.2
- **Mnemonic**: bip39 3.1.0 for BIP39 phrase generation/validation
- **Key Derivation**: ed25519-hd-key 1.3.0 for HD wallet derivation
- **Encoding**: bs58 6.0.0 for Base58 encoding/decoding
- **Cryptography**: tweetnacl for Ed25519 cryptographic operations

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Modern web browser with clipboard API support

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/wallet-app.git
   cd wallet-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Harsh Thakkar - [@harshthkkr](https://x.com/harshthkkr)
