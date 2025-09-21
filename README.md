# Solana Daily Airdrop Workflow

This repository contains a GitHub Actions workflow that automatically requests SOL token airdrops on the Solana devnet network. The workflow is designed to help developers maintain a steady supply of devnet SOL tokens for testing and development purposes.

## 🎯 Overview

The Solana Daily Airdrop workflow automatically:
- Requests 2 SOL tokens from the Solana devnet faucet
- Runs every 3 hours automatically
- Can be triggered manually when needed
- Provides transaction history and balance information
- Uses caching for efficient Solana CLI installation

## 📋 Features

- **Automated Scheduling**: Runs every 3 hours using GitHub Actions cron
- **Manual Trigger**: Can be executed on-demand via workflow dispatch
- **Efficient Caching**: Caches Solana CLI installation to reduce execution time
- **Balance Tracking**: Shows account balance after each airdrop
- **Transaction History**: Displays the latest transaction details
- **Devnet Safety**: Only operates on Solana devnet (safe for testing)

## ⚙️ Configuration

### Environment Variables

The workflow uses the following environment variable:

- `RECIPIENT_ADDRESS`: The Solana devnet wallet address that will receive the airdrop
  - Current default: `FzzJuBTvpLsi517P1ELMZ7HwtFWxB4JFoRw6myraFgdB`
  - **Important**: Replace with your actual devnet address

### Schedule Configuration

The workflow runs automatically based on the following schedule:
```yaml
schedule:
  - cron: '0 */3 * * *'  # Every 3 hours
```

## 🚀 Setup Instructions

### 1. Fork this Repository
Fork this repository to your GitHub account to set up your own automated airdrop workflow.

### 2. Configure Your Wallet Address
Edit the `.github/workflows/solana devnet.yml` file and replace the `RECIPIENT_ADDRESS` with your Solana devnet wallet address:

```yaml
env:
  RECIPIENT_ADDRESS: "YOUR_DEVNET_WALLET_ADDRESS_HERE"
```

### 3. Enable GitHub Actions
Ensure GitHub Actions are enabled in your repository settings:
1. Go to your repository settings
2. Navigate to "Actions" > "General"
3. Ensure "Allow all actions and reusable workflows" is selected

## 🔧 Usage

### Automatic Execution
The workflow will run automatically every 3 hours. No manual intervention is required.

### Manual Execution
To trigger the workflow manually:
1. Go to the "Actions" tab in your GitHub repository
2. Select "Solana Daily Airdrop" workflow
3. Click "Run workflow"
4. Click the green "Run workflow" button

## 📊 Workflow Details

### Job Steps
1. **Checkout Repository**: Downloads the repository code
2. **Cache Solana CLI**: Caches the Solana CLI installation for faster execution
3. **Install Solana CLI**: Installs the latest stable Solana CLI (if not cached)
4. **Setup Solana Config**: 
   - Configures Solana CLI to use devnet
   - Requests 2 SOL airdrop
   - Checks account balance
   - Shows transaction history

### Runtime Environment
- **OS**: Ubuntu Latest
- **Solana Network**: Devnet
- **Airdrop Amount**: 2 SOL per execution
- **CLI Version**: Latest stable release from Anza

## 🛠️ Troubleshooting

### Common Issues

**Issue**: Airdrop fails with "rate limit exceeded"
- **Solution**: The devnet faucet has rate limits. Wait a few minutes and try again.

**Issue**: Workflow fails to install Solana CLI
- **Solution**: Check if the Solana installation URL is accessible. The workflow uses the official installer from `https://release.anza.xyz/stable/install`.

**Issue**: Invalid recipient address
- **Solution**: Ensure your `RECIPIENT_ADDRESS` is a valid Solana devnet address.

### Viewing Logs
To view detailed execution logs:
1. Go to "Actions" tab in your repository
2. Click on a workflow run
3. Expand the job steps to see detailed logs

## ⚠️ Important Notes

- **Devnet Only**: This workflow only works with Solana devnet tokens, which have no real value
- **Rate Limits**: Solana devnet faucet has rate limits to prevent abuse
- **Token Limits**: Maximum airdrop amount is typically 2 SOL per request
- **GitHub Actions Limits**: Be aware of GitHub Actions usage limits for your account

## 🔒 Security Considerations

- The workflow only interacts with Solana devnet (test network)
- No private keys or sensitive information are stored in the repository
- All operations are read-only except for the airdrop request
- The recipient address is publicly visible in the workflow file

## 📝 Customization

### Changing Airdrop Amount
To modify the airdrop amount, edit the workflow file:
```bash
solana airdrop 2 $RECIPIENT_ADDRESS --url https://api.devnet.solana.com
```
Change `2` to your desired amount (subject to faucet limits).

### Changing Schedule
To modify the execution frequency, update the cron expression:
```yaml
schedule:
  - cron: '0 */6 * * *'  # Every 6 hours instead of 3
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests! Contributions are welcome.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Useful Links

- [Solana Documentation](https://docs.solana.com/)
- [Solana CLI Reference](https://docs.solana.com/cli)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Solana Devnet Faucet](https://faucet.solana.com/)